import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading.jsx';
import '../../styles/experience.css';

const EXPERIENCES = [
  {
    id: "cosmos-ict-secretary",
    role: "Secretary",
    organization: "Cosmos ICT Club",
    date: "2026 — Present",
    detail:
      "Manage official club documentation and communications, coordinate executive meetings, and support the planning and execution of technical events and club initiatives.",
    highlights: [
      "Club Administration",
      "Team Coordination",
      "Documentation"
    ]
  },
  {
    id: "cosmos-ict-events-head",
    role: "Head of Events",
    organization: "Cosmos ICT Club",
    date: "2025 — 2026",
    detail:
      "Planned and coordinated technical events, workshops, and student activities while collaborating with organizing teams to ensure smooth event execution.",
    highlights: [
      "Event Planning",
      "Event Coordination",
      "Leadership"
    ]
  },
  {
    id: "bal-club-secretary",
    role: "Secretary",
    organization: "Bal Club",
    date: "2018 — 2021",
    detail:
      "Served as Secretary of the Bal Club, coordinated club activities, completed leadership training through AFIC, and helped organize community awareness programs and school events.",
    highlights: [
      "Club Coordination",
      "Community Outreach",
      "Awareness Programs"
    ]
  }
];

const parseExpDate = (dateStr) => {
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

function Experience() {
  const sortedExperiences = [...EXPERIENCES].sort((a, b) => {
    const dateA = parseExpDate(a.date);
    const dateB = parseExpDate(b.date);

    if (dateB.endYear !== dateA.endYear) {
      return dateB.endYear - dateA.endYear;
    }
    return dateB.startYear - dateA.startYear;
  });

  return (
    <section id="experience" className="experience" aria-label="Leadership & Experience">
      <div className="container">
        <SectionHeading eyebrow="Positions of responsibility" title="Leadership & Experience" />

        <ol className="experience__timeline">
          {sortedExperiences.map((item, index) => (
            <motion.li
              key={item.id}
              className="experience__item"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{
                type: 'spring',
                stiffness: 90,
                damping: 16,
                delay: index * 0.05,
              }}
            >
              <span className="experience__node" aria-hidden="true" />
              <div className="experience__card">
                <span className="experience__date">{item.date}</span>
                <h3 className="experience__role">{item.role}</h3>
                <h4 className="experience__org">{item.organization}</h4>
                <p className="experience__detail">{item.detail}</p>
                {item.highlights && item.highlights.length > 0 && (
                  <div className="experience__highlights">
                    {item.highlights.map((highlight) => (
                      <span key={highlight} className="experience__tag">
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

export default Experience;