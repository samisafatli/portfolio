import { useLanguage } from "../../Language";


import './Header.css';

function PixelStudio() {
  const { t } = useLanguage();
  return <div className="studio-window"><div className="window-bar"><span>■ □ □</span><span>somewhere-in-brazil.room</span><span>↗</span></div>
    <svg viewBox="0 0 300 200" role="img" aria-label={t("Pixel art of a cozy developer studio with computer, books, plants and a sunset")} shapeRendering="crispEdges">
<defs><pattern id="floor" width="40" height="14" patternUnits="userSpaceOnUse"><rect width="40" height="14" fill="#cfaf83"/><path d="M0 0H40M0 0V14" stroke="#b39473"/></pattern></defs>
<rect width="300" height="200" fill="#e6ddbf"/><rect y="154" width="300" height="46" fill="url(#floor)"/><path d="M0 151H300V155H0" fill="#71664e"/>
<rect x="132" y="15" width="83" height="83" fill="#655c48"/><rect x="136" y="19" width="75" height="75" fill="#f2c58d"/><path d="M136 68H150V60H164V67H177V55H190V64H211V94H136" fill="#a7ad80"/><path d="M136 79H151V73H169V81H183V69H196V75H211V94H136" fill="#6e8060"/><rect x="184" y="33" width="12" height="12" fill="#fff1be"/><path d="M172 19H176V94H172M136 53H211V57H136" fill="#655c48"/><rect x="128" y="95" width="91" height="5" fill="#897153"/>
<rect x="20" y="35" width="79" height="5" fill="#887151"/><rect x="26" y="20" width="8" height="15" fill="#bd704e"/><rect x="35" y="16" width="6" height="19" fill="#6e8060"/><rect x="42" y="19" width="7" height="16" fill="#d3aa62"/><rect x="51" y="23" width="14" height="12" fill="#a69b7a"/><rect x="78" y="26" width="12" height="9" fill="#bd704e"/><path d="M82 26V12H87V26M78 18H82V23H74V14H78M87 19V14H93V19" fill="#637b4b"/>

<rect x="30" y="119" width="169" height="7" fill="#5c5142"/><rect x="34" y="126" width="6" height="47" fill="#756148"/><rect x="187" y="126" width="6" height="47" fill="#756148"/><rect x="59" y="72" width="65" height="44" fill="#544e40"/><rect x="63" y="76" width="57" height="35" fill="#a3b18a"/><path d="M69 84H75M78 84H103M69 92H91M78 99H111" stroke="#3f5846" strokeWidth="2"/><rect className="screen-cursor" x="95" y="91" width="4" height="3" fill="#3f5846"/><rect x="85" y="116" width="12" height="3" fill="#544e40"/><rect x="77" y="118" width="28" height="2" fill="#544e40"/>
<path d="M67 128H118V135H67" fill="#efe8cd"/><path d="M72 130H112" stroke="#9c947b" strokeWidth="2"/><rect x="136" y="106" width="12" height="13" fill="#bc704f"/><path d="M148 108H152V115H148" fill="none" stroke="#bc704f" strokeWidth="2"/><rect x="157" y="113" width="24" height="6" fill="#6f7a57"/><rect x="160" y="108" width="22" height="5" fill="#d3aa62"/>
<rect x="90" y="140" width="34" height="27" fill="#697557"/><rect x="94" y="136" width="26" height="5" fill="#697557"/><rect x="87" y="164" width="40" height="6" fill="#4d5d46"/><rect x="105" y="170" width="5" height="18" fill="#554e40"/><rect x="93" y="187" width="29" height="4" fill="#554e40"/>
<rect x="210" y="142" width="19" height="26" fill="#b77554"/><rect x="207" y="138" width="25" height="5" fill="#ce8b62"/><path d="M217 138V103H222V138M217 120H208V115H203V105H208V111H217M222 125H230V119H235V108H230V115H222" fill="#60784c"/>
</svg></div>;
}
export default function Header({ onNavigate }: { onNavigate?: (id: string) => void }) {
  const { t, language, setLanguage } = useLanguage();
  return <header id="top" className="header"><a className="skip-link" href="#portfolio" onClick={() => onNavigate?.("experience")}>{t("Skip to content")}</a>
    <nav className="studio-nav container" aria-label={t("Main navigation")}><a className="studio-brand" href="#top"><span className="brand-pixel">S.</span> sami safatli<span className="brand-suffix"> / {language === "pt" ? "desenvolvedor" : "developer"}</span></a><div className="nav-links"><a href="#portfolio" onClick={() => onNavigate?.("experience")}>{t("Work")}</a><a href="#portfolio" onClick={() => onNavigate?.("about")}>{t("About")}</a><a href="#portfolio" onClick={() => onNavigate?.("skills")}>{t("Toolkit")}</a><a className="nav-contact" href="#portfolio" onClick={() => onNavigate?.("contact")}>{t("Say hello ↗")}</a></div><div className="language-switch" role="group" aria-label={language === "pt" ? "Idioma" : "Language"}><button type="button" lang="en" aria-pressed={language === "en"} onClick={() => setLanguage("en")}>EN</button><button type="button" lang="pt-BR" aria-pressed={language === "pt"} onClick={() => setLanguage("pt")}>PT</button></div></nav>
    <div className="container hero-layout"><div className="hero-copy"><p className="hero-eyebrow">✦ {t("SOFTWARE ENGINEER · BRAZIL")}</p><h1 className="name">{t("Thoughtful code.")}<br/>{t("Real-world")} <span>{t("impact.")}</span></h1><p className="hero-intro">{t("Hi, I'm")} <strong>Sami.</strong> {t("I build web & mobile experiences that make everyday life a little better.")}</p><p className="hero-detail">{t("7+ years using technology as a tool to solve real-world problems.")}</p><div className="cta-buttons"><a href="#portfolio" onClick={() => onNavigate?.("experience")} className="btn btn-primary">{t("Explore my work ↓")}</a><a href="#portfolio" onClick={() => onNavigate?.("contact")} className="btn btn-secondary">{t("Let's talk ↗")}</a></div><div className="hero-note"><span className="status-dot"/> {t("Currently building at Zé Delivery")}</div></div><PixelStudio/></div>
    <div className="company-strip container">
      <span>{t("A FEW STOPS ON MY JOURNEY")}</span>
      <div className="company-marquee" role="img" aria-label={t("Career journey: PayPal, Globo, YDUQS and Zé Delivery")}>
        <div className="company-track" aria-hidden="true">
          {[0, 1].map((copy) => <div className="company-group" key={copy}><span>PayPal</span><span>Globo</span><span>YDUQS</span><span>Zé Delivery</span></div>)}
        </div>
      </div>
      <a href="#portfolio" onClick={() => onNavigate?.("experience")}>{t("Keep exploring ↓")}</a>
    </div>
  </header>;
}
