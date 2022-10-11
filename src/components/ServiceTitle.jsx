import styled from "styled-components";

export default function ServiceTitle({ title }) {
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
  padding-top: 0px;
`;

const Title = styled.h1`
  margin-top: 0px;
  padding-top: 10px;
  background-color: #d97f6b;

  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 58px;
  width: 70%;
  height: 70px;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  /* display: flex; */
  /* align-items: center; */
  text-align: center;

  color: #ffffff;
`;
