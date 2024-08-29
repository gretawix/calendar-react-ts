export type OneWeekDay = {
  weekDay: string;
  day: number;
  month: string;
  year: number;
  id: string;
};

export type ScrollRef = React.RefObject<HTMLDivElement>;

export type IconName =
  | 'drag_handle'
  | 'close'
  | 'schedule'
  | 'group'
  | 'location_on'
  | 'meeting_room'
  | 'subject'
  | 'attach_file'
  | 'event'
  | 'work'
  | 'lock'
  | 'notifications';
