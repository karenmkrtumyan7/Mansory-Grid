import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useCallback, FormEvent, FC } from 'react';
import {
  HeaderWrapper, SearchBarDiv, SearchBarForm, SearchButton, SearchInput,
} from 'styles/Header';

interface HeaderProps {
  searchCallback: (value: string) => void;
}

const Header: FC<HeaderProps> = ({ searchCallback }) => {
  const searchSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const input = event.currentTarget.elements.namedItem('input') as HTMLInputElement;
      if (input) {
        searchCallback(input.value);
      }
    },
    [searchCallback],
  );

  return (
    <HeaderWrapper>
      <SearchBarDiv>
        <SearchBarForm
          onSubmit={(event) => {
            searchSubmit(event);
          }}
        >
          <SearchButton type="submit">
            <FontAwesomeIcon icon={faSearch} />
          </SearchButton>
          <SearchInput placeholder="Search photos" name="input" autoComplete="off" />
        </SearchBarForm>
      </SearchBarDiv>
    </HeaderWrapper>
  );
};

export default Header;
