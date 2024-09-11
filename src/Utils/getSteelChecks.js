import customDecimal from "./customDecimal";

function getInstabilityCoefficients(sectionShape, dimensionLimits, steelClass) {

  const curves = {
    a0: { name: 'a0', alpha: 0.13 },
    a: { name: 'a', alpha: 0.21 },
    b: { name: 'b', alpha: 0.34 },
    c: { name: 'c', alpha: 0.49 },
    d: { name: 'd', alpha: 0.76 }
  };

  let zAxisCurve = null;
  let yAxisCurve = null;

  if (sectionShape === 'sezione laminata') {
    if (dimensionLimits === 't <= 40 mm') {
      if (steelClass === 'S235' || steelClass === 'S275') {
        zAxisCurve = curves.a0;
        yAxisCurve = curves.a;
      } else if (steelClass === 'S355') {
        zAxisCurve = curves.a;
        yAxisCurve = curves.b;
      } else if (steelClass === 'S460') {
        zAxisCurve = curves.b;
        yAxisCurve = curves.c;
      }
    } else if (dimensionLimits === '40 mm < t <= 100 mm') {
      zAxisCurve = curves.b;
      yAxisCurve = curves.c;
    } else if (dimensionLimits === 't > 100 mm') {
      zAxisCurve = curves.c;
      yAxisCurve = curves.d;
    }
  } else if (sectionShape === 'sezione formata a freddo') {
    zAxisCurve = curves.c;
    yAxisCurve = curves.c;
  } else if (sectionShape === 'sezione cava saldata') {
    zAxisCurve = curves.b;
    yAxisCurve = curves.b;
  } else if (sectionShape === 'sezione piena saldata') {
    zAxisCurve = curves.c;
    yAxisCurve = curves.c;
  }

  return {
    zAxis: { curve: zAxisCurve?.name, alpha: zAxisCurve?.alpha },
    yAxis: { curve: yAxisCurve?.name, alpha: yAxisCurve?.alpha }
  };
}

