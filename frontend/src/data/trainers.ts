export type TrainerDomain = 'IT' | 'DESIGN' | 'ARCHITECTURAL'
export interface Trainer {
  id: string
  name: string
  role: string
  domain: TrainerDomain
  image?: string        // verified photo only; omit to show a typographic placeholder
  bio?: string
  expertise?: string[]
  profileUrl?: string   // only set when a real profile page exists; enables "View Profile →"
}

// VERIFIED TRAINERS ONLY. Keep empty until INNOVEL supplies approved names, roles, photos and bios.
// Entries added here render automatically on the homepage. Do not add placeholder people.
export const trainers: Trainer[] = []

// Editable copy.
export const trainersContent = {
  eyebrow: 'The people behind the learning',
  titleLines: ['Learn from people', 'who know '],
  titleAccent: 'the craft.',
  intro: 'Structured learning becomes more meaningful when learners can connect concepts with practical guidance, feedback and real-world application.',
  rail: ['Knowledge', 'Practice', 'Guidance', 'Career'],
  domainsTitle: 'Guidance across disciplines',
  domains: [
    { id: 'IT', name: 'IT', text: 'Practical guidance across IT disciplines.' },
    { id: 'DESIGN', name: 'Design', text: 'Practical guidance across design disciplines.' },
    { id: 'ARCHITECTURAL', name: 'Architectural', text: 'Practical guidance across architectural disciplines.' },
  ],
  filterAll: 'All',
  profileLabel: 'View Profile',
} as const
