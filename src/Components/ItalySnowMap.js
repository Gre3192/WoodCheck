import React, { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import italyTopoJson from "../Json/ItalyProvincesMap.json";

const zones = {
  zona1Alpina: [
    "Aosta",
    "Belluno",
    "Bergamo",
    "Biella",
    "Bolzano",
    "Brescia",
    "Como",
    "Cuneo",
    "Lecco",
    "Pordenone",
    "Sondrio",
    "Torino",
    "Trento",
    "Udine",
    "Verbano-Cusio-Ossola",
    "Vercelli",
    "Vicenza"
  ],
  zona1Mediterranea: [
    "Alessandria",
    "Ancona",
    "Asti",
    "Bologna",
    "Cremona",
    "Forlì-Cesena",
    "Lodi",
    "Milano",
    "Modena",
    "Monza Brianza",
    "Novara",
    "Parma",
    "Pavia",
    "Pesaro e Urbino",
    "Piacenza",
    "Ravenna",
    "Reggio Emilia",
    "Rimini",
    "Treviso",
    "Varese"
  ],
  zona2: [
    "Arezzo",
    "Ascoli Piceno",
    "Avellino",
    "Bari",
    "Barletta-Andria-Trani",
    "Benevento",
    "Campobasso",
    "Chieti",
    "Fermo",
    "Ferrara",
    "Firenze",
    "Foggia",
    "Frosinone",
    "Genova",
    "Gorizia",
    "Imperia",
    "Isernia",
    "L'Aquila",
    "La Spezia",
    "Lucca",
    "Macerata",
    "Mantova",
    "Massa Carrara",
    "Padova",
    "Perugia",
    "Pescara",
    "Pistoia",
    "Prato",
    "Rieti",
    "Rovigo",
    "Savona",
    "Teramo",
    "Trieste",
    "Venezia",
    "Verona"
  ],
  zona3: [
    "Agrigento",
    "Brindisi",
    "Cagliari",
    "Caltanissetta",
    "Carbonia-Iglesias",
    "Caserta",
    "Catania",
    "Catanzaro",
    "Cosenza",
    "Crotone",
    "Enna",
    "Grosseto",
    "Latina",
    "Lecce",
    "Livorno",
    "Matera",
    "Medio Campidano",
    "Messina",
    "Napoli",
    "Nuoro",
    "Ogliastra",
    "Olbia-Tempio",
    "Oristano",
    "Palermo",
    "Pisa",
    "Potenza",
    "Ragusa",
    "Reggio Calabria",
    "Roma",
    "Salerno",
    "Sassari",
    "Siena",
    "Siracusa",
    "Taranto",
    "Terni",
    "Trapani",
    "Vibo Valentia",
    "Viterbo",
    "Sud Sardegna"
  ]
};

const colorMap = {
  zona1Alpina: "#1FFD57",
  zona1Mediterranea: "#1FFD57",
  zona2: "#8FC8FF",
  zona3: "#E0E0E0"
};

const getRegionColor = (provinceName) => {
  if (zones.zona1Alpina.includes(provinceName)) return colorMap.zona1Alpina;
  if (zones.zona1Mediterranea.includes(provinceName)) return colorMap.zona1Mediterranea;
  if (zones.zona2.includes(provinceName)) return colorMap.zona2;
  if (zones.zona3.includes(provinceName)) return colorMap.zona3;
  return "#FFFFFF";
};

const getZone = (provinceName) => {
  if (zones.zona1Alpina.includes(provinceName)) return "Zona I - Alpina";
  if (zones.zona1Mediterranea.includes(provinceName)) return "Zona I - Mediterranea";
  if (zones.zona2.includes(provinceName)) return "Zona II";
  if (zones.zona3.includes(provinceName)) return "Zona III";
  return null;
};

const ItalySnowMap = ({ props }) => {

  const { selectedProvince, setSelectedProvince } = props

  // const [selectedProvince, setSelectedProvince] = useState(null);
  const [hoveredProvince, setHoveredProvince] = useState({ province: null, position: { x: 0, y: 0 } });

  const handleProvinceClick = (provinceData) => {
    if (selectedProvince && selectedProvince.prov_name === provinceData.prov_name) {
      setSelectedProvince({
        prov_name: '',
        reg_name: '',
        zone: ''
      });
    } else {
      setSelectedProvince({
        prov_name: provinceData.prov_name,
        reg_name: provinceData.reg_name,
        zone: getZone(provinceData.prov_name)
      });
    }
  };

  const handleMouseEnter = (provinceName, event) => {
    setHoveredProvince({
      province: provinceName,
      position: { x: event.clientX, y: event.clientY }
    });
  };

  const handleMouseLeave = () => {
    setHoveredProvince({ province: null, position: { x: 0, y: 0 } });
  };

  return (
    <div style={{ width: "100%", height: "auto", position: "relative" }}>
      {hoveredProvince.province && (
        <div
          style={{
            position: "absolute",
            left: hoveredProvince.position.x + 10,
            top: hoveredProvince.position.y + 10,
            backgroundColor: "white",
            padding: "5px",
            borderRadius: "3px",
            boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)",
            pointerEvents: "none",
            zIndex: 10
          }}
        >
          {hoveredProvince.province}
        </div>
      )}
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 3000,
          center: [12.5, 42.5]
        }}
        style={{ width: "100%", height: "auto" }}
      >
        <Geographies geography={italyTopoJson}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const provinceName = geo.properties.prov_name;
              const isSelected =
                selectedProvince && selectedProvince.prov_name === provinceName;

              return (
                <Geography
                  key={geo.properties.id}
                  geography={geo}
                  fill={isSelected ? "#FFD700" : getRegionColor(provinceName)}
                  onMouseEnter={(event) => handleMouseEnter(provinceName, event)}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleProvinceClick(geo.properties)}
                  style={{
                    default: {
                      fill: isSelected ? "#FFD700" : getRegionColor(provinceName),
                      stroke: "#000",
                      strokeWidth: 0.5,
                      outline: "none",
                    },
                    hover: {
                      fill: isSelected ? "#FFA500" : "#BDBDBD",
                      stroke: "#000",
                      strokeWidth: 0.5,
                      outline: "none",
                      cursor: "pointer"
                    },
                    pressed: { outline: "none" }
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default ItalySnowMap;
