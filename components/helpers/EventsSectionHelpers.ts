import { ColorType, EventType } from "@/app/events/types";

export const getEventTypeColor = (type: EventType): ColorType => {
  switch(type) {
    case 'contest': return 'primary';
    case 'workshop': return 'secondary';
    case 'meeting': return 'accent';
  }
};