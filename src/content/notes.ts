import type { NoteContent } from '../types/tab';
import note from '@/assets/images/note.png';

const aboutMe = `<div>Hey, <span class='wave'>👋🏼</span></div>
<div><br></div>
<div>Je suis Luis Teixeira Lima, développeur full-stack basé à Paris.</div>
<div>J'ai commencé à coder pour m'amuser, et c'est aujourd'hui devenu mon métier.</div>
<div><br></div>
<div>Orienté JavaScript (React, Node.js, TypeScript), je suis à l'aise aussi bien sur le front que sur le back et j'aime concevoir des applications web et mobile complètes. J'ai aussi l'habitude de monter rapidement sur une nouvelle stack.</div>
<div><br></div>
<div>Côté formation, j'ai suivi un Bachelor Web Development à Epitech Digital School puis à l'IIM, en parallèle de mes expériences en entreprise.</div>
<div><br></div>
<div>Lorsque je ne code pas, j'aime bien jouer aux jeux vidéo comme CS:GO et Minecraft, sortir dehors pour jouer au foot, regarder des séries et des animés (The Walking Dead, One Piece) ou encore manger avec des amis.</div>
<div><br></div>
<div>Après une année d'alternance chez Agilbox, je suis aujourd'hui à la recherche de mon premier CDI pour mettre mes compétences au service de projets concrets.</div>
<div><br></div>
<div>N'hésite pas à aller faire un tour dans mes expériences ou encore mes projets, il y a quelques trucs sympas à voir.</div>`;

const projects = `J'aime bien bricoler des projets en dehors du travail et de l'école, souvent autour de sujets qui me passionnent comme le sport et les paris sportifs.
<div><br></div>
<div>Mon projet principal du moment, c'est BetLens, un outil de suivi et d'analyse de paris sportifs (tu trouveras sa fiche juste à côté).</div>
<div><br></div>
<div>À côté de ça, je m'amuse régulièrement avec des bots, des scripts d'automatisation et pleins d'autres petites expérimentations.</div>
<div><br></div>
<div>Et si tu souhaites voir un peu de mon code, des exercices que j'ai pu faire lors de mes cours, des scripts ou encore des tutos pour des amis d'école sont trouvables sur mon github.</div>
<div><br></div>`;

const asquinas = `As Quinas, c'est mon aventure en freelance la plus longue : je m'en occupe depuis janvier 2023.
<div><br></div>
<div>Il s'agit d'asquinas.fr, un média d'actualité dédié au football lusophone, qui réunit aujourd'hui entre 50 000 et 150 000 pages vues par mois.</div>
<div><br></div>
<div>J'ai construit et je continue de maintenir le site autour d'une architecture SSR/SSG, avec la création et la gestion de ses API et de sa base de données.</div>
<div><br></div>
<div>Une grosse partie du travail porte aussi sur le SEO : mise en place du schema NewsArticle et d'un Sitemap News pour bien figurer sur Google Actualités, ce qui est essentiel pour un média.</div>
<div><br></div>
<div>C'est un projet qui me tient à cœur, à la croisée de deux choses que j'adore : le code et le football.</div>`;

const sunday = `Chez Sunday, j'ai réalisé une mission en freelance entre septembre 2024 et janvier 2025.
<div><br></div>
<div>Mon rôle était centré sur la donnée : recherche et structuration de données, scraping et automatisation via des scripts, puis préparation de l'import vers Salesforce.</div>
<div><br></div>
<div>Une mission courte mais très concrète, qui m'a confronté à de vraies problématiques de qualité et de normalisation de données.</div>`;

const betlens = `BetLens, c'est mon projet personnel du moment, et celui dont je suis le plus fier.
<div><br></div>
<div>L'idée : un outil de suivi et d'analyse de paris sportifs qui centralise toute l'activité répartie sur plusieurs bookmakers. On y retrouve sa bankroll, ses gains et pertes, ses statistiques de rentabilité et sa courbe de performance.</div>
<div><br></div>
<div>Le cœur technique, c'est l'import automatique depuis plusieurs plateformes (Winamax, Unibet, Betclic) : du scraping suivi d'une normalisation de données très hétérogènes pour les ramener à un format unifié. Le solde et les indicateurs sont ensuite recalculés en temps réel.</div>
<div><br></div>
<div>Côté stack : React, TypeScript, Node.js et PostgreSQL, avec un suivi en production via des webhooks Discord.</div>
<div><br></div>
<div>Le projet est actuellement en bêta avec quelques testeurs, et une v1 arrive bientôt !</div>`;

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
<div>Pour terminer, le projet principal sur lequel j'ai travaillé est le site d'Agily eux-mêmes : ils souhaitaient repartir de zéro pour proposer quelque chose de meilleur que ce qu'ils avaient déjà, et j'ai eu la chance d'occuper une place majeure dans la création de ce nouveau site (intégration web, SSR/SSG, création et gestion d'API, base de données).</div>
<div><br></div>
<div>Agily a depuis fermé ses portes, mais cette expérience reste l'une des étapes clés de mes débuts dans le web.</div>`;

const agilbox = `<div>J'ai eu l'opportunité de réaliser mon année d'alternance chez Agilbox, une agence web fondée en 2020 par Nicolas Beaume. Cette expérience a été particulièrement enrichissante et m'a permis de développer considérablement mes compétences techniques et professionnelles.</div>
<div><br></div>
<div>J'ai eu la chance de travailler aux côtés de mon ancien professeur Emir Azaiez, en tant que chef de projet, et de mon ancien camarade d'école Romain Laurent. Cette proximité a créé un climat de confiance et un environnement de travail confortable dès le départ. L'ambiance était excellente, et Emir nous a accordé une grande autonomie sur les projets, ce qui m'a permis de progresser rapidement et d'explorer pleinement mes capacités.</div>
<div><br></div>
<div>Au cours de cette année, j'ai principalement travaillé sur la partie back-end, en particulier sur le développement d'API, tout en intervenant ponctuellement sur le front-end. Mon collègue Romain, quant à lui, se concentrait davantage sur le front, tout en ayant également l'occasion de travailler sur le back. Cette complémentarité a favorisé une excellente collaboration et de nombreux moments mémorables, notamment lors de notre déplacement professionnel en Tunisie.</div>
<div><br></div>
<div>Parmi les projets sur lesquels j'ai pu contribuer, on peut citer :</div>
<div><br></div>
<div>- Masraf : le développement de l'application mobile d'une banque en ligne, en binôme, où j'étais principalement sur le back-end (~80 %) tout en touchant au front.<br></div>
<div>- Ledar : la conception du back-end d'une plateforme web centralisant les données de différents CMS/CRM (WordPress, etc.) vers une base unifiée, avec une carte interactive (Leaflet) affichant le plan d'un projet urbain en Arabie Saoudite.<br></div>
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
  {
    id: 'note-asquinas',
    icon: note,
    name: 'Résumé de mon expérience chez As Quinas',
    content: asquinas,
  },
  {
    id: 'note-sunday',
    icon: note,
    name: 'Résumé de mon expérience chez Sunday',
    content: sunday,
  },
  {
    id: 'note-betlens',
    icon: note,
    name: 'BetLens',
    content: betlens,
  },
];
