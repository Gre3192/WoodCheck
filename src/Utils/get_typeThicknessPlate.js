import customDecimal from "./customDecimal"



export default function get_typeThicknessPlate(t, d) {

    if (t <= 0.5 * d) return 'Piastra sottile'
    else if (0.5 * d < t && t <= d) return 'Piastra moderatamente spessa'
    else if (t > d) return 'Piastra spessa'

}