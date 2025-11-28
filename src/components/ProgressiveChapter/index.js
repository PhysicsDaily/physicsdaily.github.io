import React, { useState, useRef } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

export function Section({ children, isActive, onNext, onPrevious, title, isFirst, isLast }) {
  // Using key to force re-trigger of CSS animation when becoming active if needed,
  // but since we are toggling display, simple CSS animation on the class might not replay 
  // unless we unmount. However, for a simple app, just keeping it hidden is safer for state.
  // We'll trust the CSS @keyframes slideIn to run if we were using conditional rendering,
  // but with display:none, it won't replay. 
  // To fix animation: We can use a key prop on the div that changes, or just accept static switch.
  // Let's keep it simple for now.
  const style = isActive ? { display: 'block' } : { display: 'none' };

  return (
    <div className={styles.section} style={style}>
      {title && <h2>{title}</h2>}
      {children}

      <div className={styles.controls}>
        {!isFirst && (
          <button className={styles.prevButton} onClick={onPrevious}>
            ← Previous
          </button>
        )}

        <button className={styles.nextButton} onClick={onNext}>
          {isLast ? "Finish Chapter" : "Next Section →"}
        </button>
      </div>
    </div>
  );
}

export function ProgressiveChapter({ children, completionTitle = "Chapter Completed! 🎉", completionMessage = "You have mastered this unit. Great job!", nextChapterLink, nextChapterLabel = "Next Chapter" }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const topRef = useRef(null);

  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1);
    scrollToTop();
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      scrollToTop();
    }
  };

  const scrollToTop = () => {
    setTimeout(() => {
      if (topRef.current) {
        topRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 50);
  };

  const childrenArray = React.Children.toArray(children);
  const totalSteps = childrenArray.length;
  const isFinished = currentIndex === totalSteps;

  return (
    <div className={styles.container} ref={topRef}>
      {/* Progress Bar */}
      <div className={styles.progressBar}>
        {childrenArray.map((_, idx) => (
          <div
            key={idx}
            className={clsx(styles.progressStep, {
              [styles.progressStepActive]: idx === currentIndex,
              [styles.progressStepCompleted]: idx < currentIndex
            })}
          />
        ))}
      </div>

      {childrenArray.map((child, index) => {
        const isActive = index === currentIndex;
        const isFirst = index === 0;
        const isLast = index === childrenArray.length - 1;

        return React.cloneElement(child, {
          key: index,
          isActive,
          isFirst,
          isLast,
          onNext: handleNext,
          onPrevious: handlePrevious,
        });
      })}

      {isFinished && (
        <div className={clsx(styles.section, styles.completionSection)}>
          <h2>{completionTitle}</h2>
          <p>{completionMessage}</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            <button className={styles.prevButton} onClick={handlePrevious}>
              ← Review
            </button>
            {nextChapterLink && (
              <Link to={nextChapterLink} className={styles.nextButton}>
                {nextChapterLabel} →
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
}