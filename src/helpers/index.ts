import { IImage } from 'types';

export const removeDuplicateImages = (prevPhotos: { id: string }[], nextPhotos?: { id: string }[]): { id: string }[] => {
  if (!nextPhotos) {
    return [];
  }
  const filteredPhotos = nextPhotos.filter((current) => !prevPhotos.some((checkPhoto) => checkPhoto.id === current.id));
  return [...prevPhotos, ...filteredPhotos];
};

export const getUserLink = (image: IImage): string => `${process.env.REACT_APP_BASE_URL}/@${image.user.username}`;

export const textToQuery = (string: string): string => string.replace(/\W/g, '+');
