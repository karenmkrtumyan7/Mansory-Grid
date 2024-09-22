import {
  useCallback, useEffect, useRef, useState,
} from 'react';
import { getPhotos, getSearch } from 'services/networkService';
import data from 'helpers/data';
import { Gallery, Header } from 'components';
import { removeDuplicateImages } from 'helpers';
import { ErrorStyled } from 'styles/common';
import { useInfiniteScroll } from 'hooks';

const screenWidths: number[] = [
  data.SCREEN_WIDTH_1COLUMN,
  data.SCREEN_WIDTH_2COLUMNS,
  data.SCREEN_WIDTH_3COLUMNS,
];

const imageWidths: number[] = [
  data.IMAGE_WIDTH_1COLUMN,
  data.IMAGE_WIDTH_2COLUMNS,
  data.IMAGE_WIDTH_3COLUMNS,
];

const MasonryGrid = () => {
  const fetching = useRef(true);

  const [photosArray, setPhotosArray] = useState<any[]>([]);
  const [page, setPage] = useState<number>(1);
  const [searchText, setSearchText] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const infiniteLoadRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const getDataPhotos = async (text: string) => {
      const nextPhotos: any[] = text === '' ? await getPhotos(page) : await getSearch(page, text);

      if (page === 1) {
        if (nextPhotos && nextPhotos.length === 0) {
          setErrorMessage("Couldn't find any photos");
          setPhotosArray([]);
        } else {
          setErrorMessage(null);
        }
        setPhotosArray(nextPhotos);
        window.scrollTo(0, 0);
      } else {
        setPhotosArray((prevPhotos) => removeDuplicateImages(prevPhotos, nextPhotos));
      }

      fetching.current = false;
    };

    getDataPhotos(searchText).catch(() => {
      setErrorMessage('Something went wrong');
    });
  }, [page, searchText]);

  const updatePage = useCallback(() => {
    if (!fetching.current) {
      fetching.current = true;
      setPage((prevPage) => prevPage + 1);
    }
  }, []);

  useInfiniteScroll(infiniteLoadRef, updatePage);

  return (
    <>
      <Header
        searchCallback={(value: string) => {
          setPage(1);
          setSearchText(value);
        }}
      />
      <div style={{ height: data.HEADER_HEIGHT * 1.5 }} />
      {errorMessage && <ErrorStyled>{errorMessage}</ErrorStyled>}
      <div style={{ minHeight: errorMessage ? 100 : 1600 }}>
        <Gallery
          photosArray={photosArray}
          screenWidths={screenWidths}
          imageWidths={imageWidths}
          minColumns={1}
          rowGap={data.ROW_GAP}
          columnGap={data.COLUMN_GAP}
        />
      </div>
      <div style={{ height: 10 }} ref={infiniteLoadRef} />
    </>
  );
};

export default MasonryGrid;
