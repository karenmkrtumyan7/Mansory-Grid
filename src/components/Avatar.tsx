import { getUserLink } from 'helpers';
import { FC } from 'react';
import {
  CreditsPhoto,
  CreditsName,
  CreditsDivHeader,
  CreditsNamesDiv,
  UserTag,
  LinkStyle,
} from 'styles/Avatar';

interface User {
  profile_image: {
    small: string;
  };
  first_name: string;
  last_name?: string;
  username: string;
}

interface Image {
  user: User;
}

interface AvatarProps {
  image: Image;
}

const Avatar: FC<AvatarProps> = ({ image }) => {
  const portfolioLink = image ? getUserLink(image) : '';

  return image ? (
    <div>
      <CreditsDivHeader>
        <LinkStyle href={portfolioLink}>
          <CreditsPhoto
            src={image.user.profile_image.small}
            alt="Photographer profile picture"
          />
        </LinkStyle>

        <LinkStyle href={portfolioLink}>
          <CreditsNamesDiv>
            <CreditsName>
              {`${image.user.first_name} ${image.user.last_name ? image.user.last_name : ''}`}
            </CreditsName>
            <UserTag>{`@${image.user.username}`}</UserTag>
          </CreditsNamesDiv>
        </LinkStyle>
      </CreditsDivHeader>
    </div>
  ) : null;
};

export default Avatar;
