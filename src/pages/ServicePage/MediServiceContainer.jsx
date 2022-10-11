import { useEffect } from "react";
// import { useQuery } from "react-query";
import styled from "styled-components";
import ServiceTitle from "../../components/ServiceTitle";

export default function MediServiceContainer() {
  //   const { data: mediServiceData } = useQuery("mediService", getMediService);

  useEffect(() => {
    // console.log(mediServiceData);
  });

  return (
    <Container>
      <ServiceTitle title="간호 / 의료서비스" />
      <ButtonBox>
        <AddButton title="추가" />
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

const AddButton = styled.button`
  width: 180px;
  height: 60px;
  border-radius: 30px;
  border-width: 0px;
  background-color: #c6e2f2;
`;
