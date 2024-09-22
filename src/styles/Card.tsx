import styled from 'styled-components';
import data from 'helpers/data';
import { Blurhash } from 'react-blurhash';

interface CardWrapperProps {
  height: number;
}

const CardWrapper = styled.div<CardWrapperProps>`
    position: relative;
    height: ${(props) => props.height};
    cursor: pointer;
    margin-bottom: 24px;
`;

interface ImageProps {
  imageWidth: number;
}

const Image = styled.img<ImageProps>`
    max-width: ${(props) => props.imageWidth};
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;
    width: 100%;
    box-sizing: border-box;
`;

const Details = styled.div`
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

const ImageWrapper = styled.div`
  padding: 0 16px;
  margin: 0 auto;
  text-align: center;
  width: 80%;
  height: 80%;
`;

interface BlurHashStyledProps {
  imageWidth: number;
}

const BlurHashStyled = styled(Blurhash)<BlurHashStyledProps>`
  width: 100% !important;
  max-width: ${(props) => props.imageWidth};
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
  box-sizing: border-box;
`;

const ImageModal = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
`;

const DescriptionWrapper = styled.div`
  margin-top: 15px;
  text-align: center;
`;

const ImageDescription = styled.p`
  font-size: 18px;
  color: #555;
  margin-bottom: 10px;
`;

const ImageDate = styled.p`
  font-size: 14px;
  color: #888;
`;

export {
  Details,
  ModalInner,
  CloseButton,
  ImageWrapper,
  CardWrapper,
  Image,
  ImageModal,
  BlurHashStyled,
  DescriptionWrapper,
  ImageDescription,
  ImageDate,
};
