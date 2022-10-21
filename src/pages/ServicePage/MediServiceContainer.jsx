import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { getServiceList } from "../../Api/serviceApi";
import ServiceTitle from "../../components/ServiceTitle";
import MedicalServiceList from "./Presentation/MedicalServiceList";

export default function MediServiceContainer() {
  const { data: medicalData } = useQuery("serviceList", getServiceList);

  const [hideTxtBox, setTxtBox] = useState(false);

  useEffect(() => {
    console.log(medicalData);
  });
  return (
    <Container>
      <ServiceTitle title="간호 / 의료서비스" />
      {!hideTxtBox ? <TitleTxtBox /> : <> </>}
      {!hideTxtBox ? (
        <ContentDivBox>
          <ContentTxtBox />
          <ButtonBox>
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
          </ButtonBox>
        </ContentDivBox>
      ) : (
        <> </>
      )}
      {hideTxtBox ? (
        <AddButton
          onClick={() => {
            setTxtBox(!hideTxtBox);
          }}
        >
          <TextBox>추가</TextBox>
        </AddButton>
      ) : (
        <> </>
      )}
      <Content>
        {medicalData
          ? medicalData.data.map(v => (
              <MedicalServiceList key={v.id} medicalData={v} />
            ))
          : "로딩중"}
      </Content>
    </Container>
  );
}

const Container = styled.div`
  max-width: 1040px;
  margin: 0px auto;
  background-color: red;
`;

const Content = styled.div`
  margin-left: 100px;
  width: 100%;
  display: block;
`;

const ButtonBox = styled.section`
  margin-left: 100px;
  max-width: 1240px;
  height: 100px;
  text-align: right;
  padding-top: 30px;
`;

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

const AddButton = styled.button`
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

// 서비스 추가 텍스트인풋 박스
const TitleTxtBox = styled.textarea`
  margin-left: 100px;

  width: 70%;
  height: 70px;

  border-radius: 20px;
  border: 1.8px solid #d9d9d9;
`;

const ContentDivBox = styled.div`
  display: flex;

  padding: 0px;
  width: 100%;
  height: 120px;
  background-color: yellow;
`;

const ContentTxtBox = styled.textarea`
  margin-left: 100px;

  width: 70%;
  height: 100px;

  border-radius: 20px;
  border: 1.8px solid #d9d9d9;
`;
