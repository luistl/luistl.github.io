import type { FolderContent } from '../types/tab';
import folder from '@/assets/images/folder.png';
import trash from '@/assets/images/trash.png';

export const folders: FolderContent[] = [
  {
    id: 'personal',
    icon: folder,
    name: 'À propos de moi',
    files: ['note-aboutme', 'mail', 'github', 'linkedin', 'cv'],
  },
  {
    id: 'experiences',
    icon: folder,
    name: 'Mes expériences',
    files: ['agily', 'agilbox'],
  },
  {
    id: 'projects',
    icon: folder,
    name: 'Mes projets',
    files: ['note-projects', 'github'],
  },
  {
    id: 'agily',
    icon: folder,
    name: 'Agily',
    files: ['note-agily', 'agily-pictures'],
  },
  {
    id: 'agilbox',
    icon: folder,
    name: 'Agilbox',
    files: ['note-agilbox', 'agilbox-pictures'],
  },
  {
    id: 'agily-pictures',
    icon: folder,
    name: 'Quelques photos',
    files: ['agily-photo-1', 'agily-setup', 'agily-poussin', 'agily-photo-2'],
  },
  {
    id: 'agilbox-pictures',
    icon: folder,
    name: 'Quelques photos',
    files: [],
  },
  {
    id: 'trash',
    icon: trash,
    name: 'Corbeille',
    files: ['winnie'],
  },
];
