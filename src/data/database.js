export const drivers = [
  {
    id: 'leclerc', name: 'Charles', surname: 'Leclerc', nationality: 'Monegasque', birthDate: '1997-10-16', number: 16,
    bio: 'Né à Monaco, Charles Leclerc est l’un des talents les plus purs et spectaculaires de la Formule 1 moderne. Après avoir outrageusement dominé les formules de promotion (champion GP3 en 2016 puis F2 en 2017), il dispute sa première saison de F1 avec Alfa Romeo en 2018. Promu chez Ferrari dès l’année suivante, il s’impose rapidement comme le leader naturel de la mythique écurie italienne grâce à sa vitesse fulgurante sur un tour et sa science de la course. Toujours en quête de son premier sacre mondial, Charles Leclerc incarne le grand espoir de Maranello.',
    currentTeamId: 'ferrari', wins: 8, podiums: 58, poles: 26, points: 1687, championships: 0,
    image: '/images/drivers/charles.png'
  },
   {
    id: 'max_verstappen', name: 'Max', surname: 'Verstappen', nationality: 'Dutch', birthDate: '1997-09-30', number: 1,
    bio: 'Fils de l’ancien pilote de F1 Jos Verstappen, Max Verstappen a battu tous les records de précocité en débutant sa carrière à seulement 17 ans chez Toro Rosso. Promu chez Red Bull Racing très rapidement, il remporte sa première victoire dès son premier Grand Prix avec l’équipe. Reconnu pour son pilotage agressif, son talent exceptionnel sous la pluie et sa détermination implacable, le Néerlandais est devenu un véritable rouleau compresseur. Avec quatre titres mondiaux consécutifs récoltés de 2021 à 2024, il a imposé une ère de suprématie absolue en F1.',
    currentTeamId: 'redbull', wins: 71, podiums: 127, poles: 48, points: 3452.5, championships: 4,
    image: '/images/drivers/max.png'
  },
  {
    id: 'hamilton', name: 'Lewis', surname: 'Hamilton', nationality: 'British', birthDate: '1985-01-07', number: 44,
    bio: 'Légende vivante du sport automobile, Sir Lewis Hamilton possède le plus grand palmarès de l’histoire de la Formule 1, détenant les records absolus de victoires, de pole positions et de podiums. Septuple champion du monde, le Britannique a forgé la majeure partie de son immense héritage lors de l’ère hybride avec l’écurie Mercedes. À la fois brillant sous la pression, exceptionnel dans la gestion des pneumatiques et militant engagé pour la diversité, il débute en 2025 un nouveau chapitre retentissant de sa carrière en rejoignant la légendaire Scuderia Ferrari.',
    currentTeamId: 'ferrari', wins: 105, podiums: 202, poles: 104, points: 4800, championships: 7,
    image: '/images/drivers/lewis.png'
  },
  {
    id: 'russell', name: 'George', surname: 'Russell', nationality: 'British', birthDate: '1998-02-15', number: 63,
    bio: 'Véritable pur produit de la filière Mercedes, George Russell a éclaboussé les catégories juniors de son talent en remportant les championnats GP3 et Formule 2 coup sur coup. Après trois saisons d’apprentissage parfois compliquées mais formatrices chez Williams, le Britannique a été promu au sein de l’écurie championne du monde. Souvent qualifié de « Mr. Consistency », Russell brille par son intelligence de course, son incroyable confiance en lui et une vitesse pure qui fait de lui le leader naturel de Mercedes dans cette nouvelle ère.',
    currentTeamId: 'mercedes', wins: 6, podiums: 25, poles: 5, points: 869, championships: 0,
image: '/images/drivers/russel.png'
  },

   {
    id: 'sainz', name: 'Carlos', surname: 'Sainz', nationality: 'Spanish', birthDate: '1994-09-01', number: 55,
    bio: 'Fils de la légende du rallye Carlos Sainz Sr., l’Espagnol s’est bâti une réputation de travailleur acharné et de fin tacticien. Passé par Toro Rosso, Renault et McLaren, c’est chez Ferrari que le « Smooth Operator » a décroché ses premières victoires retentissantes. Reconnu par les ingénieurs pour son retour technique exceptionnel et sa capacité à toujours extraire le maximum d’une monoplace complexe, Carlos Sainz apporte toute son expérience luxueuse et son grand professionnalisme à l’écurie Williams dans son projet de reconstruction à partir de 2025.',
    currentTeamId: 'williams', wins: 4, podiums: 31, poles: 6, points: 1336.5, championships: 0,
    image: '/images/drivers/carlos.png'
  },
  {
    id: 'perez', name: 'Sergio', surname: 'Perez', nationality: 'Mexican', birthDate: '1990-01-26', number: 11,
    bio: 'Surnommé « Checo », le Mexicain Sergio Perez est l’un des vétérans les plus expérimentés de la grille. Longtemps reconnu pour ses qualités exceptionnelles de gestion des pneumatiques, qui lui ont permis de réaliser des miracles en milieu de peloton, il a franchi un cap décisif en rejoignant Red Bull Racing en 2021. Son aide précieuse a notamment permis à Max Verstappen de décrocher son premier titre mondial. Checo Perez se tourne désormais vers un tout nouveau défi historique en devant le pilote d’expérience chargé de guider la nouvelle écurie américaine Cadillac, prévue pour 2026.',
    currentTeamId: 'cadillac', wins: 6, podiums: 39, poles: 3, points: 1604, championships: 0,
    image: '/images/drivers/perez.png'
  },
  {
    id: 'norris', name: 'Lando', surname: 'Norris', nationality: 'British', birthDate: '1999-11-13', number: 4,
    bio: 'Lando Norris allie une vitesse pure sidérante à une personnalité joviale très appréciée du public. Intégré à la famille McLaren dès ses débuts, le Britannique a grandi en même temps que l’écurie de Woking lors de sa reconstruction. En 2024, il remporte la toute première victoire de sa carrière en F1 avant d’accomplir l’exploit ultime : décrocher le titre de Champion du Monde 2025 après une saison d’anthologie. Lando Norris s’impose désormais comme la référence absolue de sa génération, maîtrisant tout autant la qualification que les luttes acharnées en course.',
    currentTeamId: 'mclaren', wins: 11, podiums: 44, poles: 13, points: 1323, championships: 1,
    image: '/images/drivers/lando.png'
  },
  {
    id: 'piastri', name: 'Oscar', surname: 'Piastri', nationality: 'Australian', birthDate: '2001-04-06', number: 81,
    bio: 'L’un des plus beaux palmarès des formules de promotion (champion F3 en 2020 et champion F2 en 2021 dès sa première année), l’Australien Oscar Piastri a fait une entrée fracassante en Formule 1 chez McLaren. D’un calme olympien, analytique et extrêmement mature pour son jeune âge, Piastri a été capable d’enchaîner les victoires impressionnantes en 2024 et 2025. Pièce maîtresse dans la domination globale de McLaren, il représente avec Lando Norris l’un des duos les plus complets et terrifiants du plateau, se positionnant naturellement comme un immense prétendant au trône mondial.',
    currentTeamId: 'mclaren', wins: 9, podiums: 26, poles: 6, points: 799, championships: 0,
    image: '/images/drivers/oscar.png'
  },
  {
    id: 'alonso', name: 'Fernando', surname: 'Alonso', nationality: 'Spanish', birthDate: '1981-07-29', number: 14,
    bio: 'Véritable gladiateur des circuits, l’Espagnol Fernando Alonso a remporté deux titres mondiaux mémorables en 2005 et 2006, mettant fin au règne écrasant de Michael Schumacher. Son pilotage instinctif, son agressivité millimétrée, et son QI de course hors normes en font l’un des plus grands de tous les temps. Malgré le poids des années, sa soif de victoire est restée intacte. Pilier incontestable du projet Aston Martin, l’Asturien continue de repousser les limites de la compétitivité et prouve saison après saison qu’il n’a rien perdu de son coup de volant magistral.',
    currentTeamId: 'astonmartin', wins: 32, podiums: 106, poles: 22, points: 2308, championships: 2,
    image: '/images/drivers/fernando.png'
  },
  {
    id: 'antonelli', name: 'Kimi', surname: 'Antonelli', nationality: 'Italian', birthDate: '2006-08-25', number: 12,
    bio: 'Pépite absolue propulsée dès le plus jeune âge par le giron Mercedes, Andrea Kimi Antonelli est perçu comme l’un des talents bruts les plus phénoménaux depuis Max Verstappen. L’Italien a grillé les étapes avec une aisance déconcertante en raflant de multiples championnats de promotion à une vitesse record. Lançant officiellement sa carrière en F1 au volant de la Mercedes pour pallier le départ historique de Lewis Hamilton, Antonelli concentre sur lui d’immenses attentes. Une vitesse innée alliée à un style fluide et agressif sont sa marque de fabrique.',
    currentTeamId: 'mercedes', wins: 0, podiums: 0, poles: 0, points: 0, championships: 0,
    image: '/images/drivers/kimi.png'
  },
  {
    id: 'gasly', name: 'Pierre', surname: 'Gasly', nationality: 'French', birthDate: '1996-02-07', number: 10,
    bio: 'Vainqueur inoubliable du Grand Prix d’Italie 2020 avec AlphaTauri, Pierre Gasly est un pilote passionné et déterminé. Après de longues années au sein de la famille Red Bull, le Français au coup de volant aiguisé a pris la lourde responsabilité d’emmener la structure Alpine, l’équipe nationale française. Excellent en qualification et résilient dans l’adversité, il est souvent capable de maximiser le potentiel de sa monoplace lors des courses à haut rythme pour aller décrocher de gros points.',
    currentTeamId: 'alpine', wins: 1, podiums: 5, poles: 0, points: 400, championships: 0,
    image: '/images/drivers/gasly.png'
  },
  {
    id: 'ocon', name: 'Esteban', surname: 'Ocon', nationality: 'French', birthDate: '1996-09-17', number: 31,
    bio: 'Pilote combatif et roc de la défense, Esteban Ocon – qui a notamment remporté le Grand Prix de Hongrie 2021 – ne lâche jamais sa position. Formé dans l’exigence et à la dure, le Français est connu pour être un adversaire féroce qui donne des sueurs froides lorsqu’on tente de le doubler. À la recherche constante d’un nouveau souffle et d’un projet motivant, il a quitté l’équipe Alpine pour apporter son immense expérience et son tranchant au développement de la structure américaine Haas F1 Team.',
    currentTeamId: 'haas', wins: 1, podiums: 4, poles: 0, points: 450, championships: 0,
    image: '/images/drivers/esteban.png'
  },
  {
    id: 'stroll', name: 'Lance', surname: 'Stroll', nationality: 'Canadian', birthDate: '1998-10-29', number: 18,
    bio: 'Fils du propriétaire de l’écurie Aston Martin (Lawrence Stroll), Lance endure de nombreuses critiques, mais a souvent démontré un réel talent brut, particulièrement redoutable lorsque les conditions de piste deviennent humides ou changeantes. Ayant la poignée de pole position et de podiums à son actif, le Canadien connaît l’équipe de Silverstone sur le bout des doigts. Aligné aux côtés de son mentor Fernando Alonso, Lance sait être très rapide lors de ses bons jours et participe au développement intensif d’Aston Martin.',
    currentTeamId: 'astonmartin', wins: 0, podiums: 3, poles: 1, points: 300, championships: 0,
    image: '/images/drivers/stroll.png'
  },
  {
    id: 'bottas', name: 'Valtteri', surname: 'Bottas', nationality: 'Finnish', birthDate: '1989-08-28', number: 77,
    bio: 'Durant cinq intenses saisons chez Mercedes aux côtés de Lewis Hamilton, Valtteri Bottas a amassé dix victoires et des dizaines de podiums, se forgeant le caractère d’un lieutenant modèle et un spécialiste redoutable des qualifications, particulièrement à l’aise sur certains circuits urbains et glissants. Après avoir porté le projet Sauber, le Finlandais au visage serein (et grand amateur de cyclisme) endosse le costume du meneur chevronné, devenant en 2026 le pilote phare de la grande aventure américaine Cadillac en F1.',
    currentTeamId: 'cadillac', wins: 10, podiums: 67, poles: 20, points: 1797, championships: 0,
    image: '/images/drivers/bottas.png'
  },
  {
    id: 'zhou', name: 'Guanyu', surname: 'Zhou', nationality: 'Chinese', birthDate: '1999-05-30', number: 24,
    bio: 'Pionnier absolu pour son pays, Guanyu Zhou est entré dans l’Histoire en devenant le tout premier pilote chinois à prendre le départ (et à marquer des points) lors d’un Grand Prix de Formule 1. Souvent salué par l’équipe technique pour son approche posée, son esprit rationnel et son souci du détail pneumatique, il a montré une constance admirable lors de ses passages délicats chez Sauber, s’avérant être un pilote de milieu de tableau extrêmement propre en évitant les accrochages.',
    currentTeamId: 'sauber', wins: 0, podiums: 0, poles: 0, points: 12, championships: 0,
    image: '/images/drivers/zhou.png'
  },
  {
    id: 'magnussen', name: 'Kevin', surname: 'Magnussen', nationality: 'Danish', birthDate: '1992-10-05', number: 20,
    bio: 'Le Danois Kevin Magnussen – surnommé « K-Mag » – incarne l’archétype parfait du compétiteur teigneux, intrépide, et dur à cuir en piste. Doté d’un franc-parler légendaire, K-Mag ne recule devant rien lors des départs et affectionne le contact roue contre roue. C’est autour de son expérience et de ses folles performances isolées (comme son incroyable pole position au Brésil) que la tumultueuse écurie américaine Haas a pu écrire ses plus vibrants chapitres en F1, avant qu’il n’envisage les autres options de sa carrière.',
    currentTeamId: 'haas', wins: 0, podiums: 1, poles: 1, points: 190, championships: 0,
    image: '/images/drivers/magnussen.png'
  },
  {
    id: 'hulkenberg', name: 'Nico', surname: 'Hulkenberg', nationality: 'German', birthDate: '1987-08-19', number: 27,
    bio: 'Surnommé « Hülk », Nico Hülkenberg est l’un des pilotes les plus cotés du milieu de grille. Réputé pour son excellence absolue le samedi lors des qualifications et sa capacité unique à tirer l’essence même d’une monoplace récalcitrante, l’Allemand possède cependant le fâcheux record du plus grand nombre de départs sans jamais signer de podium. Sa fantastique régularité lui a néanmoins permis de décrocher le siège tant convoité du grand retour formel d’Audi Sport en F1 en tant que pilote d’usine.',
    currentTeamId: 'sauber', wins: 0, podiums: 0, poles: 1, points: 540, championships: 0,
    image: '/images/drivers/hulkenberg.png'
  },
  {
    id: 'tsunoda', name: 'Yuki', surname: 'Tsunoda', nationality: 'Japanese', birthDate: '2000-05-11', number: 22,
    bio: 'Connu à ses débuts pour ses accès de colère bouillonnants à la radio et sa redoutable ferveur, Yuki Tsunoda a considérablement gagné en maturité avec les années. Rapide comme l’éclair, le pilote japonais soutenu par Honda est devenu un leader d’équipe extrêmement constant chez AlphaTauri/Racing Bulls. En récompense de sa solidité, il a touché à son but ultime avec une chance au volant de l’écurie-mère Red Bull Racing lors de la difficile saison 2025, affichant sans complexe son grand talent de battant.',
    currentTeamId: 'redbull', wins: 0, podiums: 0, poles: 0, points: 80, championships: 0,
    image: '/images/drivers/tsunoda.png'
  },
  {
    id: 'ricciardo', name: 'Daniel', surname: 'Ricciardo', nationality: 'Australian', birthDate: '1989-07-01', number: 3,
    bio: 'Le « Honey Badger », véritable soleil des paddocks, a marqué de nombreuses années de la F1 avec son légendaire sourire XXL (souvent accompagné de « shoeys » mémorables sur le podium) et, surtout, grâce à ses plongées au freinage époustouflantes surnommées « divebombs ». Vainqueur en Grands Prix avec Red Bull, spectaculaire gagnant à Monza avec McLaren, l’Australien Daniel Ricciardo a connu un retour romantique mais parsemé d’embûches en tant que membre précieux de la famille Red Bull.',
    currentTeamId: 'rb', wins: 8, podiums: 32, poles: 3, points: 1317, championships: 0,
    image: '/images/drivers/ricciardo.png'
  },
  {
    id: 'albon', name: 'Alexander', surname: 'Albon', nationality: 'Thai', birthDate: '1996-03-23', number: 23,
    bio: 'Alexander Albon a su forger l’une des plus belles « histoires de rédemption » du championnat. Retiré prématurément de son volant chez Red Bull après un passage brutal aux côtés de Verstappen, le pilote thaïlandais est revenu couteau entre les dents. Leader et développeur acharné au sein de l’iconique structure Williams Racing, « Albono » est reconnu pour accomplir des miracles en allongeant démesurément les relais en gommes dures afin de grappiller des points vitaux face aux écuries d’usine.',
    currentTeamId: 'williams', wins: 0, podiums: 2, poles: 0, points: 240, championships: 0,
    image: '/images/drivers/albon.png'
  },
  {
    id: 'sargeant', name: 'Logan', surname: 'Sargeant', nationality: 'American', birthDate: '2000-12-31', number: 2,
    bio: 'Seul représentant régulier de la bannière étoilée sur la grille de départ ces dernières années (jusqu’à l’arrivée des nouveaux projets), l’Américain Logan Sargeant est passé par l’académie de jeunes pilotes de l’écurie Williams. Pilote très discret qui manquait souvent de rythme le dimanche par rapport à son coéquipier, il a malgré tout eu le privilège de rouler durant plusieurs saisons, marquant symboliquement l’histoire moderne de son pays avec un point obtenu à domicile au GP d’Austin.',
    currentTeamId: 'williams', wins: 0, podiums: 0, poles: 0, points: 1, championships: 0,
    image: '/images/drivers/logan.png'
  },
  {
    id: 'colapinto', name: 'Franco', surname: 'Colapinto', nationality: 'Argentine', birthDate: '2003-05-27', number: 43,
    bio: 'Génie brut du sport automobile sud-américain, l’Argentin Franco Colapinto a pris le monde de la F1 totalement par surprise lors de son arrivée à mi-saison chez Williams. Faisant preuve d’une audace spectaculaire (avec des manœuvres osées repoussant les vétérans), d’un contrôle au volant clinique et d’un calme olympien face à la pression, l’Argentin a très vite attiré l’œil de tous les dirigeants avant de sécuriser pour l’avenir un contrat juteux avec la structure française Alpine.',
    currentTeamId: 'alpine', wins: 0, podiums: 0, poles: 0, points: 10, championships: 0,
    image: '/images/drivers/colapinto.png'
  },
  {
    id: 'bortoleto', name: 'Gabriel', surname: 'Bortoleto', nationality: 'Brazilian', birthDate: '2004-10-14', number: 88,
    bio: 'Fidèle à l’héritage flamboyant des as brésiliens de la Formule 1, le phénomène Gabriel Bortoleto a séduit l’Europe en remportant consécutivement la Formule 3 mondiale puis la cruelle Formule 2. Ce protégé bien encadré (notamment par l’entourage de Fernando Alonso) associe une agressivité typiquement sud-américaine avec une incroyable constance cérébrale. C’est tout naturellement qu’il rejoint un autre cador (Hülkenberg) pour bâtir les solides fondations du grand projet Audi/Sauber, ravivant les espoirs de toute une nation.',
    currentTeamId: 'sauber', wins: 0, podiums: 0, poles: 0, points: 0, championships: 0,
    image: '/images/drivers/bortoleto.png'
  },
  {
    id: 'bearman', name: 'Oliver', surname: 'Bearman', nationality: 'British', birthDate: '2005-05-08', number: 87,
    bio: 'Pur joyau brillant de bout en bout couvé tendrement par la Ferrari Driver Academy, le Britannique Oliver « Ollie » Bearman a véritablement conquis la planète F1 quand il est entré en trombe pour suppléer Carlos Sainz au pied levé en Arabie Saoudite, signant à la fois les points et les cœurs grâce à un flegme impressionnant. Naturellement adoubé, il a récupéré un baquet titularisé chez Haas, se dessinant comme la superstar programmée que la Scuderia Ferrari observe très intensément pour le futur.',
    currentTeamId: 'haas', wins: 0, podiums: 0, poles: 0, points: 6, championships: 0,
    image: '/images/drivers/bearman.png'
  },
  {
    id: 'doohan', name: 'Jack', surname: 'Doohan', nationality: 'Australian', birthDate: '2003-01-20', number: 12, // assuming 12 or 7, let's say 7 is free? no
    bio: 'Fils de la quadruple légende de la moto Mick Doohan, l’Australien Jack Doohan s’est tracé son propre destin sur quatre roues. Promu dans le temple Alpine, Doohan a été un immense atout dans le travail obscur de simulateur et de développement au cours d’années complexes, obtenant enfin la juste récompense de son immense labeur en se hissant comme un titulaire en F1, prêt à ramener de l’espoir dans la firme de Dieppe grâce à une rigueur à toute épreuve.',
    currentTeamId: 'alpine', wins: 0, podiums: 0, poles: 0, points: 0, championships: 0,
    image: '/images/drivers/doohan.png'
  },
  {
    id: 'hadjar', name: 'Isack', surname: 'Hadjar', nationality: 'French', birthDate: '2004-09-28', number: 17,
    bio: 'Véritable pépite fulgurante issue de l’école française et membre décisif du Red Bull Junior Team, Isack Hadjar s’est toujours distingué par une fougue magistrale en monoplace. Après une ascension monumentale en Formule 2 ponctuée de dépassements spectaculaires, il s’est vu confier sa chance chez Racing Bulls avant de crever le plafond jusqu’à l’écurie-mère Red Bull Racing. Ce Parisien au caractère sanguin a déjà apposé sa marque au fer rouge en 2025 avec un remarquable podium pour sa première saison.',
    currentTeamId: 'redbull', wins: 0, podiums: 1, poles: 0, points: 15, championships: 0,
    image: '/images/drivers/isack.png'
  },
  {
    id: 'lawson', name: 'Liam', surname: 'Lawson', nationality: 'New Zealander', birthDate: '2002-02-11', number: 30,
    bio: 'Guerrier au style impitoyable venu tout droit de Nouvelle-Zélande, Liam Lawson est la preuve vivante de l’abnégation. Forcé de faire ses preuves un nombre incalculable de fois en Super Formula puis en enchaînant les piges imprévues époustouflantes en F1 chez AlphaTauri/RB, il a clamé haut et fort sa place parmi l’élite. Devenu le leader de l’écurie sœur de Red Bull, c’est avec une pugnacité dévorante (et aucun complexe face aux multiples champions du monde) que le robuste Kiwi impose aujourd’hui sa loi en piste.',
    currentTeamId: 'rb', wins: 0, podiums: 0, poles: 0, points: 2, championships: 0,
    image: '/images/drivers/lawson.png'
  },
  {
    id: 'lindblad', name: 'Arvid', surname: 'Lindblad', nationality: 'British', birthDate: '2007-08-08', number: 8,
    bio: 'Arvid Lindblad est le dernier diamant brut sorti tout droit de l’impitoyable académie autrichienne Red Bull. Malgré sa très grande jeunesse et une accession express où il a sauté des étapes habituellement cruciales, ses données de télémétrie ont terrifié tous ses encadrants. Avec un calme et une soif intarissable d’apprendre, ce jeune prodige britannique aux racines suédoises dispute ses premières joutes majeures en Formule 1 en 2026 à un âge record, dans l’espoir de suivre les illustres traces de Max Verstappen.',
    currentTeamId: 'rb', wins: 0, podiums: 0, poles: 0, points: 0, championships: 0,
    image: '/images/drivers/arvid.png'
  }
];

