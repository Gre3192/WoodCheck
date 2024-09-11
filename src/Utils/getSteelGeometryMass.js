import getShapeParams from "./getShapeParams";


export default function getSteelGeometryMass(geometrySection) {

  const shape = geometrySection.shape

  switch (shape) {

    case 'doppioT': {

      const { h, r, tw, tf_sup, tf_inf, b_sup, b_inf } = getShapeParams(shape, geometrySection, 'Atom -> Gen')

      const AreaRaccordi = false ? 4 * (r ** 2 - ((Math.PI * r ** 2) / 4)) : 0;
      const A = b_sup * tf_sup + b_inf * tf_inf + (h - tf_sup - tf_inf) * tw + AreaRaccordi;
      const latex_A = shape
        ? `$A_{tot} = b_{sup} \\cdotp t_{f,sup} + b_{inf} \\cdotp t_{f,inf} + (h - t_{f,sup} - t_{f,inf}) \\cdotp t_w + 4 \\cdotp\\left( r^2 - \\frac{\\pi \\cdotp r^2}{4} \\right)$`
        : `$A_{tot} = b_{sup} \\cdotp t_{f,sup} + b_{inf} \\cdotp t_{f,inf} + (h - t_{f,sup} - t_{f,inf}) \\cdotp t_w $`

      const yg = (b_sup * tf_sup * (h - (tf_sup / 2)) + tw * (((h - tf_sup) ** 2 - tf_inf ** 2) / 2) + b_inf * ((tf_inf ** 2) / 2)) / A;
      const latex_yg = `$y_g = \\frac{b_{sup} \\cdotp t_{f,sup} \\cdotp \\left( h - \\frac{t_{f,sup}}{2} \\right) + t_w \\cdotp \\frac{(h - t_{f,sup})^2 - t_{f,inf}^2}{2} + b_{inf} \\cdotp \\frac{t_{f,inf}^2}{2}}{A}$`;

      const yn = (b_inf * tf_inf - b_sup * tf_sup + (h - tf_inf - tf_sup) * tw) / (2 * tw);
      const latex_yn = `$y_n = \\frac{b_{inf} \\cdotp t_{f,inf} - b_{sup} \\cdotp t_{f,sup} + (h - t_{f,inf} - t_{f,sup}) \\cdotp t_w}{2 \\cdotp t_w}$`;

      const ig_sup_y = ((b_sup * tf_sup ** 3) / 12) + b_sup * tf_sup * (h - (tf_sup / 2) - yg) ** 2;
      const latex_ig_sup_y = `$I_{g,sup,y} = \\frac{b_{sup} \\cdotp t_{f,sup}^3}{12} + b_{sup} \\cdotp t_{f,sup} \\cdotp \\left( h - \\frac{t_{f,sup}}{2} - y_g \\right)^2$`;

      const igw_y = ((tw * (h - tf_sup - tf_inf) ** 3) / 12) + (h - tf_sup - tf_inf) * tw * (yg - tf_inf - ((h - tf_sup - tf_inf) / 2)) ** 2;
      const latex_igw_y = `$I_{g,w,y} = \\frac{t_w \\cdotp (h - t_{f,sup} - t_{f,inf})^3}{12} + (h - t_{f,sup} - t_{f,inf}) \\cdotp t_w \\cdotp \\left( y_g - t_{f,inf} - \\frac{h - t_{f,sup} - t_{f,inf}}{2} \\right)^2$`;

      const ig_inf_y = ((b_inf * tf_inf ** 3) / 12) + b_inf * tf_inf * (yg - (tf_inf / 2)) ** 2;
      const latex_ig_inf_y = `$I_{g,inf,y} = \\frac{b_{inf} \\cdotp t_{f,inf}^3}{12} + b_{inf} \\cdotp t_{f,inf} \\cdotp \\left( y_g - \\frac{t_{f,inf}}{2} \\right)^2$`;

      const ig_y = ig_sup_y + igw_y + ig_inf_y;
      const latex_ig_y = `$I_{g,y} = I_{g,sup,y} + I_{gw,y} + I_{g,inf,y}$`;

      const ig_sup_z = (tf_sup * b_sup ** 3) / 12;
      const latex_ig_sup_z = `$I_{g,sup,z} = \\frac{t_{f,sup} \\cdotp b_{sup}^3}{12}$`;

      const igw_z = ((h - tf_sup - tf_inf) * tw ** 3) / 12;
      const latex_igw_z = `$I_{g,w,z} = \\frac{(h - t_{f,sup} - t_{f,inf}) \\cdotp t_w^3}{12}$`;

      const ig_inf_z = (tf_inf * b_inf ** 3) / 12;
      const latex_ig_inf_z = `$I_{g,inf,z} = \\frac{t_{f,inf} \\cdotp b_{inf}^3}{12}$`;

      const ig_z = ig_sup_z + igw_z + ig_inf_z;
      const latex_ig_z = `$I_{g,z} = I_{g,sup,z} + I_{gw,z} + I_{g,inf,z}$`;

      const wel_sup_y = ig_y / (h - yg);
      const latex_wel_sup_y = `$W_{el,sup,y} = \\frac{I_{g,y}}{h - y_g}$`;

      const wel_inf_y = ig_y / yg;
      const latex_wel_inf_y = `$W_{el,inf,y} = \\frac{I_{g,y}}{y_g}$`;

      const wel_sup_z = ig_z / (Math.max(b_sup, b_inf) / 2);
      const latex_wel_sup_z = `$W_{el,sup,z} = \\frac{I_{g,z}}{\\frac{\\max(b_{sup}, b_{inf})}{2}}$`;

      const wel_inf_z = ig_z / (Math.max(b_sup, b_inf) / 2);
      const latex_wel_inf_z = `$W_{el,inf,z} = \\frac{I_{g,z}}{\\frac{\\max(b_{sup}, b_{inf})}{2}}$`;

      const yc = (b_sup * tf_sup * (yn + (tf_sup / 2)) + ((A / 2) - b_sup * tf_sup) * (yn / 2)) / (A / 2);
      const latex_yc = `$y_c = \\frac{b_{sup} \\cdotp t_{f,sup} \\cdotp \\left( y_n + \\frac{t_{f,sup}}{2} \\right) + \\left( \\frac{A}{2} - b_{sup} \\cdotp t_{f,sup} \\right) \\cdotp \\frac{y_n}{2}}{\\frac{A}{2}}$`;

      const yt = (2 * b_inf * tf_inf * (h - (tf_inf / 2) - tf_sup - yn) + ((A / 2) - b_inf * tf_inf) * (h - tf_inf - tf_sup - yn)) / A;
      const latex_yt = `$y_t = \\frac{2 \\cdotp b_{inf} \\cdotp t_{f,inf} \\cdotp \\left( h - \\frac{t_{f,inf}}{2} - t_{f,sup} - y_n \\right) + \\left( \\frac{A}{2} - b_{inf} \\cdotp t_{f,inf} \\right) \\cdotp (h - t_{f,inf} - t_{f,sup} - y_n)}{A}$`;

      const wpl_y = (A / 2) * (yc + yt);
      const latex_wpl_y = `$W_{pl,y} = \\frac{A}{2} \\cdotp (y_c + y_t)$`;

      const zg = null
      const latex_zg = ``

      const zc = (tf_inf * ((b_inf ** 2) / 8) + tf_sup * ((b_sup ** 2) / 8) + (h - tf_inf - tf_sup) * ((tw ** 2) / 8)) / (A / 2);
      const latex_zc = `$z_c = \\frac{t_{f,inf} \\cdotp \\frac{b_{inf}^2}{8} + t_{f,sup} \\cdotp \\frac{b_{sup}^2}{8} + (h - t_{f,inf} - t_{f,sup}) \\cdotp \\frac{t_w^2}{8}}{\\frac{A}{2}}$`;

      const zt = zc;
      const latex_zt = `$z_t = z_c$`;

      const wpl_z = 2 * A * zc;
      const latex_wpl_z = `$W_{pl,z} = 2 \\cdotp A \\cdotp z_c$`;

      const iy = Math.sqrt(ig_y / A)
      const latex_iy = `$i_{y} = \\sqrt{I_{g,y} \\cdotp A}$`

      const iz = Math.sqrt(ig_z / A)
      const latex_iz = `$i_{y} = \\sqrt{I_{g,x} \\cdotp A}$`

      return {
        valori: { A, yg, ig_sup_y, igw_y, ig_inf_y, ig_y, ig_sup_z, igw_z, ig_inf_z, ig_z, wel_sup_y, wel_inf_y, wel_sup_z, wel_inf_z, yc, yt, wpl_y, zc, zt, wpl_z, iy, iz },
        formule: { latex_A, yg, latex_ig_sup_y, latex_igw_y, latex_ig_inf_y, latex_ig_y, latex_ig_sup_z, latex_igw_z, latex_ig_inf_z, latex_ig_z, latex_wel_sup_y, latex_wel_inf_y, latex_wel_sup_z, latex_wel_inf_z, latex_yc, latex_yt, latex_wpl_y, latex_zc, latex_zt, latex_wpl_z, latex_iy, latex_iz },
      }
    }

    case 'circolare': {

      const { r, tw } = getShapeParams(shape, geometrySection, 'Atom -> Gen')

      const A = Math.PI * (r ** 2 - (r - tw) ** 2)
      const latex_A = `$A_{tot} = \\pi\\cdotp\\left(r^2-\\left(r^2-t_w\\right)^2\\right)$`

      const yg = r
      const latex_yg = `$y_g = r$`;

      const yn = r;
      const latex_yn = `$y_n = r$`;

      const ig_sup_y = null;
      const latex_ig_sup_y = ``;

      const igw_y = null;
      const latex_igw_y = ``;

      const ig_inf_y = null;
      const latex_ig_inf_y = ``;

      const ig_y = (Math.PI / 4) * (r ^ 4 - (r - tw) ^ 4);
      const latex_ig_y = `$I_{g,y} = \\dfrac{\\pi}{4}\\cdotp\\left(r^4-\\left(r-t_w\\right)^4\\right)$`;

      const ig_sup_z = null;
      const latex_ig_sup_z = ``;

      const igw_z = null;
      const latex_igw_z = ``;

      const ig_inf_z = null;
      const latex_ig_inf_z = ``;

      const ig_z = (Math.PI / 4) * (r ** 4 - (r - tw) ** 4);
      const latex_ig_z = `$I_{g,z} = \\dfrac{\\pi}{4}\\cdotp\\left(r^4-\\left(r-t_w\\right)^4\\right)$`;

      const wel_sup_y = (Math.PI / 4) * (r ** 3 - ((r - tw) ** 4 / r));
      const latex_wel_sup_y = `$W_{el,sup,y} = \\dfrac{\\pi}{4}\\cdotp\\left(r^3-\\dfrac{\\left(r-t_w\\right)^4}{r}\\right)$`;

      const wel_inf_y = (Math.PI / 4) * (r ** 3 - ((r - tw) ** 4 / r));;
      const latex_wel_inf_y = `$W_{el,inf,y} = \\dfrac{\\pi}{4}\\cdotp\\left(r^3-\\dfrac{\\left(r-t_w\\right)^4}{r}\\right)$`;

      const wel_sup_z = (Math.PI / 4) * (r ** 3 - ((r - tw) ** 4 / r));;
      const latex_wel_sup_z = `$W_{el,sup,z} = \\dfrac{\\pi}{4}\\cdotp\\left(r^3-\\dfrac{\\left(r-t_w\\right)^4}{r}\\right)$`;;

      const wel_inf_z = (Math.PI / 4) * (r ** 3 - ((r - tw) ** 4 / r));;
      const latex_wel_inf_z = `$W_{el,inf,z} = \\dfrac{\\pi}{4}\\cdotp\\left(r^3-\\dfrac{\\left(r-t_w\\right)^4}{r}\\right)$`;;

      const yc = 0;
      const latex_yc = ``;

      const yt = 0;
      const latex_yt = ``;

      const wpl_y = 0;
      const latex_wpl_y = ``;

      const zc = 0;
      const latex_zc = ``;

      const zt = 0;
      const latex_zt = ``;

      const wpl_z = 0;
      const latex_wpl_z = ``;

      const iy = 0;
      const latex_iy = ``;

      const iz = 0;
      const latex_iz = ``;

      return {
        valori: { A, yg, ig_sup_y, igw_y, ig_inf_y, ig_y, ig_sup_z, igw_z, ig_inf_z, ig_z, wel_sup_y, wel_inf_y, wel_sup_z, wel_inf_z, yc, yt, wpl_y, zc, zt, wpl_z, iy, iz },
        formule: { latex_A, yg, latex_ig_sup_y, latex_igw_y, latex_ig_inf_y, latex_ig_y, latex_ig_sup_z, latex_igw_z, latex_ig_inf_z, latex_ig_z, latex_wel_sup_y, latex_wel_inf_y, latex_wel_sup_z, latex_wel_inf_z, latex_yc, latex_yt, latex_wpl_y, latex_zc, latex_zt, latex_wpl_z, latex_iy, latex_iz },
      }
    }


  }

}
