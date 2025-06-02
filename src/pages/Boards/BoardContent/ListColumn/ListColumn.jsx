import Box from '@mui/material/Box'
import Column from './Column/Column'
import Button from '@mui/material/Button'
import AddCardIcon from '@mui/icons-material/AddCard'
import {
  SortableContext,
  horizontalListSortingStrategy
} from '@dnd-kit/sortable'

function ListColumn({ columns }) {
  return (
    <SortableContext
      items={columns?.map((column) => column._id)}
      strategy={horizontalListSortingStrategy}
    >
      <Box
        sx={{
          display: 'flex',
          gap: 1,
          overflowX: 'auto',
          width: '100%',
          height: '100%'
        }}
      >
        {columns.map((column) => (
          <Column key={column._id} column={column} />
        ))}

        <Button
          sx={{
            height: 'fit-content',
            minWidth: '200px',
            maxWidth: '200px',
            p: '8px 16px',
            color: 'white',
            backgroundColor: '#ffffff3d'
          }}
          startIcon={<AddCardIcon />}
        >
          Add new column
        </Button>
      </Box>
    </SortableContext>
  )
}

export default ListColumn
