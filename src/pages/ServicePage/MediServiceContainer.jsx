import { useEffect } from "react";
// import { useQuery } from "react-query";
import styled from "styled-components";
import NoticeTitle from "../../components/NoticeTitle";

export default function MediServiceContainer() {
  //   const { data: mediServiceData } = useQuery("mediService", getMediService);

  useEffect(() => {
    // console.log(mediServiceData);
  });

  return (
    <Container>
      <NoticeTitle title="의료" />
    </Container>
  );
}

const Container = styled.div`
  max-width: 1440px;
  margin: 0px auto;
`;
