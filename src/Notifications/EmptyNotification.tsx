// eslint-disable-next-line import/no-extraneous-dependencies
import { ListItem, Typography } from '@mui/material';

const EmptyNotification = () => (
  <ListItem style={{ justifyContent: 'center', width: 350 }}>
    <Typography variant='body2' color='text.secondary'>
      No notifications
    </Typography>
  </ListItem>
);

export default EmptyNotification;