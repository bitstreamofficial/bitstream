export const SITE_CONFIG = {
  name: 'BitStream',
  tagline: 'Building scalable mobile & web solutions',
  description:
    'BitStream specializes in building scalable mobile and web solutions that help businesses grow and succeed.',
  url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  email: 'official.bitstream@gmail.com',
  social: {
    twitter: '@bitstream',
    github: 'https://github.com/bitstream',
    linkedin: 'https://linkedin.com/company/bitstream',
  },
};

export const SAMPLE_PROJECTS = [
  'Litaria',
  'BEMS',
  'DIU BusBuddy',
  'ScheduLearn',
  'DIU LeaderBoard',
];

export const SERVICES = [
  {
    id: 'web-development',
    name: 'Web Development',
    description: 'Custom web applications built with modern technologies',
  },
  {
    id: 'mobile-development',
    name: 'Mobile Development',
    description: 'Native and cross-platform mobile applications',
  },
  {
    id: 'backend-development',
    name: 'Backend Development',
    description: 'Scalable backend solutions and APIs',
  },
  {
    id: 'devops',
    name: 'DevOps & Deployment',
    description: 'CI/CD pipelines and cloud infrastructure',
  },
];

export const TECH_STACK = {
  frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js'],
  backend: ['Node.js', 'Express.js', 'Python', 'PostgreSQL', 'MongoDB'],
  mobile: ['React Native', 'iOS', 'Android', 'Flutter'],
  cloud: ['AWS', 'Vercel', 'Docker', 'Kubernetes'],
  tools: ['Git', 'Jest', 'Cypress', 'ESLint', 'Prettier'],
};

export const CONTACT_INFO = {
  email: 'official.bitstream@gmail.com',
  responseTime: 'Within 24 hours',
  availability: '24/7 Support',
};
