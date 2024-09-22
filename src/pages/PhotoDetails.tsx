import {
  FC, useEffect, useState,
} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import {
  CloseButton,
  ImageModal,
  ImageWrapper,
  ModalInner,
  Details, DescriptionWrapper, ImageDescription, ImageDate,
} from 'styles/Card';
import { getPhoto } from 'services/networkService';
import { useParams, useNavigate } from 'react-router-dom';
import { IImage } from 'types';
import { Blurhash } from 'react-blurhash';
import User from 'components/User';

const PhotoDetails: FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [image, setImage] = useState<IImage | undefined>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (id) {
      getPhoto(id)
        .then((data) => {
          setImage(data);
        }).catch(() => {
          navigate('/404');
        }).finally(() => {
        });
    }
  }, [id, navigate]);

  return (
    <Details>
      <CloseButton onClick={() => navigate('/')}>
        <FontAwesomeIcon icon={faTimes} style={{ fontSize: '35px' }} />
      </CloseButton>
      <ModalInner>
        <User image={image} />
        <ImageWrapper>
          {!loading && image?.blur_hash && (
            <Blurhash
              hash={image.blur_hash}
              width="100%"
              height="100%"
              resolutionX={32}
              resolutionY={32}
              punch={1}
            />
          )}
          <ImageModal
            src={image?.urls?.full}
            onLoad={() => setLoading(true)}
            style={loading ? {} : { display: 'none' }}
          />
        </ImageWrapper>
        <DescriptionWrapper>
          {image?.description && <ImageDescription>{image.description || 'No description available'}</ImageDescription>}
          {image?.created_at && <ImageDate>{new Date(image.created_at).toLocaleDateString()}</ImageDate>}
        </DescriptionWrapper>
      </ModalInner>
    </Details>
  );
};

export default PhotoDetails;