export const teams = [
  {
    id: 'ferrari', name: 'Scuderia Ferrari', logo: 'https://media.formula1.com/content/dam/fom-website/teams/2024/ferrari-logo.png.transform/2col/image.png',
    country: 'Italy', established: 1950, principal: 'Frederic Vasseur', engine: 'Ferrari',
    history: 'The oldest and most successful team in Formula 1 history. A symbol of motorsport.',
    championships: 16, wins: 245, podiums: 815, poles: 250
  },
  {
    id: 'mercedes', name: 'Mercedes-AMG PETRONAS', logo: 'https://media.formula1.com/content/dam/fom-website/teams/2024/mercedes-logo.png.transform/2col/image.png',
    country: 'Germany', established: 1970, principal: 'Toto Wolff', engine: 'Mercedes',
    history: 'The most dominant force in F1 history during the turbo-hybrid era from 2014 to 2021.',
    championships: 8, wins: 125, podiums: 290, poles: 137
  },
  {
    id: 'redbull', name: 'Oracle Red Bull Racing', logo: 'https://media.formula1.com/content/dam/fom-website/teams/2024/red-bull-racing-logo.png.transform/2col/image.png',
    country: 'Austria', established: 2005, principal: 'Christian Horner', engine: 'Honda RBPT / Ford',
    history: 'Arriving as an energy drinks brand, Red Bull quickly became a dominant powerhouse.',
    championships: 6, wins: 120, podiums: 278, poles: 103
  },
  {
    id: 'mclaren', name: 'McLaren Formula 1 Team', logo: 'https://media.formula1.com/content/dam/fom-website/teams/2024/mclaren-logo.png.transform/2col/image.png',
    country: 'United Kingdom', established: 1966, principal: 'Andrea Stella', engine: 'Mercedes',
    history: 'The second oldest active team. Known for their "papaya" orange livery and winning heritage.',
    championships: 8, wins: 183, podiums: 508, poles: 156
  },
  {
    id: 'astonmartin', name: 'Aston Martin Aramco Team', logo: 'https://media.formula1.com/content/dam/fom-website/teams/2024/aston-martin-logo.png.transform/2col/image.png',
    country: 'United Kingdom', established: 2021, principal: 'Mike Krack', engine: 'Honda',
    history: 'Racing under various guises, the Silverstone-based outfit is aiming for true championship contention.',
    championships: 0, wins: 0, podiums: 9, poles: 0
  },
  {
    id: 'alpine', name: 'BWT Alpine F1 Team', logo: 'https://media.formula1.com/content/dam/fom-website/teams/2024/alpine-logo.png.transform/2col/image.png',
    country: 'France', established: 1986, principal: 'Oliver Oakes', engine: 'Renault / Mercedes',
    history: 'The historic Renault factory team rebranded to Alpine to promote the French sports car brand.',
    championships: 2, wins: 21, podiums: 105, poles: 51
  },
  {
    id: 'williams', name: 'Williams Racing', logo: 'https://media.formula1.com/content/dam/fom-website/teams/2024/williams-logo.png.transform/2col/image.png',
    country: 'United Kingdom', established: 1977, principal: 'James Vowles', engine: 'Mercedes',
    history: 'One of F1’s most legendary independent grooved teams with a storied history of dominance in the 80s and 90s.',
    championships: 9, wins: 114, podiums: 313, poles: 128
  },
  {
    id: 'haas', name: 'MoneyGram Haas F1 Team', logo: 'https://media.formula1.com/content/dam/fom-website/teams/2024/haas-logo.png.transform/2col/image.png',
    country: 'United States', established: 2016, principal: 'Ayao Komatsu', engine: 'Ferrari',
    history: 'The only American team on the grid, known for their unique Ferrari-aligned operational model.',
    championships: 0, wins: 0, podiums: 0, poles: 1
  },
  {
    id: 'sauber', name: 'Stake F1 Team Kick Sauber (Audi)', logo: 'https://media.formula1.com/content/dam/fom-website/teams/2024/kick-sauber-logo.png.transform/2col/image.png',
    country: 'Switzerland', established: 1993, principal: 'Mattia Binotto', engine: 'Ferrari / Audi',
    history: 'A stalwart of the midfield since 1993, the Sauber squad is transitioning into the fully-fledged Audi works team.',
    championships: 0, wins: 1, podiums: 27, poles: 1
  },
  {
    id: 'rb', name: 'Visa Cash App RB F1 Team', logo: 'https://media.formula1.com/content/dam/fom-website/teams/2024/rb-logo.png.transform/2col/image.png',
    country: 'Italy', established: 2006, principal: 'Laurent Mekies', engine: 'Honda RBPT / Ford',
    history: 'The sister team to Red Bull Racing, formerly Toro Rosso and AlphaTauri, dedicated to developing future prospects.',
    championships: 0, wins: 2, podiums: 3, poles: 1
  },
  {
    id: 'cadillac', name: 'Cadillac F1 Team', logo: 'https://media.formula1.com/image/upload/f_auto,c_limit,w_960,q_auto/f_auto/q_auto/fom-website/2024/Andretti/General%20Motors%20Cadillac%20Badge%20-%20Dark',
    country: 'United States', established: 2026, principal: 'Dan Towriss', engine: 'Ferrari / GM',
    history: 'The 11th grid slot was secured by GM and Cadillac for a 2026 entry, backed by the prestigious Andretti racing roots.',
    championships: 0, wins: 0, podiums: 0, poles: 0
  }
];

