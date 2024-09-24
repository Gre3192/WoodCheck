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
    frk: 450,                           // RotoTaglio
    E0_mean: 210000,                    // Modulo elastico parallelo medio
    E0_05: 210000,                      // Modulo elastico parallelo alle fibre caratteristico
    E90_mean: 210000,                   // Modulo elastico ortogonale medio
    E90_05: 210000,                     // Modulo elastico ortogonale alle fibre caratteristico
    G_mean: 81000,                      // Modulo elastico tangenziale medio
    G_05: 81000,                        // Modulo di taglio caratterisitco
    Gr_mean: 81000,                     // Modulo di rototaglio medio
    Gr_05: 81000,                       // Modulo di rototaglio caratteristico
    rho_k: 0.3,                         // Massa volumica caratteristica
    rho_mean: 0.000012                  // Massa volumica media
  }
});

