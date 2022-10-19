import styled from "styled-components";

export default function MedicalServiceList({ medicalData }) {
  console.log(medicalData);
  const imageUrl = "/image/heart.png";

  return (
    <ImageBox>
      <Image src={imageUrl} />
    </ImageBox>
  );
}

const ImageBox = styled.div`
  width: 10px;
  height: 100%;
  display: flex;
  background-color: blue;
`;

const Image = styled.image`
  margin-left: 0px;
  line-height: 30px;
  width: 90%;
  height: 90%;
  background-color: yellow;
`;
