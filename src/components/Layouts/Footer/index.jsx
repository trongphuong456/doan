import * as S from "./styles";
import { CopyrightOutlined } from "@ant-design/icons";
const Footer = () => {
  return (
    <S.FooterWrapper>
      <S.FooterContainer>
        <S.FooterContent>
          <S.TextLabel>Tuan & Phuong</S.TextLabel>
          <S.IconCopyRight>
            <CopyrightOutlined />
            <span style={{ marginLeft: 5, fontSize: 12 }}>2022</span>
          </S.IconCopyRight>
        </S.FooterContent>
        <S.FooterContent>
          <p>ABOUT</p>
          <S.LinkFooter to="/about">About</S.LinkFooter>
          <S.LinkFooter to="/contact">Contact</S.LinkFooter>
          <S.LinkFooter to="/events">Events</S.LinkFooter>
          <S.LinkFooter to="/trivacy">Privacy Policy</S.LinkFooter>
          <S.LinkFooter to="/terms">Terms and Conditions</S.LinkFooter>
          <S.LinkFooter to="/fromus">Why Buy From Us</S.LinkFooter>
        </S.FooterContent>
        <S.FooterContent>
          <p>SUPPORT</p>
          <S.LinkFooter to="/FAQ">FAQ</S.LinkFooter>
          <S.LinkFooter to="/Warranty">Warranty</S.LinkFooter>
          <S.LinkFooter to="/Policy">Return Policy</S.LinkFooter>
          <S.LinkFooter to="/Info">Shipping Info</S.LinkFooter>
        </S.FooterContent>
        <S.FooterContent>
          <p>FOLLOW US</p>
          <S.LinkFooterInfo href="/Instagram">Instagram</S.LinkFooterInfo>
          <S.LinkFooterInfo href="/Facebook">Facebook</S.LinkFooterInfo>
          <S.LinkFooterInfo href="/YouTube">YouTube</S.LinkFooterInfo>
        </S.FooterContent>
        <S.FooterContent>
          <a
            href="https://iviettech.vn/"
            style={{ width: "100%", height: "100%" }}
          >
            <img
              src="https://dsa.org.vn/wp-content/uploads/2017/09/iviettech2.png"
              alt="logo"
              style={{ width: "90%", height: "60%" }}
            />
          </a>
        </S.FooterContent>
      </S.FooterContainer>
    </S.FooterWrapper>
  );
};

export default Footer;
