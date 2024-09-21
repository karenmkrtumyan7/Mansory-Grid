import { resizedHeight } from 'helpers/masonry';
import {
  FC, RefObject, useContext,
} from 'react';
import { ModalContext } from 'contexts/ModalContext';
import { Container } from 'styles/common';
import { BlurHashStyled, CardWrapper, Image } from 'styles/Card';
import ErrorBoundary from 'components/ErrorBoundary';
import { useImageLazyLoad } from '../hooks';

interface ImageType {
    urls: {
        raw: string;
    };
    description?: string;
    alt_description?: string;
    blur_hash?: string | null;
    width: number;
    height: number;
}

interface CardProps {
    image: ImageType;
    imagewidth: number;
}

const Card: FC<CardProps> = ({ image, imagewidth }) => {
  const [isVisible, imageRef] = useImageLazyLoad();
  const modal = useContext(ModalContext);

  return (
    <CardWrapper
      ref={imageRef as RefObject<HTMLDivElement>}
      height={resizedHeight(image.width, image.height, imagewidth)}
      onClick={() => {
        modal?.showImage(image);
      }}
    >
      {isVisible && (
        <Container>
          <Image
            src={`${image.urls.raw}&w=416`}
            imagewidth={imagewidth}
            alt={image.description || image.alt_description}
          />
        </Container>
      )}

      <ErrorBoundary>
        {image.blur_hash !== null && (
          <BlurHashStyled
            hash={image.blur_hash}
            imagewidth={imagewidth}
            height={resizedHeight(image.width, image.height, imagewidth)}
            resolutionX={32}
            resolutionY={32}
            punch={1}
          />
        )}
      </ErrorBoundary>
    </CardWrapper>
  );
};

export default Card;
