export type Mod = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  difficulty: 'Easy' | 'Normal' | 'Hard' | 'Insane';
  songs: number;
};

export const mods: Mod[] = [
  {
    id: 'vs-whitty',
    title: 'V.S. Whitty',
    description: 'Face off against the short-fused rockstar, Whitty, in this explosive musical showdown.',
    imageUrl: 'https://picsum.photos/400/225?random=1',
    difficulty: 'Hard',
    songs: 3,
  },
  {
    id: 'the-tricky-mod',
    title: 'The Tricky Mod',
    description: 'Battle the chaotic and reality-bending clown, Tricky, in a high-octane FNF mod.',
    imageUrl: 'https://picsum.photos/400/225?random=2',
    difficulty: 'Insane',
    songs: 4,
  },
  {
    id: 'vs-hex',
    title: 'V.S. Hex',
    description: 'A friendly match against a basketball-playing robot that turns into an intense challenge.',
    imageUrl: 'https://picsum.photos/400/225?random=3',
    difficulty: 'Normal',
    songs: 5,
  },
  {
    id: 'smoke-em-out-struggle',
    title: 'Smoke \'Em Out Struggle',
    description: 'A chill and emotional week with Garcello, a mysterious smoker with a sad story.',
    imageUrl: 'https://picsum.photos/400/225?random=4',
    difficulty: 'Easy',
    songs: 4,
  },
  {
    id: 'mid-fight-masses',
    title: 'Mid-Fight Masses',
    description: 'A full week mod featuring Sarvente, a demonic nun who is not as sweet as she seems.',
    imageUrl: 'https://picsum.photos/400/225?random=5',
    difficulty: 'Hard',
    songs: 4,
  },
  {
    id: 'vs-tabi',
    title: 'V.S. Tabi',
    description: 'Go against Girlfriend\'s vengeful ex-boyfriend in a truly explosive final song.',
    imageUrl: 'https://picsum.photos/400/225?random=6',
    difficulty: 'Hard',
    songs: 3,
  },
  {
    id: 'starlight-mayhem',
    title: 'Starlight Mayhem',
    description: 'Rock out on an alien planet against CJ and his band in this visually stunning mod.',
    imageUrl: 'https://picsum.photos/400/225?random=7',
    difficulty: 'Normal',
    songs: 3,
  },
  {
    id: 'vs-kapi',
    title: 'V.S. Kapi',
    description: 'An arcade showdown with a playful cat-boy who loves DDR. Features fast-paced charts.',
    imageUrl: 'https://picsum.photos/400/225?random=8',
    difficulty: 'Normal',
    songs: 4,
  },
  {
    id: 'indie-cross',
    title: 'Indie Cross',
    description: 'A massive crossover mod featuring characters from Cuphead, Undertale, and Bendy.',
    imageUrl: 'https://picsum.photos/400/225?random=9',
    difficulty: 'Insane',
    songs: 9,
  },
  {
    id: 'doki-doki-takeover',
    title: 'Doki Doki Takeover!',
    description: 'The literature club from DDLC takes over FNF for a mix of cute and creepy songs.',
    imageUrl: 'https://picsum.photos/400/225?random=10',
    difficulty: 'Normal',
    songs: 8,
  },
  {
    id: 'vs-impostor',
    title: 'V.S. Impostor',
    description: 'Among Us comes to Friday Night Funkin\'! Can you survive against the Impostors?',
    imageUrl: 'https://picsum.photos/400/225?random=11',
    difficulty: 'Hard',
    songs: 7,
  },
  {
    id: 'holofunk',
    title: 'HoloFunk',
    description: 'Battle against your favorite Hololive EN V-Tubers in this content-packed mod.',
    imageUrl: 'https://picsum.photos/400/225?random=12',
    difficulty: 'Normal',
    songs: 20,
  },
];
