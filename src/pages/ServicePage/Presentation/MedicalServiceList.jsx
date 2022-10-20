import styled from "styled-components";

export default function MedicalServiceList({ medicalData }) {
  console.log(medicalData);
  const imageUrl = "/image/heart.png";

  return (
    <Container>
      <Image src={imageUrl} />
      <ContentBox>
        <Title>{medicalData.title}</Title>
        <Content>{medicalData.content}</Content>
      </ContentBox>
    </Container>
  );
}

const Container = styled.article`
  max-width: 100%;
  margin-top: 40px;
  margin-bottom: 90px;
  display: flex;
`;

const Image = styled.img`
  width: 130px;
  height: 110px;
  object-fit: fill;
  margin-left: 10px;
  margin-right: 40px;
  line-height: 30px;
  background: #ffffff;
`;

const ContentBox = styled.div`
  margin-top: 4px;
  width: 100%;
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
  width: 100%;

  justify-content: center;
`;

const Content = styled.p`
  width: 100%;
  height: 40px;
  font-family: "Inter";
  font-style: normal;
  font-size: 22px;
  margin-top: 0px;
  color: #747474;
  margin: 0px;
  margin-top: 20px;
`;
