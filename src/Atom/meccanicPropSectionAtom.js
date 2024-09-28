import { atom } from 'recoil';

export const meccanicPropSectionAtom = atom({

  key: 'meccanicPropSectionAtom',
  default: {
    sectionName: '',
    treeClass: '',
    woodType: '',
    fmk: null,                           // Flessione
    ft0k: null,                          // Trazione parallela 
    ft90k: null,                         // Trazione ortogonale 
    fc0k: null,                          // Compressione parallela 
    fc90k: null,                         // Compressione ortogonale
    fvk: null,                           // Taglio
    frk: null,                           // RotoTaglio
    E0_mean: null,                    // Modulo elastico parallelo medio
    E0_05: null,                      // Modulo elastico parallelo alle fibre caratteristico
    E90_mean: null,                   // Modulo elastico ortogonale medio
    E90_05: null,                     // Modulo elastico ortogonale alle fibre caratteristico
    G_mean: null,                      // Modulo di taglio tangenziale medio
    G_05: null,                        // Modulo di taglio caratterisitco
    Gr_mean: null,                     // Modulo di rototaglio medio
    Gr_05: null,                       // Modulo di rototaglio caratteristico
    rho_k: null,                         // Massa volumica caratteristica
    rho_mean: null                  // Massa volumica media
  }
});

