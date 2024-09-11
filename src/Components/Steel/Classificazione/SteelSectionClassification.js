import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { geometrySectionSteelAtom } from '../../../Atom/geometrySectionAtom';
import getSteelGeometryMass from '../../../Utils/getSteelGeometryMass';
import Latex from 'react-latex-next';
import customDecimal from '../../../Utils/customDecimal';


export default function SteelSectionClassification() {

  const [sectionGeometry, setSectionGeometry] = useRecoilState(geometrySectionSteelAtom)
  const [fyk, setFyk] = useState(235)

  const {
    shape,
    h,
    raggio,
    tw,
    tf_sup,
    tf_inf,
    b_sup,
    b_inf,
    raccordo
  } = sectionGeometry


  const sectionGeometryMass = getSteelGeometryMass(sectionGeometry)
  const epsilon = Math.sqrt(235 / fyk)


  // const cw = h - tf_sup - tf_inf - 2 * raccordo
  // const cs = (b_sup / 2) - (tw / 2) - raccordo
  // const ci = (b_inf / 2) - (tw / 2) - raccordo


  const classeAnimaCompresione = getClasseAnima('compressione', epsilon, sectionGeometryMass.yn, raccordo, sectionGeometryMass.yg, tw, tf_sup, tf_inf, h)
  const classeAnimaFlessione = getClasseAnima('flessione', epsilon, sectionGeometryMass.yn, raccordo, sectionGeometryMass.yg, tw, tf_sup, tf_inf, h)
  const classeAnimaPressoFlessione = getClasseAnima('presso-flessione', epsilon, sectionGeometryMass.yn, raccordo, sectionGeometryMass.yg, tw, tf_sup, tf_inf, h)

  const classeAlaSupCompresione = 0
  const classeAlaSupFlessione = 0
  const classeAlaSupPressoFlessione = 0

  const classeAlaInfCompresione = 0
  const classeAlaInfFlessione = 0
  const classeAlaInfPressoFlessione = 0

  const classeTubolare = getClasseTubolare(epsilon, raggio, tw)


  return (
    <div className='p-5'>
      <h2 className="text-xl font-semibold mb-4">Classificazione sezione</h2>

      <select className='cursor-pointer border-2 px-3 py-2' id="opzioni" name="Classe" onChange={(e) => setFyk(e.target.value)}>
        <option value="235" className='px-3 py-3'>S235</option>
        <option value="275" >S275</option>
        <option value="355" >S355</option>
        <option value="465" >S465</option>
      </select>
      <div>
        <Latex>
          {`$\\varepsilon=\\sqrt{\\dfrac{235}{f_{yk}}}=\\sqrt{\\dfrac{235}{${customDecimal(fyk, 2)}}}=${customDecimal(epsilon, 2)}$`}
        </Latex>
      </div>

      {
        shape != 'circolare' ?
          <>
            <div className='p-5'>
              <p className='mb-4 font-bold'>Parte soggetta a flessione</p>
              <div className='flex flex-col gap-5 items-center'>
                <div>
                  <p className='mb-4 font-semibold'>Anima</p>
                  <div className='flex gap-8 items-center'>
                    <Latex>{classeAnimaFlessione.formula.classCheck} {'$\\Rightarrow$'}</Latex>
                    <Latex>{classeAnimaFlessione.formulaValue.classCheck}</Latex>
                    <Latex>{`Classe $${classeAnimaFlessione.value.class}$`}  </Latex>
                  </div>
                </div>
                <div>
                  <p className='mb-4 font-semibold'>Flangia superiore</p>
                  <div className='flex gap-8 items-center'>
                    <Latex>{classeAnimaFlessione.formula.classCheck} {'$\\Rightarrow$'}</Latex>
                    <Latex>{classeAnimaFlessione.formulaValue.classCheck}</Latex>
                    <Latex>{`Classe $${classeAnimaFlessione.value.class}$`}  </Latex>
                  </div>
                </div>
                <div>
                  <p className='mb-4 font-semibold'>Flangia inferiore</p>
                  <div className='flex gap-8 items-center'>
                    <Latex>{classeAnimaFlessione.formula.classCheck} {'$\\Rightarrow$'}</Latex>
                    <Latex>{classeAnimaFlessione.formulaValue.classCheck}</Latex>
                    <Latex>{`Classe $${classeAnimaFlessione.value.class}$`}  </Latex>
                  </div>
                </div>
              </div>
            </div>
            <div className='p-5'>
              <p className='mb-4 font-bold'>Parte soggetta a compressione</p>
              <div className='flex flex-col gap-5 items-center'>
                <div>
                  <p className='mb-4 font-semibold'>Anima</p>
                  <div className='flex gap-8 items-center'>
                    <Latex>{classeAnimaFlessione.formula.classCheck} {'$\\Rightarrow$'}</Latex>
                    <Latex>{classeAnimaCompresione.formulaValue.classCheck}</Latex>
                    <Latex>{`Classe $${classeAnimaCompresione.value.class}$`}  </Latex>
                  </div>
                </div>
                <div>
                  <p className='mb-4 font-semibold'>Flangia superiore</p>
                  <div className='flex gap-8 items-center'>
                    <Latex>{classeAnimaFlessione.formula.classCheck} {'$\\Rightarrow$'}</Latex>
                    <Latex>{classeAnimaCompresione.formulaValue.classCheck}</Latex>
                    <Latex>{`Classe $${classeAnimaCompresione.value.class}$`}  </Latex>
                  </div>
                </div>
                <div>
                  <p className='mb-4 font-semibold'>Flangia inferiore</p>
                  <div className='flex gap-8 items-center'>
                    <Latex>{classeAnimaFlessione.formula.classCheck} {'$\\Rightarrow$'}</Latex>
                    <Latex>{classeAnimaCompresione.formulaValue.classCheck}</Latex>
                    <Latex>{`Classe $${classeAnimaCompresione.value.class}$`}  </Latex>
                  </div>
                </div>
              </div>
            </div>
            <div className='p-5'>
              <p className='mb-4 font-bold'>Parte soggetta a flessione e a compressione</p>
              <div className='flex flex-col gap-5 items-center'>
                <div>
                  <p className='mb-4 font-semibold'>Anima</p>
                  <div className='flex gap-8 items-center'>
                    <Latex>{classeAnimaPressoFlessione.formula.classCheck} {'$\\Rightarrow$'}</Latex>
                    <Latex>{classeAnimaPressoFlessione.formulaValue.classCheck}</Latex>
                    <Latex>{`Classe $${classeAnimaPressoFlessione.value.class}$`}  </Latex>
                  </div>
                </div>
                <div>
                  <p className='mb-4 font-semibold'>Flangia superiore</p>
                  <div className='flex gap-8 items-center'>
                    <Latex>{classeAnimaPressoFlessione.formula.classCheck} {'$\\Rightarrow$'}</Latex>
                    <Latex>{classeAnimaPressoFlessione.formulaValue.classCheck}</Latex>
                    <Latex>{`Classe $${classeAnimaPressoFlessione.value.class}$`}  </Latex>
                  </div>
                </div>
                <div>
                  <p className='mb-4 font-semibold'>Flangia inferiore</p>
                  <div className='flex gap-8 items-center'>
                    <Latex>{classeAnimaPressoFlessione.formula.classCheck} {'$\\Rightarrow$'}</Latex>
                    <Latex>{classeAnimaPressoFlessione.formulaValue.classCheck}</Latex>
                    <Latex>{`Classe $${classeAnimaPressoFlessione.value.class}$`}  </Latex>
                  </div>
                </div>
              </div>
            </div>
          </>
          :
          <>
            <div className='p-5'>
              <p className='mb-4 font-bold'>Sezione inflessa e/o compressa</p>
              <div className='flex flex-col gap-5 items-center'>
                <div className='flex gap-8 items-center'>
                  <Latex>{classeTubolare.formula.classCheck} {'$\\Rightarrow$'}</Latex>
                  <Latex>{classeTubolare.formulaValue.classCheck}</Latex>
                  <Latex>{`Classe $${classeTubolare.value.class}$`}  </Latex>
                </div>
              </div>
            </div>
          </>
      }
    </div>
  );
}



