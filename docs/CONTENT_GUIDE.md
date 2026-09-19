# PhysicsDaily — Content Authoring & Formatting Guide

This guide defines the standards, components, and conventions for writing and editing physics chapters on **PhysicsDaily**. It is designed so that both human authors and AI assistants can maintain a consistent, high-craft editorial reading experience across all chapters.

---

## 1. Golden Rules for Writing Content

1. **Ink-on-Paper Aesthetic**: PhysicsDaily follows a clean, textbook-grade editorial aesthetic (Source Serif 4 for headings, Inter for body copy). Avoid excessive emojis; use clean typography, structured cards, and minimalist SVG icons.
2. **Break the Wall of Text**: Never write uninterrupted blocks of dense paragraphs. Break content into digestible chunks using `<Callout>`, `<FormulaCard>`, and diagram cards.
3. **Strict Math Typesetting (KaTeX)**:
   - Always use `$inline$` for math variables (e.g. `$x$`, `$\vec{r}$`, `$(x_0, y_0, z_0)$`, `$\theta = 45^\circ$`).
   - Never use raw monospace backticks ` `x_0` ` for math symbols.
   - Use `$$ display $$` for major equations.
4. **Formula Descriptions in One Line**:
   - Keep the variable description directly below the formula on **one continuous line**:
     `where $(x, y, z)$ are the coordinates of the particle and $(x_0, y_0, z_0)$ are the coordinates of the observer.`
   - Do not split single-sentence variable descriptions into artificial multi-bullet lists unless explicitly requested.
5. **Global Architecture (Single Source of Truth)**:
   - Content files (`.md` and `.mdx`) live in `src/content/docs/`.
   - Reusable components live in `src/components/ui/`.
   - Global typography and prose styling live in `src/styles/global.css`.
   - **Editing a component in `src/components/ui/` updates every chapter on the site instantly.**

---

## 2. Standard Chapter File Structure

Every section or chapter page is an `.mdx` (or `.md`) file located in `src/content/docs/<branch>/...`.

### Template:

```mdx
---
title: Topic Name
description: A short one-line summary of what this section covers
order: 1
---

import Callout from '../../../../components/ui/Callout.astro';
import FormulaCard from '../../../../components/ui/FormulaCard.astro';
import YouTube from '../../../../components/ui/YouTube.astro';
import Simulation from '../../../../components/ui/Simulation.astro';

## Concept Hook & Definition

The first paragraph serves as the lede hook. It is automatically styled with prominent, readable typography. Explain the core intuition in simple, everyday language first.

<div class="diagram-grid">
  <figure class="diagram-card">
    ![Diagram description](../../../../assets/diagram-name.svg)
    <figcaption>_Figure 1: Labelled caption with math_ $\vec{r}$.</figcaption>
  </figure>
</div>

<Callout type="definition" title="Units and Dimensions">
The SI unit of position is meter ($\text{m}$), and its dimension is $[\text{L}]$.
</Callout>

## Mathematical Formulation

Explain the physical concept before introducing the equation.

<FormulaCard title="Formula Title" label="Key Formula">

$$
\vec{r} = x\hat{i} + y\hat{j} + z\hat{k}
$$

where $(x, y, z)$ are the coordinates of the particle and $(\hat{i}, \hat{j}, \hat{k})$ are unit vectors along the axes.

</FormulaCard>
```

---

## 3. Reusable Component Reference

### A. `<FormulaCard>`
Used to frame equations with dedicated surfaces, badges, and clean single-line definitions.

**Props:**
- `title` (string, required): The formula name (e.g. `Position Vector in 3D`, `Time of Flight`).
- `label` (string, optional): Pill badge text (defaults to `Formula`).
- `description` (string, optional): Short introductory note above the equation.
- `note` (string, optional): Conceptual insight shown at the bottom.

