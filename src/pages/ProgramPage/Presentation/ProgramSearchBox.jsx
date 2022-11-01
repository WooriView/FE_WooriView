import { useRef } from "react";
import styled from "styled-components";
import GlobalIcon from "../../../components/GlobalIcon";

export default function ProgramSearchBox() {
  const boxRef = useRef();
  const inputFocus = () => {
    boxRef.current.style = "border: 5px solid #c6e2f2;";
  };
  const inputBlur = () => {
    boxRef.current.style = "border: 1px solid #c6e2f2;";
  };
  return (
    <SearchContainer>
      <SearchBox ref={boxRef}>
        <SearchInput
          placeholder="찾고 싶은 앨범을 검색해 보세요"
          onFocus={inputFocus}
          onBlur={inputBlur}
        />
        <GlobalIcon.Search />
      </SearchBox>
    </SearchContainer>
  );
}

const SearchContainer = styled.div`
  display: flex;
  margin-top: 47px;
  margin-bottom: 42px;
  justify-content: center;
  align-items: center;
`;

const SearchBox = styled.div`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  align-items: center;
  width: 680px;
  border: 1px solid #c6e2f2;
  border-radius: 100px;
  padding: 11px;
`;

const SearchInput = styled.input`
  outline: none;
  border: none;
  width: 380px;
  flex-grow: 1;
  font-family: Inter;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: 0em;
  padding-left: 30px;
  ::placeholder {
    color: #a3a3a3;
    font-weight: 700;
    text-align: center;
  }
`;
