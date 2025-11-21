export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    id: 'web-dev',
    title: 'Web Development',
    description: 'Modern, secure, and fast websites that reflect your brand and meet performance standards.',
    icon: 'globe',
  },
  {
    id: 'mobile-dev',
    title: 'Mobile Development',
    description: 'Reliable, user-centric apps for iOS and Android that expand your reach.',
    icon: 'smartphone',
  },
  {
    id: 'integrations',
    title: 'System Integrations',
    description: 'Seamless integrations and automated data flows across your tools and platforms.',
    icon: 'network',
  },
  {
    id: 'web-apps',
    title: 'Web Applications & Systems',
    description: 'Custom, scalable applications built around your unique workflows.',
    icon: 'layout',
  },
  {
    id: 'consultation',
    title: 'Consultation & Strategy',
    description: 'From discovery to delivery, we guide your roadmap with practical, measurable steps.',
    icon: 'lightbulb',
  },
  {
    id: 'training',
    title: 'Training & Support',
    description: 'Enable your team with best practices, tooling, and ongoing technical support.',
    icon: 'users',
  },
];
