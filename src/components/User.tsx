import { getUserLink } from 'helpers';
import { FC } from 'react';
import {
  Avatar,
  UserName,
  UserWrapper,
  UserNameWrapper,
  UserTag,
  LinkStyle,
} from 'styles/User';
import { IImage } from 'types';

interface UserProps {
  image: IImage | undefined;
}

const User: FC<UserProps> = ({ image }) => {
  const portfolioLink = image ? getUserLink(image) : '';
  const {
    profile_image, first_name, last_name, username,
  } = image?.user || {};

  return image ? (
    <div>
      <UserWrapper>
        <LinkStyle href={portfolioLink} target="_blank">
          <Avatar
            src={profile_image?.small}
            alt="Photographer profile picture"
          />
        </LinkStyle>

        <LinkStyle href={portfolioLink} target="_blank">
          <UserNameWrapper>
            <UserName>
              {`${first_name} ${last_name || ''}`}
            </UserName>
            <UserTag>{`@${username}`}</UserTag>
          </UserNameWrapper>
        </LinkStyle>
      </UserWrapper>
    </div>
  ) : null;
};

export default User;
