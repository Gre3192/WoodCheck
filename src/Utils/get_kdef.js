const kdefData = {
    "Legno massiccio": {
      riferimento: "UNI EN 14081-1",
      classiServizio: {
        1: 0.60, 
        2: 0.80,
        3: 2.00
      }
    },
    "Legno lamellare incollato": {
      riferimento: "UNI EN 14080",
      classiServizio: {
        1: 0.60,
        2: 0.80,
        3: 2.00
      }
    },
    "LVL": {
      riferimento: "UNI EN 14374, UNI EN 14279",
      classiServizio: {
        1: 0.60,
        2: 0.80,
        3: 2.00
      }
    },
    "Compensato": {
      riferimento: "UNI EN 636:2015",
      classiServizio: {
        1: 0.80,
        2: 1.00,
        3: 2.50
      }
    },
    "Pannello di scaglie orientate (OSB)": {
      riferimento: "UNI EN 300:2006",
      classiServizio: {
        1: 2.25,
        2: 1.50
      }
    },
    "Pannello di particelle (truciolare)": {
      riferimento: "UNI EN 312:2010",
      classiServizio: {
        1: 2.25,
        2: 1.50
      }
    },
    "Pannello di fibre, pannelli duri": {
      riferimento: "UNI EN 622-2:2005",
      classiServizio: {
        1: 2.25,
        2: 3.00
      }
    },
    "Pannello di fibre, pannelli semiduri": {
      riferimento: "UNI EN 622-3:2005",
      classiServizio: {
        1: 3.00,
        2: 4.00
      }
    },
    "Pannello di fibra di legno, ottenuto per via secca (MDF)": {
      riferimento: "UNI EN 622-5:2010",
      classiServizio: {
        1: 2.25,
        2: 3.00
      }
    }
  };
  
  

  export default function get_kdef(material = 'lamellare', serviceClass = 1) {

    const materialFound = Object.keys(kdefData).find((key) =>
      key.toLowerCase().includes(material.toLowerCase())
    );

    if (!materialFound) {
      throw new Error("Materiale non trovato.");
    }

    const materialData = kdefData[materialFound];
  
    const serviceData = materialData.classiServizio[serviceClass];

    if (!serviceData) {
      throw new Error("Classe di servizio non valida.");
    }
  
    const kdef = serviceData

    console.log(kdef)

    return kdef;
  
  };
  