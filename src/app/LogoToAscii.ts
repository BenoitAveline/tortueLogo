
export interface IButtonConf {
  "command": string;
  "ascii": string;
  "position": {
    "x": number;
    "y": number;
  };
  "size": {
    "h": number;
    "w": number;
  };
  "color": string;
  "tooltip": string;
}

export const buttons: IButtonConf[] = [
  {
    "command": "TOUCHE-AVD",
    "ascii": "(",
    "position": {
      "x": 700,
      "y": 100
    },
    "size": {
      "h": 50,
      "w": 65
    },
    "color": "#ff3c3c",
    "tooltip": ""
  },
  {
    "command": "TOUCHE-AVG",
    "ascii": ")",
    "position": {
      "x": 300,
      "y": 100
    },
    "size": {
      "h": 50,
      "w": 65
    },
    "color": "#ff3c3c",
    "tooltip": ""
  },
  {
    "command": "TOUCHE-AR",
    "ascii": "*",
    "position": {
      "x": 500,
      "y": 650
    },
    "size": {
      "h": 50,
      "w": 65
    },
    "color": "#ff3c3c",
    "tooltip": ""
  },
  {
    "command": "ALLUME",
    "ascii": "+",
    "position": {
      "x": 500,
      "y": 5
    },
    "size": {
      "h": 50,
      "w": 65
    },
    "color": "#288f3a",
    "tooltip": ""
  },
  {
    "command": "TOUCHE-STOP",
    "ascii": ",",
    "position": {
      "x": 500,
      "y": 720
    },
    "size": {
      "h": 50,
      "w": 65
    },
    "color": "#ff3c3c",
    "tooltip": ""
  },
  {
    "command": "ETEINS",
    "ascii": "-",
    "position": {
      "x": 500,
      "y": 60
    },
    "size": {
      "h": 50,
      "w": 65
    },
    "color": "#288f3a",
    "tooltip": ""
  },
  {
    "command": "CLIGNE-D",
    "ascii": ".",
    "position": {
      "x": 600,
      "y": 20
    },
    "size": {
      "h": 50,
      "w": 65
    },
    "color": "#288f3a",
    "tooltip": ""
  },
  {
    "command": "CLIGNE-G",
    "ascii": "/",
    "position": {
      "x": 400,
      "y": 20
    },
    "size": {
      "h": 50,
      "w": 65
    },
    "color": "#288f3a",
    "tooltip": ""
  },
  {
    "command": "ARC-AVD 10",
    "ascii": "1",
    "position": {
      "x": 600,
      "y": 215
    },
    "size": {
      "h": 50,
      "w": 65
    },
    "color": "#288f3a",
    "tooltip": ""
  },
  {
    "command": "ARC-AVG 10",
    "ascii": "2",
    "position": {
      "x": 400,
      "y": 215
    },
    "size": {
      "h": 50,
      "w": 65
    },
    "color": "#288f3a",
    "tooltip": ""
  },
  {
    "command": "ARC-REG 10",
    "ascii": "3",
    "position": {
      "x": 400,
      "y": 495
    },
    "size": {
      "h": 50,
      "w": 65
    },
    "color": "#ffffff",
    "tooltip": ""
  },
  {
    "command": "ARC-RED 10",
    "ascii": "4",
    "position": {
      "x": 600,
      "y": 495
    },
    "size": {
      "h": 50,
      "w": 65
    },
    "color": "#ffffff",
    "tooltip": ""
  },
  {
    "command": "ARC-AVD 20",
    "ascii": "5",
    "position": {
      "x": 600,
      "y": 160
    },
    "size": {
      "h": 50,
      "w": 65
    },
    "color": "#288f3a",
    "tooltip": ""
  },
  {
    "command": "ARC-AVG 20",
    "ascii": "6",
    "position": {
      "x": 400,
      "y": 160
    },
    "size": {
      "h": 50,
      "w": 65
    },
    "color": "#288f3a",
    "tooltip": ""
  },
  {
    "command": "ARC-REG 20",
    "ascii": "7",
    "position": {
      "x": 400,
      "y": 550
    },
    "size": {
      "h": 50,
      "w": 65
    },
    "color": "#ffffff",
    "tooltip": ""
  },
  {
    "command": "ARC-RED 20",
    "ascii": "8",
    "position": {
      "x": 600,
      "y": 550
    },
    "size": {
      "h": 50,
      "w": 65
    },
    "color": "#ffffff",
    "tooltip": ""
  },
  {
    "command": "ARC-AVD 5",
    "ascii": "9",
    "position": {
      "x": 600,
      "y": 270
    },
    "size": {
      "h": 50,
      "w": 65
    },
    "color": "#288f3a",
    "tooltip": ""
  },
  {
    "command": "ARC-AVG 5",
    "ascii": ":",
    "position": {
      "x": 400,
      "y": 270
    },
    "size": {
      "h": 50,
      "w": 65
    },
    "color": "#288f3a",
    "tooltip": ""
  },
  {
    "command": "ARC-RED 5",
    "ascii": ";",
    "position": {
      "x": 600,
      "y": 440
    },
    "size": {
      "h": 50,
      "w": 65
    },
    "color": "#ffffff",
    "tooltip": ""
  },
  {
    "command": "ARC-REG 5",
    "ascii": "<",
    "position": {
      "x": 400,
      "y": 440
    },
    "size": {
      "h": 50,
      "w": 65
    },
    "color": "#ffffff",
    "tooltip": ""
  },
  {
    "command": "ETEINS-D",
    "ascii": ">",
    "position": {
      "x": 700,
      "y": 20
    },
    "size": {
      "h": 50,
      "w": 65
    },
    "color": "#288f3a",
    "tooltip": ""
  },
  {
    "command": "ETEINS-G",
    "ascii": "?",
    "position": {
      "x": 300,
      "y": 20
    },
    "size": {
      "h": 50,
      "w": 65
    },
    "color": "#288f3a",
    "tooltip": ""
  },
  {
    "command": "AV 10",
    "ascii": "A",
    "position": {
      "x": 500,
      "y": 220
    },
    "size": {
      "h": 50,
      "w": 65
    },
    "color": "#d2bcaa",
    "tooltip": ""
  },
  {
    "command": "BC",
    "ascii": "B",
    "position": {
      "x": 500,
      "y": 385
    },
    "size": {
      "h": 50,
      "w": 65
    },
    "color": "#288f3a",
    "tooltip": ""
  },
  {
    "command": "C'EST",
    "ascii": "C",
    "position": {
      "x": 0,
      "y": 50
    },
    "size": {
      "h": 50,
      "w": 65
    },
    "color": "#ff3c3c",
    "tooltip": ""
  },
  {
    "command": "TD 15",
    "ascii": "D",
    "position": {
      "x": 640,
      "y": 355
    },
    "size": {
      "h": 50,
      "w": 65
    },
    "color": "#d2bcaa",
    "tooltip": ""
  },
  {
    "command": "AV 20",
    "ascii": "F",
    "position": {
      "x": 500,
      "y": 165
    },
    "size": {
      "h": 50,
      "w": 65
    },
    "color": "#d2bcaa",
    "tooltip": ""
  },
  {
    "command": "TG 15",
    "ascii": "G",
    "position": {
      "x": 360,
      "y": 355
    },
    "size": {
      "h": 50,
      "w": 65
    },
    "color": "#d2bcaa",
    "tooltip": ""
  },
  {
    "command": "LC",
    "ascii": "H",
    "position": {
      "x": 500,
      "y": 330
    },
    "size": {
      "h": 50,
      "w": 65
    },
    "color": "#288f3a",
    "tooltip": ""
  },
  {
    "command": "JOUE-AIR",
    "ascii": "J",
    "position": {
      "x": 960,
      "y": 30
    },
    "size": {
      "h": 50,
      "w": 65
    },
    "color": "#288f3a",
    "tooltip": ""
  },
  {
    "command": "SONNE",
    "ascii": "K",
    "position": {
      "x": 890,
      "y": 30
    },
    "size": {
      "h": 50,
      "w": 65
    },
    "color": "#288f3a",
    "tooltip": ""
  },
  {
    "command": "APPRENDS",
    "ascii": "M",
    "position": {
      "x": 890,
      "y": 640
    },
    "size": {
      "h": 50,
      "w": 65
    },
    "color": "#ff3c3c",
    "tooltip": ""
  },
  {
    "command": "DES-QUE",
    "ascii": "N",
    "position": {
      "x": 70,
      "y": 290
    },
    "size": {
      "h": 50,
      "w": 65
    },
    "color": "#ff3c3c",
    "tooltip": ""
  },
  {
    "command": "OUBLIE",
    "ascii": "O",
    "position": {
      "x": 70,
      "y": 110
    },
    "size": {
      "h": 50,
      "w": 65
    },
    "color": "#ff3c3c",
    "tooltip": ""
  },
  {
    "command": "RALE",
    "ascii": "P",
    "position": {
      "x": 960,
      "y": 90
    },
    "size": {
      "h": 50,
      "w": 65
    },
    "color": "#288f3a",
    "tooltip": ""
  },
  {
    "command": "RE 10",
    "ascii": "R",
    "position": {
      "x": 500,
      "y": 495
    },
    "size": {
      "h": 50,
      "w": 65
    },
    "color": "#d2bcaa",
    "tooltip": ""
  },
  {
    "command": "SUPPRIME",
    "ascii": "S",
    "position": {
      "x": 70,
      "y": 170
    },
    "size": {
      "h": 50,
      "w": 65
    },
    "color": "#ff3c3c",
    "tooltip": ""
  },
  {
    "command": "TEST",
    "ascii": "T",
    "position": {
      "x": 70,
      "y": 230
    },
    "size": {
      "h": 50,
      "w": 65
    },
    "color": "#ff3c3c",
    "tooltip": ""
  },
  {
    "command": "RE 20",
    "ascii": "U",
    "position": {
      "x": 500,
      "y": 550
    },
    "size": {
      "h": 50,
      "w": 65
    },
    "color": "#d2bcaa",
    "tooltip": ""
  },
  {
    "command": "EXECUTE -",
    "ascii": "W",
    "position": {
      "x": 890,
      "y": 700
    },
    "size": {
      "h": 50,
      "w": 65
    },
    "color": "#ff3c3c",
    "tooltip": ""
  },
  {
    "command": "EXECUTE",
    "ascii": "X",
    "position": {
      "x": 960,
      "y": 640
    },
    "size": {
      "h": 50,
      "w": 65
    },
    "color": "#ff3c3c",
    "tooltip": ""
  },
  {
    "command": "EXECUTE +",
    "ascii": "Y",
    "position": {
      "x": 960,
      "y": 700
    },
    "size": {
      "h": 50,
      "w": 65
    },
    "color": "#ff3c3c",
    "tooltip": ""
  },
  {
    "command": "GOMME",
    "ascii": "Z",
    "position": {
      "x": 70,
      "y": 50
    },
    "size": {
      "h": 50,
      "w": 65
    },
    "color": "#ff3c3c",
    "tooltip": ""
  },
  {
    "command": "av",
    "ascii": "a",
    "position": {
      "x": 150,
      "y": 600
    },
    "size": {
      "h": 50,
      "w": 65
    },
    "color": "#ffffff",
    "tooltip": ""
  },
  {
    "command": "TD 30",
    "ascii": "b",
    "position": {
      "x": 710,
      "y": 355
    },
    "size": {
      "h": 50,
      "w": 65
    },
    "color": "#d2bcaa",
    "tooltip": ""
  },
  {
    "command": "TG 30",
    "ascii": "c",
    "position": {
      "x": 290,
      "y": 355
    },
    "size": {
      "h": 50,
      "w": 65
    },
    "color": "#d2bcaa",
    "tooltip": ""
  },
  {
    "command": "td",
    "ascii": "d",
    "position": {
      "x": 220,
      "y": 630
    },
    "size": {
      "h": 50,
      "w": 65
    },
    "color": "#ffffff",
    "tooltip": ""
  },
  {
    "command": "TD 45",
    "ascii": "e",
    "position": {
      "x": 780,
      "y": 355
    },
    "size": {
      "h": 50,
      "w": 65
    },
    "color": "#d2bcaa",
    "tooltip": ""
  },
  {
    "command": "TG 45",
    "ascii": "f",
    "position": {
      "x": 220,
      "y": 355
    },
    "size": {
      "h": 50,
      "w": 65
    },
    "color": "#d2bcaa",
    "tooltip": ""
  },
  {
    "command": "tg",
    "ascii": "g",
    "position": {
      "x": 80,
      "y": 630
    },
    "size": {
      "h": 50,
      "w": 65
    },
    "color": "#ffffff",
    "tooltip": ""
  },
  {
    "command": "TD 60",
    "ascii": "h",
    "position": {
      "x": 850,
      "y": 355
    },
    "size": {
      "h": 50,
      "w": 65
    },
    "color": "#d2bcaa",
    "tooltip": ""
  },
  {
    "command": "TG 60",
    "ascii": "i",
    "position": {
      "x": 150,
      "y": 355
    },
    "size": {
      "h": 50,
      "w": 65
    },
    "color": "#d2bcaa",
    "tooltip": ""
  },
  {
    "command": "TD 90",
    "ascii": "k",
    "position": {
      "x": 920,
      "y": 355
    },
    "size": {
      "h": 50,
      "w": 65
    },
    "color": "#d2bcaa",
    "tooltip": ""
  },
  {
    "command": "TG 90",
    "ascii": "l",
    "position": {
      "x": 80,
      "y": 355
    },
    "size": {
      "h": 50,
      "w": 65
    },
    "color": "#d2bcaa",
    "tooltip": ""
  },
  {
    "command": "TD 120",
    "ascii": "n",
    "position": {
      "x": 990,
      "y": 355
    },
    "size": {
      "h": 50,
      "w": 65
    },
    "color": "#d2bcaa",
    "tooltip": ""
  },
  {
    "command": "TG 120",
    "ascii": "o",
    "position": {
      "x": 10,
      "y": 355
    },
    "size": {
      "h": 50,
      "w": 65
    },
    "color": "#d2bcaa",
    "tooltip": ""
  },
  {
    "command": "re",
    "ascii": "r",
    "position": {
      "x": 150,
      "y": 660
    },
    "size": {
      "h": 50,
      "w": 65
    },
    "color": "#ffffff",
    "tooltip": ""
  },
  {
    "command": "AV 1",
    "ascii": "s",
    "position": {
      "x": 500,
      "y": 275
    },
    "size": {
      "h": 50,
      "w": 65
    },
    "color": "#d2bcaa",
    "tooltip": ""
  },
  {
    "command": "RE 1",
    "ascii": "t",
    "position": {
      "x": 500,
      "y": 440
    },
    "size": {
      "h": 50,
      "w": 65
    },
    "color": "#d2bcaa",
    "tooltip": ""
  },
  {
    "command": "TD 1",
    "ascii": "u",
    "position": {
      "x": 570,
      "y": 355
    },
    "size": {
      "h": 50,
      "w": 65
    },
    "color": "#d2bcaa",
    "tooltip": ""
  },
  {
    "command": "TG 1",
    "ascii": "v",
    "position": {
      "x": 430,
      "y": 355
    },
    "size": {
      "h": 50,
      "w": 65
    },
    "color": "#d2bcaa",
    "tooltip": ""
  },
  {
    "command": "TOUT",
    "ascii": "w",
    "position": {
      "x": 0,
      "y": 110
    },
    "size": {
      "h": 50,
      "w": 65
    },
    "color": "#ff3c3c",
    "tooltip": ""
  },
  {
    "command": "REGLAGE",
    "ascii": "x",
    "position": {
      "x": 0,
      "y": 170
    },
    "size": {
      "h": 50,
      "w": 65
    },
    "color": "#ff3c3c",
    "tooltip": ""
  },
  {
    "command": "ARRET",
    "ascii": "y",
    "position": {
      "x": 0,
      "y": 230
    },
    "size": {
      "h": 50,
      "w": 65
    },
    "color": "#ff3c3c",
    "tooltip": ""
  },
  {
    "command": "FIN",
    "ascii": "z",
    "position": {
      "x": 0,
      "y": 290
    },
    "size": {
      "h": 50,
      "w": 65
    },
    "color": "#ff3c3c",
    "tooltip": ""
  }
];

