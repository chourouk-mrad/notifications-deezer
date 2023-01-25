import { INotif } from '../Notification.type';

const uuid = ()  => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    // eslint-disable-next-line no-mixed-operators
    var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r && 0x3 || 0x8);
    return v.toString(16);
  });
};

const randomDate = (start = new Date(2022, 1, 8), end = new Date()) => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};

const sample = (arr: Array<string | boolean | null>): any => (
  arr[Math.floor(Math.random() * arr.length)]
);

const sortArray = (array: INotif[]) =>
  array.sort(
    (d1: INotif, d2: INotif) =>
      new Date(d2.createdAt).getTime() - new Date(d1.createdAt).getTime(),
  );

export {
  uuid,
  randomDate,
  sample,
  sortArray,
};
