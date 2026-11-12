import { useLanguage } from "../../Language";
import { useState } from "react";
import { EXPERIENCE_CONSTANTS } from "./constants";
import "./Experience.css";

export default function Experience() {
  const { t } = useLanguage();
  const [selected, setSelected] = useState(0);
  const exp = EXPERIENCE_CONSTANTS.experiences[selected];
  return <section id="experience" className="experience"><div className="container">
    <h2 className="section-title">{t(EXPERIENCE_CONSTANTS.sectionTitle)}</h2>
    <div className="experience-browser">
      <div className="company-picker" role="group" aria-label={t("Choose a company")}>
        {EXPERIENCE_CONSTANTS.experiences.map((item, index) => <button key={item.company} aria-pressed={selected === index} onClick={() => setSelected(index)}><span>{item.company}</span><span aria-hidden="true">{selected === index ? "→" : "+"}</span></button>)}
      </div>
      <article className="experience-detail" aria-live="polite" aria-atomic="true">
        <div className="experience-heading"><h3 className="company">{exp.company}</h3></div>
        <h4 className="position">{t(exp.position)}</h4><p className="period">{t(exp.period)}</p>
        <ul className="description">{exp.description.map((item) => <li key={item}>{t(item)}</li>)}</ul>
      </article>
    </div>
  </div></section>;
}
