/* eslint-disable import/no-extraneous-dependencies */

import { Grid, Typography, ListItemButton } from '@mui/material';
import './Notification.css';
import { INotif } from './Notification.type';

type IProp = INotif & {
  markAsReaded: (id: string) => void;
};

const monthDiff = (dateFrom: Date, dateTo: Date) => {
  return dateTo.getMonth() - dateFrom.getMonth() +
    (12 * (dateTo.getFullYear() - dateFrom.getFullYear()));
};

const hoursDiff = (dateFrom: Date, dateTo: Date) => {
  return Math.round(Math.abs(dateFrom.getTime() - dateTo.getTime()) / 3600000);
};

const daysDiff = (dateFrom: Date, dateTo: Date) => {
  const millisecondsDiff = dateTo.getTime() - dateFrom.getTime();
  return  Math.round(millisecondsDiff / (1000 * 3600 * 24));
};

const convertDate = (date: Date): string => {
  const firstDate = new Date(date);
  const secondDate = new Date();

  const diffInMonth = monthDiff(firstDate, secondDate);


  const diffInHours = hoursDiff(firstDate, secondDate);
  const diffInDays = daysDiff(firstDate, secondDate);

  let dateText;
  if (diffInMonth > 0) {
    dateText = `${diffInMonth} months ago`;
  } else if (diffInDays > 0) {
    dateText = `${diffInDays} days ago`;
  } else {
    dateText = `${diffInHours} hours ago`;
  }

  return dateText.toUpperCase();
};
const extraDetail = (type: string, content: string | undefined): string => ((content ? `- ${type} ${content}` : `- ${type}`).toUpperCase());

const Notification = ({ id, thumbnail, title, artist, createdAt, description, type, content, read, markAsReaded }: IProp ) => (
  <>
    <ListItemButton divider className={read ? 'notification' : 'notification unreaded'} onClick={() => {markAsReaded(id);}}>
      <Grid container spacing={2} alignItems='center'>
        <Grid item>
          <img src={thumbnail} alt={title} className='thumbnail' />
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction='column' spacing={2}>
            <Grid item xs>
              <Typography variant='body2' gutterBottom>
                {title}
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                { artist }
              </Typography>
            </Grid>

          </Grid>
        </Grid>
      </Grid>
      {
        description && (
          <Typography variant='body2' gutterBottom>
            {description}
          </Typography>
        )
      }
      <Typography variant='body2' color='text.secondary'>
        {convertDate(createdAt)} {extraDetail(type, content)}
      </Typography>
    </ListItemButton>
  </>


);

export default Notification;