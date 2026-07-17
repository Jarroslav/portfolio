// Single source of truth for the "More projects" compact grid (WIZ-247 Tier 2).
// Flagship projects (From Ashes, playwright-ai-triage, agentic-os) live as
// bespoke case-study cards in the Work section and are intentionally not listed here.
export type Project = {
  name: string
  oneLiner: string
  tags: string[]
  repoUrl: string
  /** Marks repos that are forks rather than original work. */
  note?: 'fork'
}

export const projects: Project[] = [
  {
    name: 'portfolio',
    oneLiner: 'This site — a React 19 + Vite SPA with a hand-built design-token system.',
    tags: ['React 19', 'Vite', 'TypeScript'],
    repoUrl: 'https://github.com/Jarroslav/portfolio',
  },
  {
    name: 'cursor-multi-agent-setup',
    oneLiner:
      'A meta-prompt that turns Cursor into a disciplined SDLC environment — rules, subagents, safety hooks generated from your codebase.',
    tags: ['Cursor', 'Agentic SDLC', 'Prompt'],
    repoUrl: 'https://github.com/Jarroslav/cursor-multi-agent-setup',
    note: 'fork',
  },
]
