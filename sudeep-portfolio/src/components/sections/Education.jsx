import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading.jsx";
import "../../styles/education.css";

const EDUCATION = [
  {
    id: "bachelors",
    institution: "Cosmos College of Management and Technology",
    degree: "Bachelor of Engineering in Computer Engineering",
    subtitle: "Affiliated to Pokhara University",
    date: "2023 — Present",
    detail:
      "Pursuing a Bachelor’s degree in Computer Engineering while actively contributing to technical communities and strengthening my foundation in computer engineering.",
    highlights: [
      "Secretary, Cosmos ICT Club",
      "Head of Events, Cosmos ICT Club",
      "Technical Events",
    ],
  },

  {
    id: "higher-secondary",
    institution: "Kathmandu Model Secondary School",
    degree: "Higher Secondary Education (Science)",
    date: "2021 — 2023",
    detail:
      "Completed higher secondary education with a Science major while participating in academic programs, technical workshops, and student activities.",
    highlights: [
      "Academic Programs",
      "Technical Workshops",
      "Student Activities",
    ],
  },

  {
    id: "secondary",
    institution: "Shree Bhairab Secondary School",
    degree: "Secondary Education",
    date: "2011 — 2021",
    detail:
      "Developed leadership, communication, and teamwork through active participation in student organizations alongside my academic studies.",
    highlights: ["Secretary, Bal Club", "AFIC (Adolescent-focused initiative) Member", "Event Coordination", "Training & Awareness Programs"],
  },
];

const parseEduDate = (dateStr) => {
  const normalized = dateStr.replace(/[\u2012\u2013\u2014-]/g, "-").trim();
  const parts = normalized.split("-").map((p) => p.trim());
  const startStr = parts[0];
  const endStr = parts[1] || parts[0];

  const getYearValue = (str) => {
    if (!str) return 0;
    const lower = str.toLowerCase();
    if (lower === "present" || lower === "current") {
      return 9999;
    }
    return parseInt(str, 10) || 0;
  };

  return {
    startYear: getYearValue(startStr),
    endYear: getYearValue(endStr),
  };
};

function Education() {
  const sortedEducation = [...EDUCATION].sort((a, b) => {
    const dateA = parseEduDate(a.date);
    const dateB = parseEduDate(b.date);

    if (dateB.endYear !== dateA.endYear) {
      return dateB.endYear - dateA.endYear;
    }
    return dateB.startYear - dateA.startYear;
  });

  return (
    <section id="education" className="education" aria-label="Education">
      <div className="container">
        <SectionHeading eyebrow="Academic background" title="Education" />

        <ol className="education__timeline">
          {sortedEducation.map((item, index) => (
            <motion.li
              key={item.id}
              className="education__item"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{
                type: "spring",
                stiffness: 90,
                damping: 16,
                delay: index * 0.05,
              }}
            >
              <span className="education__node" aria-hidden="true" />
              <div className="education__card">
                <p className="education__date">{item.date}</p>
                <h3 className="education__institution">{item.institution}</h3>
                {item.subtitle && (
                  <p className="education__subtitle">{item.subtitle}</p>
                )}
                <p className="education__degree">{item.degree}</p>
                <p className="education__detail">{item.detail}</p>
                {item.highlights && item.highlights.length > 0 && (
                  <div className="education__highlights">
                    {item.highlights.map((highlight) => (
                      <span key={highlight} className="education__tag">
                        {highlight}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Education;
