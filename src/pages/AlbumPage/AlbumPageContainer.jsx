import styled from "styled-components";
import NoticeTitle from "../../components/NoticeTitle";
import AlbumList from "./Presentation/AlbumList";

const mockData = [
  {
    id: 1,
    title: "제목입니다",
    imgUrl: "https://cdn.pixabay.com/photo/2022/09/21/05/39/birds-7469509_960_720.jpg",
    date: "2020.09.20",
    views: 100,
  },
  {
    id: 2,
    title: "제목입니다2",
    imgUrl: "https://cdn.pixabay.com/photo/2022/09/21/05/39/birds-7469509_960_720.jpg",
    date: "2020.09.22",
    views: 200,
  },
  {
    id: 3,
    title: "제목입니다3",
    imgUrl: "https://cdn.pixabay.com/photo/2022/09/21/05/39/birds-7469509_960_720.jpg",
    date: "2020.09.23",
    views: 300,
  },
  {
    id: 4,
    title: "제목입니다",
    imgUrl: "https://cdn.pixabay.com/photo/2022/09/21/05/39/birds-7469509_960_720.jpg",
    date: "2020.09.20",
    views: 100,
  },
  {
    id: 5,
    title: "제목입니다2",
    imgUrl: "https://cdn.pixabay.com/photo/2022/09/21/05/39/birds-7469509_960_720.jpg",
    date: "2020.09.22",
    views: 200,
  },
  {
    id: 6,
    title: "제목입니다3",
    imgUrl: "https://cdn.pixabay.com/photo/2022/09/21/05/39/birds-7469509_960_720.jpg",
    date: "2020.09.23",
    views: 300,
  },
  {
    id: 7,
    title: "제목입니다",
    imgUrl: "https://cdn.pixabay.com/photo/2022/09/21/05/39/birds-7469509_960_720.jpg",
    date: "2020.09.20",
    views: 100,
  },
  {
    id: 8,
    title: "제목입니다2",
    imgUrl: "https://cdn.pixabay.com/photo/2022/09/21/05/39/birds-7469509_960_720.jpg",
    date: "2020.09.22",
    views: 200,
  },
  {
    id: 9,
    title: "제목입니다3",
    imgUrl: "https://cdn.pixabay.com/photo/2022/09/21/05/39/birds-7469509_960_720.jpg",
    date: "2020.09.23",
    views: 300,
  },
];

export default function AlbumPageContainer() {
  return (
    <Container>
      <NoticeTitle title="앨범" />
      <AlbumBox>
        {mockData.map((v) => <AlbumList key={v.id} albumData={v} />)}
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
