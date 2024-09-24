const kmodData = {
  "Legno massiccio": {
    riferimento: "UNI EN 14081-1",
    classiServizio: {
      1: { Permanente: 0.60, Lunga: 0.70, Media: 0.80, Breve: 0.90, Istantanea: 1.10 },
      2: { Permanente: 0.60, Lunga: 0.70, Media: 0.80, Breve: 0.90, Istantanea: 1.10 },
      3: { Permanente: 0.50, Lunga: 0.55, Media: 0.65, Breve: 0.70, Istantanea: 0.90 }
    }
  },
  "Legno lamellare incollato": {
    riferimento: "UNI EN 14080",
    classiServizio: {
      1: { Permanente: 0.60, Lunga: 0.70, Media: 0.80, Breve: 0.90, Istantanea: 1.10 },
      2: { Permanente: 0.60, Lunga: 0.70, Media: 0.80, Breve: 0.90, Istantanea: 1.10 },
      3: { Permanente: 0.50, Lunga: 0.55, Media: 0.65, Breve: 0.70, Istantanea: 0.90 }
    }
  },
  "LVL": {
    riferimento: "UNI EN 14374, UNI EN 14279",
    classiServizio: {
      1: { Permanente: 0.60, Lunga: 0.70, Media: 0.80, Breve: 0.90, Istantanea: 1.10 },
      2: { Permanente: 0.60, Lunga: 0.70, Media: 0.80, Breve: 0.90, Istantanea: 1.10 },
      3: { Permanente: 0.50, Lunga: 0.55, Media: 0.65, Breve: 0.70, Istantanea: 0.90 }
    }
  },
  "Compensato": {
    riferimento: "UNI EN 636:2015",
    classiServizio: {
      1: { Permanente: 0.60, Lunga: 0.70, Media: 0.80, Breve: 0.90, Istantanea: 1.10 },
      2: { Permanente: 0.60, Lunga: 0.70, Media: 0.80, Breve: 0.90, Istantanea: 1.10 },
      3: { Permanente: 0.50, Lunga: 0.55, Media: 0.65, Breve: 0.70, Istantanea: 0.90 }
    }
  },
  "Pannello di scaglie orientate (OSB)": {
    riferimento: "UNI EN 300:2006",
    classiServizio: {
      1: { Permanente: 0.50, Lunga: 0.55, Media: 0.65, Breve: 0.80, Istantanea: 1.10 },
      2: { Permanente: 0.40, Lunga: 0.50, Media: 0.60, Breve: 0.70, Istantanea: 0.90 }
    }
  },
  "Pannello di particelle (truciolare)": {
    riferimento: "UNI EN 312:2010",
    classiServizio: {
      1: { Permanente: 0.40, Lunga: 0.50, Media: 0.60, Breve: 0.70, Istantanea: 0.90 },
      2: { Permanente: 0.30, Lunga: 0.40, Media: 0.55, Breve: 0.65, Istantanea: 0.85 }
    }
  },
  "Pannello di fibre, pannelli duri": {
    riferimento: "UNI EN 622-2:2005",
    classiServizio: {
      1: { Permanente: 0.30, Lunga: 0.40, Media: 0.55, Breve: 0.65, Istantanea: 0.85 },
      2: { Permanente: 0.20, Lunga: 0.30, Media: 0.45, Breve: 0.55, Istantanea: 0.80 }
    }
  },
  "Pannello di fibre, pannelli semiduri": {
    riferimento: "UNI EN 622-3:2005",
    classiServizio: {
      1: { Permanente: 0.25, Lunga: 0.30, Media: 0.45, Breve: 0.55, Istantanea: 0.80 },
      2: { Permanente: 0.20, Lunga: 0.25, Media: 0.35, Breve: 0.45, Istantanea: 0.70 }
    }
  },
  "Pannello di fibra di legno, ottenuto per via secca (MDF)": {
    riferimento: "UNI EN 622-5:2010",
    classiServizio: {
      1: { Permanente: 0.35, Lunga: 0.45, Media: 0.55, Breve: 0.65, Istantanea: 0.90 },
      2: { Permanente: 0.25, Lunga: 0.35, Media: 0.45, Breve: 0.55, Istantanea: 0.80 }
    }
  }
};


export default function get_kmod(material = 'lamellare', serviceClass = 1, classLoad = 'permanente') {

  const materialFound = Object.keys(kmodData).find((key) =>
    key.toLowerCase().includes(material.toLowerCase())
  );
  if (!materialFound) {
    throw new Error("Materiale non trovato.");
  }

  const materialData = kmodData[materialFound];

  const serviceData = materialData.classiServizio[serviceClass];
  if (!serviceData) {
    throw new Error("Classe di servizio non valida.");
  }

  const classLoadFound = Object.keys(serviceData).find((key) =>
    key.toLowerCase().includes(classLoad.toLowerCase())
  );
  if (!classLoadFound) {
    throw new Error("Classe di durata del carico non valida.");
  }

  const kmod = serviceData[classLoadFound];

  return kmod;

};




