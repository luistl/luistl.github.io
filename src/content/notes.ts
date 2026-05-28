import type { NoteContent } from '../types/tab';
import note from '@/assets/images/note.png';

const aboutMe = `<div>Hey, <span class='wave'>👋🏼</span></div>
<div><br></div>
<div>Je suis Luis Teixeira Lima, un développeur junior de Paris.</div>
<div>J'ai commencé à coder pour m'amuser, mais désormais j'aimerais faire du code mon métier.</div>
<div><br></div>
<div>Actuellement, je suis un étudiant en fin de deuxième année dans le programme Web Development de l'école EPITECH Digital School à Paris.</div>
<div><br></div>
<div>Pendant mes cours j'apprends tout pleins de languages mais j'ai aussi tendance à travailler en dehors de l'école.</div>
<div><br></div>
<div>Lorsque je ne code pas, j'aime bien jouer aux jeux vidéo comme CS:GO et Minecraft, sortir dehors pour jouer au foot ou encore, manger avec des amis.</div>
<div><br></div>
<div>En ce qui concerne mon expérience professionnelle je suis actuellement en recherche d'une alternance qui pourrait commencer idéalement en début du mois de septembre</div>
<div><br></div>
<div>N'hésite pas à aller faire un tour dans mes expériences ou encore mes projets, il y a quelques trucs sympas à voir.</div>`;

const projects = `Pour le moment je n'ai pas vraiment de projets personnels concrets, du moins, ils ne sont pas publics.
<div>Mais malgré cela, je m'amuse de temps en temps en dehors du travail ou de l'école à faire quelques projets tel que des bots, des automatisations et pleins d'autres choses sur des sujets qui me passionnent comme le sport et les paris sportifs.</div>
<div><br></div>
<div>Cependant si vous souhaitez voir un peu de mon code, des exercices que j'ai pu faire lors de mes cours, des scripts ou encore des tutos pour des amis d'école sont trouvables sur mon github.</div>
<div><br></div>`;

const agily = `La première entreprise pour laquelle j'ai travaillé dans le monde du web est Agily.
<div><br></div>
<div>Agily c'est une agence web qui a été fondée en 2020 par Stéphane Paillard, Tal Stanislas ainsi que Jean-François Arbona.&nbsp;</div>
<div><br></div>
<div>J'ai eu la chance de travailler plusieurs fois pour cette boîte. Lors de mon premier stage, juste après lors d'une période de freelance et lors de mon second stage Agily a été un moteur à ma progression personnelle.</div>
<div><br></div>
<div>En plus de mon avancement personnel, Agily possède un très gros confort d'entreprise au niveau matériel ainsi qu'au niveau des employés. Au sein d'Agily l'atmosphère est très bonne et cela m'a permis de me sentir très à l'aise dans le monde du travail.</div>
<div><br></div>
<div>Au travers de mes différentes périodes de travail Agily, j'ai eu la chance de travailler sur plusieurs projets.&nbsp;</div>
<div><br></div>
<div>Pour terminer, le projet principal sur lequel j'ai travaillé projet est le projet d'Agily eux-mêmes qui ont souhaité recréer un site afin de produire quelque chose de meilleur que ce qu'ils avaient déjà. J'ai donc eu la chance d'avoir la place majeure à la création de ce site.</div>`;

const agilbox = `<div>J'ai eu l'opportunité de réaliser mon année d'alternance chez Agilbox, une agence web fondée en 2020 par Nicolas Beaume. Cette expérience a été particulièrement enrichissante et m'a permis de développer considérablement mes compétences techniques et professionnelles.</div>
<div><br></div>
<div>J'ai eu la chance de travailler aux côtés de mon ancien professeur Emir Azaiez, en tant que chef de projet, et de mon ancien camarade d'école Romain Laurent. Cette proximité a créé un climat de confiance et un environnement de travail confortable dès le départ. L'ambiance était excellente, et Emir nous a accordé une grande autonomie sur les projets, ce qui m'a permis de progresser rapidement et d'explorer pleinement mes capacités.</div>
<div><br></div>
<div>Au cours de cette année, j'ai principalement travaillé sur la partie back-end, en particulier sur le développement d'API, tout en intervenant ponctuellement sur le front-end. Mon collègue Romain, quant à lui, se concentrait davantage sur le front, tout en ayant également l'occasion de travailler sur le back. Cette complémentarité a favorisé une excellente collaboration et de nombreux moments mémorables, notamment lors de notre déplacement professionnel en Tunisie.</div>
<div><br></div>
<div>Parmi les projets sur lesquels j'ai pu contribuer, on peut citer :</div>
<div><br></div>
<div>- Le développement de l'application mobile d'une banque en ligne.<br></div>
<div>- La conception d'une plateforme de modélisation de maisons sur carte interactive pour une ville futuriste à Dubaï, destinée à préparer la commercialisation des habitations.<br></div>
<div>- Le travail sur le framework back-end interne, que j'ai utilisé et enrichi tout au long de mon alternance.</div>
<div><br></div>
<div>Cette expérience reste à ce jour l'une des plus marquantes de mon parcours. Elle m'a permis de renforcer mes compétences techniques, de gagner en autonomie et de collaborer sur des projets ambitieux. Je tiens à remercier Emir Azaiez et Romain Laurent pour leur accompagnement et les précieux souvenirs partagés durant cette année.</div>`;

export const notes: NoteContent[] = [
  {
    id: 'note-aboutme',
    icon: note,
    name: 'Luis Teixeira Lima.txt',
    content: aboutMe,
  },
  {
    id: 'note-projects',
    icon: note,
    name: 'Mes projets',
    content: projects,
  },
  {
    id: 'note-agily',
    icon: note,
    name: 'Résumé de mon expérience chez Agily',
    content: agily,
  },
  {
    id: 'note-agilbox',
    icon: note,
    name: 'Résumé de mon expérience chez Agilbox',
    content: agilbox,
  },
];
