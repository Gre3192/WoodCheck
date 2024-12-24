import { atom } from 'recoil';

export const sectionGeometryMassAtom = atom({
  key: 'sectionGeometryMassAtom',
  default: {
    value: {
      Atot: null,
      Ig_y: null,
      Ig_z: null,
      Ig_tor: null,
      Wel_y: null,
      Wel_z: null,
    },
    title: {
      Atot: "",
      Ig_y: "",
      Ig_z: "",
      Ig_tor: "",
      Wel_y: "",
      Wel_z: "",
    },
    formula: {
      Atot: "",
      Ig_y: "",
      Ig_z: "",
      Ig_tor: "",
      Wel_y: "",
      Wel_z: "",
    },
    formulaVal: {
      Atot: "",
      Ig_y: "",
      Ig_z: "",
      Ig_tor: "",
      Wel_y: "",
      Wel_z: "",
    },
    description: {
      Atot: "",
      Ig_y: "",
      Ig_z: "",
      Ig_tor: "",
      Wel_y: "",
      Wel_z: "",
    },
  }
});