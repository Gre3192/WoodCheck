const customDecimal = (num, decimals = 1) => {




    
    return (
        Math.round(num * 10 ** decimals) / 10 ** decimals
    )
}

export default customDecimal