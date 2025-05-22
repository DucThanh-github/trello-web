import Box from '@mui/material/Box'
import ListColumn from './ListColumn/ListColumn'


function BoardContent() {
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
      <ListColumn />
      
    </Box>
  )
}

export default BoardContent
