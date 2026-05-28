import type { PictureContent } from '../types/tab';
import winnie from '@/assets/images/private/winnie.jpg';
import agilySetup from '@/assets/images/agily/setup.png';
import agilyPoussin from '@/assets/images/agily/poussin.png';
import agilyPhoto1 from '@/assets/images/agily/photo-1.jpg';
import agilyPhoto2 from '@/assets/images/agily/photo-2.jpg';

export const pictures: PictureContent[] = [
  {
    id: 'winnie',
    icon: winnie,
    src: winnie,
    name: 'Mon doudou Winnie',
  },
  {
    id: 'agily-setup',
    icon: agilySetup,
    src: agilySetup,
    name: 'Mon setup chez Agily',
  },
  {
    id: 'agily-poussin',
    icon: agilyPoussin,
    src: agilyPoussin,
    name: "Le poussin d'Agily",
  },
  {
    id: 'agily-photo-1',
    icon: agilyPhoto1,
    src: agilyPhoto1,
    name: 'Photo 1',
  },
  {
    id: 'agily-photo-2',
    icon: agilyPhoto2,
    src: agilyPhoto2,
    name: 'Photo 2',
  },
];
