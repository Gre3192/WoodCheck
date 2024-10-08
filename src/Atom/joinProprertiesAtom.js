import { atom } from 'recoil';

export const joinProprertiesAtom = atom({
  key: 'joinProprertiesAtom',
  default: {
    joinType: 'bulloni',
    shearPlane: 1,
    d: 45,
    dh: 23,
    fu: 235



  },
});