// export const LogoProcedureToAscii = {
//   '': 'NUL',
//   '': 'SOH',
//   '': 'STX',
//   '': 'ETX',
//   '': 'EOT',
//   '': 'ENQ',
//   '': 'ACK',
//   '': 'BEL',
//   '': 'BS',
//   '': 'TAB',
//   '': 'LF',
//   '': 'VT',
//   '': 'FF',
//   '': 'CR',
//   '': 'SO',
//   '': 'SI',
//   '': 'DLE',
//   '': 'DC1',
//   '': 'DC2',
//   '': 'DC3',
//   '': 'DC4',
//   '': 'NAK',
//   '': 'SYN',
//   '': 'ETB',
//   '': 'CAN',
//   '': 'EM',
//   '': 'SUB',
//   '': 'ESC',
//   '': 'FS',
//   '': 'GS',
//   '': 'RS',
//   '': 'US',
//   '': 'SPACE',
//   '': '!',
//   '': '"',
//   '': '#',
//   '': '$',
//   '': '%',
//   '': '&',
//   '': '\'',
//   'TOUCHE-AVD': '(',
//   'TOUCHE-AVG': ')',
//   'TOUCHE-AR': '*',
//   'ALLUME': '+',
//   'TOUCHE-STOP': ',',
//   'ETEINS': '-',
//   'CLIGNE-D': '.',
//   'CLIGNE-G': '/',
//   '': '0',
//   'ARC-AVD 10': '1',
//   'ARC-AVG 10': '2',
//   'ARC-REG 10': '3',
//   'ARC-RED 10': '4',
//   'ARC-AVD 20': '5',
//   'ARC-AVG 20': '6',
//   'ARC-REG 20': '7',
//   'ARC-RED 20': '8',
//   'ARC-AVD 5': '9',
//   'ARC-AVG 5': ':',
//   'ARC-RED 5': ';',
//   'ARC-REG 5': '<',
//   '': '=',
//   'ETEINS-D': '>',
//   'ETEINS-G': '?',
//   '': '@',
//   'AV 10': 'A',
//   'BC': 'B',
//   'C\'EST': 'C',
//   'TD 15': 'D',
//   '': 'E',
//   'AV 20': 'F',
//   'TG 15': 'G',
//   'LC': 'H',
//   '': 'I',
//   'JOUE-AIR': 'J',
//   'SONNE': 'K',
//   '': 'L',
//   'APPRENDS': 'M',
//   'DES-QUE': 'N',
//   'OUBLIE': 'O',
//   'RALE': 'P',
//   '': 'Q',
//   'RE 10': 'R',
//   'SUPPRIME': 'S',
//   'TEST': 'T',
//   'RE 20': 'U',
//   '': 'V',
//   'EXECUTE -': 'W',
//   'EXECUTE': 'X',
//   'EXECUTE +': 'Y',
//   'GOMME': 'Z',
//   '': '[',
//   '': '\\',
//   '': ']',
//   '': '^',
//   '': '_',
//   '': '`',
//   'av': 'a',
//   'TD 30': 'b',
//   'TG 30': 'c',
//   'td': 'd',
//   'TD 45': 'e',
//   'TG 45': 'f',
//   'tg': 'g',
//   'TD 60': 'h',
//   'TG 60': 'i',
//   '': 'j',
//   'TD 90': 'k',
//   'TG 90': 'l',
//   '': 'm',
//   'TD 120': 'n',
//   'TG 120': 'o',
//   '': 'p',
//   '': 'q',
//   're': 'r',
//   'AV 1': 's',
//   'RE 1': 't',
//   'TD 1': 'u',
//   'TG 1': 'v',
//   'TOUT': 'w',
//   'REGLAGE': 'x',
//   'ARRET': 'y',
//   'FIN': 'z',
//   '': '{',
//   '': '|',
//   '': '}',
//   '': '~',
//   '': 'DEL'
// };
