export default function setUom(uom) {

    switch (uom?.toLowerCase()) {
        case "mm":
            return 1
        case "m":
            return 10 ^ 3
        case "cm":
            return 10
        case "kn":
            return 10 ^ 3
        case "n":
            return 1
        case "nm":
            return 10 ^ 3
        case "ncm":
            return 10
        case "nmm":
            return 1
        case "knm":
            return 10 ^ 6
        case "kncm":
            return 10 ^ 4
        case "knmm":
            return 10 ^ 3
        default:
            return 1
    }
}