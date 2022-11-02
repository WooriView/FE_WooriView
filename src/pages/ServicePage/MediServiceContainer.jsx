import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { getServiceList } from "../../Api/serviceApi";
import ServiceTitle from "../../components/ServiceTitle";
import MedicalServiceList from "./Presentation/MedicalServiceList";
import AddServiceTxtArea from "./Presentation/AddServiceTxtArea";

export default function MediServiceContainer() {
  const { data: medicalData } = useQuery("serviceList", getServiceList);

  const [hideTxtBox, setTxtBox] = useState(false);

  useEffect(() => {
    console.log(medicalData);
  });
  return (
    <Container>
      <ServiceTitle title="간호 / 의료서비스" />
      {!hideTxtBox ? (
        <ButtonBox>
          <AddButton
            onClick={() => {
              setTxtBox(!hideTxtBox);
            }}
          >
            <TextBox>수정</TextBox>
          </AddButton>
        </ButtonBox>
      ) : (
        <AddServiceTxtArea key={hideTxtBox} />
      )}

      {medicalData
        ? medicalData.data.map(v => (
            <MedicalServiceList key={v.id} medicalData={v} />
          ))
        : "로딩중"}
    </Container>
  );
}

const Container = styled.div`
  max-width: 1040px;
  margin: 0px auto;
`;

// const Content = styled.div`
//   margin-left: 0px;
//   width: 100%;
//   display: block;
// `;

// 추가 버튼
const TextBox = styled.p`
  font-weight: bold;
  margin: 0px auto;
`;

// 추가하기 버튼
// const ComplTxtBox = styled.p`
//   font-weight: bold;
//   margin: 0px auto;
// `;

const ButtonBox = styled.div`
  margin-left: 100px;

  padding-top: 20px;

  width: 78%;
  height: 80px;

  text-align: right;
`;

const AddButton = styled.button`
  width: 140px;
  height: 60px;
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
