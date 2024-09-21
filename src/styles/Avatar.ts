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

const CreditsDivHeader = styled.div`
    ${creditsDiv}; 
    width: auto;
    padding: 10px;
`;

const CreditsNamesDiv = styled.div`
    display: flex;
    flex-direction: column;
`;

const CreditsPhoto = styled.img`
    border-radius: 50%;
    margin: 0 10px;
`;

const creditsName = css`
    font-size: 15px;
    font-weight: 600;
`;

const CreditsName = styled.div`
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
  CreditsDivHeader,
  CreditsNamesDiv,
  CreditsPhoto,
  CreditsName,
  UserTag,
};
