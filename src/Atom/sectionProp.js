import { atom } from 'recoil';

export const sectionProp = atom({
  key: 'sectionProp',
  default: {
    geometry:{},
    geometryMass:{},
    mechanics:{},
    durationClass:{},
    serviceClass:{},

  },
});