export default function getSteelChecks({ props }) {

  const {
    classSection,
    steelClass,
    gm0,
    gm2,
    gm3,
    fyk,
    Area,
    Aeff,
    Av,
    Anet,
    Wpl,
    Wel_min,
    Weff_min,
    beta_y,
    beta_z,
    l,
    Es,
    Ig_y,
    Ig_z } = props

  // Verifiche di Resistenza
  const Npl_Rd = (A * fyk) / gm0
  const Nu_Rd = (0.9 * Anet * ftk) / gm2
  const Nt_Rd = Math.min(Npl_Rd, Nu_Rd)

  const Nc_Rd = classSection.includes("1", "2", "3")
    ? Npl_Rd
    : (Aeff * fyk) / gm0

  const Mpl_Rd = (Wpl * fyk) / gm0
  const Mel_Rd = (Wel_min * fyk) / gm0
  const Mc_Rd = classSection.includes("1", "2")
    ? Mpl_Rd : classSection.includes("3") ? Mel_Rd
      : (Weff_min * fyk) / gm0

  const Vc_Rd = (Av * fyk) / (Math.sqrt(3) * gm0)
  //---------------------------------------------------------------------------------------------
  const latex_Npl_Rd = `$N_{pl,Rd} = \\frac{A \\cdotp f_{yk}}{\\gamma_{M0}}$`;
  const latex_Nu_Rd = `$N_{u,Rd} = \\frac{0.9 \\cdotp A_{net} \\cdotp f_{tk}}{\\gamma_{M2}}$`;
  const latex_Nt_Rd = `$N_{t,Rd} = \\min\\left(N_{pl,Rd}, N_{u,Rd}\\right)$`;

  const latex_Nc_Rd = classSection.includes("1", "2", "3")
    ? `$N_{c,Rd} = N_{pl,Rd}$`
    : `$N_{c,Rd} = \\frac{A_{eff} \\cdotp f_{yk}}{\\gamma_{M0}}$`;

  const latex_Mpl_Rd = `$M_{pl,Rd} = \\frac{W_{pl} \\cdotp f_{yk}}{\\gamma_{M0}}$`;
  const latex_Mel_Rd = `$M_{el,Rd} = \\frac{W_{el,min} \\cdotp f_{yk}}{\\gamma_{M0}}$`;

  const latex_Mc_Rd = classSection.includes("1", "2")
    ? `$M_{c,Rd} = M_{pl,Rd}$`
    : classSection.includes("3")
      ? `$M_{c,Rd} = M_{el,Rd}$`
      : `$M_{c,Rd} = \\frac{W_{eff,min} \\cdotp f_{yk}}{\\gamma_{M0}}$`;

  const latex_Vc_Rd = `$V_{c,Rd} = \\frac{A_{v} \\cdotp f_{yk}}{\\sqrt{3} \\cdotp \\gamma_{M0}}$`;








  // Verifiche di Instabilità
  const Ncr_y = (Math.PI ** 2 * Es * Ig_y) / (beta_y * l) ** 2
  const Ncr_z = (Math.PI ** 2 * Es * Ig_z) / (beta_z * l) ** 2

  const lambda_y = classSection.includes("1", "2", "3")
    ? Math.sqrt((A * fyk) / Ncr_y)
    : Math.sqrt((Aeff * fyk) / Ncr_y)

  const lambda_z = classSection.includes("1", "2", "3")
    ? Math.sqrt((A * fyk) / Ncr_z)
    : Math.sqrt((Aeff * fyk) / Ncr_z)

  const result = getInstabilityCoefficients('sezione laminata', 't <= 40 mm', 'S355')

  const instabilityCurve_y = result.yAxis.curve
  const alpha_y = result.yAxis.alpha
  const instabilityCurve_z = result.zAxis.curve
  const alpha_z = result.zAxis.alpha

  const fi_y = 0.5 + (1 + alpha_y * (lambda_y - 0.2) + lambda_y ** 2)
  const fi_z = 0.5 + (1 + alpha_z * (lambda_z - 0.2) + lambda_z ** 2)

  const chi_y = Math.min(1 / (fi_y + Math.sqrt(fi_y ** 2 - lambda_y ^ 2)), 1)
  const chi_z = Math.min(1 / (fi_z + Math.sqrt(fi_z ** 2 - lambda_z ^ 2)), 1)

  const Nb_Rd_y = classSection.includes("1", "2", "3")
    ? (chi_y * A * fyk) / gm1
    : (chi_y * Aeff * fyk) / gm1

  const Nb_Rd_z = classSection.includes("1", "2", "3") ? (chi_z * A * fyk) / gm1 : (chi_z * Aeff * fyk) / gm1
  //---------------------------------------------------------------------------------------------
  const latex_Ncr_y = `$N_{cr,y} = \\frac{\\pi^2 \\cdotp E_s \\cdotp I_{g,y}}{(\\beta_y \\cdotp l)^2}$`;
  const latex_Ncr_z = `$N_{cr,z} = \\frac{\\pi^2 \\cdotp E_s \\cdotp I_{g,z}}{(\\beta_z \\cdotp l)^2}$`;

  const latex_lambda_y = classSection.includes("1", "2", "3")
    ? `$\\lambda_y = \\sqrt{\\frac{A \\cdotp f_{yk}}{N_{cr,y}}}$`
    : `$\\lambda_y = \\sqrt{\\frac{A_{eff} \\cdotp f_{yk}}{N_{cr,y}}}$`;

  const latex_lambda_z = classSection.includes("1", "2", "3")
    ? `$\\lambda_z = \\sqrt{\\frac{A \\cdotp f_{yk}}{N_{cr,z}}}$`
    : `$\\lambda_z = \\sqrt{\\frac{A_{eff} \\cdotp f_{yk}}{N_{cr,z}}}$`;

  const latex_fi_y = `$\\varphi_y = 0.5 + (1 + \\alpha_y \\cdotp (\\lambda_y - 0.2) + \\lambda_y^2)$`;
  const latex_fi_z = `$\\varphi_z = 0.5 + (1 + \\alpha_z \\cdotp (\\lambda_z - 0.2) + \\lambda_z^2)$`;

  const latex_chi_y = `$\\chi_y = \\min\\left(\\frac{1}{\\varphi_y + \\sqrt{\\varphi_y^2 - \\lambda_y^2}}, 1\\right)$`;
  const latex_chi_z = `$\\chi_z = \\min\\left(\\frac{1}{\\varphi_z + \\sqrt{\\varphi_z^2 - \\lambda_z^2}}, 1\\right)$`;

  const latex_Nb_Rd_y = classSection.includes("1", "2", "3")
    ? `$N_{b,Rd,y} = \\frac{\\chi_y \\cdotp A \\cdotp f_{yk}}{\\gamma_{M1}}$`
    : `$N_{b,Rd,y} = \\frac{\\chi_y \\cdotp A_{eff} \\cdotp f_{yk}}{\\gamma_{M1}}$`;

  const latex_Nb_Rd_z = classSection.includes("1", "2", "3")
    ? `$N_{b,Rd,z} = \\frac{\\chi_z \\cdotp A \\cdotp f_{yk}}{\\gamma_{M1}}$`
    : `$N_{b,Rd,z} = \\frac{\\chi_z \\cdotp A_{eff} \\cdotp f_{yk}}{\\gamma_{M1}}$`;



  return {
    valori: {
      Npl_Rd: null,
      Nu_Rd: null,
      Nt_Rd: null,
      Nc_Rd: null,
      Mpl_Rd: null,
      Mel_Rd: null,
      Vc_Rd: null,
      Ncr_y: null,
      Ncr_z: null,
      lambda_y: null,
      lambda_z: null,
      instabilityCurve_y: null,
      alpha_y: null,
      instabilityCurve_z: null,
      alpha_z: null,
      fi_y: null,
      fi_z: null,
      chi_y: null,
      chi_z: null,
      Nb_Rd_y: null,
      Nb_Rd_z: null
    },

    formule: {

      Npl_Rd: null,
      Nu_Rd: null,
      Nt_Rd: null,
      Nc_Rd: null,
      Mpl_Rd: null,
      Mel_Rd: null,
      Vc_Rd: null,
      Ncr_y: null,
      Ncr_z: null,
      lambda_y: null,
      lambda_z: null,
      instabilityCurve_y: null,
      alpha_y: null,
      instabilityCurve_z: null,
      alpha_z: null,
      fi_y: null,
      fi_z: null,
      chi_y: null,
      chi_z: null,
      Nb_Rd_y: null,
      Nb_Rd_z: null
    }
  };
}
