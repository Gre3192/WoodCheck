import { atom } from 'recoil';

export const sectionGeometryAtom = atom({
  key: 'sectionGeometryAtom', 
  default: {
    shape:'rettangolare',
    b: null,
    h: null,
    r: null
  },
});