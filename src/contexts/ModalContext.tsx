import {
  createContext, useCallback, useState, useMemo, ReactNode, FC,
} from 'react';
import Modal from 'components/Modal';

interface ModalContextType {
  showImage: (image: any) => void;
}

const ModalContext = createContext<ModalContextType | null>(null);

interface ModalProviderProps {
  children: ReactNode;
}

const ModalProvider: FC<ModalProviderProps> = ({ children }) => {
  const [modalImage, setModalImage] = useState<any | null>(null);

  const showImage = useCallback((image: any) => {
    setModalImage(image);
  }, []);

  const disableModal = useCallback(() => {
    setModalImage(null);
  }, []);

  const providerValue = useMemo(() => ({ showImage }), [showImage]);

  return (
    <ModalContext.Provider value={providerValue}>
      {children}
      <Modal image={modalImage} disableModal={disableModal} />
    </ModalContext.Provider>
  );
};

export {
  ModalContext,
  ModalProvider,
};
