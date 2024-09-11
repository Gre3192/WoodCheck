const zoneData = {
  "Zona I - Alpina": {
    citta: [
      "Aosta", "Belluno", "Bergamo", "Biella", "Bolzano", "Brescia", "Como", "Cuneo", "Lecco", "Pordenone", "Sondrio", "Torino", "Trento", "Udine", "Verbano-Cusio-Ossola", "Vercelli", "Vicenza"
    ],
    valoriQsk: {
      qsk: (as) => as <= 200 ? 1.50 : 1.39 * (1 + Math.pow(as / 728, 2)),
      qskFormula: (as) => as <= 200 ? '' : '$1.39\\cdotp\\left[1+\\dfrac{a_s}{728}\\right]^2$',
      riferimento: "NTC18 - Capitolo 3 - Eq.[3.4.2]"
    }
  },
  "Zona I - Mediterranea": {
    citta: [
      "Alessandria", "Ancona", "Asti", "Bologna", "Cremona", "Forlì-Cesena", "Lodi", "Milano", "Modena", "Monza Brianza", "Novara", "Parma", "Pavia", "Pesaro e Urbino", "Piacenza", "Ravenna", "Reggio Emilia", "Rimini", "Treviso", "Varese"
    ],
    valoriQsk: {
      qsk: (as) => as <= 200 ? 1.50 : 1.35 * (1 + Math.pow(as / 602, 2)),
      qskFormula: (as) => as <= 200 ? '' : '$1.35\\cdotp\\left[1+\\dfrac{a_s}{602}\\right]^2$',
      riferimento: "NTC18 - Capitolo 3 - Eq.[3.4.3]"
    }
  },
  "Zona II": {
    citta: [
      "Arezzo", "Ascoli Piceno", "Avellino", "Bari", "Barletta-Andria-Trani", "Benevento", "Campobasso", "Chieti", "Fermo", "Ferrara", "Firenze", "Foggia", "Frosinone", "Genova", "Gorizia", "Imperia", "Isernia", "L'Aquila", "La Spezia", "Lucca", "Macerata", "Mantova", "Massa Carrara", "Padova", "Perugia", "Pescara", "Pistoia", "Prato", "Rieti", "Rovigo", "Savona", "Teramo", "Trieste", "Venezia", "Verona"
    ],
    valoriQsk: {
      qsk: (as) => as <= 200 ? 1.00 : 0.85 * (1 + Math.pow(as / 481, 2)),
      qskFormula: (as) => as <= 200 ? '' : '$0.85\\cdotp\\left[1+\\dfrac{a_s}{481}\\right]^2$',
      riferimento: "NTC18 - Capitolo 3 - Eq.[3.4.4]"
    }
  },
  "Zona III": {
    citta: [
      "Agrigento", "Brindisi", "Cagliari", "Caltanissetta", "Carbonia-Iglesias", "Caserta", "Catania", "Catanzaro", "Cosenza", "Crotone", "Enna", "Grosseto", "Latina", "Lecce", "Livorno", "Matera", "Medio Campidano", "Messina", "Napoli", "Nuoro", "Ogliastra", "Olbia-Tempio", "Oristano", "Palermo", "Pisa", "Potenza", "Ragusa", "Reggio Calabria", "Roma", "Salerno", "Sassari", "Siena", "Siracusa", "Sud Sardegna", "Taranto", "Terni", "Trapani", "Vibo Valentia", "Viterbo"
    ],
    valoriQsk: {
      qsk: (as) => as <= 200 ? 0.60 : 0.51 * (1 + Math.pow(as / 481, 2)),
      qskFormula: (as) => as <= 200 ? '' : '$0.51\\cdotp\\left[1+\\dfrac{a_s}{481}\\right]^2$',
      riferimento: "NTC18 - Capitolo 3 - Eq.[3.4.5]"
    }
  }
};

const topografiaData = {
  valoriCe: {
    "Battuta dai venti": 0.9,
    "Normale": 1.0,
    "Riparata": 1.1
  },
  riferimento: 'NTC18 - Capitolo 3 - Tab.[3.4.I]'
};

export default function getSnowLoad(citta, as, topografia)  {

  if (!citta || as == null || !topografia) {
    return {
      zona: "",
      caricoNeve: {
        valori: {
          qs: ""
        },
        formula: {
          qs: ""
        },
      },
      caricoNeveAlSuolo: {
        valori: {
          qsk: ""
        },
        formula: {
          qsk: ""
        },
        riferimento: ""
      },
      temperatura: {
        valori: {
          Tmin: "",
          Tmax: "",
        },
        formula: {
          Tmin: "",
          Tmax: "",
        },
        riferimento: ""
      },
      coeffCe: {
        ce: "",
        riferimento: ""
      },
      coeffCt: {
        ct: "",
        riferimento: ""
      }
    };
  }

  let zonaData;
  for (const [zona, data] of Object.entries(zoneData)) {
    if (data.citta.includes(citta)) {
      zonaData = { zona, data };
      break;
    }
  }

  if (!zonaData) {
    throw new Error("Città non trovata nelle zone specificate.");
  }

  const qsk = zonaData.data.valoriQsk.qsk(as);
  const qskFormula = zonaData.data.valoriQsk.qskFormula(as);
  const ce = topografiaData.valoriCe[topografia];

  if (ce === undefined) {
    throw new Error("Topografia non valida.");
  }

  const ct = 1; // Valore fisso nel tuo esempio

  const qs = qsk * ce * ct;
  const qsFormula = '$q_{sk}\\cdotp C_e\\cdotp C_t$';

  return {
    zona: zonaData.zona ? zonaData.zona : 'Zona',
    caricoNeve: {
      valori: {
        qs: qs
      },
      formula: {
        qs: qsFormula
      },
    },
    caricoNeveAlSuolo: {
      valori: {
        qsk: qsk
      },
      formula: {
        qsk: qskFormula
      },
      riferimento: zonaData.data.valoriQsk.riferimento
    },
    coeffCe: {
      ce: ce,
      riferimento: topografiaData.riferimento
    },
    coeffCt: {
      ct: ct,
      riferimento: topografiaData.riferimento
    }
  };
};
