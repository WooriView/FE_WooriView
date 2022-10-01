import { useEffect } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { getAlbumList } from "../../Api/noticeApi";
import NoticeTitle from "../../components/NoticeTitle";
import AlbumList from "./Presentation/AlbumList";

export default function AlbumPageContainer() {
  const { data: albumData } = useQuery("albumLsit", getAlbumList);

  useEffect(() => {
    console.log(albumData);
  });
  return (
    <Container>
      <NoticeTitle title="앨범" />
      <AlbumBox>
        {albumData ?
          albumData.data.map(v => <AlbumList key={v.id} albumData={v} />)
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
