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
        <AddServiceBox>
          <AddServiceTxtArea />
          <ServeButtonBox>
            <ServeAddButton
              onClick={() => {
                setTxtBox(!hideTxtBox);
              }}
            >
              <ServeTextBox>
                서비스
                <br />
                추가
              </ServeTextBox>
            </ServeAddButton>
          </ServeButtonBox>
        </AddServiceBox>
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

const AddServiceBox = styled.div`
  display: flex;
  margin-left: 110px;
  padding: 0px;
  width: 90%;
  height: 220px;
  border-style: solid;
  border-width: 0px;
  border-bottom-width: 1px;
`;

// 추가 버튼
const TextBox = styled.p`
  font-weight: bold;
  margin: 0px auto;
`;

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

// 버튼을 감싼 div
const ServeButtonBox = styled.div`
  flex: 0.5;
  padding-top: 90px;
`;

// 추가버튼
const ServeAddButton = styled.button`
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
const ServeTextBox = styled.p`
  font-weight: bold;
  margin: 0px auto;
`;
