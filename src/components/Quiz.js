import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './Quiz.module.css';

export default function Quiz({ question, options, correctAnswerIndex, explanation }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const handleOptionClick = (index) => {
    setSelectedOption(index);
    setIsCorrect(index === correctAnswerIndex);
  };

  return (
    <div className={styles.quizContainer}>
      <h3 className={styles.question}>{question}</h3>
      <div className={styles.options}>
        {options.map((option, index) => (
          <button
            key={index}
            className={clsx(styles.optionButton, {
              [styles.selected]: selectedOption === index,
              [styles.correct]: selectedOption === index && isCorrect,
              [styles.incorrect]: selectedOption === index && !isCorrect,
            })}
            onClick={() => handleOptionClick(index)}
            disabled={selectedOption !== null}
          >
            {option}
          </button>
        ))}
      </div>
      {selectedOption !== null && (
        <div className={clsx(styles.feedback, isCorrect ? styles.feedbackCorrect : styles.feedbackIncorrect)}>
          <strong>{isCorrect ? 'Correct!' : 'Incorrect.'}</strong>
          {explanation && <p>{explanation}</p>}
        </div>
      )}
    </div>
  );
}
