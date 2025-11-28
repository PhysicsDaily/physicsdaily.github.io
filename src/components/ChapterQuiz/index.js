import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function ChapterQuiz({ questions }) {
  const [answers, setAnswers] = useState({}); // Map of questionIndex -> optionIndex
  const [submitted, setSubmitted] = useState(false);

  const handleOptionSelect = (questionIndex, optionIndex) => {
    if (submitted) return;
    setAnswers(prev => ({
      ...prev,
      [questionIndex]: optionIndex
    }));
  };

  const handleSubmit = () => {
    const unanswered = questions.some((_, idx) => answers[idx] === undefined);
    if (unanswered) {
      if (!window.confirm("You haven't answered all questions. Are you sure you want to submit?")) {
        return;
      }
    }
    setSubmitted(true);
  };

  const calculateScore = () => {
    let correctCount = 0;
    questions.forEach((q, idx) => {
      if (answers[idx] === q.correctAnswerIndex) {
        correctCount++;
      }
    });
    return correctCount;
  };

  const resetQuiz = () => {
    setAnswers({});
    setSubmitted(false);
  };

  if (!questions || questions.length === 0) return null;

  return (
    <div className={styles.quizContainer}>
      {!submitted ? (
        <>
          <div style={{ marginBottom: '1.5rem' }}>
            <p>Answer the following questions to check your understanding of this chapter's concepts.</p>
          </div>
          
          {questions.map((q, qIdx) => (
            <div key={qIdx} className={styles.questionBlock}>
              <div className={styles.questionText}>
                {qIdx + 1}. {q.question}
              </div>
              <div className={styles.options}>
                {q.options.map((opt, oIdx) => (
                  <label key={oIdx} className={styles.optionLabel}>
                    <input
                      type="radio"
                      name={`question-${qIdx}`}
                      className={styles.optionInput}
                      checked={answers[qIdx] === oIdx}
                      onChange={() => handleOptionSelect(qIdx, oIdx)}
                    />
                    {opt}
                  </label>
                ))}
              </div>
            </div>
          ))}

          <button className={styles.submitButton} onClick={handleSubmit}>
            Check Answers
          </button>
        </>
      ) : (
        <div className={styles.results}>
          <h3>Your Understanding</h3>
          <div className={styles.score}>
            {calculateScore()} / {questions.length}
          </div>
          <p>
            {calculateScore() === questions.length 
              ? "Excellent! You have a solid grasp of these concepts." 
              : "Review the explanations below to deepen your understanding."}
          </p>
          
          <button 
            className={styles.submitButton} 
            onClick={resetQuiz}
            style={{ marginTop: '1rem', backgroundColor: '#6c757d' }}
          >
            Try Again
          </button>

          <div style={{ marginTop: '3rem', textAlign: 'left' }}>
            {questions.map((q, qIdx) => {
              const userAns = answers[qIdx];
              const isCorrect = userAns === q.correctAnswerIndex;
              
              return (
                <div key={qIdx} className={styles.questionBlock}>
                  <div className={styles.questionText}>
                    {qIdx + 1}. {q.question}
                  </div>
                  <div className={styles.options}>
                    {q.options.map((opt, oIdx) => {
                      let optionClass = styles.optionLabel;
                      if (oIdx === q.correctAnswerIndex) optionClass = clsx(styles.optionLabel, styles.correctAnswer);
                      if (userAns === oIdx && !isCorrect) optionClass = clsx(styles.optionLabel, styles.incorrectAnswer);

                      return (
                        <div key={oIdx} className={optionClass}>
                          <span style={{ marginRight: '10px' }}>
                            {oIdx === q.correctAnswerIndex ? '✅' : (userAns === oIdx ? '❌' : '⚪')}
                          </span>
                          {opt}
                        </div>
                      );
                    })}
                  </div>
                  <div className={clsx(styles.feedback, isCorrect ? styles.feedbackCorrect : styles.feedbackIncorrect)}>
                    <strong>Explanation:</strong> {q.explanation}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
