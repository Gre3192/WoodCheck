import Latex from "react-latex-next"



export default function ActionSectionDraw({ shape, forces }) {

    let { Ned, Ved_y, Ved_z, Med_y, Med_z, Med_tor } = forces

    Ned = Ned.value
    Ved_y = Ved_y.value
    Med_y = Med_y.value
    Ved_z = Ved_z.value
    Med_z = Med_z.value
    Med_tor = Med_tor.value

    return (
        <div className="mt-20 w-full">
            <svg viewBox="0 0 400 500" className="h-[350px]" width={'100%'} xmlns="http://www.w3.org/2000/svg">

                <g transform={`translate(0, 0)`}>

                    {/* Rettangolo  */}
                    <path d="M107.5 49.5H256.5V248.5H107.5V49.5Z" fill="#D2B48C" stroke="black" />

                    {/* Sinistra  */}
                    <g>
                        {Med_y > 0 ? <path d="M58 149L79.6 161.471L79.6 136.529L58 149ZM77.44 151.16H155V146.84H77.44V151.16ZM74 148.96L94.16 161.92V136L74 148.96Z" fill="#479E5A" /> : null} {/* DoppiaFreccia */}
                        {Ved_y > 0 ? <path d="M58 149L79.6 161.471V136.529L58 149ZM77.44 151.16H155V146.84H77.44V151.16Z" fill="#C10D10" /> : null} {/* Freccia */}
                        {Med_y > 0 || Ved_y > 0 ?
                            <text x="50" y="156" font-family="Verdana" font-size="16" fill="#7B1010" text-anchor="end">{`${Med_y > 0 ? Math.abs(Med_y) : Math.abs(Ved_y)}`}</text>
                            : null
                        }
                    </g>

                    {/* Destra  */}
                    <g>
                        {Med_y < 0 ? <path d="M305 149L283.4 161.471L283.4 136.529L305 149ZM285.56 151.16H208V146.84H285.56V151.16ZM287.56 148.96L267.4 161.92V136L287.56 148.96Z" fill="#479E5A" /> : null} {/* DoppiaFreccia */}
                        {Ved_y < 0 ? <path d="M305 149L283.4 161.471L283.4 136.529L305 149ZM285.56 151.16H208V146.84H285.56V151.16Z" fill="#C10D10" /> : null}{/* Freccia */}
                        {Med_y < 0 || Ved_y < 0 ?
                            <text x="310" y="154" font-family="Verdana" font-size="16" fill="#7B1010" text-anchor="start">{`${Med_y > 0 ? Math.abs(Med_y) : Math.abs(Ved_y)}`}</text>
                            : null
                        }
                    </g>

                    {/* Giu  */}
                    <g>
                        {Med_z < 0 ? <path d="M182 297L169.529 275.4H194.471L182 297ZM179.84 277.56V200H184.16V277.56H179.84ZM181.96 279L169.99 258.84H194.92L181.96 279Z" fill="#479E5A" /> : null} {/* DoppiaFreccia */}
                        {Ved_z < 0 ? <path d="M182 297L169.529 275.4H194.471L182 297ZM179.84 277.56V200H184.16V277.56H179.84Z" fill="#C10D10" /> : null} {/* Freccia */}
                        {Med_z < 0 || Ved_z < 0 ?
                            <text x="200" y="270" font-family="Verdana" font-size="16" fill="#7B1010">{`${Med_z < 0 ? Math.abs(Med_z) : Math.abs(Ved_z)}`}</text>
                            : null
                        }
                    </g>

                    {/* Su  */}
                    <g>
                        {Med_z > 0 ? <path d="M182 0L194.471 21.6H169.529L182 0ZM184.16 19.44L184.16 97H179.84L179.84 19.44H184.16ZM181.96 18L194.92 38.16H167L181.96 18Z" fill="#479E5A" /> : null} {/* DoppiaFreccia */}
                        {Ved_z > 0 ? <path d="M182 0L194.471 21.6H169.529L182 0ZM184.16 19.44V97H179.84V19.44H184.16Z" fill="#C10D10" /> : null} {/* Freccia */}
                        {Med_z > 0 || Ved_z > 0 ?
                            <text x="200" y="40" font-family="Verdana" font-size="16" fill="#7B1010">{`${Med_z > 0 ? Math.abs(Med_z) : Math.abs(Ved_z)}`}</text>
                            : null
                        }
                    </g>

                    {/* Centro */}
                    <g>
                        {Ned > 0 ? <circle cx="182" cy="148" r="12.84" stroke="#0772FC" fill="#D2B48C" stroke-width="4.32" /> : null} {/* Cerchio */}
                        {Ned < 0 ? <path d="M194.335 139.122L185.244 148.213L194.335 157.305L191.305 160.335L182.213 151.244L173.122 160.335L170.091 157.305L179.183 148.213L170.091 139.122L173.122 136.091L182.213 145.183L191.305 136.091L194.335 139.122Z" fill="#0772FC" /> : null} {/* Croce */}
                        {Ned ? <text x="182" y="127" font-family="Verdana" font-size="16" fill="#004DB2" text-anchor="middle">{`${Math.abs(Ned)}`}</text> : null}
                    </g>

                </g >
            </svg>
        </div>
    )
}