import styled from "styled-components";

export default function Header() {
  return (
    <Container>
      <HeaderContainer>
        <HeaderTop>
          <HeaderLogo src="/image/Logo.svg" alt="logo" />
          <HeaderMenuBox>
            <HeaderMenu>서비스</HeaderMenu>
            <HeaderMenu>기관 소개</HeaderMenu>
            <HeaderMenu>알림</HeaderMenu>
            <HeaderMenu>입소 안내</HeaderMenu>
          </HeaderMenuBox>
        </HeaderTop>
      </HeaderContainer>
      <HeaderBottom>
        <HeaderBottomText>
          현재 4명의 어르신을 모시고 있습니다. 앞으로 5명의 어르신을 더 모실 수
          있습니다.
        </HeaderBottomText>
      </HeaderBottom>
    </Container>
  );
}

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1440px;
  margin: 0 auto;
`;
const Container = styled.head`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;
const HeaderMenuBox = styled.div`
  display: flex;
  margin-left: 70px;
  width: 720px;
  justify-content: space-between;
`;
const HeaderMenu = styled.div`
  /* 서비스 */
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  /* identical to box height */
  display: flex;
  align-items: center;

  color: #000000;
`;
const HeaderTop = styled.div`
  display: flex;
`;
const HeaderBottom = styled.div`
  display: flex;
  background-color: #e2f1ff;
  justify-content: center;
  align-items: center;
  height: 52px;
  width: 100%;
`;
const HeaderBottomText = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #000000;
`;
const HeaderLogo = styled.img`
  margin-left: 105px;
  margin-top: 39;
  width: 168px;
  height: 143px;
`;
