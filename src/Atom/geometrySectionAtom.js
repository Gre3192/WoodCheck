import { atom } from 'recoil';

export const geometrySectionSteelAtom = atom({
  key: 'geometrySectionSteelAtom',
  default: {

    sectionName: '',
    shape: 'doppioT',
    //------------------------------ doppio T
    doppioT_h: '0',
    doppioT_r: '0',
    doppioT_tw: '0',
    doppioT_tf_sup: '0',
    doppioT_tf_inf: '0',
    doppioT_b_sup: '0',
    doppioT_b_inf: '0',
    //------------------------------ T
    T_h: '0',
    T_r: '0',
    T_tw: '0',
    T_tf_sup: '0',
    T_b_sup: '0',
    //------------------------------ circolare
    circolare_r: '0',
    circolare_tw: '0',
    //------------------------------ rettangolare
    rettangolare_b: '0',
    rettangolare_h: '0',
    //------------------------------ L
    L_h: '0',
    L_tw:'0',
    L_b_inf: '0',
    L_tf_inf: '0',
    L_r1: '0',
    L_r2: '0',
    L_r3: '0',
    //------------------------------ U
    U_h: '0',
    U_tw:'0',
    U_b_inf: '0',
    U_tf_inf: '0',
    U_r1: '0',
    U_r2: '0',
    //------------------------------ C
    C_h: '0',
    C_tw: '0',
    C_tf_sup: '0',
    C_tf_inf: '0',
    C_b_sup: '0',
    C_b_inf: '0',
    C_r1: '0',
    C_r2: '0',
    C_r3: '0',
    C_r4: '0'
  },
});

