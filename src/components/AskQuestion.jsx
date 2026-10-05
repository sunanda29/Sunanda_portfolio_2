import { useState } from "react";

function AskQuestion({ selectedSkill }) {
  const [question, setQuestion] = useState("");
  const [displayTopics, setDisplayTopics] = useState([]);

  const handleAsk = () => {
    if (!selectedSkill) return;

    setDisplayTopics(selectedSkill.topics || []);
  };

  const handleTopicClick = (topic) => {
    const subTopics = selectedSkill.subTopics?.[topic];

    if (subTopics) {
      setDisplayTopics(subTopics);
    } else {
      // Return to Main Product Strategy topics
      setDisplayTopics(selectedSkill.topics);
    }
  };

  return (
    <div className="ask-section">
      <h2>{selectedSkill?.name}</h2>

      <textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder={`Ask about ${selectedSkill?.name}`}
      />

      <button onClick={handleAsk}>
        Explore
      </button>

      <div className="topics-grid">
        {displayTopics.map((topic) => (
          <button
            key={topic}
            className="topic-chip"
            onClick={() => handleTopicClick(topic)}
          >
            {topic}
          </button>
        ))}
      </div>
    </div>
  );
}

export default AskQuestion;
