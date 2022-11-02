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
    </Container>
  );
}

const Container = styled.div`
  display: flex;

  padding: 0px;

  margin-top: 60px;

  width: 100%;
  height: 140px;
`;

const ImgBox = styled.div`
  flex: 1;
  text-align: right;
`;

const Image = styled.img`
  width: 119px;
  height: 111px;
  object-fit: fill;
  margin-left: 10px;
  line-height: 30px;
  background: #ffffff;
`;

const ContentBox = styled.div`
  flex: 3.5;
  margin-top: 0px;
  /* width: 80%; */
  height: 100%;
`;

const Title = styled.p`
  word-wrap: break-word;

  font-style: normal;
  font-family: "Inter";
  font-size: 40px;
  font-weight: bold;

  margin: 30px;
  margin-top: 00px;

  height: 40px;
  width: 90%;

  justify-content: center;
`;

const Content = styled.p`
  width: 80%;
  height: 40px;
  font-family: "Inter";
  font-style: normal;
  font-size: 22px;
  margin-top: 0px;
  color: #747474;
  margin: 30px;
  margin-top: 20px;
`;
