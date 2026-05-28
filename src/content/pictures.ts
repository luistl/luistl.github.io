import type { PictureContent } from '../types/tab';
import winnie from '@/assets/images/private/winnie.jpg';
import agilySetup from '@/assets/images/agily/setup.png';
import agilyPoussin from '@/assets/images/agily/poussin.png';
import agilyPhoto1 from '@/assets/images/agily/photo-1.jpg';
import agilyPhoto2 from '@/assets/images/agily/photo-2.jpg';
import betlensOverview from '@/assets/images/betlens/overview.png';
import betlensSync from '@/assets/images/betlens/synchronisation.png';
import betlensFilters from '@/assets/images/betlens/filters.png';

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
  {
    id: 'betlens-overview',
    icon: betlensOverview,
    src: betlensOverview,
    name: "Vue d'ensemble",
  },
  {
    id: 'betlens-synchronisation',
    icon: betlensSync,
    src: betlensSync,
    name: 'Synchronisation des paris',
  },
  {
    id: 'betlens-filters',
    icon: betlensFilters,
    src: betlensFilters,
    name: 'Filtres',
  },
];
