import styled from "styled-components";
import Swal from "sweetalert2";

export default function MedicalServiceList({ medicalData, flag }) {
  const imageUrl = "/image/heart.png";

  const onClickGoOut = () => {
    Swal.fire({
      // icon: "warning",
      title: "아래 서비스를 삭제하시겠어요?",
      text: "",
      confirmButtonText: "수정",
      showCloseButton: false,
      showCancelButton: false,
      // cancelButtonText: "취소",
    }).then(res => {
      /* Read more about isConfirmed, isDenied below */
      if (res.isConfirmed) {
        // 삭제 요청 처리
      } else {
        // 취소
      }
    });
  };

  return (
    <Container>
      <ImgBox>
        <Image src={imageUrl} />
      </ImgBox>
      <ContentBox>
        <Title>{medicalData.title}</Title>
        <Content>{medicalData.content}</Content>
      </ContentBox>
      {!flag ? (
        <BtnContainer>
          <AddBtnBox>
            <AddBtn
              onClick={() => {
                onClickGoOut();
              }}
            >
              <TextBox>수정</TextBox>
            </AddBtn>
          </AddBtnBox>
          <DelBtnBox>
            <DelBtn>
              <TextBox>삭제</TextBox>
            </DelBtn>
          </DelBtnBox>
        </BtnContainer>
      ) : (
        <> </>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex: 1;
  padding: 0px;

  margin-top: 60px;
  margin-left: 110px;

  width: 90%;
  height: 140px;
`;

const ImgBox = styled.div`
  flex: 1;
  width: 1000px;
  text-align: left;
`;

const Image = styled.img`
  width: 119px;
  margin-left: 0px;
  line-height: 30px;
  background: #ffffff;
`;

const ContentBox = styled.div`
  flex: 5;
  margin-top: 0px;
  width: 4500px;
  height: 100%;
`;

const Title = styled.p`
  word-wrap: break-word;

  font-style: normal;
  font-family: "Inter";
  font-size: 40px;
  font-weight: bold;

  margin: 20px;
  margin-top: 00px;

  height: 40px;
  width: 90%;

  justify-content: center;
`;

const Content = styled.p`
  width: 92%;
  height: 40px;
  font-family: "Inter";
  font-style: normal;
  font-size: 22px;
  margin-top: 0px;
  color: #747474;
  margin: 20px;
  margin-top: 20px;
`;
const BtnContainer = styled.div`
  flex: 1;
  width: 40px;
  height: 140px;
`;
const AddBtnBox = styled.div`
  width: 100%;
  height: 60px;
`;

const DelBtnBox = styled.div`
  width: 100%;
  height: 60px;
  border: 20px;
`;

const AddBtn = styled.button`
  margin-top: 5px;
  width: 100%;
  height: 100%;
  border-width: 3px;
  border-color: #d3e0eb;
  border-style: solid;
  cursor: pointer;
  font-family: "Noto Sans KR", sans-serif;
  font-size: var(--button-font-size, 1.4rem);
  padding: var(--button-padding, 0px 0px);
  border-radius: var(--button-radius, 30px);
  background: var(--button-bg-color, #ffffff);
  color: var(--button-color, #405f8c);
  &:active,
  &:hover,
  &:focus {
    background: var(--button-hover-bg-color, #d3e0eb);
  }

  &:disabled {
    cursor: default;
    opacity: 0.5;
    background: var(--button-bg-color, #07a3fb);
  }
`;

const DelBtn = styled.button`
  width: 100%;
  height: 100%;
  border-radius: 50px;
  margin-top: 15px;
  width: 100%;
  height: 100%;
  border-width: 3px;
  border-color: #ebd3d3;
  border-style: solid;
  cursor: pointer;
  font-family: "Noto Sans KR", sans-serif;
  font-size: var(--button-font-size, 1.4rem);
  padding: var(--button-padding, 0px 0px);
  border-radius: var(--button-radius, 30px);
  background: var(--button-bg-color, #ffffff);
  color: var(--button-color, #8c4040);
  &:active,
  &:hover,
  &:focus {
    background: var(--button-hover-bg-color, #ebd3d3);
  }

  &:disabled {
    cursor: default;
    opacity: 0.5;
    background: var(--button-bg-color, #07a3fb);
  }
`;
const TextBox = styled.p`
  font-weight: bold;
  margin: 0px auto;
  font-size: 20px;
`;
