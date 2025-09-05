
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
    description: 'The definitive edition of the iconic V.S. Whitty mod, packed with new content and polish.',
    imageUrl: 'https://images.gamebanana.com/img/ss/mods/530-90_61f9bf6a4abea.jpg',
    difficulty: 'Hard',
    songs: 5,
    gameUrl: 'https://fnf.kdata1.com/whitty-definitive-edition/1.5/',
  },
  {
    id: 'the-tricky-mod',
    title: 'The Tricky Mod',
    description: 'Battle the chaotic and reality-bending clown, Tricky, in a high-octane FNF mod.',
    imageUrl: 'https://images.gamebanana.com/img/ss/mods/60b7d8741ac99.jpg',
    difficulty: 'Insane',
    songs: 4,
  },
  {
    id: 'vs-hex',
    title: 'V.S. Hex',
    description: 'A friendly match against a basketball-playing robot that turns into an intense challenge.',
    imageUrl: 'https://static.wikia.nocookie.net/fridaynightfunking/images/3/36/Hex_Mod_Full_Week.png/revision/latest?cb=20210222045517',
    difficulty: 'Normal',
    songs: 5,
  },
  {
    id: 'hazy-river',
    title: 'Hazy River',
    description: 'A full-week mod that remasters the original Garcello and Annie mods with new songs, art, and story.',
    imageUrl: 'https://images.gamebanana.com/img/ss/mods/626efdcd46c73.jpg',
    difficulty: 'Normal',
    songs: 8,
    buildType: 'Remaster',
  },
  {
    id: 'mid-fight-masses',
    title: 'Mid-Fight Masses',
    description: 'A full week mod featuring Sarvente, a demonic nun who is not as sweet as she seems.',
    imageUrl: 'https://static.wikia.nocookie.net/fridaynightfunking/images/7/73/Sarvente_and_Ruv_in_MFM.png/revision/latest?cb=20210403212818',
    difficulty: 'Hard',
    songs: 4,
  },
  {
    id: 'vs-tabi',
    title: 'V.S. Tabi',
    description: 'Go against Girlfriend\'s vengeful ex-boyfriend in a truly explosive final song.',
    imageUrl: 'https://static.wikia.nocookie.net/fridaynightfunking/images/7/71/Tabi_in_Genocide.png/revision/latest?cb=20210603050849',
    difficulty: 'Hard',
    songs: 3,
  },
  {
    id: 'starlight-mayhem',
    title: 'Starlight Mayhem',
    description: 'Rock out on an alien planet against CJ and his band in this visually stunning mod.',
    imageUrl: 'https://static.wikia.nocookie.net/fridaynightfunking/images/c/c3/StarlightBanner.png/revision/latest?cb=20210512034057',
    difficulty: 'Normal',
    songs: 3,
  },
  {
    id: 'vs-kapi',
    title: 'V.S. Kapi',
    description: 'An arcade showdown with a playful cat-boy who loves DDR. Features fast-paced charts.',
    imageUrl: 'https://static.wikia.nocookie.net/fridaynightfunking/images/5/55/Kapi-arcade-showdown-banner.png/revision/latest?cb=20210524024449',
    difficulty: 'Normal',
    songs: 4,
  },
  {
    id: 'indie-cross',
    title: 'Indie Cross',
    description: 'A massive crossover mod featuring characters from Cuphead, Undertale, and Bendy.',
    imageUrl: 'https://static.wikia.nocookie.net/fridaynightfunking/images/e/ed/Indie_Cross_New_Banner.png/revision/latest/scale-to-width-down/536?cb=20220415010428',
    difficulty: 'Insane',
    songs: 22,
  },
  {
    id: 'doki-doki-takeover',
    title: 'Doki Doki Takeover!',
    description: 'The literature club from DDLC takes over FNF for a mix of cute and creepy songs.',
    imageUrl: 'https://static.wikia.nocookie.net/fridaynightfunking/images/3/30/DDTO_Banner.png/revision/latest?cb=20210815190011',
    difficulty: 'Normal',
    songs: 8,
  },
  {
    id: 'vs-impostor',
    title: 'V.S. Impostor',
    description: 'Among Us comes to Friday Night Funkin\'! Can you survive against the Impostors?',
    imageUrl: 'https://static.wikia.nocookie.net/fridaynightfunking/images/b/b8/Vs_impostor_logo.png/revision/latest?cb=20210502022754',
    difficulty: 'Hard',
    songs: 7,
  },
  {
    id: 'holofunk',
    title: 'HoloFunk',
    description: 'Battle against your favorite Hololive EN V-Tubers in this content-packed mod.',
    imageUrl: 'https://static.wikia.nocookie.net/fridaynightfunking/images/d/d7/HoloFunk_Logo.png/revision/latest?cb=20220112101031',
    difficulty: 'Normal',
    songs: 20,
  },
  {
    id: 'sonic-exe-rewrite-v2',
    title: 'Rewrite: Round 2',
    description: 'A massive fan-made overhaul of the original Sonic.exe mod, with new songs, characters, and story.',
    imageUrl: 'https://images.gamebanana.com/img/ss/mods/684981c1d25d1.jpg',
    difficulty: 'Insane',
    songs: 4,
  },
  {
    id: 'vs-mario-ultra-rebooted',
    title: 'V.S. Mario Ultra Rebooted',
    description: 'Take on Mario in this ultra-rebooted FNF mod with new songs and mechanics.',
    imageUrl: 'https://static.wikia.nocookie.net/fridaynightfunking/images/6/68/MarioBanner.jpeg/revision/latest/scale-to-width-down/536?cb=20220329232402',
    difficulty: 'Hard',
    songs: 4,
    gameUrl: 'https://fnf.kdata1.com/mario-ultra-rebooted/1/',
  }
];
