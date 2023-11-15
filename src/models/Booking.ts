import { Place } from '@/models/Place';

export interface Booking {
  id: string;
  start: Date;
  end: Date;
  place: Place;
}
