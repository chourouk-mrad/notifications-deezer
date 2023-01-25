import { useState, useEffect } from 'react';

import { List, ListSubheader, CircularProgress } from '@mui/material';

import { INotif } from './Notification.type';
import { notificationsMock } from './lib/mock';
import { sortArray } from './lib/functional';

import Notification from './Notification';
import EmptyNotification from './EmptyNotification';

/*
  A function that help us to do the asynchronus behavious with mock
*/
const getNotifications = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve(notificationsMock), Math.random() * 1000);
  });

const Notifications = () => {

  const [notifications, setNotifications] = useState<INotif[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState<boolean>(false);

  const markAsReaded = (id: string): void => {
    setNotifications(notifications.map(notification => {
      if (notification.id === id && !notification.read) {
        return { ...notification, read: true };
      }
      return notification;
    }));
  };

  useEffect(() => {
    setLoading(true);
    (async () => {
      const { data, total: totalNotif }: INotif[] | any =
        await getNotifications();
      setLoading(false);
      setNotifications(sortArray(data));
      setTotal(totalNotif);
    })();
  }, []);

  return (
    <>
      <List
        subheader={
          <ListSubheader disableSticky component="div" id="nested-list-subheader">
            Notifications ({total})
          </ListSubheader>
        }
        style={{ height: 300, width: 400 }}
      >
        {
          loading ? <CircularProgress /> : (
            notifications.length > 0 ?
              <>
                {notifications.map((notification: INotif) => (
                  <Notification key={notification.id} {...notification} markAsReaded={markAsReaded} />
                ))}
              </>
              : <EmptyNotification />

          )
        }


      </List>
    </>
  );
};

export default Notifications;