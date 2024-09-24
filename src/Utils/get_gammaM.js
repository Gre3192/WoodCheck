export default function get_gammaM(woodType = 'lamellare', columnTableNTC = 'A') {

    if (columnTableNTC?.toUpperCase() === 'A') {

        if (woodType?.toLowerCase().includes('massiccio')) return 1.50
        else if (woodType?.toLowerCase().includes('lamellare')) return 1.45
        else if (woodType?.toLowerCase().includes('pannelli di tavole')) return 1.45
        else if (woodType?.toLowerCase().includes('pannelli di particelle')) return 1.50
        else if (woodType?.toLowerCase().includes('lvl')) return 1.40
        else if (woodType?.toLowerCase().includes('compensato')) return 1.40
        else if (woodType?.toLowerCase().includes('pannelli di scaglie')) return 1.40
        else if (woodType?.toLowerCase().includes('unioni')) return 1.50
        else if (woodType?.toLowerCase().includes('eccezzionali')) return 1
    }
    else if (columnTableNTC?.toUpperCase() === 'B') {
        
        if (woodType?.toLowerCase().includes('massiccio')) return 1.45
        else if (woodType?.toLowerCase().includes('lamellare')) return 1.35
        else if (woodType?.toLowerCase().includes('pannelli di tavole')) return 1.35
        else if (woodType?.toLowerCase().includes('lvl')) return 1.30
        else if (woodType?.toLowerCase().includes('compensato')) return 1.30
        else if (woodType?.toLowerCase().includes('pannelli di scaglie')) return 1.30
        else if (woodType?.toLowerCase().includes('unioni')) return 1.40
        else if (woodType?.toLowerCase().includes('eccezzionali')) return 1
    }

}