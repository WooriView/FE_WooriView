import styled from "styled-components";

export default function MedicalServiceList({ medicalData }) {
  return (
    <Container>
      <p>{medicalData.title}</p>
    </Container>
  );
}

const Container = styled.article`
  max-width: 315px;
  display: flex;
  flex-direction: column;
`;
