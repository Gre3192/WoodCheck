const zoneData = {
  "Zona 1": {
    citta: [
      "Aosta", "Torino", "Verbano-Cusio-Ossola", "Vercelli", "Biella", "Novara", "Cuneo", "Asti", "Alessandria", "Varese", "Como", "Lecco", "Sondrio", "Monza Brianza", "Milano", "Bergamo", "Brescia", "Pavia", "Lodi", "Cremona", "Mantova", "Trento", "Bolzano", "Vicenza", "Verona", "Treviso", "Pordenone", "Udine", "Belluno", "Padova", "Rovigo", "Venezia", "Gorizia"
    ],
    valoriVelocitàBaseRiferimento: {
      vb0: 25,
      a0: 1000,
      ks: 0.40,
      riferimento: "NTC18 - Capitolo 3 - Tab.[3.3.1]"
    }
  },
  "Zona 2": {
    citta: [
      "Piacenza", "Parma", "Reggio Emilia", "Modena", "Bologna", "Ferrara", "Ravenna", "Forlì-Cesena", "Rimini"
    ],
    valoriVelocitàBaseRiferimento: {
      vb0: 25,
      a0: 750,
      ks: 0.45,
      riferimento: "NTC18 - Capitolo 3 - Tab.[3.3.1]"
    }
  },
  "Zona 3": {
    citta: [
      "Barletta-Andria-Trani", "Massa Carrara", "Firenze", "Prato", "Pistoia", "Lucca", "Pisa", "Livorno", "Arezzo", "Siena", "Grosseto", "Ancona", "Pesaro e Urbino", "Macerata", "Ascoli Piceno", "Fermo", "Perugia", "Terni", "Viterbo", "Rieti", "Roma", "Latina", "Frosinone", "L'Aquila", "Pescara", "Chieti", "Teramo", "Campobasso", "Isernia", "Napoli", "Salerno", "Avellino", "Benevento", "Caserta", "Bari", "Brindisi", "Taranto", "Lecce", "Foggia", "Potenza", "Matera", "Catanzaro", "Cosenza", "Crotone", "Vibo Valentia"
    ],
    valoriVelocitàBaseRiferimento: {
      vb0: 27,
      a0: 500,
      ks: 0.37,
      riferimento: "NTC18 - Capitolo 3 - Tab.[3.3.1]"
    }
  },
  "Zona 4": {
    citta: [
      "Caltanissetta", "Siracusa", "Ragusa", "Catania", "Enna", "Messina", "Palermo", "Agrigento", "Trapani", "Reggio Calabria"
    ],
    valoriVelocitàBaseRiferimento: {
      vb0: 28,
      a0: 500,
      ks: 0.36,
      riferimento: "NTC18 - Capitolo 3 - Tab.[3.3.1]"
    }
  },
  "Zona 5": {
    citta: [
      "Sassari", "Nuoro", "Oristano", "Olbia-Tempio", "Ogliastra", "Cagliari", "Medio Campidano", "Sud Sardegna"
    ],
    valoriVelocitàBaseRiferimento: {
      vb0: 28,
      a0: 750,
      ks: 0.40,
      riferimento: "NTC18 - Capitolo 3 - Tab.[3.3.1]"
    }
  },
  "Zona 6": {
    citta: [
      "Sassari", "Nuoro", "Oristano", "Olbia-Tempio", "Ogliastra", "Cagliari", "Medio Campidano", "Sud Sardegna"
    ],
    valoriVelocitàBaseRiferimento: {
      vb0: 28,
      a0: 500,
      ks: 0.36,
      riferimento: "NTC18 - Capitolo 3 - Tab.[3.3.1]"
    }
  },
  "Zona 7": {
    citta: [
      "Genova", "Savona", "Imperia", "La Spezia"
    ],
    valoriVelocitàBaseRiferimento: {
      vb0: 28,
      a0: 1000,
      ks: 0.54,
      riferimento: "NTC18 - Capitolo 3 - Tab.[3.3.1]"
    }
  },
  "Zona 8": {
    citta: [
      "Trieste"
    ],
    valoriVelocitàBaseRiferimento: {
      vb0: 30,
      a0: 1500,
      ks: 0.50,
      riferimento: "NTC18 - Capitolo 3 - Tab.[3.3.1]"
    }
  },
  "Zona 9": {
    citta: [
      "Isole (ad eccezione di Sicilia e Sardegna) e mare aperto"
    ],
    valoriVelocitàBaseRiferimento: {
      vb0: 31,
      a0: 500,
      ks: 0.32,
      riferimento: "NTC18 - Capitolo 3 - Tab.[3.3.1]"
    }
  }
};

