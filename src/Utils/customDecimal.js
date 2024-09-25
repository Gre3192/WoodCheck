const customDecimal = (num, decimals = 1) => {


    // Se il numero è molto piccolo (con molti zeri dopo la virgola)
    if (Math.abs(num) < 1) {
        
        // Arrotondiamo il numero al primo decimale non zero
        let scientific = num.toExponential(1);  // Converte in notazione scientifica
        return parseFloat(scientific);  // Rimuove la notazione scientifica
    }


    // Per numeri normali, applichiamo toFixed(2)
    return num.toFixed(decimals);

}

export default customDecimal