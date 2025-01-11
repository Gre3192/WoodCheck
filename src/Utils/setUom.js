export default function setUom(uom) {


    switch (uom?.toLowerCase()) {
        
        case "mm":
            return 1
        case "m":
            return 10 ** 3
        case "cm":
            return 10
        case "kn":
            return 10 ** 3
        case "n":
            return 1
        case "n\u00B7m":
            return 10 ** 3
        case "n\u00B7cm":
            return 10
        case "n\u00B7mm":
            return 1
        case "kn\u00B7m":
            return 10 ** 6
        case "kn\u00B7cm":
            return 10 ** 4
        case "kn\u00B7mm":
            return 10 ** 3
        default:
            return 1
    }
}