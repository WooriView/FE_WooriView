import { useEffect } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { getAlbumList } from "../../Api/noticeApi";
import NoticeTitle from "../../components/NoticeTitle";
import AlbumList from "./Presentation/AlbumList";
import AlbumSearchBox from "./Presentation/AlbumSearchBox";

export default function AlbumPageContainer() {
  const { data: albumData } = useQuery("albumLsit", getAlbumList);

  useEffect(() => {
    console.log(albumData);
  });
  return (
    <Container>
      <NoticeTitle title="앨범" />
      <AlbumSearchBox />
      <AlbumBtnBox>
        <AlbumAddBtn type="button">글쓰기</AlbumAddBtn>
      </AlbumBtnBox>
      <AlbumBox>
        {albumData
          ? albumData.data.map(v => <AlbumList key={v.id} albumData={v} />)
          : "로딩중"}
      </AlbumBox>
    </Container>
  );
}

const Container = styled.div`
  max-width: 1440px;
  margin: 0px auto;
`;

const AlbumBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 190px;
  gap: 58px;
  row-gap: 88px;
`;

const AlbumBtnBox = styled.div`
  display: flex;
  justify-content: right;
  margin: 0px 190px;
  margin-bottom: 31px;
`;
const AlbumAddBtn = styled.button`
  width: 140px;
  height: 60px;
  border: 2px solid #d3e0eb;
  border-radius: 30px;
  background-color: #c6e2f2;
  cursor: pointer;
  font-family: Inter;
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
  color: #405f8c;
`;