function getClasseAnima(loadCase, epsilon, yn, raccordo, yg, tw, tf_sup, tf_inf, h) {

  const cw = h - tf_sup - tf_inf - 2 * raccordo
  const alpha = (yn - raccordo) / cw
  const psi = -(yg - tf_inf) / (h - yg - tf_sup)

  let retVal = {
    value: {
      cw: cw,
      alpha: alpha,
      psi: psi,
      class: '-'
    },
    formula: {
      cw: `$h-t_{f,sup}-t_{f,inf}-2\\cdotp r$`,
      alpha: alpha,
      psi: psi,
      classCheck: '-'
    },
    formulaValue: {
      cw: `$${customDecimal(h, 2)}-${customDecimal(tf_sup, 2)}-${customDecimal(tf_inf, 2)}-2\\cdotp ${customDecimal(raccordo, 2)}$`,
      alpha: `$\\dfrac{${customDecimal(yn, 2)}-${customDecimal(raccordo, 2)}}{${customDecimal(cw, 2)}}$`,
      psi: `$-\\dfrac{${customDecimal(yg, 2)}-${customDecimal(tf_inf, 2)}}{${customDecimal(h, 2)}-${customDecimal(yg, 2)}-${customDecimal(tf_sup, 2)}}$`,
      classCheck: '-'
    }
  }

  switch (loadCase) {

    case 'compressione':
      if ((cw / tw) <= 33 * epsilon) {
        retVal.value.class = '1';
        retVal.formula.classCheck = '$\\dfrac{c_w}{t_w}\\leq 33\\cdotp\\varepsilon$';
        retVal.formulaValue.classCheck = `$\\dfrac{${customDecimal(cw, 2)}}{${customDecimal(tw, 2)}}\\leq 33\\cdotp${customDecimal(epsilon, 2)}$`;
      }
      else if ((cw / tw) <= 38 * epsilon) {
        retVal.value.class = '2';
        retVal.formula.classCheck = '$\\dfrac{c_w}{t_w}\\leq 38\\cdotp\\varepsilon$';
        retVal.formulaValue.classCheck = `$\\dfrac{${customDecimal(cw, 2)}}{${customDecimal(tw, 2)}}\\leq 38\\cdotp${customDecimal(epsilon, 2)}$`;
      }
      else if ((cw / tw) <= 42 * epsilon) {
        retVal.value.class = '3';
        retVal.formula.classCheck = '$\\dfrac{c_w}{t_w}\\leq 42\\cdotp\\varepsilon$';
        retVal.formulaValue.classCheck = `$\\dfrac{${customDecimal(cw, 2)}}{${customDecimal(tw, 2)}}\\leq 42\\cdotp ${customDecimal(epsilon, 2)}$`;
      }
      else {
        retVal.value.class = '4';
        retVal.formula.classCheck = 'prova';
        retVal.formulaValue.classCheck = '-';
      } break;

    case 'flessione':
      if ((cw / tw) <= 72 * epsilon) {
        retVal.value.class = '1';
        retVal.formula.classCheck = '$\\dfrac{c_w}{t_w}\\leq 72\\cdotp\\varepsilon$';
        retVal.formulaValue.classCheck = `$\\dfrac{${customDecimal(cw, 2)}}{${customDecimal(tw, 2)}}\\leq 72\\cdotp ${customDecimal(epsilon, 2)}$`
      }
      else if ((cw / tw) <= 83 * epsilon) {
        retVal.value.class = '2';
        retVal.formula.classCheck = '$\\dfrac{c_w}{t_w}\\leq 83\\cdotp\\varepsilon$';
        retVal.formulaValue.classCheck = `$\\dfrac{${customDecimal(cw, 2)}}{${customDecimal(tw, 2)}}\\leq 83\\cdotp ${customDecimal(epsilon, 2)}$`
      }
      else if ((cw / tw) <= 124 * epsilon) {
        retVal.value.class = '3';
        retVal.formula.classCheck = '$\\dfrac{c_w}{t_w}\\leq 124\\cdotp\\varepsilon$';
        retVal.formulaValue.classCheck = `$\\dfrac{${customDecimal(cw, 2)}}{${customDecimal(tw, 2)}}\\leq 124\\cdotp ${customDecimal(epsilon, 2)}$`
      }
      else {
        retVal.value.class = '4';
        retVal.formula.classCheck = '-';
        retVal.formulaValue.classCheck = '-'
      } break;

    case 'presso-flessione':
      if (alpha > 0.5 && (cw / tw) <= ((396 * epsilon) / (13 * alpha - 1))) {
        retVal.value.class = '1';
        retVal.formula.classCheck = '$\\dfrac{c_w}{t_w}\\leq\\dfrac{396\\cdotp\\varepsilon}{13\\cdotp\\alpha-1}$';
        retVal.formulaValue.classCheck = `$\\dfrac{${customDecimal(cw, 2)}}{${customDecimal(tw, 2)}}\\leq\\dfrac{396\\cdotp ${customDecimal(epsilon, 2)}}{13\\cdotp ${customDecimal(alpha, 2)}-1}$`
      }
      else if (alpha <= 0.5 && (cw / tw) <= ((36 * epsilon) / alpha)) {
        retVal.value.class = '1';
        retVal.formula.classCheck = '$\\dfrac{c_w}{t_w}\\leq\\dfrac{36\\cdotp\\varepsilon}{\\alpha}$';
        retVal.formulaValue.classCheck = `$\\dfrac{${customDecimal(cw, 2)}}{${customDecimal(tw, 2)}}\\leq\\dfrac{36\\cdotp ${customDecimal(epsilon, 2)}}{${customDecimal(alpha, 2)}}$`
      }

      else if (alpha > 0.5 && (cw / tw) <= ((456 * epsilon) / (13 * alpha - 1))) {
        retVal.value.class = '2';
        retVal.formula.classCheck = '$\\dfrac{c_w}{t_w}\\leq\\dfrac{456\\cdotp\\varepsilon}{13\\cdotp\\alpha-1}$';
        retVal.formulaValue.classCheck = `$\\dfrac{${customDecimal(cw, 2)}}{${customDecimal(tw, 2)}}\\leq\\dfrac{456\\cdotp ${customDecimal(epsilon, 2)}}{13\\cdotp ${customDecimal(alpha, 2)}-1}$`
      }
      else if (alpha <= 0.5 && (cw / tw) <= ((41.5 * epsilon) / alpha)) {
        retVal.value.class = '2';
        retVal.formula.classCheck = '$\\dfrac{c_w}{t_w}\\leq\\dfrac{41.5\\cdotp\\varepsilon}{\\alpha}$';
        retVal.formulaValue.classCheck = `$\\dfrac{${customDecimal(cw, 2)}}{${customDecimal(tw, 2)}}\\leq\\dfrac{41.5\\cdotp ${customDecimal(epsilon, 2)}}{${customDecimal(alpha, 2)}}$`
      }
      else if (psi > -1 && (cw / tw) <= ((42 * epsilon) / (0.67 + 0.33 * psi))) {
        retVal.value.class = '3';
        retVal.formula.classCheck = '$\\dfrac{c_w}{t_w}\\leq\\dfrac{42\\cdotp\\varepsilon}{0.67+0.33\\cdotp\\psi}$';
        retVal.formulaValue.classCheck = `$\\dfrac{${customDecimal(cw, 2)}}{${customDecimal(tw, 2)}}\\leq\\dfrac{42\\cdotp ${customDecimal(epsilon, 2)}}{0.67+0.33\\cdotp ${customDecimal(psi, 2)}}$`
      }
      else if (psi <= -1 && (cw / tw) <= 62 * epsilon * (1 - psi) * Math.sqrt(-psi)) {
        retVal.value.class = '3';
        retVal.formula.classCheck = '$\\dfrac{c_w}{t_w}\\leq 62\\cdotp\\varepsilon\\cdotp\\left(1-\\psi\\right)\\cdotp\\sqrt{-\\psi}$';
        retVal.formulaValue.classCheck = `$\\dfrac{${customDecimal(cw, 2)}}{${customDecimal(tw, 2)}}\\leq 62\\cdotp ${customDecimal(epsilon, 2)}\\cdotp\\left(1-${customDecimal(psi, 2)}\\right)\\cdotp\\sqrt{-${customDecimal(psi, 2)}}$`
      }
      else {
        retVal.value.class = '4';
        retVal.formula.classCheck = '-';
        retVal.formulaValue.classCheck = '-'
      } break;

  }

  return retVal
}

