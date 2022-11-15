import styled from "styled-components";

export default function AddServiceTxtArea() {
  //   const [hideTxtBox, setTxtBox] = useState(key);

  // Image url
  const imageUrl = "/image/heart.png";

  return (
    <ContentDivBox>
      {/* {hideTxtBox ? ( */}
      <>
        <ImgBox>
          <Image src={imageUrl} />
        </ImgBox>
        <TextAreaBox>
          <TitleTxtBox placeholder="무슨 서비스인가요?" />
          <ContentTxtBox placeholder="자세히 설명해 주세요." />
        </TextAreaBox>
        {/* <ButtonBox>
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
          </ButtonBox> */}
      </>
      {/* ) : (
        <> </>
      )} */}
    </ContentDivBox>
  );
}

// 현재 페이지 전체 component
const ContentDivBox = styled.div`
  display: flex;
  padding: 0px;
  width: 100%;
  height: 200px;
`;

const ImgBox = styled.div`
  flex: 0.7;
  padding: 0px;
  text-align: left;
`;

const Image = styled.img`
  width: 119px;
  height: 111px;

  margin-top: 30px;
  margin-left: 0px;

  object-fit: fill;
  line-height: 30px;
  background: #ffffff;
`;

// TextArea 를 감싸고 있는 div tag
const TextAreaBox = styled.div`
  margin: 0px;
  height: 100%;
  flex: 3;
`;

// 제목 텍스트에어리어
const TitleTxtBox = styled.textarea`
  margin-left: 0px;
  margin-bottom: 12px;

  width: 87%;
  height: 70px;

  line-height: 70px;
  padding-left: 20px;

  font-size: 24px;
  border-radius: 20px;
  border: 1.8px solid #d9d9d9;
`;

// 내용부분의 텍스트 에어리어
const ContentTxtBox = styled.textarea`
  margin-left: 0px;
  width: 85%;
  height: 62px;

  /* line-height: 100px; */

  padding-top: 33px;
  padding-left: 20px;
  padding-right: 20px;

  font-size: 24px;

  border-radius: 20px;
  border: 1.8px solid #d9d9d9;

  word-break: break-all;
`;
