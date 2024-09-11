import customDecimal from "./customDecimal";

const getClsProperties = (clsClass = 'C55/67') => {
    
  
    const unit = 1;
  
    const fck = Number(clsClass.match(/\d+/)[0]);
    const rck = Number(clsClass.match(/\d+/g)[1]);
    const fcm = fck + 8;
    const fctm = fck <= 50 ? 0.3 * fck ** (2 / 3) : 2.12 * Math.log(1 + fcm / 10);
    const fctk_005 = 0.7 * fctm;
    const fctk_095 = 1.3 * fctm;
  
    const ecm = 22 * (fcm / 10) ** 0.3;
  
    const eps_c1 = Math.min(0.7 * fcm ** 0.31, 2.8) * unit;
    const eps_c2 = (fck >= 50 ? 2 + 0.085 * (fck - 50) ** 0.53 : 2) * unit;
    const eps_c3 = (fck >= 50 ? 1.75 + (0.55 * (fck - 50)) / 40 : 1.75) * unit;
    const eps_cu1 = (fck >= 50 ? 2.8 + 27 * ((98 - fcm) / 100) ** 4 : 3.5) * unit;
    const eps_cu2 = (fck >= 50 ? 2.6 + 35 * ((90 - fck) / 100) ** 4 : 3.5) * unit;
    const eps_cu3 = (fck >= 50 ? 2.6 + 35 * ((90 - fck) / 100) ** 4 : 3.5) * unit;
  
    const n = (fck >= 50 ? 1.4 + 23.4 * ((90 - fck) / 100) ** 4 : 2);
  
    return {
      clsClass: clsClass,
      fck: customDecimal(fck),
      rck: customDecimal(rck),
      fcm: customDecimal(fcm),
      fctm: customDecimal(fctm),
      fctk_005: customDecimal(fctk_005),
      fctk_095: customDecimal(fctk_095),
      ecm: customDecimal(ecm, 0),
      eps_c1: customDecimal(eps_c1, 2),
      eps_cu1: customDecimal(eps_cu1, 2),
      eps_c2: customDecimal(eps_c2, 2),
      eps_cu2: customDecimal(eps_cu2, 2),
      n: customDecimal(n,2),
      eps_c3: customDecimal(eps_c3, 2),
      eps_cu3: customDecimal(eps_cu3, 2),
    };
  };

export default getClsProperties