const categorieEsposizione = {
  "1,2,3,4,5": {
    A: { "0-2": null, "2-10": "IV", "10-30": "IV", "30-500": "V", "500-750": "V", ">750": "V" },
    B: { "0-2": null, "2-10": "III", "10-30": "III", "30-500": "IV", "500-750": "IV", ">750": "IV" },
    C: { "0-2": null, "2-10": "*", "10-30": "III", "30-500": "III", "500-750": "IV", ">750": "IV" },
    D: { "0-2": "I", "2-10": "II", "10-30": "II", "30-500": "III", "500-750": "III", ">750": "**" }
  },
  "6": {
    A: { "0-2": null, "2-10": "III", "10-30": "IV", "30-500": "IV", ">500": "V" },
    B: { "0-2": null, "2-10": "III", "10-30": "IV", "30-500": "IV", ">500": "V" },
    C: { "0-2": null, "2-10": "III", "10-30": "IV", "30-500": "IV", ">500": "V" },
    D: { "0-2": "I", "2-10": "II", "10-30": "III", "30-500": "III", ">500": "III" }
  },
  "7,8": {
    A: { "0-1.5": null, "1.5-2": "IV" },
    B: { "0-1.5": null, "1.5-2": "IV" },
    C: { "0-1.5": null, "1.5-2": "III" },
    D: { "0-1.5": "I", "1.5-2": "II", ">2": "***" }
  },
  "9": {
    A: { "0-1.5": null, ">1.5": "I" },
    B: { "0-1.5": null, ">1.5": "I" },
    C: { "0-1.5": null, ">1.5": "I" },
    D: { "0-1.5": "I", ">1.5": "I" }
  }
};

const esposizioneData = {
  "Categoria I": {
    kr: 0.17,
    z0: 0.01,
    zmin: 2,
    riferimento: "NTC18 - Capitolo 3 - Tab.[3.3.II]"
  },
  "Categoria II": {
    kr: 0.19,
    z0: 0.05,
    zmin: 4,
    riferimento: "NTC18 - Capitolo 3 - Tab.[3.3.II]"
  },
  "Categoria III": {
    kr: 0.20,
    z0: 0.10,
    zmin: 5,
    riferimento: "NTC18 - Capitolo 3 - Tab.[3.3.II]"
  },
  "Categoria IV": {
    kr: 0.22,
    z0: 0.30,
    zmin: 8,
    riferimento: "NTC18 - Capitolo 3 - Tab.[3.3.II]"
  },
  "Categoria V": {
    kr: 0.23,
    z0: 0.70,
    zmin: 12,
    riferimento: "NTC18 - Capitolo 3 - Tab.[3.3.II]"
  }
};

function getCategoria(distanza, mappaCategoria) {
  for (const range in mappaCategoria) {
    const [min, max] = range.split('-').map(parseFloat);
    if (distanza >= min && (max === undefined || distanza <= max)) {
      return mappaCategoria[range];
    }
  }
  return null;
}

function getCatEsposizione(zona, classeRugosita, distanzaCosta) {

  const numZona = zona.match(/\d+/)[0];

  // Determinare la chiave della zona corretta
  const zonaKey = Object.keys(categorieEsposizione).find(key => key.split(',').includes(numZona.toString()));

  if (!zonaKey) {
    return "Zona non valida";
  }

  const mappaClasse = categorieEsposizione[zonaKey][classeRugosita.toUpperCase()];

  if (!mappaClasse) {
    return "Classe di rugosità non valida";
  }

  let categoria = getCategoria(distanzaCosta, mappaClasse);

  // Logica speciale per "*", "**" e "***"
  if (categoria === "*") {
    if (["1", "2", "3", "4"].includes(numZona.toString())) {
      categoria = "II";
    } else if (["5"].includes(numZona.toString())) {
      categoria = "III";
    }
  } else if (categoria === "**") {
    if (["2", "3", "4", "5"].includes(numZona.toString())) {
      categoria = "III";
    } else if (["1"].includes(numZona.toString())) {
      categoria = "IV";
    }
  } else if (categoria === "***") {
    if (["8"].includes(numZona.toString())) {
      categoria = "II";
    } else if (["7"].includes(numZona.toString())) {
      categoria = "III";
    }
  }

  // Mappare il codice di categoria a una stringa descrittiva
  const categoriaDescrizioni = {
    "I": "Categoria I",
    "II": "Categoria II",
    "III": "Categoria III",
    "IV": "Categoria IV",
    "V": "Categoria V"
  };

  return categoriaDescrizioni[categoria] || "Categoria sconosciuta";
}

