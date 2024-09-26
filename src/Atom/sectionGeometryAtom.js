import { atom } from 'recoil';

export const sectionGeometryAtom = atom({
  key: 'sectionGeometryAtom', 
  default: {
    shape:null,
    b: null,
    h: null,
    r: null
  },
});