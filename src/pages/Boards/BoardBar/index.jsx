import Box from '@mui/material/Box'

function BoardBar() {
  return (
    <Box
      sx={{
        height: (theme) => theme.trello.appBoardBarHeight,
        backgroundColor: 'primary.dark',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      Board Bar
    </Box>
  )
}

export default BoardBar
