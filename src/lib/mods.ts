
export type Mod = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  difficulty: 'Easy' | 'Normal' | 'Hard' | 'Insane';
  songs: number;
  buildType?: string;
  gameUrl?: string;
};

export const mods: Mod[] = [
  {
    id: 'vs-whitty',
    title: 'V.S. Whitty',
    description: 'The iconic mod\'s definitive edition.',
    imageUrl: 'https://images.gamebanana.com/img/ss/mods/530-90_61f9bf6a4abea.jpg',
    difficulty: 'Hard',
    songs: 5,
    gameUrl: 'https://fnf.kdata1.com/whitty-definitive-edition/1.5/',
  },
  {
    id: 'the-tricky-mod',
    title: 'The Tricky Mod',
    description: 'Battle the chaotic clown, Tricky.',
    imageUrl: 'https://images.gamebanana.com/img/ss/mods/60b7d8741ac99.jpg',
    difficulty: 'Insane',
    songs: 4,
  },
  {
    id: 'vs-hex',
    title: 'V.S. Hex',
    description: 'A match against a robot basketballer.',
    imageUrl: 'https://static.wikia.nocookie.net/fridaynightfunking/images/3/36/Hex_Mod_Full_Week.png/revision/latest?cb=20210222045517',
    difficulty: 'Normal',
    songs: 5,
  },
  {
    id: 'hazy-river',
    title: 'Hazy River',
    description: 'A Garcello and Annie mod remaster.',
    imageUrl: 'https://images.gamebanana.com/img/ss/mods/626efdcd46c73.jpg',
    difficulty: 'Normal',
    songs: 8,
    buildType: 'Remaster',
    gameUrl: 'https://fnf.kdata1.com/hazy-river-vs-garcello-annie/1/',
  },
  {
    id: 'mid-fight-masses',
    title: 'Mid-Fight Masses',
    description: 'A full week mod with Sarvente.',
    imageUrl: 'https://static.wikia.nocookie.net/fridaynightfunking/images/7/73/Sarvente_and_Ruv_in_MFM.png/revision/latest?cb=20210403212818',
    difficulty: 'Hard',
    songs: 4,
  },
  {
    id: 'vs-tabi',
    title: 'V.S. Tabi',
    description: 'Face Girlfriend\'s vengeful ex.',
    imageUrl: 'https://static.wikia.nocookie.net/fridaynightfunking/images/7/71/Tabi_in_Genocide.png/revision/latest?cb=20210603050849',
    difficulty: 'Hard',
    songs: 3,
  },
  {
    id: 'starlight-mayhem',
    title: 'Starlight Mayhem',
    description: 'Rock out against CJ and his band.',
    imageUrl: 'https://static.wikia.nocookie.net/fridaynightfunking/images/c/c3/StarlightBanner.png/revision/latest?cb=20210512034057',
    difficulty: 'Normal',
    songs: 3,
  },
  {
    id: 'vs-kapi',
    title: 'V.S. Kapi',
    description: 'An arcade showdown with a cat-boy.',
    imageUrl: 'https://static.wikia.nocookie.net/fridaynightfunking/images/5/55/Kapi-arcade-showdown-banner.png/revision/latest?cb=20210524024449',
    difficulty: 'Normal',
    songs: 4,
  },
  {
    id: 'indie-cross',
    title: 'Indie Cross',
    description: 'An epic indie game crossover.',
    imageUrl: 'https://static.wikia.nocookie.net/fridaynightfunking/images/e/ed/Indie_Cross_New_Banner.png/revision/latest/scale-to-width-down/536?cb=20220415010428',
    difficulty: 'Insane',
    songs: 22,
    gameUrl: undefined,
  },
  {
    id: 'doki-doki-takeover',
    title: 'Doki Doki Takeover!',
    description: 'The DDLC literature club takes over.',
    imageUrl: 'https://static.wikia.nocookie.net/fridaynightfunking/images/3/30/DDTO_Banner.png/revision/latest?cb=20210815190011',
    difficulty: 'Normal',
    songs: 8,
  },
  {
    id: 'vs-impostor',
    title: 'V.S. Impostor',
    description: 'Among Us comes to FNF!',
    imageUrl: 'https://static.wikia.nocookie.net/fridaynightfunking/images/b/b8/Vs_impostor_logo.png/revision/latest?cb=20210502022754',
    difficulty: 'Hard',
    songs: 7,
  },
  {
    id: 'holofunk',
    title: 'HoloFunk',
    description: 'Battle Hololive EN V-Tubers.',
    imageUrl: 'https://static.wikia.nocookie.net/fridaynightfunking/images/d/d7/HoloFunk_Logo.png/revision/latest?cb=20220112101031',
    difficulty: 'Normal',
    songs: 20,
  },
  {
    id: 'sonic-exe-rewrite-v2',
    title: 'Rewrite: Round 2',
    description: 'A Sonic.exe mod overhaul.',
    imageUrl: 'https://images.gamebanana.com/img/ss/mods/684981c1d25d1.jpg',
    difficulty: 'Insane',
    songs: 4,
  },
  {
    id: 'vs-mario-ultra-rebooted',
    title: 'V.S. Mario Ultra Rebooted',
    description: 'Take on Mario in this FNF mod.',
    imageUrl: 'https://static.wikia.nocookie.net/fridaynightfunking/images/6/68/MarioBanner.jpeg/revision/latest/scale-to-width-down/536?cb=20220329232402',
    difficulty: 'Hard',
    songs: 4,
    gameUrl: 'https://fnf.kdata1.com/mario-ultra-rebooted/1/',
  },
  {
    id: 'dave-and-bambi',
    title: 'Dave & Bambi',
    description: 'A unique mod with a 3D art style.',
    imageUrl: 'https://static.wikia.nocookie.net/fridaynightfunking/images/4/40/DaveandBambi3.0banner.jpg/revision/latest/scale-to-width-down/536?cb=20221001163538',
    difficulty: 'Insane',
    songs: 32,
    gameUrl: 'https://fnf.kdata1.com/dave-bambi/32/',
  }
];
