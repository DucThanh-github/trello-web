import Box from '@mui/material/Box'
import Column from './Column/Column'
import Button from '@mui/material/Button'
import AddCardIcon from '@mui/icons-material/AddCard'


function ListColumn({ columns }) {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 1,
        overflowX: 'auto'
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
  )
}

export default ListColumn
