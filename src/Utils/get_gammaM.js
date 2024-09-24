export default function get_gammaM(woodType = 'lamellare', columnTableNTC = 'A') {

    if (columnTableNTC?.toUpperCase() === 'A') {
        if (woodType?.toLowerCase().includes('massiccio')) return 1.50
        if (woodType?.toLowerCase().includes('lamellare')) return 1.45
        if (woodType?.toLowerCase().includes('pannelli di tavole')) return 1.45
        if (woodType?.toLowerCase().includes('pannelli di particelle')) return 1.50
    }
    else if (columnTableNTC?.toUpperCase() === 'B') {
        if (woodType?.toLowerCase().includes('massiccio')) return 1.45
        if (woodType?.toLowerCase().includes('lamellare')) return 1.35
        if (woodType?.toLowerCase().includes('pannelli di tavole')) return 1.35
        if (woodType?.toLowerCase().includes('pannelli di particelle')) return 1.40
    }

}