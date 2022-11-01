/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable import/order */
import { useState, useRef } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { getAlbumList } from "../../Api/noticeApi";
import NoticeTitle from "../../components/NoticeTitle";
import AlbumList from "./Presentation/ProgramList";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import WeekPicker from "../../components/WeekPicker";

export default function AlbumPageContainer() {
  const { data: albumData } = useQuery("albumLsit", getAlbumList);
  const [isTime, setIsTime] = useState(true);

  const ref = useRef();
  // useEffect(() => {
  //   console.log(albumData);
  // });

  return (
    <Container>
      <NoticeTitle title="앨범" />

      <ProgramBtnBox
        onClick={() => {
          if (isTime) {
            setIsTime(false);
            ref.current.style = "left:171px";
          } else {
            setIsTime(true);
            ref.current.style = "left:-1px";
          }
        }}
      >
        <ProgramAddBtn ref={ref} />
        <CategoryLeft isTime={isTime}>소개</CategoryLeft>
        <CategoryRight isTime={isTime}>시간표</CategoryRight>
      </ProgramBtnBox>
      {isTime ? (
        <ProgramBox>
          {albumData
            ? albumData.data.map(v => <AlbumList key={v.id} albumData={v} />)
            : "로딩중"}
        </ProgramBox>
      ) : (
        <CalendarBox>
          <WeekPicker />
        </CalendarBox>
      )}
    </Container>
  );
}

const Container = styled.div`
  max-width: 1440px;
  margin: 0px auto;
`;

const ProgramBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 190px;
  gap: 58px;
  row-gap: 88px;
`;

const ProgramBtnBox = styled.div`
  display: flex;
  position: relative;
  justify-content: space-around;
  cursor: pointer;
  margin: 0px auto;
  margin-bottom: 31px;
  width: 350px;
  height: 60px;
  border: 2px solid #f8f8f8;
  border-radius: 30px;
  background-color: #ffffff;
`;
const ProgramAddBtn = styled.div`
  position: absolute;
  left: 0px;
  width: 180px;
  height: 60px;
  cursor: pointer;
  font-family: Inter;
  border-radius: 30px;
  border: 2px solid #d3e0eb;
  background-color: #c6e2f2;
  box-sizing: border-box;
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
  color: #405f8c;
  transition-property: "left";
  transition-duration: 1s;
  transition-delay: 0.1s;
`;
const CalendarBox = styled.div`
  margin: auto;
  height: 500px;
  max-width: 1200px;
`;

const CategoryRight = styled.p`
  display: flex;
  position: relative;
  justify-content: center;
  margin-top: 15px;
  width: 180px;
  font-size: 20px;
  z-index: 1;
  color: ${props => (!props.isTime ? "#405F8C" : "#747474")};
  cursor: pointer;
  font-weight: 700;
`;
const CategoryLeft = styled.p`
  display: flex;
  position: relative;
  justify-content: center;
  width: 180px;
  margin-top: 15px;
  font-size: 20px;
  z-index: 1;
  color: ${props => (props.isTime ? "#405F8C" : "#747474")};
  cursor: pointer;
  font-weight: 700;
`;
