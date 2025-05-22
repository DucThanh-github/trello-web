import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import ContentCut from '@mui/icons-material/ContentCut'
import ContentCopy from '@mui/icons-material/ContentCopy'
import ContentPaste from '@mui/icons-material/ContentPaste'
import { useState } from 'react'
import Cloud from '@mui/icons-material/Cloud'
import AddCardIcon from '@mui/icons-material/AddCard'
import DragHandleIcon from '@mui/icons-material/DragHandle'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import ListCard from './ListCard/ListCard'

function Column() {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <Box
      sx={{
        minWidth: '300px',
        maxWidth: '300px',
        bgcolor: (theme) =>
          theme.palette.mode === 'light' ? '#ecf0f1' : '#3c6382',
        borderRadius: 2,
        height: 'fit-content'
      }}
    >
      <Box sx={{}}>
        {/* Col header */}
        <Box
          sx={{
            px: 1,
            height: (theme) => theme.trello.columnHeaderHeight,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Column title
          </Typography>
          <Button
            id="column-board-actions"
            aria-controls={open ? 'column-board-actions' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            sx={{
              cursor: 'pointer',
              minWidth: 'unset',
              borderRadius: '50%',
              padding: 0,
              color: (theme) => theme.palette.text.primary
            }}
          >
            {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </Button>
          <Menu
            id="column-board-actions"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'column-board-actions"'
            }}
          >
            <MenuItem>
              <ListItemIcon>
                <AddCardIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Add new card</ListItemText>
            </MenuItem>

            <MenuItem>
              <ListItemIcon>
                <ContentCut fontSize="small" />
              </ListItemIcon>
              <ListItemText>Cut</ListItemText>
            </MenuItem>

            <MenuItem>
              <ListItemIcon>
                <ContentCopy fontSize="small" />
              </ListItemIcon>
              <ListItemText>Copy</ListItemText>
            </MenuItem>

            <MenuItem>
              <ListItemIcon>
                <ContentPaste fontSize="small" />
              </ListItemIcon>
              <ListItemText>Paste</ListItemText>
            </MenuItem>

            <Divider />
            <MenuItem>
              <ListItemIcon>
                <Cloud fontSize="small" />
              </ListItemIcon>
              <ListItemText>Remove this column</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <Cloud fontSize="small" />
              </ListItemIcon>
              <ListItemText>Archive this column</ListItemText>
            </MenuItem>
          </Menu>
        </Box>

        <ListCard />

        <Box
          sx={{
            px: 2,
            height: (theme) => theme.trello.columnFooterHeight,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <Button startIcon={<AddCardIcon />}>Add new card</Button>
          <DragHandleIcon
            sx={{
              cursor: 'pointer'
            }}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default Column
