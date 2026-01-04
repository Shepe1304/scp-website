export type EventType= 'contest' | 'workshop' | 'meeting';
export type ViewMode = 'timeline' | 'card' | 'list';
export type ColorType = 'primary' | 'secondary' | 'accent'; 

export interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  type: EventType;
}

export interface Semester {
  id: string;
  name: string;
  current: boolean;
  events: Event[];
}

export interface CardViewProps {
  events: Event[];
}

export interface TimelineViewProps {
  events: Event[];
}

export interface ListViewProps {
  events: Event[];
}