function getEsposizioneData(categoria) {
  if (esposizioneData[categoria]) {
    const { kr, z0, zmin, riferimento } = esposizioneData[categoria];
    return { kr, z0, zmin, riferimento };
  } else {
    return "Categoria non valida";
  }
}

export default function getWindLoad(citta, as, classeRugosita, distanzaCosta, z) {

  if (!citta || as == null || !classeRugosita || !distanzaCosta) {
    return {
      zona: '',
      categoriaEsposizione: '',
      valori: {
        vb0: '',
        a0: '',
        ks: '',
        ca: '',
        vb: '',
        cr: '',
        ct: '',
        vr: '',
        ro:'',
        qr: '',
        kr: '',
        z0: '',
        zmin: '',
      },
      formula: {
        vb0: '',
        a0: '',
        ks: '',
        ca: '',
        vb: '',
        cr: '',
        ct: '',
        vr: '',
        ro:'',
        qr: '',
        kr: '',
        z0: '',
        zmin: '',
      }
    }
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

  const categoriaEsposizione = getCatEsposizione(zonaData.zona, classeRugosita, distanzaCosta)

  const tRitorno = 50
  const ro = 1.25

  const vb0 = zonaData.data.valoriVelocitàBaseRiferimento.vb0
  const a0 = zonaData.data.valoriVelocitàBaseRiferimento.a0
  const ks = zonaData.data.valoriVelocitàBaseRiferimento.ks
  const ca = as <= a0 ? 1 : 1 + ks * ((as / a0) - 1);
  const vb = vb0 * ca;
  const cr = 0.75 * Math.sqrt(1 - 0.2 * Math.log(-Math.log(1 - 1 / tRitorno)));
  const ct = 1
  const vr = vb * cr
  const qr = 1 / 2 * ro * vr ** 2
  const kr = getEsposizioneData(categoriaEsposizione).kr
  const z0 = getEsposizioneData(categoriaEsposizione).z0
  const zmin = getEsposizioneData(categoriaEsposizione).zmin
  const cd = 1
  const ce = z >= zmin
    ? kr ** 2 * ct * Math.log(z / z0) * (7 + ct * Math.log(z / z0))
    : kr ** 2 * ct * Math.log(zmin / z0) * (7 + ct * Math.log(zmin / z0));

  const p = qr * ce * cd   // * cp
  const pf = qr * ce       // * cf


  const caFormula = as <= a0 ? '' : '$1+k_s\\cdotp\\left(\\frac{a_s}{a_0}-1\\right)$';
  const vbFormula = '$v_{b0}\\cdotp C_a$';
  const crFormula = '$0.75\\cdotp\\sqrt{1-0.2\\cdotp\\ln\\left(-\\ln\\left(1-\\frac{1}{T_{\\text{R}}}\\right)\\right)}$'
  const vrFormula = '$v_{b}\\cdotp C_r$';
  const qrFormula = '$\\frac{1}{2}\\cdotp\\rho\\cdotp v_r^2$'
  const ceFormula = z >= zmin
    ? '$k_r^2\\cdotp C_t\\cdotp\\ln\\left(\\frac{z}{z_0}\\right)\\cdotp\\left(7+C_t\\cdotp\\ln\\left(\\frac{z}{z_0}\\right)\\right)$'
    : '$k_r^2\\cdotp C_t\\cdotp\\ln\\left(\\frac{z_{\\text{min}}}{z_0}\\right)\\cdotp\\left(7+C_t\\cdotp\\ln\\left(\\frac{z_{\\text{min}}}{z_0}\\right)\\right)$'
  const pFormula = '$q_{r}\\cdotp C_e\\cdotp C_d$'   // * cp
  const pfFormula = '$q_{r}\\cdotp C_e$'            // * cf


  return {
    zona: zonaData.zona ? zonaData.zona : 'Zona',
    categoriaEsposizione: categoriaEsposizione,
    valori: {
      vb0: vb0,
      a0: a0,
      ks: ks,
      ca: ca,
      vb: vb,
      cr: cr,
      ct: ct,
      vr: vr,
      ro:ro,
      qr: qr,
      kr: kr,
      z0: z0,
      zmin: zmin,
      cd: cd,
      cf: 'cf',
      cp: 'cp',
      ce: ce,
      p: p,
      pf: pf,
    },
    formula: {
      vb0: '',
      a0: '',
      ks: '',
      ca: caFormula,
      vb: vbFormula,
      cr: crFormula,
      ct: '',
      vr: vrFormula,
      ro:'',
      qr: qrFormula,
      kr: '',
      z0: '',
      zmin: '',
      cd: '',
      cf: '',
      cp: '',
      ce: ceFormula,
      p: pFormula,
      pf: pfFormula,
    }
  };
};