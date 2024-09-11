import React, { useRef } from 'react';
import html2pdf from 'html2pdf.js';
import SnowLoad from "../../Components/SnowLoad";
import WindLoad from "../../Components/WindLoad";

const ActionsOnStructures = () => {
  const ref = useRef();

  const generatePdf = () => {
    const element = ref.current;
    html2pdf()
      .from(element)
      .save();
  };

    return (
      <>
      <div ref={ref}>
        <div>
          
        <SnowLoad />
        </div>
        <div>

        <WindLoad />
        </div>
        {/* <button onClick={generatePdf}>Genera PDF</button> */}
      </div>
      </>
    );
  }

  export default ActionsOnStructures