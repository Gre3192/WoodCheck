import { atom } from 'recoil';

export const meccanicPropSectionAtom = atom({

  key: 'meccanicPropSectionAtom',
  default: {
    fmk: 235,                           // Flessione
    ft0k: 235,                          // Trazione parallela 
    ft90k: 235,                         // Trazione ortogonale 
    fc0k: 235,                          // Compressione parallela 
    fc90k: 235,                         // Compressione ortogonale
    fvk: 450,                           // Taglio
    E0mean: 210000,                     // Modulo elastico parallelo medio
    E005: 210000,                       // Modulo elastico parallelo caratteristico
    E90mean: 210000,                    // Modulo elastico ortogonale medio
    Gmean: 81000,                       // Modulo elastico tangenziale medio
    rho_k: 0.3,                         // Massa volumica caratteristica
    rho_mean: 0.000012                  // Massa volumica media
  }
});

