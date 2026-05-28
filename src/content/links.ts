import type { LinkContent } from '../types/tab';
import github from '@/assets/images/github.png';
import linkedin from '@/assets/images/linkedin.png';
import mail from '@/assets/images/mail.png';
import cv from '@/assets/images/cv.pdf';
import cvIcon from '@/assets/images/cv-icon.png';

export const links: LinkContent[] = [
  {
    id: 'github',
    icon: github,
    name: 'Github',
    url: 'https://github.com/luistl',
  },
  {
    id: 'linkedin',
    icon: linkedin,
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/luis-teixeira-lima-33b580234/',
  },
  {
    id: 'mail',
    icon: mail,
    name: 'Mail',
    url: 'mailto:luis.teixeira-lima@outlook.com',
  },
  {
    id: 'cv',
    icon: cvIcon,
    name: 'CV',
    url: cv,
  },
];
