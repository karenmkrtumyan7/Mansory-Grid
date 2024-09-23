import { resizedHeight } from 'helpers/masonry';
import { FC, RefObject, useMemo } from 'react';
import { Container } from 'styles/common';
import { BlurHashStyled, CardWrapper, Image } from 'styles/Card';
import ErrorBoundary from 'components/ErrorBoundary';
import { useImageLazyLoad } from 'hooks';
import { useNavigate } from 'react-router-dom';
import { IImage } from 'types';

interface CardProps {
  image: IImage;
  imageWidth: number;
}

const Card: FC<CardProps> = ({ image, imageWidth }) => {
  const [isVisible, imageRef] = useImageLazyLoad();
  const navigate = useNavigate();
  const imageHeight = useMemo(() => resizedHeight(image.width, image.height, imageWidth), [image.height, image.width, imageWidth]);

  return (
    <CardWrapper ref={imageRef as RefObject<HTMLDivElement>} height={imageHeight} onClick={() => navigate(`photos/${image.id}`)}>
      {isVisible && (
        <Container>
          <Image $imageWidth={imageWidth} src={`${image.urls.raw}&w=416`} alt={image.description || image.alt_description} />
        </Container>
      )}

      <ErrorBoundary>
        {image.blur_hash !== null && <BlurHashStyled data-testid="blurhash" $imageWidth={imageWidth} hash={image.blur_hash} height={imageHeight} resolutionX={32} resolutionY={32} punch={1} />}
      </ErrorBoundary>
    </CardWrapper>
  );
};

export default Card;
