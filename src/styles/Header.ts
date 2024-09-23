import styled from 'styled-components';
import colors from 'styles/colors';

const HeaderWrapper = styled.div`
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;
  height: 62px;
  display: flex;
  align-items: center;
  padding: 10px;
  z-index: 11;
  box-shadow:
    0 4px 12px rgba(0, 0, 0, 0.08),
    0 0 1px rgba(1, 0, 0, 0.1);
`;

const SearchBarDiv = styled.div`
  width: 100%;
  margin-left: 18px;
  display: flex;
  justify-content: center;
`;

const SearchBarForm = styled.form`
  height: 40px;
  border-radius: 24px;
  background-color: ${colors.lightGrey};
  border: 1px solid transparent;
  width: 80%;
  max-width: 500px;
  display: flex;
  align-items: center;
  padding-left: 10px;

  &:hover {
    border-color: ${colors.grey};
  }

  &:focus-within {
    background-color: white;
    border-color: ${colors.grey};
  }
`;

const SearchButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-style: none;
  background: none;
  opacity: 0.6;
  color: ${colors.darkGrey};

  &:hover {
    color: black;
    cursor: pointer;
  }
`;

const SearchInput = styled.input`
  background: none;
  border: none;
  font-size: 14px;
  font-weight: 450;
  width: 100%;
  padding-right: 10px;
  &:focus,
  &:active {
    outline: none;
  }
`;

export {
  HeaderWrapper, SearchBarDiv, SearchBarForm, SearchButton, SearchInput,
};
