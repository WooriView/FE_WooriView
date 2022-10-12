import { useEffect } from "react";
// import { useQuery } from "react-query";
import styled from "styled-components";
import ServiceTitle from "../../components/ServiceTitle";
// import { getServiceList } from "../../Api/serviceApi";
// import MedicalServiceList from "./Presentation/MedicalServiceList";

export default function MediServiceContainer() {
  //   const { data: medicalData } = useQuery("mediService", getServiceList);

  useEffect(() => {
    // console.log(mediServiceData);
  });
  return (
    <Container>
      <ServiceTitle title="간호 / 의료서비스" />
      <ButtonBox>
        <AddButton>
          <TextBox>추가/수정</TextBox>
        </AddButton>
      </ButtonBox>
    </Container>
  );
}

const Container = styled.div`
  max-width: 1440px;
  margin: 0px auto;
`;

const ButtonBox = styled.section`
  margin-left: 100px;
  max-width: 1240px;
  height: 100px;
  text-align: right;
  padding-top: 30px;
`;

const TextBox = styled.p`
  font-weight: bold;
  margin: 0px auto;
`;

const AddButton = styled.button`
  width: 130px;
  height: 60px;
  border: none;
  cursor: pointer;
  font-family: "Noto Sans KR", sans-serif;
  font-size: var(--button-font-size, 1.4rem);
  padding: var(--button-padding, 0px 0px);
  border-radius: var(--button-radius, 30px);
  background: var(--button-bg-color, #c6e2f2);
  color: var(--button-color, #ffffff);
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
