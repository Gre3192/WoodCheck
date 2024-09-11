import customDecimal from "./customDecimal";



const getSteelProperties =  (steelClass = 'B450C') => {
    
    const fsk = 450
    const es = 210000

    return {
        steelClass: steelClass,
        fsk: fsk,
        es: es,
      };
}

export default getSteelProperties