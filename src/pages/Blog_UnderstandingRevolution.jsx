// src/pages/Blog_UnderstandingRevolution.jsx
import "../styles/article.css";
import { useNavigate } from "react-router-dom";
import revolutionImg from "../assets/images/revolution.jpg";

export default function Blog_UnderstandingRevolution() {
  const navigate = useNavigate();

  return (
    <article className="article-container">

      {/* Top Navigation */}
      <nav className="article-nav">
        <span
          style={{ cursor: "pointer" }}
          onClick={() => navigate(-1)}
        >
          ← Go Back
        </span>
        <span>Avadhut</span>
      </nav>

      {/* Header */}
      <section className="article-header">
        <div>
          <div className="article-category">Philosophy</div>

          <h1 className="article-title">
            Revolution Is Not<br />
            an Emotion
          </h1>

          <div className="article-meta">
            <span>Avadhut</span>
            <span>Dec 30, 2025</span>
            <span>15 min read</span>
          </div>
        </div>

        <p className="article-abstract">
          Revolution is often spoken of as if it were a moral reflex.
          An instinctive response to injustice. A fire that must be answered
          with fire. But revolution is not clarity; it is complexity.</p>
      </section>

      {/* Hero Image */}
      <section className="article-hero">
        <img src={revolutionImg} alt="Revolution Illustration" />
      </section>

      {/* Body */}
      <section className="article-body">

        <h2>Revolution Is Not an Emotion</h2>
        <p>
          Revolution is often spoken of as if it were a moral reflex.
          An instinctive response to injustice.
          A fire that must be answered with fire.
          This belief is not only incorrect. It is dangerous.
          Most people who express a desire to join a revolution do so for reasons that have little to do with revolution itself. They speak of patriotism, moral duty, sacrifice, and history. They are inspired by freedom fighters frozen in textbooks and photographs, stripped of context and consequence. What they admire is not revolution, but heroism.
          Emotion gives them certainty.
          Rage gives them urgency.
          Together, they create the illusion of clarity.
          But revolution is not absolute clarity. It is complexity.</p>

        <h2>The Romantic Error</h2>
        <p>
        The first and most common mistake is treating revolution as an emotional reaction to injustice. Anger feels honest. Suffering feels legitimizing. The greater the outrage, the more righteous the cause appears.
        This is how impulsive minds justify irreversible actions.
        Emotion is volatile. It simplifies reality into enemies and absolutes. It demands movement even when direction is unclear. It rewards spectacle over strategy. Any movement led primarily by emotion will either collapse under resistance or harden into the very oppression it claimed to oppose.
        History does not contradict this. It confirms it repeatedly.</p>

        <h2>Why This Impulse Appears Where It Does</h2>
        <p>
         This pattern appears most strongly in young men. Not because they are uniquely immoral, but because they are uniquely unfinished.
         Strength without restraint seeks discharge.
         Ego without perspective seeks validation.
         Narratives of martyrdom provide both.
         Rage becomes identity. Action becomes proof of worth. The idea of revolution becomes a stage upon which meaning is performed.
         But revolution does not need performers.
         It needs architects.</p>

        <h2>What Revolution Actually Is?</h2>
        <p>
         Revolution is not the act of opposing injustice. It is the act of replacing a system.
         This distinction disqualifies most participants immediately.
         To choose revolution is to accept responsibility for what follows collapse. 
         Power vacuums do not remain empty. Institutions do not dissolve cleanly. 
         Violence does not obey intention. Ideals do not govern themselves.</p>
         <h3>A revolutionary must calculate</h3>
         <ul className="article-list-points">
            <li>Who holds authority when the old structure falls</li>
            <li>How legitimacy is established and enforced</li>
            <li>What mechanisms prevent the new order from rotting</li>
            <li>Who will be imprisoned, silenced, or killed when plans fail</li>
            <li>What sacrifices will be demanded not from volunteers, but from bystanders</li>
        </ul>
       <p> These are not abstract concerns. They are guaranteed outcomes.
        Anyone unwilling to confront them has no business speaking of revolution.</p>

      

        <h2>Emotion as a Liability</h2>
        <p>
         Emotion is not useless, but it is never sufficient. 
         At best, it is fuel. Fuel without control burns indiscriminately.</p>
         <h3>When emotion is allowed to lead</h3>
         <ul className="article-list-points">
            <li>Premature action replaces preparation</li>
            <li>Moral certainty replaces accountability</li>
            <li>Violence becomes “necessary” by definition</li>
            <li>Dissent becomes betrayal</li>
            <li>Ends begin to justify any means</li>
        </ul>
        <p>
        This is the precise pathway by which revolutions devour their own principles.
        The individual who joins to prove morality is the individual most likely to excuse brutality later. 
        Identity once invested must be defended, no matter the cost.</p>

      <h2>The Weight of the Word</h2>
        <p>
         Revolution is not a reaction.
         It is not a cry.
         It is not a moral gesture.
         It is a deliberate decision to bear responsibility for irreversible outcomes.
         Those who feel exhilarated by this prospect are unfit for it.
         Those who feel the weight, the hesitation, the dread, yet proceed anyway, begin to understand what they are choosing.
         The correct revolutionary is not the loudest voice in the room.
         It is the one who grows silent when the cost is made explicit.
         Not the one driven by rage, but the one capable of restraining it.
         Not the one who seeks meaning, but the one willing to carry consequence.
         Revolution does not need more anger.
         It needs more thought.
         And until thought leads, emotion should remain exactly where it belongs:
         subordinate, constrained, and distrusted.
         Because a revolution born from impulse does not change the world.
         It only changes who controls the corpses.</p>

      </section>

    </article>
  );
}
