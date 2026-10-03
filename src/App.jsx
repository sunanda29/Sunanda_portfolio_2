import { useState } from "react";
import "./App.css";

const hardSkills = [
  "Product Strategy & Roadmapping",
  "Data Analysis & Market Research",
  "Product Lifecycle Management",
  "Technical Aptitude",
  "Agile & Project Management",
  "UX & Customer-Centric Design",
  "Data Science & Quantitative Analytics",
  "Financial & Business Acumen"
];

const softSkills = [
  "Leadership & Team Management",
  "Communication & Storytelling",
  "Strategic Thinking",
  "Cross-Functional Collaboration",
  "Adaptability & Problem-Solving",
  "Customer Advocacy"
];

const knowledgeBase = {
  "Product Strategy & Roadmapping": {
    answer:
      "Led roadmap development and product strategy across Enercare, Rogers, Walmart, and Keurig. Defined visions, prioritized roadmaps, aligned stakeholders and delivered large-scale transformations.",
    related: [
      "Strategic Thinking",
      "Agile & Project Management",
      "Leadership & Team Management"
    ]
  },

  "Data Analysis & Market Research": {
    answer:
      "Used SQL, Adobe Analytics, GA4, FullStory, A/B testing and customer research to improve conversion rate, adoption and retention.",
    related: [
      "Customer Advocacy",
      "Data Science & Quantitative Analytics"
    ]
  },

  "Product Lifecycle Management": {
    answer:
      "Managed products from discovery and requirements through launch, adoption tracking and optimization initiatives.",
    related: [
      "Product Strategy & Roadmapping",
      "Financial & Business Acumen"
    ]
  },

  "Technical Aptitude": {
    answer:
      "Worked extensively with Salesforce, APIs, SaaS platforms, cloud-native systems, pricing engines and platform modernization programs.",
    related: [
      "Agile & Project Management",
      "Cross-Functional Collaboration"
    ]
  },

  "Agile & Project Management": {
    answer:
      "Led PI planning, Sprint planning, backlog refinement, release management and delivery governance across multiple organizations.",
    related: [
      "Leadership & Team Management",
      "Strategic Thinking"
    ]
  },

  "UX & Customer-Centric Design": {
    answer:
      "Owned customer journey improvements, checkout redesigns, experimentation and usability improvements to improve business outcomes.",
    related: [
      "Customer Advocacy",
      "Communication & Storytelling"
    ]
  },

  "Data Science & Quantitative Analytics": {
    answer:
      "Built predictive models, dashboards, KPI measurements and analytics frameworks using SQL, Python and BI tools.",
    related: [
      "Technical Aptitude",
      "Financial & Business Acumen"
    ]
  },

  "Financial & Business Acumen": {
    answer:
      "Managed multimillion-dollar budgets, ROI analysis, pricing strategies and business investment decisions.",
    related: [
      "Strategic Thinking",
      "Product Strategy & Roadmapping"
    ]
  },

  "Leadership & Team Management": {
    answer:
      "Led cross-functional teams across engineering, architecture, UX, QA, data, marketing and operations functions.",
    related: [
      "Communication & Storytelling",
      "Cross-Functional Collaboration"
    ]
  },

  "Communication & Storytelling": {
    answer:
      "Translated complex technical and business concepts into actionable plans for executives, stakeholders and delivery teams.",
    related: [
      "Leadership & Team Management",
      "Strategic Thinking"
    ]
  },

  "Strategic Thinking": {
    answer:
      "Balanced customer value, technology investment, operational efficiency and business objectives to drive long-term outcomes.",
    related: [
      "Product Strategy & Roadmapping"
    ]
  },

  "Cross-Functional Collaboration": {
    answer:
      "Partnered across Product, Marketing, Sales, Finance, Operations and Engineering teams to deliver large-scale initiatives.",
    related: [
      "Leadership & Team Management"
    ]
  },

  "Adaptability & Problem-Solving": {
    answer:
      "Worked across multiple industries and business domains, solving complex operational and customer problems.",
    related: [
      "Technical Aptitude"
    ]
  },

  "Customer Advocacy": {
    answer:
      "Focused on customer journeys, personalization, ecommerce optimization and improving customer experience across channels.",
    related: [
      "UX & Customer-Centric Design"
    ]
  }
};

