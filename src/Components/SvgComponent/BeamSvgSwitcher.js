import React from "react";
import Incastro from "../../Assets/Incastro.svg";
import Incastro_Cerniera from "../../Assets/Incastro_Cerniera.svg";
import Incastro_Pattino from "../../Assets/Incastro_Pattino.svg";
import Cerniera_Cerniera from "../../Assets/Cerniera_Cerniera.svg";
import Incastro_Incastro from "../../Assets/Incastro_Incastro.svg";
import SezCerchio from "../../Assets/SezCerchio.svg";
import SezRettangolo from "../../Assets/SezRettangolo.svg";


export default function SvgSwitcher({ imageKey }) {
    let selectedImage;

    switch (imageKey) {
        case "Incastro":
            selectedImage = Incastro;
            break;
        case "Incastro_Cerniera":
            selectedImage = Incastro_Cerniera;
            break;
        case "Incastro_Pattino":
            selectedImage = Incastro_Pattino;
            break;
        case "Cerniera_Cerniera":
            selectedImage = Cerniera_Cerniera;
            break;
        case "Incastro_Incastro":
            selectedImage = Incastro_Incastro;
            break;
        case "SezRettangolo":
            selectedImage = SezRettangolo;
            break;
        case "SezCerchio":
            selectedImage = SezCerchio;
            break;
        default:
            selectedImage = Cerniera_Cerniera;
    }

    if (!selectedImage) {
        return <div className="text-red-500">Immagine non trovata</div>;
    }

    return (
            <img src={selectedImage} alt={`Selected ${imageKey}`}/>
    );
};


