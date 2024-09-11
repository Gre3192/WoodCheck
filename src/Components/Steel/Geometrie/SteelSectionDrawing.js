import React from 'react';
import customDecimal from '../../../Utils/customDecimal';


export default function SteelSectionDrawing({ sectionGeometry, sectionGeometryMass }) {

  const width = '100%';
  const height = 300;
  const scale = 200 / parseFloat(sectionGeometry.h)

  let {
    h,
    b,
    tw,
    tf_sup,
    tf_inf,
    b_sup,
    b_inf,
    raccordo,
    raggio,
  } = {
    h: parseFloat(sectionGeometry.h) * scale || 500,
    b: parseFloat(sectionGeometry.b) * scale || 700,
    tw: parseFloat(sectionGeometry.tw) * scale || 12,
    tf_sup: parseFloat(sectionGeometry.tf_sup) * scale || 19,
    tf_inf: parseFloat(sectionGeometry.tf_inf) * scale || 19,
    b_sup: parseFloat(sectionGeometry.b_sup) * scale || 220,
    b_inf: parseFloat(sectionGeometry.b_inf) * scale || 220,
    raccordo: parseFloat(sectionGeometry.raccordo) * scale || 10,
    raggio: parseFloat(sectionGeometry.raggio)*200/parseFloat(sectionGeometry.raggio) || 10,
  };

  let {
    yg
  } = { yg: customDecimal(parseFloat(sectionGeometryMass.valori.yg) * scale, 2) || 250, }


  const labelFontSize = 18;
  const viewBoxWidth = Math.max(b_sup, b_inf) + 100;
  const viewBoxHeight = h + tf_sup + tf_inf + 100;

  const markers = <defs>
    {/* Marker per le frecce che puntano verso l'esterno a sinistra */}
    <marker
      id="arrowLeft"
      markerWidth="10"
      markerHeight="10"
      refX="0"
      refY="5"
      orient="auto"
      markerUnits="strokeWidth"
    >
      <path d="M10,0 L0,5 L10,10 Z" fill="#000" />
    </marker>
    {/* Marker per le frecce che puntano verso l'esterno a destra */}
    <marker
      id="arrowRight"
      markerWidth="10"
      markerHeight="10"
      refX="10"
      refY="5"
      orient="auto"
      markerUnits="strokeWidth"
    >
      <path d="M0,0 L10,5 L0,10 Z" fill="#000" />
    </marker>
    <marker id="lineLeft" markerWidth="10" markerHeight="10" refX="0" refY="5" orient="auto" markerUnits="strokeWidth">
      <line x1="5" y1="0" x2="5" y2="10" stroke="red" strokeWidth="2" /> {/* Trattino verticale */}
    </marker>
    {/* Marker per il trattino a destra */}
    <marker id="lineRight" markerWidth="10" markerHeight="10" refX="10" refY="5" orient="auto" markerUnits="strokeWidth">
      <line x1="5" y1="0" x2="5" y2="10" stroke="red" strokeWidth="2" /> {/* Trattino verticale */}
    </marker>
  </defs>

  return (
    <div className="w-full flex justify-center items-center">



      {/* SEZIONE DOPPIO T */}
      {sectionGeometry.shape.includes('doppioT') || sectionGeometry.shape.includes('T') ?
        <svg
          width={width}
          height={height}
          viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
          preserveAspectRatio="xMidYMid meet"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Definizione dei marker per le frecce */}
          {markers}

          <path
            d={`
          M ${(viewBoxWidth - b_sup) / 2},${50}
          L ${(viewBoxWidth + b_sup) / 2},${50}
          L ${(viewBoxWidth + b_sup) / 2},${50 + tf_sup}
          L ${(viewBoxWidth + tw) / 2},${50 + tf_sup}
          L ${(viewBoxWidth + tw) / 2},${50 + tf_sup + h}
          L ${(viewBoxWidth + b_inf) / 2},${50 + tf_sup + h}
          L ${(viewBoxWidth + b_inf) / 2},${50 + tf_sup + h + tf_inf}
          L ${(viewBoxWidth - b_inf) / 2},${50 + tf_sup + h + tf_inf}
          L ${(viewBoxWidth - b_inf) / 2},${50 + tf_sup + h}
          L ${(viewBoxWidth - tw) / 2},${50 + tf_sup + h}
          L ${(viewBoxWidth - tw) / 2},${50 + tf_sup}
          L ${(viewBoxWidth - b_sup) / 2},${50 + tf_sup}
          Z
        `}
            fill="steelblue"
            stroke="steelblue"
            strokeWidth="0"
          />

          {/* Frecce e etichette per altezza (h) */}
          {
            sectionGeometry.h ?
              <>
                <line
                  x1={(viewBoxWidth - Math.max(b_sup, b_inf, tw)) / 2 - 40}
                  y1={50}
                  x2={(viewBoxWidth - Math.max(b_sup, b_inf, tw)) / 2 - 40}
                  y2={50 + tf_sup + h + tf_inf}
                  stroke="black"
                  markerEnd="url(#arrowRight)"
                  markerStart="url(#arrowLeft)"
                />
                <text
                  x={(viewBoxWidth - Math.max(b_sup, b_inf, tw)) / 2 - 70}
                  y={50 + (h + tf_sup + tf_inf) / 2}
                  fill="black"
                  fontSize={labelFontSize}
                  textAnchor="middle"
                  dominantBaseline="middle"
                >
                  {sectionGeometry.h}
                </text>
              </>
              : null
          }
          {/* Frecce e etichette per larghezza superiore (b_sup) */}
          {
            sectionGeometry.b_sup ?
              <>
                <line
                  x1={(viewBoxWidth - b_sup) / 2}
                  y1={35}
                  x2={(viewBoxWidth - b_sup) / 2 + b_sup}
                  y2={35}
                  stroke="black"
                  markerEnd="url(#arrowRight)"
                  markerStart="url(#arrowLeft)"
                />
                <text
                  x={viewBoxWidth / 2}
                  y={25}
                  fill="black"
                  fontSize={labelFontSize}
                  textAnchor="middle"
                >
                  {sectionGeometry.b_sup}
                </text>
              </>
              : null
          }
          {/* Frecce e etichette per larghezza inferiore (b_inf) */}
          {
            sectionGeometry.b_inf ?
              <>
                <line
                  x1={(viewBoxWidth - b_inf) / 2}
                  y1={50 + tf_sup + h + tf_inf + 20}
                  x2={(viewBoxWidth - b_inf) / 2 + b_inf}
                  y2={50 + tf_sup + h + tf_inf + 20}
                  stroke="black"
                  markerEnd="url(#arrowRight)"
                  markerStart="url(#arrowLeft)"
                />
                <text
                  x={viewBoxWidth / 2}
                  y={50 + tf_sup + h + tf_inf + 40}
                  fill="black"
                  fontSize={labelFontSize}
                  textAnchor="middle"
                >
                  {sectionGeometry.b_inf}
                </text>
              </>
              : null
          }
          {/* Frecce e etichette per visualizzare il baricentro */}
          {
            sectionGeometryMass.valori.yg ?
              <>
                <line
                  x1={viewBoxWidth + 40}
                  y1={50 + tf_sup + h + tf_inf}
                  x2={viewBoxWidth + 40}
                  y2={50 + tf_sup + h + tf_inf - yg}
                  stroke="red"
                  markerEnd="url(#lineRight)"
                  markerStart="url(#lineLeft)"
                />
                <text
                  x={viewBoxWidth + 70}
                  y={50 + tf_sup + h + tf_inf - yg / 2}
                  fill="red"
                  fontSize={labelFontSize}
                  textAnchor="middle"
                  dominantBaseline="middle"
                >
                  {yg / scale}
                </text>
              </> : null
          }

          {/* Punto del baricentro */}
          <>
            <circle
              cx={viewBoxWidth / 2}
              cy={50 + tf_sup + h + tf_inf - yg}
              r={0.7 * tw}
              fill="red"
            />
          </>
        </svg>
        : null}


      {/* SEZIONE CIRCOLARE */}
      {sectionGeometry.shape.includes('circolare') ?
        <svg
          width={width}
          height={height}
          viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
          preserveAspectRatio="xMidYMid meet"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Definizione dei marker per le frecce */}
          {markers}

          {/* Anello esterno */}
          <circle
            cx={viewBoxWidth / 2}
            cy={viewBoxHeight / 2}
            r={raggio}
            fill="none"
            stroke="steelblue"
            strokeWidth={tw}
          />

          {/* Frecce e etichette per il raggio esterno */}
          <>
            <line
              x1={viewBoxWidth / 2}
              y1={viewBoxHeight / 2}
              x2={viewBoxWidth / 2 + raggio}
              y2={viewBoxHeight / 2}
              stroke="black"
              markerEnd="url(#arrowRight)"
              markerStart="url(#arrowLeft)"
            />
            <text
              x={viewBoxWidth / 2 + raggio / 2}
              y={viewBoxHeight / 2 - 10}
              fill="black"
              fontSize={labelFontSize}
              textAnchor="middle"
            >
              {raggio}
            </text>
          </>

          {/* Frecce e etichette per lo spessore dell'anello */}
          <>
            <line
              x1={viewBoxWidth / 2 + raggio}
              y1={viewBoxHeight / 2}
              x2={viewBoxWidth / 2 + raggio}
              y2={viewBoxHeight / 2 + tw}
              stroke="black"
              markerEnd="url(#arrowRight)"
              markerStart="url(#arrowLeft)"
            />
            <text
              x={viewBoxWidth / 2 + raggio + 20}
              y={viewBoxHeight / 2 + tw / 2}
              fill="black"
              fontSize={labelFontSize}
              textAnchor="middle"
            >
              {tw}
            </text>
          </>

          {/* Frecce e etichette per visualizzare il baricentro */}
          <>
            <line
              x1={viewBoxWidth + 40}
              y1={viewBoxHeight / 2 + raggio}
              x2={viewBoxWidth + 40}
              y2={viewBoxHeight / 2 + raggio - yg}
              stroke="black"
              markerEnd="url(#arrowRight)"
              markerStart="url(#arrowLeft)"
            />
            <text
              x={viewBoxWidth + 70}
              y={viewBoxHeight / 2 + raggio - yg / 2}
              fill="black"
              fontSize={labelFontSize}
              textAnchor="middle"
              dominantBaseline="middle"
            >
              {yg}
            </text>
          </>
        </svg>
        : null
      }

      {/* SEZIONE RETTANGOLARE */}
      {sectionGeometry.shape.includes('rettangolare') ?
        <svg
          width={width}
          height={height}
          viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
          preserveAspectRatio="xMidYMid meet"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Definizione dei marker per le frecce */}
          {markers}

          {/* Rettangolo */}
          <rect
            x={(viewBoxWidth - b) / 2}
            y={(viewBoxHeight - h) / 2}
            width={b}
            height={h}
            fill="steelblue"
          />

          {/* Frecce e etichette per la larghezza */}

          {
            sectionGeometry.b ?
              <>
                <line
                  x1={(viewBoxWidth - b) / 2}
                  y1={(viewBoxHeight - h) / 2 - 20}
                  x2={(viewBoxWidth + b) / 2}
                  y2={(viewBoxHeight - h) / 2 - 20}
                  stroke="black"
                  markerEnd="url(#arrowRight)"
                  markerStart="url(#arrowLeft)"
                />
                <text
                  x={viewBoxWidth / 2}
                  y={(viewBoxHeight - h) / 2 - 30}
                  fill="black"
                  fontSize={labelFontSize}
                  textAnchor="middle"
                >
                  {b}
                </text>
              </> : null
          }

          {/* Frecce e etichette per l'altezza */}
          {
            sectionGeometry.h ?
              <>
                <line
                  x1={(viewBoxWidth - b) / 2 - 20}
                  y1={(viewBoxHeight - h) / 2}
                  x2={(viewBoxWidth - b) / 2 - 20}
                  y2={(viewBoxHeight + h) / 2}
                  stroke="black"
                  markerEnd="url(#arrowRight)"
                  markerStart="url(#arrowLeft)"
                />
                <text
                  x={(viewBoxWidth - b) / 2 - 30}
                  y={viewBoxHeight / 2}
                  fill="black"
                  fontSize={labelFontSize}
                  textAnchor="middle"
                  transform={`rotate(-90, ${(viewBoxWidth - b) / 2 - 30}, ${viewBoxHeight / 2})`}
                >
                  {h}
                </text>
              </> : null
          }

          {/* Frecce e etichette per visualizzare il baricentro */}
          <>
            <line
              x1={viewBoxWidth + 40}
              y1={(viewBoxHeight + h) / 2}
              x2={viewBoxWidth + 40}
              y2={(viewBoxHeight + h) / 2 - yg}
              stroke="black"
              markerEnd="url(#arrowRight)"
              markerStart="url(#arrowLeft)"
            />
            <text
              x={viewBoxWidth + 70}
              y={(viewBoxHeight + h) / 2 - yg / 2}
              fill="black"
              fontSize={labelFontSize}
              textAnchor="middle"
              dominantBaseline="middle"
            >
              {yg}
            </text>
          </>
        </svg>
        : null
      }



    </div >
  );
}
