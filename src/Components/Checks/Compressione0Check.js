import get_gammaM from "../../Utils/get_gammaM";
import { forcesStateAtom } from "../../Atom/forcesStateAtom";
import CheckCard from "../CheckCard";
import StepBox from "../StepBox";
import { get_sig_c0d } from "../../Utils/getTensioni";
import { get_f_c0d } from "../../Utils/getResistenze";
import { get_Compressione0Check } from "../../Utils/getChecks";
import { useState, useMemo } from "react";
import get_kmod from "../../Utils/get_kmod";
import { useRecoilValue } from 'recoil';
import { sectionGeometryMassAtom } from "../../Atom/sectionGeometryMassAtom";
import { meccanicPropSectionAtom } from "../../Atom/meccanicPropSectionAtom";
import { serviceDurationClassAtom } from "../../Atom/serviceDurationClassAtom";
import { PDFDownloadLink, Document, Page, Text, Image, View, StyleSheet } from '@react-pdf/renderer'; // Importa i componenti di react-pdf
import katex from "katex";


export default function Compressione0Check() {
    
    const geometryMass = useRecoilValue(sectionGeometryMassAtom);
    const mecchanicProps = useRecoilValue(meccanicPropSectionAtom);
    const serviceDuration = useRecoilValue(serviceDurationClassAtom);
  
    const [isFormulaSelected, setIsFormulaSelected] = useState(false);
    const [isFormulaValSelected, setIsFormulaValSelected] = useState(false);
  
    const { Ned: rawNed } = useRecoilValue(forcesStateAtom);
    const Ned = rawNed > 0 ? rawNed : 0;
    const isDisabled = Ned <= 0;
  

    const memoizedComponent = useMemo(() => {

      const Atot = geometryMass?.value.Atot;
      const fc0k = mecchanicProps?.fc0k;
      const woodType = mecchanicProps?.woodType;
      const serviceClass = serviceDuration?.serviceClass;
      const durationClass = serviceDuration?.durabilityClass;
  
      const kmod = get_kmod(woodType, serviceClass, durationClass);
      const gm = get_gammaM(woodType);
  
      const {
        sig_c0d,
        sig_c0d_title,
        sig_c0d_formula,
        sig_c0d_formulaVal,
        sig_c0d_description
      } = get_sig_c0d(Ned, Atot);
  
      const {
        f_c0d,
        f_c0d_title,
        f_c0d_formula,
        f_c0d_formulaVal,
        f_c0d_description
      } = get_f_c0d(kmod, fc0k, gm);
  
      const {
        check,
        check_title,
        check_formulaVal
      } = get_Compressione0Check(sig_c0d, f_c0d);


      const title = 'Verifica a Compressione parallela alla fibratura [NTC18 - \u00A74.4.8.1.3]';
  
      const centralContent = 
        <div className="flex flex-col gap-4">
          <div className="mb-2 font-semibold ">Calcolo Geometria</div>
          <StepBox
            isFormula={isFormulaSelected}
            isFormulaVal={isFormulaValSelected}
            title={geometryMass?.title.Atot}
            formula={geometryMass?.formula.Atot}
            formulaVal={geometryMass?.formulaVal.Atot}
            value={geometryMass?.value.Atot}
            description={geometryMass?.description.Atot}
          />
          <hr />
          <div className="mb-2 font-semibold">Calcolo Tensioni</div>
          <StepBox
            isFormula={isFormulaSelected}
            isFormulaVal={isFormulaValSelected}
            title={sig_c0d_title}
            formula={sig_c0d_formula}
            formulaVal={sig_c0d_formulaVal}
            value={sig_c0d}
            description={sig_c0d_description}
          />
          <hr />
          <div className="mb-2 font-semibold">Calcolo Resistenze</div>
          <StepBox
            isFormula={isFormulaSelected}
            isFormulaVal={isFormulaValSelected}
            title={f_c0d_title}
            formula={f_c0d_formula}
            formulaVal={f_c0d_formulaVal}
            value={f_c0d}
            description={f_c0d_description}
          />
          <hr />
        </div>

  
      const finalContent = (
        <StepBox
          isFormula={isFormulaSelected}
          isFormulaVal={isFormulaValSelected}
          isCheck={true}
          title={check_title}
          formula={''}
          formulaVal={check_formulaVal}
          value={check}
          description={''}
        />
      );
  
      const checkCardProps = { title: title, centralContent: centralContent, finalContent: finalContent, check: check, isDisabled: isDisabled };
      return <CheckCard props={checkCardProps} isFormulaProps={{ isFormulaSelected, setIsFormulaSelected }} isFormulaValProps={{ isFormulaValSelected, setIsFormulaValSelected }} />
    }, [geometryMass, mecchanicProps, serviceDuration, Ned, isFormulaSelected, isFormulaValSelected]);
  
    return memoizedComponent;
  }
