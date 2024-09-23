import { IImage } from 'types';

export const resizedHeight = (width: number, height: number, newWidth: number): number => (newWidth / width) * height;

export const shortestColumnDifference = (columns: number[]): number => {
  const min = Math.min(...columns);
  return columns.findIndex((val) => val === min);
};

export const masonryColumns = (photosArray: IImage[], numberOfColumns: number, IMAGE_WIDTH: number): IImage[][] => {
  if (!photosArray.length) return Array.from(Array(numberOfColumns), () => []);

  const allColumns: IImage[][] = Array.from(Array(numberOfColumns), () => []);
  const HeightsArray: number[] = Array(numberOfColumns).fill(0);

  photosArray.forEach((currentImage) => {
    const shortest = shortestColumnDifference(HeightsArray);
    const height = resizedHeight(currentImage.width, currentImage.height, IMAGE_WIDTH);

    allColumns[shortest].push(currentImage);
    HeightsArray[shortest] += height;
  });

  return allColumns;
};
