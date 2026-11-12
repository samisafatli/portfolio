import { LanguageProvider, useLanguage } from "./Language";
import { useEffect, useState, type KeyboardEvent } from "react";
import { HelmetProvider } from "react-helmet-async";
import SEO from "./components/SEO";
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Education from "./components/Education";
import "./App.css";

import "./Retro.css";

const tabs = [
  { id: "experience", label: "Work experience", component: Experience },
  { id: "skills", label: "Technologies", component: Skills },
  { id: "education", label: "Studies", component: Education },
  { id: "about", label: "About & Contact", component: About },
] as const;

function Portfolio() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>("experience");
  const [contactRequest, setContactRequest] = useState(0);
  useEffect(() => {
    if (contactRequest > 0 && activeTab === "about") {
      document.getElementById("contact-email")?.focus();
    }
  }, [contactRequest, activeTab]);
  const selected = tabs.find((tab) => tab.id === activeTab) ?? tabs[0];
  const Content = selected.component;
  function selectTab(id: string) {
    setActiveTab(id === "contact" ? "about" : id);
    if (id === "contact") setContactRequest((request) => request + 1);
  }
  function handleKey(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % tabs.length;
    else if (event.key === "ArrowLeft") next = (index - 1 + tabs.length) % tabs.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = tabs.length - 1;
    else return;
    event.preventDefault();
    selectTab(tabs[next].id);
    document.getElementById(`tab-${tabs[next].id}`)?.focus();
  }
  return <HelmetProvider><div className="App">
    <SEO />
    <Header onNavigate={selectTab} />
    <main id="portfolio" className="portfolio-area container">
      <div className="portfolio-tabs" role="tablist" aria-label={t("Explore my background")}>
        {tabs.map((tab, index) => <button key={tab.id} id={`tab-${tab.id}`} role="tab" aria-selected={activeTab === tab.id} aria-controls="portfolio-panel" tabIndex={activeTab === tab.id ? 0 : -1} onClick={() => selectTab(tab.id)} onKeyDown={(event) => handleKey(event, index)}><span className="tab-number">0{index + 1}</span>{t(tab.label)}</button>)}
      </div>
      <div id="portfolio-panel" role="tabpanel" aria-labelledby={`tab-${selected.id}`} tabIndex={0} className="portfolio-panel"><Content /></div>
    </main>
    <footer className="studio-footer"><span>SAMI SAFATLI © {new Date().getFullYear()}</span><span>{t("Built with care. One pixel at a time.")}</span><a href="#top">{t("Back to top ↑")}</a></footer>
  </div></HelmetProvider>;
}
export default function App() {
  return <LanguageProvider><Portfolio /></LanguageProvider>;
}
