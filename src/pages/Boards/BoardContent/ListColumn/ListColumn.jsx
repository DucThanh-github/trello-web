import Box from '@mui/material/Box'
import Column from './Column/Column'
import Button from '@mui/material/Button'
import AddCardIcon from '@mui/icons-material/AddCard'
function ListColumn() {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 1,
        overflowX: 'auto'
      }}
    >
      <Column />
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
  )
}

export default ListColumn
