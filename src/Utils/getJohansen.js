function getJohansen(params) {



    const shearPlane = 2
    const joinType = 'legno-legno'
    const acciaio_esterno = 1
    const fh1k = 26
    const fh2k = 26

    const beta = fh2k / fh1k

    if (joinType === 'legno-legno') {

        if (shearPlane === 1) {
            const rk1a = fh1k * t1 * d

            const rk1b = fh2k * t2 * d

            const rk1c_ = ((fh1k * t1 * d) / (1 + beta)) * (Math.sqrt(beta + 2 * beta ^ (2) * (1 + (t2 / t1) + (t2 / t1) ^ (2)) + beta ^ (3) * (t2 / t1) ^ 2)) - beta * (1 + (t2 / t1))
            const rk1c = rk1c_ + Math.min(coeff_fax * rk1c_, fax_rk / 4)

            const rk2a_ = 1.05 * ((fh1k * t1 * d) / (2 + β)) * (Math.sqrt(2 * β * (1 + β) + ((4 * β * (2 + β) * myrk) / (fh1k * t1 ^ 2 * d))) - beta)
            const rk2a = rk2a_ + Math.min(coeff_fax * rk2a_, fax_rk / 4)



        }

        if (shearPlane === 2) {




        }
    }

    if (joinType === 'acciaio-legno') {

        if (shearPlane = 1) { }

        if (shearPlane = 2) {
            if (acciaio_esterno_interno = 1) {


            } else if (acciaio_esterno_interno = 2) {


            }
        }

    }



}