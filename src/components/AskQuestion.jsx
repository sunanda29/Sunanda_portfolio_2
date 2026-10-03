export default function AskQuestion({
  selectedSkill,
  answer,
  question,
  setQuestion,
  related,
  onRelatedClick
}) {
  return (
    <section className="ask-section">

      <h2>{selectedSkill}</h2>

      <p>
        What would you like to know about
        Sunanda's experience?
      </p>

      <textarea
        value={question}
        maxLength={100}
        placeholder="Ask a question (100 characters max)"
        onChange={(e) =>
          setQuestion(e.target.value)
        }
      />

      <p className="counter">
        {question.length}/100 Characters
      </p>

      <div className="answer-box">

        <h3>Experience Summary</h3>

        <p>{answer}</p>

        {related?.length > 0 && (
          <>
            <h4>Related Topics</h4>

            <div className="related">

              {related.map(topic => (
                <button
                  key={topic}
                  className="related-btn"
                  onClick={() =>
                    onRelatedClick(topic)
                  }
                >
                  {topic}
                </button>
              ))}

            </div>
          </>
        )}

      </div>

    </section>
  );
}
