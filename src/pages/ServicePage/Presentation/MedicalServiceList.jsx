import styled from "styled-components";

export default function MedicalServiceList({ medicalData }) {
  console.log(medicalData);
  const imageUrl = "/image/heart.png";

  return (
    <Container>
      <ImgBox>
        <Image src={imageUrl} />
      </ImgBox>
      <ContentBox>
        <Title>{medicalData.title}</Title>
        <Content>{medicalData.content}</Content>
      </ContentBox>
      <BtnContainer>
        <AddBtnBox>
          <AddBtn />
        </AddBtnBox>
        <DelBtnBox>
          <DelBtn />
        </DelBtnBox>
      </BtnContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;

  padding: 0px;

  margin-top: 60px;
  margin-left: 110px;

  width: 91%;
  height: 140px;
  background-color: yellow;
`;

const ImgBox = styled.div`
  /* flex: 0.7; */
  width: 1000px;
  text-align: left;
`;

const Image = styled.img`
  width: 119px;
  height: 111px;
  object-fit: fill;
  margin-left: 0px;
  line-height: 30px;
  background: #ffffff;
`;

const ContentBox = styled.div`
  /* flex: 2.4; */
  margin-top: 0px;
  width: 4300px;
  height: 100%;
`;

const Title = styled.p`
  word-wrap: break-word;

  font-style: normal;
  font-family: "Inter";
  font-size: 40px;
  font-weight: bold;

  margin: 0px;
  margin-top: 00px;

  height: 40px;
  width: 90%;

  justify-content: center;
`;

const Content = styled.p`
  width: 98%;
  height: 40px;
  font-family: "Inter";
  font-style: normal;
  font-size: 22px;
  margin-top: 0px;
  color: #747474;
  margin: 0px;
  margin-top: 20px;
`;

const BtnContainer = styled.div`
  /* flex: 1.1; */
  width: 100%;
  height: 140px;
  background-color: red;
`;
const AddBtnBox = styled.div`
  width: 100%;
  height: 30px;
`;

const DelBtnBox = styled.div``;

const AddBtn = styled.button`
  width: 100%;
  height: 100%;
`;

const DelBtn = styled.button``;
