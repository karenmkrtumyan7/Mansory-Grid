import styled from 'styled-components';
import data from 'helpers/data';
import { Blurhash } from 'react-blurhash';

interface CardWrapperProps {
  height: number;
}

const CardWrapper = styled.div<CardWrapperProps>`
    position: relative;
    height: ${(props) => props.height};
    cursor: zoom-in;
    margin-bottom: 24px;
`;

interface ImageProps {
  imagewidth: number;
}

const Image = styled.img<ImageProps>`
    max-width: ${(props) => props.imagewidth};
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;
    width: 100%;
    box-sizing: border-box;
`;

const ModalOuter = styled.div`
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 55;
  overflow: auto;
  display: flex;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: zoom-out;
`;

const ModalInner = styled.div`
  border-radius: 3px;
  border-style: none;
  outline: none;
  background-color: white;
  width: 75vw;
  margin-top: 30px;
  overflow-y: auto;
  cursor: auto;

  @media (max-width: ${data.FULL_MODAL_SCREEN_WIDTH}) {
    width: 100vw;
    height: 100vh;
    margin-top: 0;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  outline: none;

  font-size: 1.3rem;
  opacity: 0.8;
  transition: 0.2s;
  position: absolute;
  top: 12px;
  right: 12px;
  cursor: pointer;

  color: white;
  @media (max-width: ${data.FULL_MODAL_SCREEN_WIDTH}) {
    color: black;
    opacity: 0.4;
  }

  &:hover {
    opacity: 1;
  }
`;

const ImageZoomedOut = styled.div`
  padding: 0 16px;
  margin: 0 auto;
  text-align: center;
`;

const ImageZoomedIn = styled.div`
  margin: 0;
  overflow: hidden;
  height: auto;
`;

interface BlurHashStyledProps {
  imagewidth: number;
}

const BlurHashStyled = styled(Blurhash)<BlurHashStyledProps>`
    width: 100% !important;
    max-width: ${(props) => props.imagewidth};
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
    box-sizing: border-box;
`;

interface ImageModalProps {
  large: number;
}

const ImageModal = styled.img<ImageModalProps>`
    max-width: ${(props) => (props.large ? '100%' : 'none')};
    max-height: ${(props) => (props.large ? 'none' : '80vh')};
    cursor: ${(props) => (props.large ? 'zoom-in' : 'zoom-out')};
`;

export {
  ModalOuter,
  ModalInner,
  CloseButton,
  ImageZoomedOut,
  ImageZoomedIn,
  CardWrapper,
  Image,
  ImageModal,
  BlurHashStyled,
};
