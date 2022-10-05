import styled from "styled-components";

export default function NoticeTitle({ title }) {
  return (
    <TitleSection>
      <Title>{title}</Title>
    </TitleSection>
  );
}

const TitleSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 220px;
  
`;

const Title = styled.h1`
  height: 120px;
  margin: 50px 0px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 58px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #000000;


`;
