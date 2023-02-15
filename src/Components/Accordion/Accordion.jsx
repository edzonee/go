import { ExpandebleColumn } from "./ExpandebleColumn";
import TextSection from "./TextSection";

const Accordion = ({ section, key }) => {
  return (
    <div className="accordion-container">
      <ExpandebleColumn />
      <TextSection />
    </div>
  );
};

export default Accordion;
