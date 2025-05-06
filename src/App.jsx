import TextField  from "@mui/material/TextField";
import AccountBoxIcon from '@mui/icons-material/AccountBox';

function App() {
  return (
    <>
      <span>Every</span>
       <TextField id="outlined-basic" label="Outlined" variant="outlined" />
       <AccountBoxIcon color="success"/>
       <AccountBoxIcon color="action"/>
    </>
  );
}

export default App;
