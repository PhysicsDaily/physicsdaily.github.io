# Developer Guide & Architecture Documentation

This document outlines the architectural patterns, component structures, and workflows used in the **Physics Daily** Docusaurus project. It is intended to guide AI agents and developers in maintaining consistency while expanding the content.

## 1. Project Structure Overview

The project follows a standard Docusaurus structure with custom enhancements for interactive learning:

```
physicsdaily.github.io/
├── docs/                       # Content files (Markdown/MDX)
│   ├── 01-mechanics/           # Chapter folders
│   │   ├── 01-units...md       # Individual topic files
│   │   └── ...
│   └── ...
├── src/
│   ├── components/             # React Components
│   │   ├── ProgressiveChapter/ # Logic for step-by-step lessons
│   │   ├── ChapterQuiz/        # End-of-chapter assessment engine
│   │   └── Quiz/               # Small inline quizzes
│   └── data/
│       └── quizzes/            # JSON files containing quiz questions
│           ├── unit01.json
│           └── ...
└── ...
```

## 2. Interactive Components

### A. ProgressiveChapter & Section
**Purpose:** Splits a long markdown document into focused, sequential sections (Wizard style).

**Path:** `src/components/ProgressiveChapter/`

**Usage Pattern:**
Wrap the entire content of a `.md` file in `<ProgressiveChapter>`. Divide logical chunks of content into `<Section>` blocks.

```jsx
import { ProgressiveChapter, Section } from '@site/src/components/ProgressiveChapter';

<ProgressiveChapter>

  <Section title="1.1 Introduction">
    Markdown content...
  </Section>

  <Section title="1.2 Next Topic">
    More content...
  </Section>

</ProgressiveChapter>
```

**Props:**
*   `Section`
    *   `title` (string): The heading displayed at the top of the card.

### B. ChapterQuiz
**Purpose:** A comprehensive, multi-question assessment at the end of a chapter. Supports submission, scoring, and explanation feedback.

**Path:** `src/components/ChapterQuiz/`

**Usage Pattern:**
Import the JSON data and pass it to the component.

```jsx
import ChapterQuiz from '@site/src/components/ChapterQuiz';
import myQuizData from '@site/src/data/quizzes/unitXX.json';

<Section title="Assessment">
  <ChapterQuiz questions={myQuizData} />
</Section>
```

## 3. Quiz Data Management

**Location:** `src/data/quizzes/`

**Format:** JSON Array of question objects.

**Schema:**
```json
[
  {
    "question": "String: The question text?",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswerIndex": 1, // 0-based index of the correct option
    "explanation": "String: Detailed explanation shown after submission."
  }
]
```

**Naming Convention:** `unit{Number}.json` (e.g., `unit01.json`, `unit02.json`).

## 4. Workflow: Converting a Chapter

To convert a standard Markdown chapter to the interactive format, follow these steps:

1.  **Prepare Data:**
    *   Create `src/data/quizzes/unitXX.json`.
    *   Add relevant questions (MCQ) for the chapter.

2.  **Update Markdown:**
    *   Open the target file in `docs/`.
    *   **Imports:** Add the following imports at the top:
        ```jsx
        import { ProgressiveChapter, Section } from '@site/src/components/ProgressiveChapter';
        import ChapterQuiz from '@site/src/components/ChapterQuiz';
        import unitXXQuiz from '@site/src/data/quizzes/unitXX.json';
        ```
    *   **Wrap Content:** Enclose everything after the frontmatter in `<ProgressiveChapter>`.
    *   **Segment Content:** Group text/images into logical `<Section title="...">` blocks.
    *   **Add Quiz:** Add a final section for the assessment:
        ```jsx
        <Section title="Final Assessment">
          <ChapterQuiz questions={unitXXQuiz} />
        </Section>
        ```

## 5. Styling & UI

*   **Styles:** Component-specific styles are located in `styles.module.css` within each component's directory.
*   **Theme:** The UI uses Docusaurus CSS variables (e.g., `--ifm-color-primary`) to ensure compatibility with Dark/Light modes.
