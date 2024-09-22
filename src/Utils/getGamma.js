export default function getGamma(value = '') {
    switch (value.toLowerCase()) {

        case 'm0': return 1.05     // Resistenza delle sezioni di Classe 1-2-3-4

        case 'm1': return 1.05     // Resistenza all'instabilità delle membrature

        case 'm1*': return 1.10    // Resistenza all'instabilità delle membrature di ponti stradali e ferroviari

        case 'm2': return 1.25     // Resistenza, nei riguardi della frattura, delle sezioni tese (indebolite dai fori)

        default: return ''
    }
}