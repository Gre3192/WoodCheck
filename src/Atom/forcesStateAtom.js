import { atom } from 'recoil';

export const forcesSteelAtom = atom({
  key: 'forcesSteelAtom', 
  default: {
    Ned: null, 
    Ved_y: null,
    Ved_z:null,
    Med_y: null,
    Med_z: null,
    Med_tor: null
  },
});
