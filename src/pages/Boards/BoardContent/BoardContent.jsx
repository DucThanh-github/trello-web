import Box from '@mui/material/Box'
import ListColumn from './ListColumn/ListColumn'
import { mapOrder } from '~/utils/sorts'
import { useState, useEffect } from 'react'
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy
} from '@dnd-kit/sortable'
import {
  DndContext,
  DragOverlay,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
  defaultDropAnimationSideEffects,
  rectIntersection,
  closestCorners
} from '@dnd-kit/core'
import Column from './ListColumn/Column/Column'
import Card from './ListColumn/Column/ListCard/Card/Card'
import { cloneDeep } from 'lodash'

const ACTIVE_TYPE = {
  COLUMN: 'column',
  CARD: 'card'
}
function BoardContent({ board }) {
  const [oderColumns, setOderColumns] = useState([])
  const mouseSensor = useSensor(MouseSensor, {
    // Require the mouse to move by 10 pixels before activating
    activationConstraint: {
      distance: 10
    }
  })
  const touchSensor = useSensor(TouchSensor, {
    // Press delay of 100ms, with tolerance of 5px of movement
    activationConstraint: {
      delay: 100,
      tolerance: 300
    }
  })

  const sensors = useSensors(mouseSensor, touchSensor)

  const [activeId, setActiveId] = useState(null)
  const [activeType, setActiveType] = useState(null)
  const [activeData, setActiveData] = useState(null)
  useEffect(() => {
    setOderColumns(mapOrder(board.columns, board.columnOrderIds, '_id'))
  }, [board])

  function handleDragStart(event) {
    console.log('handleDragStart', event)

    const newActiveType = event?.active?.data?.current?.columnId
      ? ACTIVE_TYPE.CARD
      : ACTIVE_TYPE.COLUMN

    setActiveId(event.active.id)
    setActiveType(newActiveType)
    setActiveData(event.active?.data?.current)
  }

  function handleDragOver(event) {
    if (activeType === ACTIVE_TYPE.COLUMN) return
    const newOrderCols = cloneDeep(oderColumns)
    const newActiveCol = newOrderCols.find(col => col._id === event.active.data.current.columnId)
    const newOverCol = newOrderCols.find(col => col._id === event.over.data.current.columnId)
    if (!newActiveCol || !newOverCol || newActiveCol._id === newOverCol._id) return
    


  }

  function handleDragEnd(event) {
    console.log('handleDragEnd', event)

    const { active, over } = event
    if (active.id !== over.id) {
      const newIndex = oderColumns.findIndex((item) => item._id === over.id)
      const oldIndex = oderColumns.findIndex((item) => item._id === active.id)
      setOderColumns(arrayMove(oderColumns, oldIndex, newIndex))
    }

    setActiveId(null)
    setActiveType(null)
    setActiveData(null)
  }

  const dropAnimation = {
    sideEffects: defaultDropAnimationSideEffects({
      styles: {
        active: {
          opacity: '0.5'
        }
      }
    })
  }

  return (
    <DndContext
      sensors={sensors}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
      collisionDetection={closestCorners}
    >
      {
        <DragOverlay dropAnimation={dropAnimation}>
          {activeType &&
            (activeType === ACTIVE_TYPE.CARD ? (
              <Card card={activeData} />
            ) : (
              <Column column={activeData} />
            ))}
        </DragOverlay>
      }
      <Box
        sx={{
          p: 1,
          height: (theme) => theme.trello.appContentHeight,
          bgcolor: (theme) =>
            theme.palette.mode === 'light' ? '#1976d2' : '#34495e',
          display: 'flex',
          gap: 1,
          width: '100%'
        }}
      >
        <ListColumn columns={oderColumns} />
      </Box>
    </DndContext>
  )
}

export default BoardContent
