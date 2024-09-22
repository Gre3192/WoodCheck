import React from 'react';
import customDecimal from '../Utils/customDecimal';


export default function SectionDrawing({ sectionGeometry, sectionGeometryMass }) {

  const width = '100%';
  const height = 300;
  const scale = 200 / parseFloat(sectionGeometry.h)

  let {
    h,
    b,
    r,
  } = {
    h: parseFloat(sectionGeometry.h) * scale || 500,
    b: parseFloat(sectionGeometry.b) * scale || 700,
    r: parseFloat(sectionGeometry.r) * 200 / parseFloat(sectionGeometry.r) || 10,
  };


  const labelFontSize = 18;
  const viewBoxWidth =  100;
  const viewBoxHeight = h + 100;

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


      {/* SEZIONE RETTANGOLARE */}
      {sectionGeometry.shape.includes('rettangolarePiena') ?
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

        </svg>
        : null
      }


      {/* SEZIONE CIRCOLARE */}
      {sectionGeometry.shape.includes('Ocava') ?
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

        </svg>
        : null
      }



    </div >
  );
}
