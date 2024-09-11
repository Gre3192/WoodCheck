const copriferroData = {
  acciaioOrdinario: [
    {
      classeStrutturale: "S1",
      valori: {
        "X0": 10,
        "XC1": 10,
        "XC2/XC3": 10,
        "XC4": 15,
        "XD1/XS1": 20,
        "XD2/XS2": 25,
        "XD3/XS3": 30,
      },
    },
    {
      classeStrutturale: "S2",
      valori: {
        "X0": 10,
        "XC1": 10,
        "XC2/XC3": 15,
        "XC4": 20,
        "XD1/XS1": 25,
        "XD2/XS2": 30,
        "XD3/XS3": 35,
      },
    },
    // Aggiungi le altre classi strutturali S3, S4, ecc.
  ],
  acciaioPrecompressione: [
    {
      classeStrutturale: "S1",
      valori: {
        "X0": 10,
        "XC1": 15,
        "XC2/XC3": 20,
        "XC4": 25,
        "XD1/XS1": 30,
        "XD2/XS2": 35,
        "XD3/XS3": 40,
      },
    },
    {
      classeStrutturale: "S2",
      valori: {
        "X0": 10,
        "XC1": 15,
        "XC2/XC3": 25,
        "XC4": 30,
        "XD1/XS1": 35,
        "XD2/XS2": 40,
        "XD3/XS3": 45,
      },
    },
    // Aggiungi le altre classi strutturali S3, S4, ecc.
  ],
};



const getConcreteCover = () => {




    const deltaCdur_g = 0
    const deltaCdur_st = 0
    const deltaCdur_add = 0
    const cmin = Math.max(cmin_b, cmin_dur + deltaCdur_g - deltaCdur_st - deltaCdur_add, 10)
    const cnom = cmin + delta_cdev


    return (
        ''
    )
}

export default getConcreteCover