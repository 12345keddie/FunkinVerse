
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
    description: 'Face off against the short-fused rockstar, Whitty, in this explosive musical showdown.',
    imageUrl: 'https://images.gamebanana.com/img/ss/mods/602ad2dd9c20e.jpg',
    difficulty: 'Hard',
    songs: 3,
    gameUrl: 'https://fnf.run3.io/whitty/5/',
  },
  {
    id: 'the-tricky-mod',
    title: 'The Tricky Mod',
    description: 'Battle the chaotic and reality-bending clown, Tricky, in a high-octane FNF mod.',
    imageUrl: 'https://images.gamebanana.com/img/ss/mods/6075a6c334923.jpg',
    difficulty: 'Insane',
    songs: 4,
  },
  {
    id: 'vs-hex',
    title: 'V.S. Hex',
    description: 'A friendly match against a basketball-playing robot that turns into an intense challenge.',
    imageUrl: 'https://images.gamebanana.com/img/ss/mods/6033483c271a9.jpg',
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
    imageUrl: 'https://images.gamebanana.com/img/ss/mods/606a56972e01b.jpg',
    difficulty: 'Hard',
    songs: 4,
  },
  {
    id: 'vs-tabi',
    title: 'V.S. Tabi',
    description: 'Go against Girlfriend\'s vengeful ex-boyfriend in a truly explosive final song.',
    imageUrl: 'https://images.gamebanana.com/img/ss/mods/60b6d4a5290a6.jpg',
    difficulty: 'Hard',
    songs: 3,
  },
  {
    id: 'starlight-mayhem',
    title: 'Starlight Mayhem',
    description: 'Rock out on an alien planet against CJ and his band in this visually stunning mod.',
    imageUrl: 'https://images.gamebanana.com/img/ss/mods/609a800d30c51.jpg',
    difficulty: 'Normal',
    songs: 3,
  },
  {
    id: 'vs-kapi',
    title: 'V.S. Kapi',
    description: 'An arcade showdown with a playful cat-boy who loves DDR. Features fast-paced charts.',
    imageUrl: 'https://images.gamebanana.com/img/ss/mods/60a6a4c9b3b8c.jpg',
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
    imageUrl: 'https://images.gamebanana.com/img/ss/mods/60a0f9a2e6e3c.jpg',
    difficulty: 'Normal',
    songs: 8,
  },
  {
    id: 'vs-impostor',
    title: 'V.S. Impostor',
    description: 'Among Us comes to Friday Night Funkin\'! Can you survive against the Impostors?',
    imageUrl: 'https://images.gamebanana.com/img/ss/mods/608a0e895318d.jpg',
    difficulty: 'Hard',
    songs: 7,
  },
  {
    id: 'holofunk',
    title: 'HoloFunk',
    description: 'Battle against your favorite Hololive EN V-Tubers in this content-packed mod.',
    imageUrl: 'https://images.gamebanana.com/img/ss/mods/61d2b78122588.jpg',
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
    id: 'vs-whitty-definitive',
    title: 'V.S. Whitty - Definitive Edition',
    description: 'The definitive edition of the iconic V.S. Whitty mod, packed with new content and polish.',
    imageUrl: 'https://images.gamebanana.com/img/ss/mods/61c168233932e.jpg',
    difficulty: 'Hard',
    songs: 5,
    gameUrl: 'https://fnf.kdata1.com/whitty-definitive-edition/1.5/',
  },
];
