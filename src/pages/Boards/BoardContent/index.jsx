import Box from '@mui/material/Box'

function BoardContent() {
  return (
    <Box
      sx={{
        height: (theme) =>
          `calc(100vh - ${theme.trello.appBarHeight} - ${theme.trello.appBoardBarHeight})`,
        bgcolor: (theme) => (theme.palette.mode === 'light' ? '#1976d2' : '#34495e'),
        display: 'flex',
        alignItems: 'center'
      }}
    >
      Content
    </Box>
  )
}

export default BoardContent
