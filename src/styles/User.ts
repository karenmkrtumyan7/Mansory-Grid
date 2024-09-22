import styled, { css } from 'styled-components';

const creditsDiv = css`
    display: flex;
    align-items: center;
    overflow: hidden;
`;

const LinkStyle = styled.a`
    text-decoration: none;
    outline: none;
`;

const UserWrapper = styled.div`
    ${creditsDiv}; 
    width: auto;
    padding: 10px;
`;

const UserNameWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const Avatar = styled.img`
    border-radius: 50%;
    margin: 0 10px;
`;

const creditsName = css`
    font-size: 15px;
    font-weight: 600;
`;

const UserName = styled.div`
    ${creditsName};
    color: black;
`;

const UserTag = styled.span`
    opacity: 0.7;
    color: black;
    font-size: 12px;
    margin: 0;
    padding: 0;
    
    &:hover {
        opacity: 1;
    }
`;

export {
  LinkStyle,
  UserWrapper,
  UserNameWrapper,
  Avatar,
  UserName,
  UserTag,
};
