export default function getGeometryMass(sectionGeometry) {

    const { shape, b, h, r } = sectionGeometry

    switch (shape?.toLowerCase()) {

        case 'rettangolare':
            return {
                value: {
                    Atot: b * h,
                    Ig_y: (b * h ** 3) / 12,
                    Ig_z: (h * b ** 3) / 12,
                    Ig_tor: (h * b ** 3) / (3 * (1 + 0.6 * (b / h))),
                    Wel_y: (b * h ** 2) / 6,
                    Wel_z: (h * b ** 2) / 6,
                },
                title: {
                    Atot: `A_{tot} = `,
                    Ig_y: `I_{g,y} = `,
                    Ig_z: `I_{g,z} = `,
                    Ig_tor: `I_{g,tor} = `,
                    Wel_y: `W_{el,y} = `,
                    Wel_z: `W_{el,z} = `,
                },
                formula: {
                    Atot: `b\\cdot h = `,
                    Ig_y: `\\dfrac{b\\cdot h^3}{12} = `,
                    Ig_z: `\\dfrac{h\\cdot b^3}{12} = `,
                    Ig_tor: `\\dfrac{h\\cdot b^3}{3\\cdot \\left(1+0.6\\cdot\\dfrac{b}{h}\\right)} = `,
                    Wel_y: `\\dfrac{b\\cdot h^2}{6} = `,
                    Wel_z: `\\dfrac{h\\cdot b^2}{6} = `,
                },
                formulaVal: {
                    Atot: `${b}\\cdot ${h} = `,
                    Ig_y: `\\dfrac{${b}\\cdot ${h}^3}{12} = `,
                    Ig_z: `\\dfrac{${h}\\cdot ${b}^3}{12} = `,
                    Ig_tor: `\\dfrac{${h}\\cdot ${b}^3}{3\\cdot \\left(1+0.6\\cdot\\dfrac{${b}}{${h}}\\right)} = `,
                    Wel_y: `\\dfrac{${b}\\cdot ${h}^2}{6} = `,
                    Wel_z: `\\dfrac{${h}\\cdot ${b}^2}{6} = `,
                },
                description: {
                    Atot: `Area totale`,
                    Ig_y: `Momento di inerzia attorno al'asse y`,
                    Ig_z: `Momento di inerzia attorno al'asse z`,
                    Ig_tor: `Momento di inerzia torcente attorno al'asse x`,
                    Wel_y: `Modulo di resistenza elastico per rotazione attorno a y`,
                    Wel_z: `Modulo di resistenza elastico per rotazione attorno a z`,
                }
            }

        case 'circolare':
            return {
                value: {
                    Atot: Math.PI * (r ** 2),
                    Ig_y: (Math.PI * (r ** 4)) / 4,
                    Ig_z: (Math.PI * (r ** 4)) / 4,
                    Ig_tor: (Math.PI * (r ** 4)) / 2,
                    Wel_y: (Math.PI * (r ** 3)) / 4,
                    Wel_z: (Math.PI * (r ** 3)) / 4,
                },
                title: {
                    Atot: `A_{tot} = `,
                    Ig_y: `I_{g,y} = `,
                    Ig_z: `I_{g,z} = `,
                    Ig_tor: `I_{g,tor} = `,
                    Wel_y: `W_{el,y} = `,
                    Wel_z: `W_{el,z} = `,
                },
                formula: {
                    Atot: `\\pi\\cdot r^2 = `,
                    Ig_y: `\\dfrac{\\pi\\cdot r^4}{4} = `,
                    Ig_z: `\\dfrac{\\pi\\cdot r^4}{4} = `,
                    Ig_tor: `\\dfrac{\\pi\\cdot r^4}{2} = `,
                    Wel_y: `\\dfrac{\\pi\\cdot r^3}{4} = `,
                    Wel_z: `\\dfrac{\\pi\\cdot r^3}{4} = `,
                },
                formulaVal: {
                    Atot: `\\pi\\cdot ${r}^2 = `,
                    Ig_y: `\\dfrac{\\pi\\cdot ${r}^4}{4} = `,
                    Ig_z: `\\dfrac{\\pi\\cdot ${r}^4}{4} = `,
                    Ig_tor: `\\dfrac{\\pi\\cdot ${r}^4}{2} = `,
                    Wel_y: `\\dfrac{\\pi\\cdot ${r}^3}{4} = `,
                    Wel_z: `\\dfrac{\\pi\\cdot ${r}^3}{4} = `,
                },
                description: {
                    Atot: `Area totale`,
                    Ig_y: `Momento di inerzia attorno al'asse y`,
                    Ig_z: `Momento di inerzia attorno al'asse z`,
                    Ig_tor: `Momento di inerzia torcente attorno al'asse x`,
                    Wel_y: `Modulo di resistenza elastico per rotazione attorno a y`,
                    Wel_z: `Modulo di resistenza elastico per rotazione attorno a z`,
                }
            }
    }
}