function getClasseAla(loadCase, epsilon, yn, raccordo, yg, bf, zn, tf, h) {

  const cf = (bf / 2) - (tf / 2) - raccordo
  const alpha = ((zn - raccordo) / cf)
  const psi = (-(yg - tf) / (h - yg - tf))


  let retVal = {
    value: {
      class: '-'
    },
    formula: {
      classCheck: '-'
    },
    formulaValue: {
      classCheck: '-'
    }
  }

  switch (loadCase) {

    case 'compressione':
    case 'flessione':
      if ((cf / tf) <= 9 * epsilon) {
        retVal.value.class = '1';
        retVal.formula.classCheck = '$\\dfrac{c_w}{t_w}\\leq 33\\cdotp\\varepsilon$';
        retVal.formulaValue.classCheck = `$\\dfrac{${customDecimal(cf, 2)}}{${customDecimal(tf, 2)}}\\leq 9\\cdotp${customDecimal(epsilon, 2)}$`;
      }
      else if ((cf / tf) <= 10 * epsilon) {
        retVal.value.class = '2';
        retVal.formula.classCheck = '$\\dfrac{c_w}{t_w}\\leq 38\\cdotp\\varepsilon$';
        retVal.formulaValue.classCheck = `$\\dfrac{${customDecimal(cf, 2)}}{${customDecimal(tf, 2)}}\\leq 10\\cdotp${customDecimal(epsilon, 2)}$`;
      }
      else if ((cf / tf) <= 14 * epsilon) {
        retVal.value.class = '2';
        retVal.formula.classCheck = '$\\dfrac{c_w}{t_w}\\leq 38\\cdotp\\varepsilon$';
        retVal.formulaValue.classCheck = `$\\dfrac{${customDecimal(cf, 2)}}{${customDecimal(tf, 2)}}\\leq 14\\cdotp${customDecimal(epsilon, 2)}$`;
      } else {
        retVal.value.class = '4';
        retVal.formula.classCheck = '';
        retVal.formulaValue.classCheck = ``;
      } break;

    case 'presso-flessione':



      break;
  }

  return retVal
}

