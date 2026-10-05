import { useState } from "react";
import { hardSkills } from "../data/hardSkills";
import { softSkills } from "../data/softSkills";

export default function AskQuestion({ skill }) {
  const [question, setQuestion] = useState("");
  const [topics, setTopics] = useState([]);
  const [path, setPath] = useState([]);

  const knowledgeGraph = {
    ...hardSkills,
    ...softSkills,
  };

  const handleSubmit = () => {
    if (!question.trim()) return;

    const nextTopics = knowledgeGraph[skill.title];

    setPath([skill.title]);

    if (nextTopics) {
      setTopics(nextTopics);
    } else {
      setTopics([]);
    }
  };

  const handleTopicClick = (topic) => {
    const newPath = [...path, topic];
    setPath(newPath);

    if (knowledgeGraph[topic]) {
      setTopics(knowledgeGraph[topic]);
    } else {
      // infinite loop back to root skill
      setTopics([skill.title]);
    }
  };

  const resetJourney = () => {
    setQuestion("");
    setTopics([]);
    setPath([]);
  };

  return (
    <div className="ask-question">
      <h2>{skill.title}</h2>

      <p>
        What would you like to know about Sunanda's experience in this area?
      </p>

      <textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask a question..."
        rows={5}
        maxLength={100}
      />

      <div className="char-count">
        {question.length}/100 characters
      </div>

      <div className="button-group">
        <button
          type="button"
          className="submit-btn"
          onClick={handleSubmit}
        >
          Submit
        </button>

        <button
          type="button"
          className="reset-btn"
          onClick={resetJourney}
        >
          Reset
        </button>
      </div>

      {path.length > 0 && (
        <div className="breadcrumb">
          <strong>Journey:</strong> {path.join(" → ")}
        </div>
      )}

      {topics.length > 0 && (
        <div className="topics-container">
          {topics.map((topic) => (
            <button
              key={topic}
              type="button"
              className="topic-btn"
              onClick={() => handleTopicClick(topic)}
            >
              {topic}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
