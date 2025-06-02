import Box from '@mui/material/Box'
import Card from './Card/Card'
import {
  SortableContext,
  horizontalListSortingStrategy,
  verticalListSortingStrategy
} from '@dnd-kit/sortable'

function ListCard({ cards }) {
  return (
    <SortableContext
      items={cards?.map((card) => card._id)}
      strategy={verticalListSortingStrategy}
    >
      <Box
        sx={{
          padding: '0 5px',
          margin: '0 5px',
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          overflowY: 'auto',
          maxHeight: (theme) =>
            `calc(${theme.trello.appContentHeight} - ${
              theme.trello.columnHeaderHeight
            } - ${theme.trello.columnFooterHeight} - ${theme.spacing(4)})`,
          '&::-webkit-scrollbar-thumb': {
            background: '#7f8c8d',
            borderRadius: '4px'
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: '#95a5a6'
          }
        }}
      >
        {cards.map((card) => (
          <Card key={card._id} card={card} />
        ))}
      </Box>
    </SortableContext>
  )
}

export default ListCard