**Usage:**
```mdx
<FormulaCard title="Relative Magnitude" label="Relative Position">

$$
|\vec{r} - \vec{r}_0| = \sqrt{\rule{0pt}{2.7ex}(x - x_0)^2 + (y - y_0)^2 + (z - z_0)^2}
$$

where $(x, y, z)$ are the coordinates of the particle and $(x_0, y_0, z_0)$ are the coordinates of the observer.

</FormulaCard>
```

---

### B. `<Callout>`
Editorial callouts for units, definitions, key intuitions, and common traps.

**Props:**
- `type` (`'definition'` | `'tip'` | `'warning'` | `'note'`): Changes the icon and accent border.
- `title` (string, optional): Custom heading (defaults to standard label for type).

**Usage:**
```mdx
<Callout type="definition" title="Units and Dimensions">
The SI unit of position is meter ($\text{m}$), and its dimension is $[\text{L}]$.
</Callout>

<Callout type="tip" title="Key Intuition">
Horizontal and vertical motions are completely independent. Gravity only accelerates the vertical component.
</Callout>

<Callout type="warning" title="Common Pitfall">
Remember that at the apex of projectile flight, vertical velocity is zero, but horizontal velocity is not!
</Callout>
```

---

### C. Diagram Cards (`diagram-card` & `diagram-grid`)
For diagrams and labelled figures so white backgrounds don't blend into the paper surface.

**Single Diagram:**
```mdx
<figure class="diagram-card">
  ![Label](../../../../assets/figure.svg)
  <figcaption>_Figure 1: Caption text with math_ $\vec{r}$.</figcaption>
</figure>
```

**Side-by-Side Diagrams:**
```mdx
<div class="diagram-grid">
  <figure class="diagram-card">
    ![1D](../../../../assets/position-vector-1d.svg)
    <figcaption>_Figure 1: 1D Position._</figcaption>
  </figure>
  <figure class="diagram-card">
    ![2D](../../../../assets/position-vector-2d.svg)
    <figcaption>_Figure 2: 2D Position._</figcaption>
  </figure>
</div>
```

---

### D. Video & Simulation Embeds

**YouTube Walkthrough:**
```mdx
<YouTube id="VIDEO_ID" title="Solving Angle-Launched Projectile Problems" />
```

**Interactive Simulation (e.g. PhET):**
```mdx
<Simulation src="https://phet.colorado.edu/sims/html/projectile-motion/latest/projectile-motion_en.html" title="Projectile Simulation" height={600} />
```

---

## 4. How to Apply Global Design & Formatting Changes

Because all chapters consume the shared components and stylesheet, **any design update should be made in one place**:

| What You Want to Change | File to Modify | Effect |
| :--- | :--- | :--- |
| **Formula Card design, borders, or badge style** | [`src/components/ui/FormulaCard.astro`](file:///C:/Users/kande/Documents/Physics/physicsdaily.github.io/src/components/ui/FormulaCard.astro) | Updates every formula card across all chapters. |
| **Callout styling or icons** | [`src/components/ui/Callout.astro`](file:///C:/Users/kande/Documents/Physics/physicsdaily.github.io/src/components/ui/Callout.astro) | Updates all callouts globally. |
| **Typography, line-height, fonts, paragraph spacing** | [`src/styles/global.css`](file:///C:/Users/kande/Documents/Physics/physicsdaily.github.io/src/styles/global.css) | Updates reading rhythm and text styles site-wide. |
| **Colors, dark/light theme variables** | [`src/styles/global.css`](file:///C:/Users/kande/Documents/Physics/physicsdaily.github.io/src/styles/global.css) (`:root`, `:root[data-theme='light']`) | Updates theme palette across every page. |
| **Site metadata, branch names, redirects** | [`src/site.config.ts`](file:///C:/Users/kande/Documents/Physics/physicsdaily.github.io/src/site.config.ts) | Keeps site configuration in a single canonical file. |

---

## 5. Verification Checklist Before Committing

Always run:
```bash
npm run check
npm run build
```
- Both must pass with **0 errors**.
