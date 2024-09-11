export default function getShapeParams(shape, params, reverse = 'Gen -> Atom') {
    const keyMapping = {
        doppioT: {
            sectionName: '',
            shape: 'doppio_T',
            h: 'doppioT_h',
            r: 'doppioT_r',
            tw: 'doppioT_tw',
            tf_sup: 'doppioT_tf_sup',
            tf_inf: 'doppioT_tf_inf',
            b_sup: 'doppioT_b_sup',
            b_inf: 'doppioT_b_inf',
        },
        T: {
            sectionName: '',
            shape: 'T',
            h: 'T_h',
            r: 'T_r',
            tw: 'T_tw',
            tf_sup: 'T_tf_sup',
            b_sup: 'T_b_sup',
        },
        circolare: {
            sectionName: '',
            shape: 'circolare',
            r: 'circolare_r',
            tw: 'circolare_tw',
        },
        rettangolare: {
            sectionName: '',
            shape: 'rettangolare',
            b: 'rettangolare_b',
            h: 'rettangolare_h',
        },
        L: {
            sectionName: '',
            shape: 'L',
            h: 'L_h',
            tw: 'L_tw',
            b_inf: 'L_b_inf',
            tf_inf: 'L_tf_inf',
            r1: 'L_r1',
            r2: 'L_r2',
            r3: 'L_r3',
        },
        U: {
            sectionName: '',
            shape: 'U',
            h: 'U_h',
            tw: 'U_tw',
            b_inf: 'U_b_inf',
            tf_inf: 'U_tf_inf',
            r1: 'U_r1',
            r2: 'U_r2',
        },
        C: {
            sectionName: '',
            shape: 'C',
            h: 'C_h',
            tw: 'C_tw',
            tf_sup: 'C_tf_sup',
            tf_inf: 'C_tf_inf',
            b_sup: 'C_b_sup',
            b_inf: 'C_b_inf',
            r1: 'C_r1',
            r2: 'C_r2',
            r3: 'C_r3',
            r4: 'C_r4',
        }
    };

    const mappedParams = {};

    // Se reverse è true, invertiamo il mapping
    const mappings = keyMapping[shape];

    if (reverse?.toLocaleLowerCase() === 'atom -> gen') {
        // Mappiamo in reverse: da specifico (doppioT_h) a generico (h)
        Object.keys(mappings).forEach((genericKey) => {
            const specificKey = mappings[genericKey];
            if (params[specificKey] !== undefined) {
                mappedParams[genericKey] = params[specificKey];
            }
        });
    } else {
        // Mappiamo normalmente: da generico (h) a specifico (doppioT_h)
        Object.keys(mappings).forEach((genericKey) => {
            const specificKey = mappings[genericKey];
            if (params[genericKey] !== undefined) {
                mappedParams[specificKey] = params[genericKey];
            }
        });
    }

    return mappedParams;
}
