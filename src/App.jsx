import Button from '@mui/material/Button'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import Typography from '@mui/material/Typography'
function App() {
  return (
    <>
      <span>Every</span>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <Typography color="text.secondary">Test Typography</Typography>
      <AccountBoxIcon color="success" />
      <AccountBoxIcon color="action" />
    </>
  )
}

export default App