function getClasseTubolare(epsilon, raggio, tw) {

  const d = 2 * raggio

  let retVal = {
    value: {
      class: '-'
    },
    formula: {
      classCheck: '-'
    },
    formulaValue: {
      classCheck: '-'
    }
  }

  if ((d / tw) <= 50 * epsilon ** 2) {
    retVal.value.class = '1';
    retVal.formula.classCheck = '$\\dfrac{d}{t_w}\\leq 50\\cdotp\\varepsilon^2$';
    retVal.formulaValue.classCheck = `$\\dfrac{${customDecimal(d, 2)}}{${customDecimal(tw, 2)}}\\leq 50\\cdotp${customDecimal(epsilon, 2)}^2$`
  }
  else if ((d / tw) <= 70 * epsilon ** 2) {
    retVal.value.class = '2';
    retVal.formula.classCheck = '$\\dfrac{d}{t_w}\\leq 70\\cdotp\\varepsilon^2$';
    retVal.formulaValue.classCheck = `$\\dfrac{${customDecimal(d, 2)}}{${customDecimal(tw, 2)}}\\leq 70\\cdotp${customDecimal(epsilon, 2)}^2$`
  }
  else if ((d / tw) <= 90 * epsilon ** 2) {
    retVal.value.class = '3';
    retVal.formula.classCheck = '$\\dfrac{d}{t_w}\\leq 90\\cdotp\\varepsilon^2$';
    retVal.formulaValue.classCheck = `$\\dfrac{${customDecimal(d, 2)}}{${customDecimal(tw, 2)}}\\leq 90\\cdotp${customDecimal(epsilon, 2)}^2$`
  }
  else {
    retVal.value.class = '4';
    retVal.formula.classCheck = '-';
    retVal.formulaValue.classCheck = '-'
  }

  return retVal
}

function getClasseSezione(classeAnima, classeAlaSup, classeAlaInf) {

  const retVal = Math.max(
    classeAnima?.value.class,
    classeAlaSup?.value.class,
    classeAlaInf?.value.class
  )

  return retVal
}

function getParams(params) {





  return {

    alpha: '',
    psi: ''

  }

}