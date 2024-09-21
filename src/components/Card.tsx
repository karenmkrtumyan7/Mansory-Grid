import { resizedHeight } from 'helpers/masonry';
import { Blurhash } from 'react-blurhash';

import { useContext } from 'react';
import ErrorBoundary from './ErrorBoundary';
import { ModalContext } from '../contexts/ModalContext';
import { useImageLazyLoad } from '../hooks';

export function Card({ image, imagewidth }) {
  const [isVisible, imageRef] = useImageLazyLoad();
  const modal = useContext(ModalContext);

  return (
    <div
      className="image"
      ref={imageRef}
      style={{
        position: 'relative',
        height: resizedHeight(image.width, image.height, imagewidth),
        cursor: 'zoom-in',
      }}
      onClick={() => {
        modal.showImage(image);
      }}
    >
      {isVisible && (
        <img
          src={`${image.urls.raw}&w=416`}
          className="unsplashImage"
          style={{
            maxWidth: imagewidth,
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 5,
          }}
          alt={image.description || image.alt_description}
        />
      )}

      <ErrorBoundary>
        {image.blur_hash !== null && (
          <Blurhash
            alt={image.description || image.alt_description}
            hash={image.blur_hash}
            className="unsplashImage blurHash"
            style={{
              width: '100%',
              maxWidth: imagewidth,
              position: 'absolute',
              left: 0,
              top: 0,
              zIndex: 2,
            }}
            height={resizedHeight(image.width, image.height, imagewidth)}
            resolutionX={32}
            resolutionY={32}
            punch={1}
          />
        )}
      </ErrorBoundary>
    </div>
  );
}
