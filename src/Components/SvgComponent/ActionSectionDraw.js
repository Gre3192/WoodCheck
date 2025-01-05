


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
                    {/* <path d="M107.5 49.5H256.5V248.5H107.5V49.5Z" fill="#D2B48C" stroke="black" /> */}
                    <rect x="107.5" y="49.5" width="149" height="199" fill="#D2B48C" stroke="black" />

                    
                    {/* Sinistra  */}
                    <g>
                        {Med_y > 0 && Ved_y > 0 ?
                            <g transform={`translate(60, 0)`}>
                                <path d="M0 162L21.6 174.471L21.6 149.529L0 162ZM19.44 164.16H97V159.84H19.44V164.16ZM18 161.96L38.16 174.92V149L18 161.96Z" fill="#479E5A" />
                                <text x="-10" y="168" font-family="Verdana" font-size="16" fill="#479E5A" text-anchor="end">{`${Math.abs(Med_y)}`}</text>

                                <path d="M0 136L21.6 148.471L21.6 123.529L0 136ZM19.44 138.16H97V133.84H19.44V138.16Z" fill="#C10D10" />
                                <text x="-10" y="140" font-family="Verdana" font-size="16" fill="#C10D10" text-anchor="end">{`${Math.abs(Ved_y)}`}</text>
                            </g> : null
                        }
                        {!(Med_y > 0 && Ved_y > 0) && Med_y > 0 ?
                            <g>
                                <path d="M58 149L79.6 161.471L79.6 136.529L58 149ZM77.44 151.16H155V146.84H77.44V151.16ZM74 148.96L94.16 161.92V136L74 148.96Z" fill="#479E5A" />
                                <text x="50" y="156" font-family="Verdana" font-size="16" fill="#479E5A" text-anchor="end">{`${Math.abs(Med_y)}`}</text>
                            </g> : null
                        }
                        {!(Med_y > 0 && Ved_y > 0) && Ved_y > 0 ?
                            <g>
                                <path d="M58 149L79.6 161.471V136.529L58 149ZM77.44 151.16H155V146.84H77.44V151.16Z" fill="#C10D10" />
                                <text x="50" y="156" font-family="Verdana" font-size="16" fill="#7B1010" text-anchor="end">{`${Math.abs(Ved_y)}`}</text>
                            </g> : null
                        }
                    </g>

                    {/* Destra  */}
                    <g>
                        {Med_y < 0 && Ved_y < 0 ?
                            <g transform={`translate(60, 0)`}>
                                <path d="M246 136L224.4 148.471V123.529L246 136ZM226.56 138.16H149V133.84H226.56V138.16ZM228 135.96L207.84 148.92V123L228 135.96Z" fill="#479E5A" />
                                <text x="255" y="140" font-family="Verdana" font-size="16" fill="#479E5A">{`${Math.abs(Med_y)}`}</text>

                                <path d="M247 162L225.4 174.471V149.529L247 162ZM227.56 164.16H150V159.84H227.56V164.16Z" fill="#C10D10" />
                                <text x="255" y="168" font-family="Verdana" font-size="16" fill="#C10D10">{`${Math.abs(Ved_y)}`}</text>
                            </g> : null
                        }
                        {!(Med_y < 0 && Ved_y < 0) && Med_y < 0 ?
                            <g>
                                <path d="M305 149L283.4 161.471L283.4 136.529L305 149ZM285.56 151.16H208V146.84H285.56V151.16ZM287.56 148.96L267.4 161.92V136L287.56 148.96Z" fill="#479E5A" />
                                <text x="310" y="154" font-family="Verdana" font-size="16" fill="#479E5A" text-anchor="start">{`${Math.abs(Med_y)}`}</text>
                            </g> : null
                        }
                        {!(Med_y < 0 && Ved_y < 0) && Ved_y < 0 ?
                            <g>
                                <path d="M305 149L283.4 161.471L283.4 136.529L305 149ZM285.56 151.16H208V146.84H285.56V151.16Z" fill="#C10D10" />
                                <text x="310" y="154" font-family="Verdana" font-size="16" fill="#7B1010" text-anchor="start">{`${Math.abs(Ved_y)}`}</text>
                            </g> : null
                        }
                    </g>

                    {/* Giu  */}
                    <g>
                        {Med_z < 0 && Ved_z < 0 ?
                            <g transform={`translate(60, 0)`}>
                                <path d="M110.92 297L98.4493 275.4H123.391L110.92 297ZM108.76 277.56V200H113.08V277.56H108.76ZM110.96 279L98 258.84H123.92L110.96 279Z" fill="#479E5A" />
                                <text x="85" y="270" font-family="Verdana" font-size="16" fill="#479E5A" text-anchor="end">{`${Math.abs(Med_z)}`}</text>

                                <path d="M137 297L124.529 275.4H149.471L137 297ZM134.84 277.56V200H139.16V277.56H134.84Z" fill="#C10D10" />
                                <text x="150" y="270" font-family="Verdana" font-size="16" fill="#7B1010">{`${Math.abs(Ved_z)}`}</text>
                            </g> : null
                        }
                        {!(Med_z < 0 && Ved_z < 0) && Med_z < 0 ?
                            <g>
                                <path d="M182 297L169.529 275.4H194.471L182 297ZM179.84 277.56V200H184.16V277.56H179.84ZM181.96 279L169.99 258.84H194.92L181.96 279Z" fill="#479E5A" />
                                <text x="200" y="270" font-family="Verdana" font-size="16" fill="#479E5A">{`${Math.abs(Med_z)}`}</text>
                            </g> : null
                        }
                        {!(Med_z < 0 && Ved_z < 0) && Ved_z < 0 ?
                            <g>
                                <path d="M182 297L169.529 275.4H194.471L182 297ZM179.84 277.56V200H184.16V277.56H179.84Z" fill="#C10D10" />
                                <text x="200" y="270" font-family="Verdana" font-size="16" fill="#7B1010">{`${Math.abs(Ved_z)}`}</text>
                            </g> : null
                        }
                    </g>

                    {/* Su  */}
                    <g>
                        {Med_z > 0 && Ved_z > 0 ?
                            <g transform={`translate(60, 0)`}>
                                <path d="M136 0L148.471 21.6H123.529L136 0ZM138.16 19.44V97H133.84V19.44H138.16ZM135.96 18L148.92 38.16H123L135.96 18Z" fill="#479E5A" />
                                <text x="160" y="40" font-family="Verdana" font-size="16" fill="#479E5A">{`${Math.abs(Med_z)}`}</text>

                                <path d="M110 0L122.471 21.6H97.5292L110 0ZM112.16 19.44L112.16 97H107.84L107.84 19.44H112.16Z" fill="#C10D10" />
                                <text x="95" y="40" font-family="Verdana" font-size="16" fill="#7B1010" text-anchor="end">{`${Math.abs(Ved_z)}`}</text>
                            </g> : null
                        }
                        {!(Med_z > 0 && Ved_z > 0) && Med_z > 0 ?
                            <g>
                                <path d="M182 0L194.471 21.6H169.529L182 0ZM184.16 19.44L184.16 97H179.84L179.84 19.44H184.16ZM181.96 18L194.92 38.16H167L181.96 18Z" fill="#479E5A" />
                                <text x="200" y="40" font-family="Verdana" font-size="16" fill="#479E5A">{`${Math.abs(Med_z)}`}</text>
                            </g> : null
                        }
                        {!(Med_z > 0 && Ved_z > 0) && Ved_z > 0 ?
                            <g>
                                <path d="M182 0L194.471 21.6H169.529L182 0ZM184.16 19.44V97H179.84V19.44H184.16Z" fill="#C10D10" />
                                <text x="200" y="40" font-family="Verdana" font-size="16" fill="#7B1010">{`${Math.abs(Ved_z)}`}</text>
                            </g> : null
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