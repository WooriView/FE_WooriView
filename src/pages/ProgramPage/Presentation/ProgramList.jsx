import styled from "styled-components";

export default function AlbumList({ albumData }) {
  return (
    <Container>
      <AlbumImage src={albumData.imgUrl} alt="앨범이미지" />
      <AlbumTitle>{albumData.title}sdgfdsfsdf dsfsdfsdfsdfsdf</AlbumTitle>
      <AlbumDate>{albumData.date} · 조회 {albumData.views}</AlbumDate>
    </Container>
  );
}

const Container = styled.article`
  max-width: 315px;
  display: flex;
  flex-direction: column;
`;

const AlbumImage = styled.img`
  object-fit: fill;
  box-sizing: border-box;

  background: #FFFFFF;
  border: 1px solid #A3A3A3;
  border-radius: 20px;

`;

const AlbumTitle = styled.p`
  width: 100%;
    /* 제목제목제목제목이 길어도 2줄이 되어도 괜찮아요 */
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  display: flex;
  text-align: center;
  justify-content: center;
  margin: 0px;
  margin-top: 8px;
  
`;

const AlbumDate = styled.p`

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  text-align: center;

  color: #747474;
  margin: 0px;
  margin-top: 8px;


`;
