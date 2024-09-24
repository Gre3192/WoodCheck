import { atom } from 'recoil';

export const globalFormatFormula = atom({
  key: 'globalFormatFormula', 
  default: {
    isGlobalFormula: false,
    isGlobalFormulaVal: false
  },
});
