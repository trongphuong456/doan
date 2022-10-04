import * as S from "./styles";
import { Image } from "antd";

const ContactPage = () => {
  return (
    <S.ContactPageWrapper>
      <S.ContactPageContainer>
        <Image
          width={800}
          height={500}
          src="https://theoandharris.com/wp-content/uploads/contact-page.jpg"
        />
        <S.ContactPageContent>
          <S.ContactPageTitle>Contact Us</S.ContactPageTitle>
          <S.ContactPageItem>
            <p style={{ fontSize: 23, fontWeight: 700, marginBottom: 0 }}>
              Email
            </p>
            <S.TextListItem>Product Inquiry : info@phuong.com</S.TextListItem>
            <S.TextListItem>
              Shipping & Support : office@phuong.com
            </S.TextListItem>
            <S.TextListItem>
              Technical Support : digital@phuong.com
            </S.TextListItem>
            <S.TextListItem>Advertise : partner@phuong.com</S.TextListItem>
          </S.ContactPageItem>
          <S.ContactPageItem>
            <p style={{ fontSize: 23, fontWeight: 700, marginBottom: 0 }}>
              Social Media
            </p>
            <S.LinkFooter href="/Instagram">Instagram</S.LinkFooter>
            <S.LinkFooter href="/Facebook">Facebook</S.LinkFooter>
            <S.LinkFooter href="/YouTube">YouTube</S.LinkFooter>
          </S.ContactPageItem>
          <S.ContactPageItem>
            <p style={{ fontSize: 23, fontWeight: 700, marginBottom: 0 }}>
              Mailing Address
            </p>
            <S.TextListItem>
              92 Quang Trung, Hai Chau District, City. Da Nang
            </S.TextListItem>
            <S.TextListItem>Phone: 02363 888 279</S.TextListItem>
          </S.ContactPageItem>
        </S.ContactPageContent>
      </S.ContactPageContainer>
    </S.ContactPageWrapper>
  );
};

export default ContactPage;
