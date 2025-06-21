// Popular football teams with their crests from football-data.org API
export interface Team {
  id: number;
  name: string;
  shortName: string;
  tla: string;
  crest: string;
}

export const popularTeams: Team[] = [
  // Premier League
  {
    id: 57,
    name: "Arsenal FC",
    shortName: "Arsenal",
    tla: "ARS",
    crest: "https://crests.football-data.org/57.png",
  },
  {
    id: 61,
    name: "Chelsea FC",
    shortName: "Chelsea",
    tla: "CHE",
    crest: "https://crests.football-data.org/61.png",
  },
  {
    id: 64,
    name: "Liverpool FC",
    shortName: "Liverpool",
    tla: "LIV",
    crest: "https://crests.football-data.org/64.png",
  },
  {
    id: 65,
    name: "Manchester City FC",
    shortName: "Man City",
    tla: "MCI",
    crest: "https://crests.football-data.org/65.png",
  },
  {
    id: 66,
    name: "Manchester United FC",
    shortName: "Man United",
    tla: "MUN",
    crest: "https://crests.football-data.org/66.png",
  },
  {
    id: 73,
    name: "Tottenham Hotspur FC",
    shortName: "Tottenham",
    tla: "TOT",
    crest: "https://crests.football-data.org/73.png",
  },

  // La Liga
  {
    id: 81,
    name: "FC Barcelona",
    shortName: "Barcelona",
    tla: "FCB",
    crest: "https://crests.football-data.org/81.png",
  },
  {
    id: 86,
    name: "Real Madrid CF",
    shortName: "Real Madrid",
    tla: "RMA",
    crest: "https://crests.football-data.org/86.png",
  },
  {
    id: 78,
    name: "Atlético de Madrid",
    shortName: "Atlético",
    tla: "ATM",
    crest: "https://crests.football-data.org/78.png",
  },
  {
    id: 90,
    name: "Real Betis Balompié",
    shortName: "Betis",
    tla: "BET",
    crest: "https://crests.football-data.org/90.png",
  },

  // Serie A
  {
    id: 98,
    name: "AC Milan",
    shortName: "AC Milan",
    tla: "MIL",
    crest: "https://crests.football-data.org/98.png",
  },
  {
    id: 109,
    name: "Juventus FC",
    shortName: "Juventus",
    tla: "JUV",
    crest: "https://crests.football-data.org/109.png",
  },
  {
    id: 108,
    name: "FC Internazionale Milano",
    shortName: "Inter",
    tla: "INT",
    crest: "https://crests.football-data.org/108.png",
  },
  {
    id: 113,
    name: "SSC Napoli",
    shortName: "Napoli",
    tla: "NAP",
    crest: "https://crests.football-data.org/113.png",
  },

  // Bundesliga
  {
    id: 5,
    name: "FC Bayern München",
    shortName: "Bayern",
    tla: "FCB",
    crest: "https://crests.football-data.org/5.png",
  },
  {
    id: 4,
    name: "Borussia Dortmund",
    shortName: "Dortmund",
    tla: "BVB",
    crest: "https://crests.football-data.org/4.png",
  },
  {
    id: 18,
    name: "Borussia Mönchengladbach",
    shortName: "Gladbach",
    tla: "BMG",
    crest: "https://crests.football-data.org/18.png",
  },

  // Ligue 1
  {
    id: 524,
    name: "Paris Saint-Germain FC",
    shortName: "PSG",
    tla: "PSG",
    crest: "https://crests.football-data.org/524.png",
  },
  {
    id: 516,
    name: "Olympique de Marseille",
    shortName: "Marseille",
    tla: "OM",
    crest: "https://crests.football-data.org/516.png",
  },
  {
    id: 523,
    name: "Olympique Lyonnais",
    shortName: "Lyon",
    tla: "OL",
    crest: "https://crests.football-data.org/523.png",
  },

  // National Teams
  {
    id: 760,
    name: "Spain",
    shortName: "Spain",
    tla: "ESP",
    crest: "https://crests.football-data.org/760.png",
  },
  {
    id: 759,
    name: "Germany",
    shortName: "Germany",
    tla: "GER",
    crest: "https://crests.football-data.org/759.png",
  },
  {
    id: 773,
    name: "France",
    shortName: "France",
    tla: "FRA",
    crest: "https://crests.football-data.org/773.png",
  },
  {
    id: 754,
    name: "Brazil",
    shortName: "Brazil",
    tla: "BRA",
    crest: "https://crests.football-data.org/754.png",
  },
  {
    id: 762,
    name: "Argentina",
    shortName: "Argentina",
    tla: "ARG",
    crest: "https://crests.football-data.org/762.png",
  },
  {
    id: 770,
    name: "England",
    shortName: "England",
    tla: "ENG",
    crest: "https://crests.football-data.org/770.png",
  },

  // Liga MX
  {
    id: 1001,
    name: "Club de Fútbol Pachuca",
    shortName: "Pachuca",
    tla: "PAC",
    crest:
      "https://upload.wikimedia.org/wikipedia/en/thumb/9/93/Pachuca_Tuzos_logo.svg/1200px-Pachuca_Tuzos_logo.svg.png",
  },
];
