// eslint-disable-next-line import/no-extraneous-dependencies
import { faker } from '@faker-js/faker';
import { uuid, randomDate, sample } from './functional';
import { INotif } from '../Notification.type';
import { type, content } from './const';

const currentUser = { name: faker.name.fullName(), avatar: faker.image.avatar() };

const data: Array<INotif> = Array.from({ length: 50 }, () => {
  const notification = {
    id: uuid(), thumbnail: faker.image.image(),
    title: faker.music.songName(),
    artist: faker.name.fullName(),
    type: sample(type),
    createdAt: randomDate(new Date(2023, 0, 8)),
    read: sample([true, false]),
    content: sample(content),
    description: sample([null, faker.lorem.sentence()]),
  };
  return notification;
});

const notificationsMock: { data: Array<any>, total: number } = {
  data,
  total: data.length,
};

export {
  currentUser,
  notificationsMock,
};
