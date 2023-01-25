export interface INotif {
  id: string,
  thumbnail: string,
  title: string,
  artist: string,
  type: string,
  description?: string,
  createdAt: Date,
  read: boolean,
  validityPeriod?: string,
  content?: string,
}