import { Place } from '@/models/Place';

export const generatePlace = ({ ...place }: Partial<Place> = {}): Place => {
  return {
    id: '1',
    address: '',
    imageUrl: '',
    ...place,
  };
};
