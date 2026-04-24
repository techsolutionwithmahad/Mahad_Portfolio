// ─────────────────────────────────────────────
// data.js — Blog content data layer
// Edit this file to add, remove, or update posts.
// No HTML changes needed.
// ─────────────────────────────────────────────

const SITE_META = {
  title: "The Quiet Journal",
  tagline: "Thoughts on design, code & the craft of simplicity.",
  author: "Alex Mercer",
  year: new Date().getFullYear(),
};

const BLOG_POSTS = [
  {
    id: "post-1",
    title: "The Art of Doing Less",
    date: "2026-04-18",
    category: "Productivity",
    excerpt:
      "In a world obsessed with hustle culture, there's a quiet revolution brewing — one that values depth over breadth and intention over volume.",
    content: `
      <p>We live in an era where "more" is the default setting. More features, more meetings, more notifications. But the most impactful work often comes from <strong>ruthless subtraction</strong>, not endless addition.</p>

      <p>Consider the Japanese philosophy of <em>Ma</em> (間) — the conscious use of negative space. In design, architecture, and even conversation, what you leave out matters just as much as what you put in.</p>

      <h3>Three Principles of Purposeful Reduction</h3>
      <ol>
        <li><strong>Identify the essential.</strong> Before adding anything to your plate, ask: "Does this serve the core purpose?" If the answer is no, it's noise.</li>
        <li><strong>Batch and protect.</strong> Deep work requires uninterrupted blocks. Treat your calendar like a garden — weed out the unnecessary meetings.</li>
        <li><strong>Embrace the pause.</strong> Not every moment needs to be productive. Rest is not the opposite of work; it's a prerequisite for meaningful work.</li>
      </ol>

      <p>The paradox is beautiful: by doing less, you often accomplish more. Not because you're cutting corners, but because you're cutting clutter.</p>

      <blockquote>"Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away." — Antoine de Saint-Exupéry</blockquote>

      <p>Start small. Pick one commitment to drop this week. Notice how the space it creates feels less like emptiness and more like freedom.</p>
    `,
  },
  {
    id: "post-2",
    title: "Why Every Developer Should Learn to Write",
    date: "2026-04-10",
    category: "Development",
    excerpt:
      "Good code tells the computer what to do. Good writing tells humans why it matters. The best developers excel at both.",
    content: `
      <p>There's a persistent myth in tech that writing is a "soft skill" — nice to have, but ultimately secondary to technical ability. This couldn't be further from the truth.</p>

      <p>Every pull request description, every architecture document, every Slack message is an exercise in communication. And <strong>communication is the multiplier</strong> that makes everything else more effective.</p>

      <h3>Writing Sharpens Thinking</h3>
      <p>When you sit down to explain a technical decision in writing, you're forced to confront the gaps in your own understanding. The fuzzy logic that seemed "good enough" in your head suddenly demands precision on the page.</p>

      <p>This is why rubber duck debugging works — and why writing a design doc before writing code can save you weeks of refactoring.</p>

      <h3>The Compound Returns</h3>
      <ul>
        <li><strong>Documentation</strong> — Well-written docs reduce onboarding time from weeks to days.</li>
        <li><strong>Code Reviews</strong> — Clear PR descriptions lead to faster, more useful reviews.</li>
        <li><strong>Career Growth</strong> — The engineers who get promoted are often the ones who can articulate their impact.</li>
        <li><strong>Open Source</strong> — A project with great READMEs attracts more contributors than one with clever code but no explanation.</li>
      </ul>

      <p>You don't need to write a novel. Start with a short blog post, a clear commit message, or a well-structured email. The muscle builds over time.</p>

      <blockquote>"The discipline of writing something down is the first step toward making it happen." — Lee Iacocca</blockquote>
    `,
  },
  {
    id: "post-3",
    title: "Designing for Calm Technology",
    date: "2026-04-02",
    category: "Design",
    excerpt:
      "The best interfaces don't demand your attention — they earn it. A look at how calm technology principles can reshape the way we build digital products.",
    content: `
      <p>In 1995, Mark Weiser and John Seely Brown coined the term <em>"calm technology"</em> — technology that informs without demanding focus. Nearly three decades later, most of what we build does the exact opposite.</p>

      <p>Push notifications. Autoplay videos. Infinite scroll. These patterns aren't designed for the user's benefit — they're designed for engagement metrics. And they're exhausting.</p>

      <h3>Principles of Calm Design</h3>
      <ol>
        <li><strong>Peripheral over central.</strong> Information should live at the edge of attention until the user actively needs it. Think: a subtle status indicator vs. a flashing modal.</li>
        <li><strong>Respect the user's time.</strong> Every interaction should justify the interruption. If it doesn't, it shouldn't exist.</li>
        <li><strong>Defaults matter.</strong> The default state of any product should be the one that requires the least effort from the user.</li>
        <li><strong>Graceful degradation.</strong> When things go wrong, the interface should guide — not alarm.</li>
      </ol>

      <h3>Calm in Practice</h3>
      <p>Consider a weather app. A calm version shows you today's forecast with a glance — a single screen, no taps required. A noisy version buries the current temperature behind ads, hourly breakdowns, and "severe weather alerts" for cities you've never visited.</p>

      <p>The same content, radically different experiences. The difference isn't information — it's <strong>intention</strong>.</p>

      <blockquote>"The most profound technologies are those that disappear. They weave themselves into the fabric of everyday life until they are indistinguishable from it." — Mark Weiser</blockquote>

      <p>As builders, we have a responsibility to create tools that enhance life without consuming it. Calm technology isn't about doing less — it's about being more thoughtful about what we ask of the people who use what we make.</p>
    `,
  },
];