function SkillCard({ skill, onClick }) {
  return (
    <button
      className="skill-card"
      onClick={() => onClick(skill)}
    >
      {skill}
    </button>
  );
}

export default function App() {
  const [selectedSkill, setSelectedSkill] =
    useState(null);

  const [question, setQuestion] = useState("");

  return (
    <div className="container">

      {/* HERO */}

      <section className="hero">

        <div className="tag">
          PRODUCT • DIGITAL • AI • TRANSFORMATION
        </div>

        <h1>
          Sunanda
          <br />
          Murthyraju
        </h1>

        <p className="hero-text">
          Product Strategy. Digital Transformation.
          Customer Experience. Data-Driven Innovation.
        </p>

      </section>

      {/* JOURNEY */}

      <section className="section">

        <h2>Professional Journey</h2>

        <div className="timeline">

          <div className="timeline-item">
            <h3>Cisco</h3>
            <p>Software Engineering Foundation</p>
          </div>

          <div className="timeline-item">
            <h3>Honeywell</h3>
            <p>Business Analysis & Data Science</p>
          </div>

          <div className="timeline-item">
            <h3>Unilever</h3>
            <p>Digital Product Ownership</p>
          </div>

          <div className="timeline-item">
            <h3>Walmart</h3>
            <p>Omnichannel Product Management</p>
          </div>

          <div className="timeline-item">
            <h3>Rogers</h3>
            <p>Retail Platform Transformation</p>
          </div>

          <div className="timeline-item">
            <h3>Keurig</h3>
            <p>Ecommerce Product Leadership</p>
          </div>

          <div className="timeline-item">
            <h3>Enercare</h3>
            <p>Pricing & Customer Platform Innovation</p>
          </div>

        </div>

      </section>

      {/* HARD SKILLS */}

      <section className="section">

        <h2>Hard Skills</h2>

        <div className="skills-grid">
          {hardSkills.map(skill => (
            <SkillCard
              key={skill}
              skill={skill}
              onClick={setSelectedSkill}
            />
          ))}
        </div>

      </section>

      {/* SOFT SKILLS */}

      <section className="section">

        <h2>Soft Skills</h2>

        <div className="skills-grid">
          {softSkills.map(skill => (
            <SkillCard
              key={skill}
              skill={skill}
              onClick={setSelectedSkill}
            />
          ))}
        </div>

      </section>

      {/* ASK SECTION */}

      {selectedSkill && (

        <section className="ask-section">

          <h2>{selectedSkill}</h2>

          <p>
            What would you like to know about
            Sunanda's experience in this area?
          </p>

          <textarea
            maxLength={100}
            placeholder="Ask a question (100 characters max)"
            value={question}
            onChange={(e) =>
              setQuestion(e.target.value)
            }
          />

          <p className="counter">
            {question.length}/100 characters
          </p>

          <div className="answer-box">

            <h3>Experience Summary</h3>

            <p>
              {knowledgeBase[selectedSkill]?.answer}
            </p>

            <h4>Related Topics</h4>

            <div className="related">

              {knowledgeBase[selectedSkill]?.related?.map(
                item => (
                  <button
                    key={item}
                    className="related-btn"
                    onClick={() =>
                      setSelectedSkill(item)
                    }
                  >
                    {item}
                  </button>
                )
              )}

            </div>

          </div>

        </section>

      )}

      {/* CONTACT */}

      <section className="contact">

        <h2>Start a Conversation</h2>

        <p>
          Interested in discussing product
          strategy, digital transformation,
          AI innovation or customer experience?
        </p>

        <a
          href="mailto:sunandamurthyraju@gmail.com"
          className="contact-btn"
        >
          Contact Sunanda
        </a>

      </section>

    </div>
  );
}
