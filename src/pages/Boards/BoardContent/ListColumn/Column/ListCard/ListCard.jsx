import Box from '@mui/material/Box'
import Card from './Card/Card'

function ListCard() {
  return (
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
      <Card />
      <Card isCardMedia />
    </Box>
  )
}

export default ListCard
