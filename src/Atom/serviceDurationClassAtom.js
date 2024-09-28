import { atom } from 'recoil';

export const serviceDurationClassAtom = atom({
  key: 'serviceDurationClassAtom', // Chiave univoca per l'atom
  default: {
    serviceClass: '1',
    durationClass: 'permanente'
  }, 
});