import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Button from '@mui/material/Button'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Tooltip from '@mui/material/Tooltip'

const styled = {
  color: 'white',
  borderRadius: 2,
  borderWidth: 0,
  bgcolor: 'transparent',
  '.MuiSvgIcon-root': {
    color: 'white',
    fontSize: '1.2rem'
  }
}

function BoardBar() {
  return (
    <Box
      sx={{
        height: (theme) => theme.trello.appBoardBarHeight,
        bgcolor: (theme) =>
          theme.palette.mode === 'light' ? '#1976d2' : '#34495e',
        display: 'flex',
        alignItems: 'center',
        px: 2,
        justifyContent: 'space-between',
        borderBottom: '1px solid white',
        overflowX: 'auto',
        gap: 2
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip
          variant="outlined"
          icon={<DashboardIcon />}
          label="MERN Stack Board"
          clickable
          sx={styled}
        />

        <Chip
          variant="outlined"
          icon={<VpnLockIcon />}
          label="Public/Private Workspace"
          clickable
          sx={styled}
        />

        <Chip
          variant="outlined"
          icon={<AddToDriveIcon />}
          label="Add To Google Drive"
          clickable
          sx={styled}
        />

        <Chip
          variant="outlined"
          icon={<BoltIcon />}
          label="Automation"
          clickable
          sx={styled}
        />

        <Chip
          variant="outlined"
          icon={<FilterListIcon />}
          label="Filter"
          clickable
          sx={styled}
        />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button
          variant="outlined"
          sx={{
            color: 'white',
            borderColor: 'white',
            '&:hover': { borderColor: 'white' }
          }}
          startIcon={<PersonAddIcon />}
        >
          Invite
        </Button>

        <AvatarGroup
          max={4}
          sx={{
            gap: '10px',
            '& .MuiAvatar-root': {
              width: '36px',
              height: '36px',
              fontSize: '0.875rem',
              border: 'none'
            }
          }}
        >
          <Tooltip title="Remy Sharp">
            <Avatar
              alt="Remy Sharp"
              src="data:image/jpeg;base64,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"
            />
          </Tooltip>
          <Tooltip title="Agnes Walker">
            <Avatar
              alt="Agnes Walker"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS5BalXkv6O-tMrqQEtLxU_1L1AVq3c_bOPg&s"
            />
          </Tooltip>
          <Tooltip title="Cindy Baker">
            <Avatar
              alt="Cindy Baker"
              src="data:image/jpeg;base64,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"
            />
          </Tooltip>
          <Tooltip title="Travis Howard">
            <Avatar
              alt="Travis Howard"
              src="https://www.google.com/imgres?q=image%20avatar&imgurl=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F002%2F002%2F403%2Fnon_2x%2Fman-with-beard-avatar-character-isolated-icon-free-vector.jpg&imgrefurl=https%3A%2F%2Fwww.vecteezy.com%2Ffree-vector%2Fprofile-avatar&docid=j1o201ERqM1BVM&tbnid=CKlOwsH0G6adOM&vet=12ahUKEwjox_KLpqiNAxVoklYBHczfKdEQM3oFCIABEAA..i&w=980&h=980&hcb=2&ved=2ahUKEwjox_KLpqiNAxVoklYBHczfKdEQM3oFCIABEAA"
            />
          </Tooltip>

          <Tooltip alt="Travis Howard">
            <Avatar
              alt="Travis Howard"
              src="https://www.google.com/imgres?q=image%20avatar&imgurl=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F002%2F002%2F403%2Fnon_2x%2Fman-with-beard-avatar-character-isolated-icon-free-vector.jpg&imgrefurl=https%3A%2F%2Fwww.vecteezy.com%2Ffree-vector%2Fprofile-avatar&docid=j1o201ERqM1BVM&tbnid=CKlOwsH0G6adOM&vet=12ahUKEwjox_KLpqiNAxVoklYBHczfKdEQM3oFCIABEAA..i&w=980&h=980&hcb=2&ved=2ahUKEwjox_KLpqiNAxVoklYBHczfKdEQM3oFCIABEAA"
            />
          </Tooltip>
          <Tooltip title="Trevor Henderson">
            <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar
