import { useState } from "react";
import styled from "styled-components";

export default function AddServiceTxtArea() {
  const [hideTxtBox, setTxtBox] = useState(false);
  // Image url
  const imageUrl = "/image/heart.png";

  return (
    <ContentDivBox>
      {!hideTxtBox ? (
        <>
          <ImgBox>
            <Image src={imageUrl} />
          </ImgBox>
          <TextAreaBox>
            <TitleTxtBox />
            <ContentTxtBox />
          </TextAreaBox>
          <ButtonBox>
            <AddButton
              onClick={() => {
                setTxtBox(!hideTxtBox);
              }}
            >
              <TextBox>
                서비스
                <br />
                추가
              </TextBox>
            </AddButton>
          </ButtonBox>
        </>
      ) : (
        <> </>
      )}
    </ContentDivBox>
  );
}

// 현재 페이지 전체 component
const ContentDivBox = styled.div`
  display: flex;
  padding: 0px;
  width: 100%;
  height: 200px;
  background-color: yellow;
`;

const ImgBox = styled.div`
  flex: 1;
  text-align: right;
`;

const Image = styled.img`
  width: 130px;
  height: 110px;
  object-fit: fill;
  margin-left: 10px;
  line-height: 30px;
  background: #ffffff;
`;

// TextArea 를 감싸고 있는 div tag
const TextAreaBox = styled.div`
  margin: 0px;
  width: 80%;
  height: 100%;
  background-color: blue;
  flex: 3;
`;

// 제목 텍스트에어리어
const TitleTxtBox = styled.textarea`
  margin-left: 30px;

  width: 70%;
  height: 70px;

  border-radius: 20px;
  border: 1.8px solid #d9d9d9;
`;

// 내용부분의 텍스트 에어리어
const ContentTxtBox = styled.textarea`
  margin-left: 30px;

  width: 70%;
  height: 100px;

  border-radius: 20px;
  border: 1.8px solid #d9d9d9;
`;

// 버튼을 감싼 div
const ButtonBox = styled.div`
  background-color: green;
  flex: 0.5;
  padding-top: 90px;
`;

// 추가버튼
const AddButton = styled.button`
  width: 130px;
  height: 100px;
  border: none;
  cursor: pointer;
  font-family: "Noto Sans KR", sans-serif;
  font-size: var(--button-font-size, 1.4rem);
  padding: var(--button-padding, 0px 0px);
  border-radius: var(--button-radius, 30px);
  background: var(--button-bg-color, #c6e2f2);
  color: var(--button-color, #405f8c);
  &:active,
  &:hover,
  &:focus {
    background: var(--button-hover-bg-color, #07a3fb);
  }

  &:disabled {
    cursor: default;
    opacity: 0.5;
    background: var(--button-bg-color, #07a3fb);
  }
`;

// 버튼내부의 텍스트
const TextBox = styled.p`
  font-weight: bold;
  margin: 0px auto;
`;
