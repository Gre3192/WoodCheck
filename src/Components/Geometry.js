import MinimalTable from "./MinimalTable";



function Geometry(params) {
    

  const inputBoxGeometryConfig = (shape) => {

    let arrayObj = []

    switch (shape) {

      case 'rettangolare': arrayObj = [
        {
          name: "b",
          label: 'b\\\\\\text{[mm]}',
          placeholder: "Base...",
          textHover: "Base",
          value: sectionGeometry.b,
        },
        {
          name: "h",
          label: 'h\\\\\\text{[mm]}',
          placeholder: "Altezza...",
          textHover: "Altezza sezione",
          value: sectionGeometry.h,
        },
      ]
        break;

      case 'circolare': arrayObj = [
        {
          name: "r",
          label: 'r\\\\\\text{[mm]}',
          placeholder: "Raggio...",
          textHover: "Raggio",
          value: sectionGeometry.r,
        }
      ]
        break;

    }

    arrayObj.map((item) => {
      item.handleInputChange = handleInputChange
      item.isLatexTitle = true
      item.type = 'number'
    })
    return arrayObj
  }




}