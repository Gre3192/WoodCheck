import { atom } from 'recoil';

export const globalFormatFormulaAtom = atom({
  key: 'globalFormatFormula', 
  default: {
    isGlobalFormula: false,
    isGlobalFormulaVal: false
  },
});
