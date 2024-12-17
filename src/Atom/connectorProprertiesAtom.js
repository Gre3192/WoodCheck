import { atom } from 'recoil';

export const connectorProprertiesAtom = atom({
  key: 'connectorProprertiesAtom',
  default: {
    connectorType: 'bulloni',
    d: 45,                              //diametro gambo
    dh: 23,                             //diametro testa
    dr: 23,                             //diametro rondella
    fyk: 235,
    fuk: 235
  },
});