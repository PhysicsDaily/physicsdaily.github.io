---
title: Resources
description: Curated resources for mastering university physics
hide_table_of_contents: true
maxWidth: 1200px
---

import {ResourceCard, ResourceGrid} from '@site/src/components/ResourceCard';
import {TextbookSVG, AdvancedSVG, VideoSVG, ToolsSVG, ProblemSVG, CodeSVG} from '@site/src/components/ResourceCard/ResourceSvgs';

# Physics Resources 📚

A curated collection of the best tools, books, and video content to help you master physics.

## 📖 Essential Textbooks

<ResourceGrid>
  <ResourceCard
    title="University Physics"
    author="Young & Freedman"
    description="The gold standard for introductory university physics. Balanced and comprehensive with excellent problem sets."
    link="https://www.amazon.com/University-Physics-Modern-14th/dp/0321973615"
    icon={<TextbookSVG />}
    tag="Introductory"
  />
  <ResourceCard
    title="Physics (HRK)"
    author="Halliday, Resnick, & Krane"
    description="A more rigorous and deep alternative to 'Fundamentals'. Highly recommended for physics majors."
    link="https://www.amazon.com/Physics-Vol-1-Resnick/dp/0471320579"
    icon={<TextbookSVG />}
    tag="Advanced Intro"
  />
  <ResourceCard
    title="Feynman Lectures"
    author="Richard Feynman"
    description="Legendary lectures focusing on intuition and deep conceptual understanding. Free online."
    link="https://www.feynmanlectures.caltech.edu/"
    icon={<TextbookSVG />}
    tag="Conceptual"
  />
</ResourceGrid>

## 🚀 Advanced Topics

<ResourceGrid>
  <ResourceCard
    title="Classical Mechanics"
    author="David Morin"
    description="Famous for its challenging problems and limericks. Essential for competitions."
    link="https://www.amazon.com/Introduction-Classical-Mechanics-Problems-Solutions/dp/0521876222"
    icon={<AdvancedSVG />}
    tag="Mechanics"
  />
  <ResourceCard
    title="Classical Mechanics"
    author="John R. Taylor"
    description="The clearest intermediate mechanics text. Excellent for Lagrangian & Hamiltonian mechanics."
    link="https://www.amazon.com/Classical-Mechanics-John-R-Taylor/dp/189138922X"
    icon={<AdvancedSVG />}
    tag="Mechanics"
  />
  <ResourceCard
    title="Intro to Electrodynamics"
    author="David J. Griffiths"
    description="The absolute standard for undergraduate E&M. Engaging, clear, and essential."
    link="https://www.amazon.com/Introduction-Electrodynamics-David-J-Griffiths/dp/1108420419"
    icon={<AdvancedSVG />}
    tag="Electromagnetism"
  />
  <ResourceCard
    title="Intro to Quantum Mechanics"
    author="David J. Griffiths"
    description="Standard entry point for undergraduate QM. Clear explanations and good problems."
    link="https://www.amazon.com/Introduction-Quantum-Mechanics-David-Griffiths/dp/1107189632"
    icon={<AdvancedSVG />}
    tag="Quantum"
  />
</ResourceGrid>

## 📺 Video Lectures

<ResourceGrid>
  <ResourceCard
    title="3Blue1Brown"
    description="Beautiful animations explaining math and physics concepts. The gold standard for visualization."
    link="https://www.youtube.com/c/3blue1brown"
    icon={<VideoSVG />}
    tag="Visuals"
  />
  <ResourceCard
    title="Walter Lewin (MIT)"
    description="Classic physics lectures with unmatched demonstrations. 8.01 (Mech) & 8.02 (E&M)."
    link="https://www.youtube.com/channel/UCiEHVhv0SBMpP75JbzJShqw"
    icon={<VideoSVG />}
    tag="Lectures"
  />
  <ResourceCard
    title="PBS Space Time"
    description="Deep dives into astrophysics and quantum mechanics at a high conceptual level."
    link="https://www.youtube.com/c/pbsspacetime"
    icon={<VideoSVG />}
    tag="Astrophysics"
  />
  <ResourceCard
    title="Theoretical Minimum"
    author="Leonard Susskind"
    description="Stanford lectures designed to teach 'the real stuff' without watering it down."
    link="https://www.youtube.com/user/SusskindLectures"
    icon={<VideoSVG />}
    tag="Deep Dive"
  />
</ResourceGrid>

## 🛠️ Tools & Simulations

<ResourceGrid>
  <ResourceCard
    title="PhET Simulations"
    description="Interactive labs for almost every physics topic. Great for visualizing abstract concepts."
    link="https://phet.colorado.edu/"
    icon={<ToolsSVG />}
    tag="Simulation"
  />
  <ResourceCard
    title="WolframAlpha"
    description="Computational intelligence. Solves integrals, derivatives, and complex physics equations."
    link="https://www.wolframalpha.com/"
    icon={<ToolsSVG />}
    tag="Calculator"
  />
  <ResourceCard
    title="Desmos"
    description="Powerful graphing calculator. Perfect for visualizing functions and data."
    link="https://www.desmos.com/calculator"
    icon={<ToolsSVG />}
    tag="Graphing"
  />
  <ResourceCard
    title="Falstad Circuit Sim"
    description="Visualize current flow in electrical circuits in real-time."
    link="https://www.falstad.com/circuit/"
    icon={<ToolsSVG />}
    tag="Simulation"
  />
</ResourceGrid>

## ⚔️ Problem Solving

<ResourceGrid>
  <ResourceCard
    title="Irodov Problems"
    author="I.E. Irodov"
    description="Problems in General Physics. Legendary for its difficulty. A rite of passage."
    link="https://www.amazon.com/Problems-General-Physics-I-Irodov/dp/8176223390"
    icon={<ProblemSVG />}
    tag="Hardcore"
  />
  <ResourceCard
    title="HyperPhysics"
    description="An interconnected 'mind map' of physics concepts. Quick and reliable reference."
    link="http://hyperphysics.phy-astr.gsu.edu/hbase/index.html"
    icon={<ProblemSVG />}
    tag="Reference"
  />
</ResourceGrid>

## 💻 Computational Physics

<ResourceGrid>
  <ResourceCard
    title="GlowScript"
    description="Easiest way to start coding 3D physics simulations in the browser using VPython."
    link="https://www.glowscript.org/"
    icon={<CodeSVG />}
    tag="Python"
  />
  <ResourceCard
    title="NumPy & SciPy"
    description="The industry standard Python libraries for scientific computing and data analysis."
    link="https://scipy.org/"
    icon={<CodeSVG />}
    tag="Python"
  />
</ResourceGrid>