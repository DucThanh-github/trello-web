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
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import GroupIcon from '@mui/icons-material/Group'
import CommentIcon from '@mui/icons-material/Comment'
import AttachmentIcon from '@mui/icons-material/Attachment'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'

const CONTENT_HEADER_HEIGHT = '50px'
const CONTENT_FOOTER_HEIGHT = '60px'
function BoardContent() {
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
        height: (theme) => theme.trello.appContentHeight,
        bgcolor: (theme) =>
          theme.palette.mode === 'light' ? '#1976d2' : '#34495e'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          gap: 1,
          padding: 1,
          overflowX: 'auto'
        }}
      >
        {/* column 1 */}
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
                height: CONTENT_HEADER_HEIGHT,
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

            {/* Col content */}
            <Box
              sx={{
                padding: '0 5px',
                margin: '0 5px',
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                overflowY: 'auto',
                maxHeight: (theme) =>
                  `calc(${
                    theme.trello.appContentHeight
                  } - ${CONTENT_HEADER_HEIGHT} - ${CONTENT_FOOTER_HEIGHT} - ${theme.spacing(
                    4
                  )})`,
                '&::-webkit-scrollbar-thumb': {
                  background: '#7f8c8d',
                  borderRadius: '4px'
                },
                '&::-webkit-scrollbar-thumb:hover': {
                  background: '#95a5a6'
                }
              }}
            >
              <Card
                sx={{
                  boxShadow: '0 0 8px rgba(0, 0, 0, 0.3)',
                  overflow: 'unset'
                }}
              >
                <CardMedia
                  sx={{
                    height: 140,
                    '& .MuiCardContent-root::last-child': {
                      paddingBottom: 0
                    }
                  }}
                  image="data:image/jpeg;base64,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"
                  title="green iguana"
                />
                <CardContent
                  sx={{
                    p: 2,
                    '&:last-child': {
                      paddingBottom: 2
                    }
                  }}
                >
                  <Typography>Trello web</Typography>
                </CardContent>
                <CardActions
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center'
                  }}
                >
                  <Button startIcon={<GroupIcon />}>10</Button>
                  <Button startIcon={<CommentIcon />}>20</Button>
                  <Button startIcon={<AttachmentIcon />}>30</Button>
                </CardActions>
              </Card>

              <Card
                sx={{
                  boxShadow: '0 0 8px rgba(0, 0, 0, 0.3)',
                  overflow: 'unset'
                }}
              >
                <CardContent
                  sx={{
                    p: 2,
                    '&:last-child': {
                      paddingBottom: 2
                    }
                  }}
                >
                  <Typography>Trello web</Typography>
                </CardContent>
              </Card>
              <Card
                sx={{
                  boxShadow: '0 0 8px rgba(0, 0, 0, 0.3)',
                  overflow: 'unset'
                }}
              >
                <CardContent
                  sx={{
                    p: 2,
                    '&:last-child': {
                      paddingBottom: 2
                    }
                  }}
                >
                  <Typography>Trello web</Typography>
                </CardContent>
              </Card>
              <Card
                sx={{
                  boxShadow: '0 0 8px rgba(0, 0, 0, 0.3)',
                  overflow: 'unset'
                }}
              >
                <CardContent
                  sx={{
                    p: 2,
                    '&:last-child': {
                      paddingBottom: 2
                    }
                  }}
                >
                  <Typography>Trello web</Typography>
                </CardContent>
              </Card>
              <Card
                sx={{
                  boxShadow: '0 0 8px rgba(0, 0, 0, 0.3)',
                  overflow: 'unset'
                }}
              >
                <CardContent
                  sx={{
                    p: 2,
                    '&:last-child': {
                      paddingBottom: 2
                    }
                  }}
                >
                  <Typography>Trello web</Typography>
                </CardContent>
              </Card>
              <Card
                sx={{
                  boxShadow: '0 0 8px rgba(0, 0, 0, 0.3)',
                  overflow: 'unset'
                }}
              >
                <CardContent
                  sx={{
                    p: 2,
                    '&:last-child': {
                      paddingBottom: 2
                    }
                  }}
                >
                  <Typography>Trello web</Typography>
                </CardContent>
              </Card>
              <Card
                sx={{
                  boxShadow: '0 0 8px rgba(0, 0, 0, 0.3)',
                  overflow: 'unset'
                }}
              >
                <CardContent
                  sx={{
                    p: 2,
                    '&:last-child': {
                      paddingBottom: 2
                    }
                  }}
                >
                  <Typography>Trello web</Typography>
                </CardContent>
              </Card>
            </Box>

            <Box
              sx={{
                px: 2,
                height: CONTENT_FOOTER_HEIGHT,
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

        {/* column 1 */}
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
                height: CONTENT_HEADER_HEIGHT,
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

            {/* Col content */}
            <Box
              sx={{
                padding: '0 5px',
                margin: '0 5px',
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                overflowY: 'auto',
                maxHeight: (theme) =>
                  `calc(${
                    theme.trello.appContentHeight
                  } - ${CONTENT_HEADER_HEIGHT} - ${CONTENT_FOOTER_HEIGHT} - ${theme.spacing(
                    5
                  )})`,
                '&::-webkit-scrollbar-thumb': {
                  background: '#7f8c8d',
                  borderRadius: '4px'
                },
                '&::-webkit-scrollbar-thumb:hover': {
                  background: '#95a5a6'
                }
              }}
            >
              <Card
                sx={{
                  boxShadow: '0 0 8px rgba(0, 0, 0, 0.3)',
                  overflow: 'unset'
                }}
              >
                <CardMedia
                  sx={{
                    height: 140,
                    '& .MuiCardContent-root::last-child': {
                      paddingBottom: 0
                    }
                  }}
                  image="data:image/jpeg;base64,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"
                  title="green iguana"
                />
                <CardContent
                  sx={{
                    p: 2,
                    '&:last-child': {
                      paddingBottom: 2
                    }
                  }}
                >
                  <Typography>Trello web</Typography>
                </CardContent>
                <CardActions
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center'
                  }}
                >
                  <Button startIcon={<GroupIcon />}>10</Button>
                  <Button startIcon={<CommentIcon />}>20</Button>
                  <Button startIcon={<AttachmentIcon />}>30</Button>
                </CardActions>
              </Card>

              <Card
                sx={{
                  boxShadow: '0 0 8px rgba(0, 0, 0, 0.3)',
                  overflow: 'unset'
                }}
              >
                <CardContent
                  sx={{
                    p: 2,
                    '&:last-child': {
                      paddingBottom: 2
                    }
                  }}
                >
                  <Typography>Trello web</Typography>
                </CardContent>
              </Card>
              <Card
                sx={{
                  boxShadow: '0 0 8px rgba(0, 0, 0, 0.3)',
                  overflow: 'unset'
                }}
              >
                <CardContent
                  sx={{
                    p: 2,
                    '&:last-child': {
                      paddingBottom: 2
                    }
                  }}
                >
                  <Typography>Trello web</Typography>
                </CardContent>
              </Card>
            </Box>

            <Box
              sx={{
                px: 2,
                height: CONTENT_FOOTER_HEIGHT,
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
      </Box>
    </Box>
  )
}

export default BoardContent
