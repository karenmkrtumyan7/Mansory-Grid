import {
  useState, useRef, useEffect, FC,
} from 'react';
import { IImage } from 'types';
import { masonryColumns } from 'helpers/masonry';
import { Container, Grid } from 'styles/common';
import { useScreenResize } from 'hooks';
import Card from 'components/Card';

interface GalleryProps {
  photosArray: IImage[];
  rowGap: number;
  columnGap: number;
  minColumns: number;
  screenWidths: number[];
  imageWidths: number[];
}

const Gallery: FC<GalleryProps> = ({
  photosArray, rowGap, columnGap, minColumns, screenWidths, imageWidths,
}) => {
  // Ensure the blurhash gets the same width/height as the image
  const [maxImageWidth, setMaxImageWidth] = useState(imageWidths[imageWidths.length - 1]);
  const [currentImageWidth, setCurrentImageWidth] = useState(imageWidths[imageWidths.length - 1]);
  const [columns, setColumns] = useState<IImage[][]>([[]]);
  const [numberOfColumns, setNumberOfColumns] = useState(imageWidths.length - 1);

  const gridRef = useRef<HTMLDivElement>(null);
  const [screenWidth] = useScreenResize(100);

  useEffect(() => {
    // Find the index of the first screen width that is greater than the current screen width
    const index = screenWidths.findIndex((width) => screenWidth < width);

    // If an index is found, set the number of columns and max image width accordingly
    if (index !== -1) {
      setNumberOfColumns(index + minColumns);
      setMaxImageWidth(imageWidths[index]);
    } else {
      // If no index is found, set to the last element
      setNumberOfColumns(screenWidths.length - 1);
      setMaxImageWidth(imageWidths[imageWidths.length - 1]);
    }
  }, [screenWidth, imageWidths, screenWidths, minColumns]);

  useEffect(() => {
    if (photosArray.length !== 0) {
      const newColumns = masonryColumns(photosArray, numberOfColumns, maxImageWidth);
      setColumns(newColumns);
    } else {
      setColumns([]); // Handle empty state if needed
    }
  }, [photosArray, numberOfColumns, rowGap, maxImageWidth]);

  useEffect(() => {
    if (gridRef.current) {
      const newWidth = gridRef.current.clientWidth / columns.length - columnGap;
      if (newWidth > maxImageWidth) {
        setCurrentImageWidth(maxImageWidth);
      } else {
        setCurrentImageWidth(newWidth);
      }
    }
  }, [columnGap, screenWidth, columns, maxImageWidth]);

  if (!photosArray || photosArray.length === 0) {
    return null;
  }

  return (
    <Grid ref={gridRef}>
      {columns.map((column, index) => (
        <Container key={index}>
          {column.map((image) => (
            <Card key={image.id} image={image} imageWidth={currentImageWidth} />
          ))}
        </Container>
      ))}
    </Grid>
  );
};

export default Gallery;
