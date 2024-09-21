import ReactDOM from 'react-dom';
import {
  FC, useState, useRef,
} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useClickOutside } from 'hooks';
import { createModal } from 'helpers';
import Avatar from 'components/Avatar';
import {
  CloseButton,
  ImageModal,
  ImageZoomedIn,
  ImageZoomedOut,
  ModalInner,
  ModalOuter,
} from 'styles/Card';

interface ImageType {
    urls: {
        full: string;
        regular: string;
    };
    alt_description?: string;
    user: any
}

interface ModalProps {
    image: ImageType | null;
    disableModal: () => void;
}

const Modal: FC<ModalProps> = ({ image, disableModal }) => {
  const modalId = 'modal-root';
  createModal(modalId);

  const [isLargeImage, setIsLargeImage] = useState(false);
  const imageModalRef = useRef<HTMLDivElement>(null);

  useClickOutside(imageModalRef, disableModal);

  const Zoom = isLargeImage ? ImageZoomedIn : ImageZoomedOut;

  return image
    ? ReactDOM.createPortal(
      <ModalOuter>
        <CloseButton onClick={disableModal}>
          <FontAwesomeIcon icon={faTimes} style={{ fontSize: '35px' }} />
        </CloseButton>
        <ModalInner ref={imageModalRef}>
          <Avatar image={image} />
          <Zoom
            onClick={() => setIsLargeImage(!isLargeImage)}
          >
            <ImageModal
              large={isLargeImage ? 1 : 0}
              src={isLargeImage ? image.urls.full : image.urls.regular}
              alt={image.alt_description || 'Image'}
            />
          </Zoom>
        </ModalInner>
      </ModalOuter>,
            document.getElementById(modalId) as HTMLElement,
    )
    : null;
};

export default Modal;
