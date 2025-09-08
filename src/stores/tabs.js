import { reactive } from 'vue'
import terminal from '../assets/images/terminal.png'
import folder from '../assets/images/folder.png'
import note from '../assets/images/note.png'
import trash from '../assets/images/trash.png'
import github from '../assets/images/github.png'
import linkedin from '../assets/images/linkedin.png'
import mail from '../assets/images/mail.png'
import cv from '../assets/images/cv.pdf'
import cvIcon from '../assets/images/cv-icon.png'

// AGILY
import agilySetup from '../assets/images/agily/setup.png'
import agilyPoussin from '../assets/images/agily/poussin.png'
import agilyPhoto1 from '../assets/images/agily/photo-1.jpg'
import agilyPhoto2 from '../assets/images/agily/photo-2.jpg'
import agilyPhoto3 from '../assets/images/agily/photo-3.jpg'

// PRIVATE
import winnie from '../assets/images/private/winnie.jpg'

export const tabsStore = reactive({
  state: {
    selectedTab: 'terminal',
    apps: [
      {
        id: 'terminal',
        icon: terminal,
        name: 'Le gentil terminal de Luis',
        isOpened: true,
        isMinimized: false,
        isFullscreen: false,
        previousWidth: 600,
        width: 600,
        previousHeight: 400,
        height: 400,
        x: 200,
        y: 150,
      },
    ],
    folders: [
      {
        id: 'personal',
        icon: folder,
        name: 'À propos de moi',
        isOpened: false,
        isMinimized: false,
        isFullscreen: false,
        previousWidth: 600,
        width: 600,
        previousHeight: 400,
        height: 400,
        x: 100,
        y: 100,
        files: [
          'note-aboutme',
          'mail',
          'github',
          'linkedin',
          'cv',
        ],
      },
      {
        id: 'experiences',
        icon: folder,
        name: 'Mes expériences',
        isOpened: false,
        isMinimized: false,
        isFullscreen: false,
        previousWidth: 600,
        width: 600,
        previousHeight: 400,
        height: 400,
        x: 100,
        y: 100,
        files: [
          'agily',
          'agilbox'
        ],
      },
      {
        id: 'projects',
        icon: folder,
        name: 'Mes projets',
        isOpened: false,
        isMinimized: false,
        isFullscreen: false,
        previousWidth: 600,
        width: 600,
        previousHeight: 400,
        height: 400,
        x: 100,
        y: 100,
        files: [
          'note-projects',
          'github',
        ],
      },
      {
        id: 'agily',
        icon: folder,
        name: 'Agily',
        isOpened: false,
        isMinimized: false,
        isFullscreen: false,
        previousWidth: 600,
        width: 600,
        previousHeight: 400,
        height: 400,
        x: 120,
        y: 120,
        files: [
          'note-agily',
          'agily-pictures',
        ],
      },
      {
        id: 'agilbox',
        icon: folder,
        name: 'Agilbox',
        isOpened: false,
        isMinimized: false,
        isFullscreen: false,
        previousWidth: 600,
        width: 600,
        previousHeight: 400,
        height: 400,
        x: 120,
        y: 120,
        files: [
          'note-agilbox',
          'agilbox-pictures',
        ],
      },
      {
        id: 'agily-pictures',
        icon: folder,
        name: 'Quelques photos',
        isOpened: false,
        isMinimized: false,
        isFullscreen: false,
        previousWidth: 600,
        width: 600,
        previousHeight: 400,
        height: 400,
        x: 120,
        y: 120,
        files: [
          'agily-photo-1',
          'agily-photo-2',
          'agily-setup',
          'agily-poussin',
          'agily-photo-3',
        ],
      },
      {
        id: 'agilbox-pictures',
        icon: folder,
        name: 'Quelques photos',
        isOpened: false,
        isMinimized: false,
        isFullscreen: false,
        previousWidth: 600,
        width: 600,
        previousHeight: 400,
        height: 400,
        x: 120,
        y: 120,
        files: [
          'agily-photo-1',
          'agily-photo-2',
          'agily-setup',
          'agily-poussin',
          'agily-photo-3',
        ],
      },
      {
        id: 'trash',
        icon: trash,
        name: 'Corbeille',
        isOpened: false,
        isMinimized: false,
        isFullscreen: false,
        previousWidth: 600,
        width: 600,
        previousHeight: 400,
        height: 400,
        x: 120,
        y: 120,
        files: [
          'winnie'
        ],
      }
    ],
    pictures: [
      {
        id: 'winnie',
        icon: winnie,
        src: winnie,
        name: 'Mon doudou Winnie',
        isOpened: false,
        isMinimized: false,
        isFullscreen: false,
        previousWidth: 600,
        width: 600,
        previousHeight: 400,
        height: 400,
        x: 140,
        y: 140,
      },
      {
        id: 'agily-setup',
        icon: agilySetup,
        src: agilySetup,
        name: 'Mon setup chez Agily',
        isOpened: false,
        isMinimized: false,
        isFullscreen: false,
        previousWidth: 600,
        width: 600,
        previousHeight: 400,
        height: 400,
        x: 140,
        y: 140,
      },
      {
        id: 'agily-poussin',
        icon: agilyPoussin,
        src: agilyPoussin,
        name: 'Le poussin d\'Agily',
        isOpened: false,
        isMinimized: false,
        isFullscreen: false,
        previousWidth: 600,
        width: 600,
        previousHeight: 400,
        height: 400,
        x: 140,
        y: 140,
      },
      {
        id: 'agily-photo-1',
        icon: agilyPhoto1,
        src: agilyPhoto1,
        name: 'Photo 1',
        isOpened: false,
        isMinimized: false,
        isFullscreen: false,
        previousWidth: 600,
        width: 600,
        previousHeight: 400,
        height: 400,
        x: 140,
        y: 140,
      },
      {
        id: 'agily-photo-2',
        icon: agilyPhoto2,
        src: agilyPhoto2,
        name: 'Photo 2',
        isOpened: false,
        isMinimized: false,
        isFullscreen: false,
        previousWidth: 600,
        width: 600,
        previousHeight: 400,
        height: 400,
        x: 140,
        y: 140,
      },
      {
        id: 'agily-photo-3',
        icon: agilyPhoto3,
        src: agilyPhoto3,
        name: 'Photo 3',
        isOpened: false,
        isMinimized: false,
        isFullscreen: false,
        previousWidth: 600,
        width: 600,
        previousHeight: 400,
        height: 400,
        x: 140,
        y: 140,
      }
    ],
    notes: [
      {
        id: 'note-aboutme',
        icon: note,
        name: 'Luis Teixeira Lima.txt',
        content: "<div>Hey, <span class='wave'>👋🏼</span></div><div><br></div><div>Je suis Luis Teixeira Lima, un développeur junior de Paris.</div><div>J'ai commencé à coder pour m'amuser, mais désormais j'aimerais faire du code mon métier.</div><div><br></div><div>Actuellement, je suis un étudiant en fin de deuxième année dans le programme Web Development de l'école EPITECH Digital School à Paris.</div><div><br></div><div>Pendant mes cours j'apprends tout pleins de languages mais j'ai aussi tendance à travailler en dehors de l'école.</div><div><br></div><div>Lorsque je ne code pas, j'aime bien jouer aux jeux vidéo comme CS:GO et Minecraft, sortir dehors pour jouer au foot ou encore, manger avec des amis.</div><div><br></div><div>En ce qui concerne mon expérience professionnelle je suis actuellement en recherche d'une alternance qui pourrait commencer idéalement en début du mois de septembre</div><div><br></div><div>N'hésite pas à aller faire un tour dans mes expériences ou encore mes projets, il y a quelques trucs sympas à voir.</div>",
        tmpContent: '',
        isOpened: false,
        isMinimized: false,
        isFullscreen: false,
        previousWidth: 600,
        width: 600,
        previousHeight: 400,
        height: 400,
        x: 160,
        y: 160,
      },
      {
        id: 'note-projects',
        icon: note,
        name: 'Mes projets',
        content: "Pour le moment je n'ai pas vraiment de projets personnels concrets, du moins, ils ne sont pas publics.<div>Mais malgré cela, je m'amuse de temps en temps en dehors du travail ou de l'école à faire quelques projets tel que des bots, des automatisations et pleins d'autres choses sur des sujets qui me passionnent comme le sport et les paris sportifs.</div><div><br></div><div><div>Cependant si vous souhaitez voir un peu de mon code, des exercices que j'ai pu faire lors de mes cours, des scripts ou encore des tutos pour des amis d'école sont trouvables sur mon github.</div><div><br></div></div>",
        tmpContent: '',
        isOpened: false,
        isMinimized: false,
        isFullscreen: false,
        previousWidth: 600,
        width: 600,
        previousHeight: 400,
        height: 400,
        x: 160,
        y: 160,
      },
      {
        id: 'note-agily',
        icon: note,
        name: 'Résumé de mon expérience chez Agily',
        content: "La première entreprise pour laquelle j'ai travaillé dans le monde du web est Agily.<div><br></div><div>Agily c'est une agence web qui a été fondée en 2020 par Stéphane Paillard, Tal Stanislas ainsi que Jean-François Arbona.&nbsp;</div><div><br></div><div>J'ai eu la chance de travailler plusieurs fois pour cette boîte. Lors de mon premier stage, juste après lors d'une période de freelance et lors de mon second stage Agily a été un moteur à ma progression personnelle.</div><div><br></div><div>En plus de mon avancement personnel, Agily possède un très gros confort d'entreprise au niveau matériel ainsi qu'au niveau des employés. Au sein d'Agily l'atmosphère est très bonne et cela m'a permis de me sentir très à l'aise dans le monde du travail.</div><div><br></div><div>Au travers de mes différentes périodes de travail Agily, j'ai eu la chance de travailler sur plusieurs projets.&nbsp;</div><div><br></div><div>Pour terminer, le projet principal sur lequel j'ai travaillé projet est le projet d'Agily eux-mêmes qui ont souhaité recréer un site afin de produire quelque chose de meilleur que ce qu'ils avaient déjà. J'ai donc eu la chance d'avoir la place majeure à la création de ce site.</div>",
        tmpContent: '',
        isOpened: false,
        isMinimized: false,
        isFullscreen: false,
        previousWidth: 600,
        width: 600,
        previousHeight: 400,
        height: 400,
        x: 160,
        y: 160,
      },
            {
        id: 'note-agilbox',
        icon: note,
        name: 'Résumé de mon expérience chez Agilbox',
        content: "<div>J’ai eu l’opportunité de réaliser mon année d’alternance chez Agilbox, une agence web fondée en 2020 par Nicolas Beaume. Cette expérience a été particulièrement enrichissante et m’a permis de développer considérablement mes compétences techniques et professionnelles.</div><div><br></div><div>J’ai eu la chance de travailler aux côtés de mon ancien professeur Emir Azaiez, en tant que chef de projet, et de mon ancien camarade d’école Romain Laurent. Cette proximité a créé un climat de confiance et un environnement de travail confortable dès le départ. L’ambiance était excellente, et Emir nous a accordé une grande autonomie sur les projets, ce qui m’a permis de progresser rapidement et d’explorer pleinement mes capacités.</div><div><br></div><div>Au cours de cette année, j’ai principalement travaillé sur la partie back-end, en particulier sur le développement d’API, tout en intervenant ponctuellement sur le front-end. Mon collègue Romain, quant à lui, se concentrait davantage sur le front, tout en ayant également l’occasion de travailler sur le back. Cette complémentarité a favorisé une excellente collaboration et de nombreux moments mémorables, notamment lors de notre déplacement professionnel en Tunisie.</div><div><br></div><div>Parmi les projets sur lesquels j’ai pu contribuer, on peut citer :</div><div><br></div><div>- Le développement de l’application mobile d’une banque en ligne.<br></div><div>- La conception d’une plateforme de modélisation de maisons sur carte interactive pour une ville futuriste à Dubaï, destinée à préparer la commercialisation des habitations.<br></div><div>- Le travail sur le framework back-end interne, que j’ai utilisé et enrichi tout au long de mon alternance.</div><div><br></div><div>Cette expérience reste à ce jour l’une des plus marquantes de mon parcours. Elle m’a permis de renforcer mes compétences techniques, de gagner en autonomie et de collaborer sur des projets ambitieux. Je tiens à remercier Emir Azaiez et Romain Laurent pour leur accompagnement et les précieux souvenirs partagés durant cette année.</div>",
        isOpened: false,
        isMinimized: false,
        isFullscreen: false,
        previousWidth: 600,
        width: 600,
        previousHeight: 400,
        height: 400,
        x: 160,
        y: 160,
      },
    ],
    links: [
      {
        id: 'github',
        icon: github,
        name: 'Github',
        url: 'https://github.com/louwiis',
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
    ]
  },

  getTabById(id) {
    const tabs = [
      ...this.state.apps,
      ...this.state.folders,
      ...this.state.pictures,
      ...this.state.notes,
      ...this.state.links,
    ]

    return tabs.find((tab) => tab.id === id)
  },

  getAllTabs() {
    return [
      ...this.state.apps,
      ...this.state.folders,
      ...this.state.pictures,
      ...this.state.notes,
    ]
  },

  getActiveTabs() {
    return this.getAllTabs().filter((tab) => tab.isOpened || tab.isMinimized)
  },

  openTab(id) {
    const tab = this.getAllTabs().find((tab) => tab.id === id);
    
    tab.isOpened = true
    tab.isMinimized = false
    this.selectTab(id)
  },
    
  closeTab(id) {
    const tab = this.getAllTabs().find((tab) => tab.id === id);

    tab.isOpened = false

    if (tab.tmpContent) {
      tab.content = tab.tmpContent
    }
  },

  minimizeTab(id) {
    const tab = this.getAllTabs().find((tab) => tab.id === id)
    
    tab.isMinimized = !tab.isMinimized
  },

  fullscreenTab(id) {
    const tab = this.getAllTabs().find((tab) => tab.id === id)

    tab.isFullscreen = !tab.isFullscreen

    if (tab.isFullscreen) {
      tab.previousWidth = tab.width
      tab.previousHeight = tab.height
      tab.width = window.innerWidth
      tab.height = window.innerHeight
    } else {
      tab.width = tab.previousWidth
      tab.height = tab.previousHeight
    }
  },

  updateSize(id, data) {
    const tab = this.getAllTabs().find((tab) => tab.id === id)

    tab.width = data.width
    tab.height = data.height
  },

  updatePosition(id, data) {
    const tab = this.getAllTabs().find((tab) => tab.id === id)

    tab.x = data.x
    tab.y = data.y
  },

  selectTab(id) {
    this.state.selectedTab = id
  },

  closeSelectedTab() {
    this.closeTab(this.state.selectedTab)
  },

  updateNoteContent(id, content) {
    const note = this.state.notes.find((note) => note.id === id)

    note.tmpContent = content
  }
});

export default tabsStore;