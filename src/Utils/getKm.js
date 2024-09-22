export default function getKm(shape = 'rettangolare') {

    if (shape?.toLocaleLowerCase() === 'rettangolare') return 0.7
    else return 1

}