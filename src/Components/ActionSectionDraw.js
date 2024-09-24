



export default function ActionSectionDraw({ shape = 'rettangolare', Ned, Ved_y, Ved_z, Med_y, Med_z, Med_tor }) {

    return (

        <svg width="800" height="400" xmlns="http://www.w3.org/2000/svg">

            <g transform={`translate(300, 50)`}>

                {shape?.toLowerCase() === 'rettangolare' ? <rect x="0" y="0" width="200" height="300" fill="#EAD9C8" stroke="black" stroke-width="2" />
                    : <circle cx="100" cy="150" r="100" fill="#EAD9C8" stroke="black" stroke-width="2" />
                }

                {/* Mtor Orario */}
                {
                    Med_tor < 0 ?
                        <g transform={`translate(100, 150) rotate(45)`}>
                            <path d="M -50 0 A 50 50 0 0 1 50 0" fill="none" stroke="black" stroke-width="2" />
                            <g transform="translate(0, 10) rotate(90,50,0)">
                                <polygon points="50,0 40,-5 40,5" fill="black" />
                            </g>
                        </g>
                        : null
                }
                {/* Mtor Antiorario */}
                {
                    Med_tor > 0 ?
                        <g transform={`translate(100, 150) rotate(45)`}>
                            <path d="M -50 0 A 50 50 0 0 1 50 0" fill="none" stroke="black" stroke-width="2" />
                            <g transform="translate(-100, 10) rotate(90,50,0)">
                                <polygon points="50,0 40,-5 40,5" fill="black" />
                            </g>
                        </g>
                        : null
                }
                {/* Vy  */}
                {
                    Ved_y > 0 ?
                        <g transform={`translate(100, ${Med_y > 0 ? '160' : '150'}) rotate(0)`} >
                            <line x1="0" y1="0" x2="130" y2="0" stroke="red" stroke-width="2" />
                            <polygon points="140,0 130,-5 130,5" fill="red" />
                        </g>
                        : null
                }
                {/* Vz  */}
                {
                    Ved_z > 0 ?
                        <g transform={`translate(${Med_z > 0 ? '90' : '100'}, 150) rotate(270)`} >
                            <line x1="0" y1="0" x2="130" y2="0" stroke="red" stroke-width="2" />
                            <polygon points="140,0 130,-5 130,5" fill="red" />
                        </g>
                        : null
                }
                {/* -Vy  */}
                {
                    Ved_y < 0 ?
                        <g transform={`translate(100, ${Med_y < 0 ? '160' : '150'}) rotate(180)`} >
                            <line x1="0" y1="0" x2="130" y2="0" stroke="red" stroke-width="2" />
                            <polygon points="140,0 130,-5 130,5" fill="red" />
                        </g>
                        : null
                }
                {/* -Vz  */}
                {
                    Ved_z < 0 ?
                        <g transform={`translate(${Med_z < 0 ? '90' : '100'}, 150) rotate(90)`} >
                            <line x1="0" y1="0" x2="130" y2="0" stroke="red" stroke-width="2" />
                            <polygon points="140,0 130,-5 130,5" fill="red" />
                        </g>
                        : null
                }
                {/* My  */}
                {
                    Med_y > 0 ?
                        <g transform={`translate(100, ${Ved_y > 0 ? '140' : '150'}) rotate(0)`} >
                            <line x1="0" y1="0" x2="130" y2="0" stroke="green" stroke-width="2" />
                            <polygon points="140,0 130,-5 130,5" fill="green" />
                            <polygon points="148,0 138,-5 138,5" fill="green" />
                        </g>
                        : null
                }
                {/* Mz  */}
                {
                    Med_z > 0 ?
                        <g transform={`translate(${Ved_z > 0 ? '110' : '100'}, 150) rotate(270)`} >
                            <line x1="0" y1="0" x2="130" y2="0" stroke="green" stroke-width="2" />
                            <polygon points="140,0 130,-5 130,5" fill="green" />
                            <polygon points="148,0 138,-5 138,5" fill="green" />
                        </g>
                        : null
                }
                {/* -My  */}
                {
                    Med_y < 0 ?
                        <g transform={`translate(100, ${Ved_y < 0 ? '140' : '150'}) rotate(180)`} >
                            <line x1="0" y1="0" x2="130" y2="0" stroke="green" stroke-width="2" />
                            <polygon points="140,0 130,-5 130,5" fill="green" />
                            <polygon points="148,0 138,-5 138,5" fill="green" />
                        </g>
                        : null
                }
                {/* -Mz  */}
                {
                    Med_z < 0 ?
                        <g transform={`translate(${Ved_z < 0 ? '110' : '100'}, 150) rotate(90)`} >
                            <line x1="0" y1="0" x2="130" y2="0" stroke="green" stroke-width="2" />
                            <polygon points="140,0 130,-5 130,5" fill="green" />
                            <polygon points="148,0 138,-5 138,5" fill="green" />
                        </g>
                        : null
                }
            </g>

            <g transform={`translate(-30, 225) scale(0.5)`}>
                {/* Asse Y (orizzontale)  */}
                <line x1="150" y1="150" x2="250" y2="150" stroke="black" stroke-width="2" />
                <polygon points="250,150 240,145 240,155" fill="black" />
                <text x="255" y="155" font-family="Arial" font-size="25" fill="black">Y</text>
                {/* Asse Z (verticale) */}
                <line x1="150" y1="150" x2="150" y2="50" stroke="black" stroke-width="2" />
                <polygon points="150,50 145,60 155,60" fill="black" />
                <text x="155" y="45" font-family="Arial" font-size="25" fill="black">Z</text>
                {/* Asse X (diagonale) */}
                <g transform={`translate(0, 0) rotate(210,150,150)`}>
                    <line x1="150" y1="150" x2="150" y2="50" stroke="black" stroke-width="2" />
                    <polygon points="150,50 145,60 155,60" fill="black" />
                </g>
                <text x="80" y="260" font-family="Arial" font-size="25" fill="black">X</text>
                {/* Punto di origine  */}
                <circle cx="150" cy="150" r="3" fill="black" />
            </g>


        </svg >
    )
}