export const seasons = {
  2024: {
    ferrari: ['leclerc', 'sainz'],
    mercedes: ['hamilton', 'russell'],
    redbull: ['max_verstappen', 'perez'],
    mclaren: ['norris', 'piastri'],
    astonmartin: ['alonso', 'stroll'],
    alpine: ['gasly', 'ocon'],
    williams: ['albon', 'sargeant'],
    haas: ['magnussen', 'hulkenberg'],
    sauber: ['bottas', 'zhou'],
    rb: ['tsunoda', 'ricciardo']
  },
  2025: {
    ferrari: ['leclerc', 'hamilton'],
    mercedes: ['russell', 'antonelli'],
    redbull: ['max_verstappen', 'tsunoda'],
    mclaren: ['norris', 'piastri'],
    astonmartin: ['alonso', 'stroll'],
    alpine: ['gasly', 'doohan'],
    williams: ['albon', 'sainz'],
    haas: ['ocon', 'bearman'],
    sauber: ['hulkenberg', 'bortoleto'],
    rb: ['lawson', 'hadjar']
  },
  2026: {
    ferrari: ['leclerc', 'hamilton'],
    mercedes: ['russell', 'antonelli'],
    redbull: ['max_verstappen', 'hadjar'],
    mclaren: ['norris', 'piastri'],
    astonmartin: ['alonso', 'stroll'],
    alpine: ['gasly', 'colapinto'],
    williams: ['albon', 'sainz'],
    haas: ['ocon', 'bearman'],
    sauber: ['hulkenberg', 'bortoleto'],
    rb: ['lawson', 'lindblad'],
    cadillac: ['bottas', 'perez']
  }
};

export const getDriversByTeamAndSeason = (teamId, year) => {
  const teamLineup = seasons[year][teamId] || [];
  return teamLineup.map(driverId => drivers.find(d => d.id === driverId));
};

export const getTeamById = (teamId) => {
  return teams.find(t => t.id === teamId);
};

export const getDriverById = (driverId) => {
  return drivers.find(d => d.id === driverId);
};

export const getDriverHistory = (driverId) => {
  const history = {};
  for (const year of Object.keys(seasons)) {
    for (const [teamId, driverIds] of Object.entries(seasons[year])) {
      if (driverIds.includes(driverId)) {
        history[year] = teamId;
      }
    }
  }
  return history;
};
