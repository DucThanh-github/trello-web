import Box from '@mui/material/Box'
import ListColumn from './ListColumn/ListColumn'
import { mapOrder } from '~/utils/sorts'

function BoardContent({ board }) {
  return (
    <Box
      sx={{
        p: 1,
        height: (theme) => theme.trello.appContentHeight,
        bgcolor: (theme) =>
          theme.palette.mode === 'light' ? '#1976d2' : '#34495e',
        display: 'flex',
        gap: 1
      }}
    >
      <ListColumn columns={mapOrder(board.columns, board.columnOrderIds, '_id')} />
    </Box>
  )
}

export default BoardContent
