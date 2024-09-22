export default function getCheckSymbol(check) {
    if (check > 1) return '> 1'
    else if (check == 1) return '= 1'
    else if (check < 1) return '< 1'
    return ''
}