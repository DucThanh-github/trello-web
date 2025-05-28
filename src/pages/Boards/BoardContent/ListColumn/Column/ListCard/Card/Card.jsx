import { Card as TrelloCard } from '@mui/material'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import GroupIcon from '@mui/icons-material/Group'
import CommentIcon from '@mui/icons-material/Comment'
import AttachmentIcon from '@mui/icons-material/Attachment'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'


function Card({ card }) {
  const showActions =
    !!card?.memberIds?.length ||
    !!card?.comments?.length ||
    !!card?.attachments?.length
  return (
    <TrelloCard
      sx={{
        boxShadow: '0 0 8px rgba(0, 0, 0, 0.3)',
        overflow: 'unset'
      }}
    >
      {card.cover && (
        <CardMedia
          sx={{
            height: 140,
            '& .MuiCardContent-root::last-child': {
              paddingBottom: 0
            }
          }}
          image={card.cover}
          title="green iguana"
        />
      )}
      <CardContent
        sx={{
          p: 2,
          '&:last-child': {
            paddingBottom: 2
          }
        }}
      >
        <Typography>{card.title}</Typography>
      </CardContent>
      {showActions && (
        <CardActions
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center'
          }}
        >
          {!!card?.memberIds?.length && (
            <Button startIcon={<GroupIcon />}>{card?.memberIds?.length}</Button>
          )}
          {!!card?.comments?.length && (
            <Button startIcon={<CommentIcon />}>
              {card?.comments?.length}
            </Button>
          )}
          {!!card?.attachments?.length && (
            <Button startIcon={<AttachmentIcon />}>
              {card?.attachments?.length}
            </Button>
          )}
        </CardActions>
      )}
    </TrelloCard>
  )
}

export default Card
