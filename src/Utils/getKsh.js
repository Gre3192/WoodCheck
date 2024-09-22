export default function getKsh(props, shape = 'circolare') {


    if (shape.toLocaleLowerCase() === 'circolare')
        return {
            value: 1.2,
            description: 'Coefficiente di forma per sezioni circolari piene'
        }
    else if (shape.toLocaleLowerCase() === 'rettangolare') {
        const { h, b } = props
        return {
            value: Math.min(1 + 0.15 * (Math.min(h, b)) / (Math.min(h, b)), 2),
            description: 'Coefficiente di forma per sezioni rettangolari piene, di lati b e h, b<h'
        }
    }
    else
        return {
            value: 1,
            description: 'Coefficiente di forma per sezioni diverse da rettangolari e circolari'
        }
}