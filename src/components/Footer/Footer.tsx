import { Container } from "./styles";
import reactIcon from "../../assets/react-icon.svg";
import linkedin from "../../assets/linkedin.svg";
import githubIcon from "../../assets/github.svg";
import whatsapp from "../../assets/whatsapp.svg";
import telegram from "../../assets/telegram.svg";
import instagramIcon from "../../assets/instagram.svg";

export function Footer() {
  return (
    <Container className="footer">
      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/moiz-kapasi-7aa27917b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B7tmGjTq1Qiahh6uo2PF8cA%3D%3D"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="Linkedin" />
        </a>
        <a
          href="https://github.com/MoizKapasi"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=%2B916355894754&text=Hello+Moiz"
          target="_blank"
          rel="noreferrer"
        >
          <img src={whatsapp} alt="Whatsapp" />
        </a>
        <a href="https://t.me/moizkapasi28" target="_blank" rel="noreferrer">
          <img src={telegram} alt="telegram" />
        </a>
        <a
          href="https://www.instagram.com/_ig_mz_28/profilecard/?igsh=eHNtODh6bHJxZGsy"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a>
      </div>
    </Container>
  );
}
