/**
 * IntentFlow — UK English copy.
 * Angle: training with intent. Every session has a purpose, nothing is filler.
 */
import { enCopy, mergeCopy } from './en-copy';

const siteCopy = {
  home: {
    seo: {
      title: 'Personal trainer: every session has a purpose',
      description:
        'Training with intent: one-to-one sessions in person or online and a written programme where every exercise is there for a reason you can explain.',
    },
    hero: {
      eyebrow: 'Personal training with intent',
      titleLead: 'Nothing to fill the hour,',
      titleMark: 'everything to move you on',
      lead: 'Plenty of training is just activity: it passes the time and tires you out. Here, every session has a job, and if an exercise cannot justify its place, it is not in the plan.',
      visualLabel: 'Purpose, session by session',
    },
    highlights: {
      eyebrow: 'The approach',
      title: 'Every choice has a reason',
      subtitle: 'Four rules that decide what goes into a session and what gets cut.',
      items: [
        { title: 'One clear job per session', text: 'Each session is aimed at something specific, so you always know what you are there to do.' },
        { title: 'Nothing for show', text: 'If an exercise is only there because it looks impressive, it does not make the cut.' },
        { title: 'You can explain it', text: 'You should be able to say why you are doing each movement. If you cannot, we have not finished talking.' },
        { title: 'Tired is not the target', text: 'Exhaustion is easy to produce and proves nothing. Progress is the measure.' },
      ],
    },
    method: {
      eyebrow: 'The method',
      title: 'Aim, train, check',
      subtitle: 'Four steps that keep the plan honest.',
      steps: [
        { title: 'Set the intent', text: 'We agree what the next stretch of training is actually for, in plain terms.' },
        { title: 'Build around it', text: 'Exercises are chosen because they serve that aim, not because they are popular.' },
        { title: 'Train deliberately', text: 'During the session you know the purpose of each block, so the effort lands where it should.' },
        { title: 'Check it worked', text: 'We look at whether the aim moved. If it did not, the plan changes rather than the effort.' },
      ],
    },
    cta: {
      eyebrow: 'First step',
      title: 'What is your training for?',
      lead: 'If the answer is not obvious, that is exactly where a first conversation helps.',
    },
  },
  about: {
    seo: {
      title: 'About: training that can justify itself',
      description: 'An approach where every exercise has a reason, sessions have a single clear aim, and fatigue is never the goal.',
    },
    hero: {
      eyebrow: 'About',
      titleLead: 'Training should be able',
      titleMark: 'to explain itself',
      lead: 'Most plans fall apart because nobody can say what they are for. That question gets answered here before anything else.',
    },
    philosophy: {
      title: 'Deliberate, not busy',
      subtitle: 'Doing more is easy. Doing what matters is the hard part.',
      quote: 'If you cannot say why an exercise is in your plan, it should not be in your plan.',
    },
    values: {
      title: 'What guides every choice',
      items: [
        { title: 'Purpose', text: 'Every session has one job it is trying to do.' },
        { title: 'Clarity', text: 'You can explain your own programme to someone else.' },
        { title: 'Restraint', text: 'Cutting an exercise is as useful as adding one.' },
        { title: 'Evidence', text: 'If the aim does not move, the plan changes.' },
      ],
    },
  },
  services: {
    seo: {
      title: 'Services: purposeful one-to-one training',
      description: 'One-to-one sessions in person or online, a written programme and nutrition guidance, each with a clearly defined aim.',
    },
    hero: {
      eyebrow: 'The services',
      titleLead: 'Four formats,',
      titleMark: 'each with a clear job',
      lead: 'Whichever you pick, you will know what it is for before you start.',
    },
  },
  booking: {
    seo: {
      title: 'Booking: set the aim first',
      description: 'Book a first session to define what your training is actually for, then build from there.',
    },
    hero: {
      eyebrow: 'Booking',
      titleLead: 'Start by deciding',
      titleMark: 'what this is for',
      lead: 'The first session sets the aim. Everything after that is built to serve it.',
    },
  },
  contact: {
    seo: {
      title: 'Contact: ask what your training should aim at',
      description: 'Get in touch to work out what your training is for and which format serves that best.',
    },
    hero: {
      eyebrow: 'Contact',
      titleLead: 'Not sure what',
      titleMark: 'to aim at?',
      lead: 'Tell us what you would like to change, and we will tell you what the training should target first.',
    },
  },
};

export const overrides: Record<string, unknown> = mergeCopy(enCopy, siteCopy) as unknown as Record<string, unknown>;
