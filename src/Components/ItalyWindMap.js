import React, { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import italyTopoJson from "../Json/ItalyProvincesMap.json";

const zones = {
  zona1: [
    "Padova",
    "Rovigo",
    "Venezia",
    "Gorizia",
    "Aosta",
    "Torino",
    "Verbano-Cusio-Ossola",
    "Vercelli",
    "Biella",
    "Novara",
    "Cuneo",
    "Asti",
    "Alessandria",
    "Varese",
    "Como",
    "Lecco",
    "Sondrio",
    "Monza Brianza",
    "Milano",
    "Bergamo",
    "Brescia",
    "Pavia",
    "Lodi",
    "Cremona",
    "Mantova",
    "Trento",
    "Bolzano",
    "Vicenza",
    "Verona",
    "Treviso",
    "Pordenone",
    "Udine",
    "Belluno"
  ],
  zona2: [
    "Piacenza",
    "Parma",
    "Reggio Emilia",
    "Modena",
    "Bologna",
    "Ferrara",
    "Ravenna",
    "Forlì-Cesena",
    "Rimini"
  ],
  zona3: [
    "Barletta-Andria-Trani",
    "Massa Carrara",
    "Firenze",
    "Prato",
    "Pistoia",
    "Massa-Carrara",
    "Lucca",
    "Pisa",
    "Livorno",
    "Arezzo",
    "Siena",
    "Grosseto",
    "Ancona",
    "Pesaro e Urbino",
    "Macerata",
    "Ascoli Piceno",
    "Fermo",
    "Perugia",
    "Terni",
    "Viterbo",
    "Rieti",
    "Roma",
    "Latina",
    "Frosinone",
    "L'Aquila",
    "Pescara",
    "Chieti",
    "Teramo",
    "Campobasso",
    "Isernia",
    "Napoli",
    "Salerno",
    "Avellino",
    "Benevento",
    "Caserta",
    "Bari",
    "Brindisi",
    "Taranto",
    "Lecce",
    "Foggia",
    "Potenza",
    "Matera",
    "Catanzaro",
    "Cosenza",
    "Crotone",
    "Vibo Valentia",
  ],
  zona4: [
    "Caltanissetta",
    "Siracusa",
    "Ragusa",
    "Catania",
    "Enna",
    "Messina",
    "Palermo",
    "Agrigento",
    "Trapani",
    "Reggio Calabria"
  ],
  zona5: [
    "Sassari",
    "Nuoro",
    "Oristano",
    "Olbia-Tempio",
    "Ogliastra",
    "Cagliari",
    "Medio Campidano",
    "Sud Sardegna"
  ],
  zona6: [
    "Sassari",
    "Nuoro",
    "Oristano",
    "Olbia-Tempio",
    "Ogliastra",
    "Cagliari",
    "Medio Campidano",
    "Sud Sardegna"
  ],
  zona7: [
    "Genova",
    "Savona",
    "Imperia",
    "La Spezia"
  ],
  zona8: [
    "Trieste"
  ],
  zona9: [
    "Isole (ad eccezione di Sicilia e Sardegna) e mare aperto"
  ]
};

const colorMap = {
  zona1: "#355C7D", // Blu medio, sobrio e più chiaro
  zona2: "#6C5B7B", // Viola tenue
  zona3: "#C06C84", // Rosa spento
  zona4: "#92A8D1", // Azzurro-grigio
  zona5: "#88B2AC", // Verde acqua desaturato
  zona6: "#BFD3C1", // Verde chiaro sobrio
  zona7: "#A593E0", // Viola pastello
  zona8: "#7E8A97", // Grigio-blu tenue
  zona9: "#B0C4DE"  // Azzurro pallido
};






const getRegionColor = (provinceName) => {
  if (zones.zona1.includes(provinceName)) return colorMap.zona1;
  if (zones.zona2.includes(provinceName)) return colorMap.zona2;
  if (zones.zona3.includes(provinceName)) return colorMap.zona3;
  if (zones.zona4.includes(provinceName)) return colorMap.zona4;
  if (zones.zona5.includes(provinceName)) return colorMap.zona5;
  if (zones.zona6.includes(provinceName)) return colorMap.zona6;
  if (zones.zona7.includes(provinceName)) return colorMap.zona7;
  if (zones.zona8.includes(provinceName)) return colorMap.zona8;
  return "#FFFFFF";
};

const getZone = (provinceName) => {
  if (zones.zona1.includes(provinceName)) return "Zona 1";
  if (zones.zona2.includes(provinceName)) return "Zona 2";
  if (zones.zona3.includes(provinceName)) return "Zona 3";
  if (zones.zona4.includes(provinceName)) return "Zona 4";
  if (zones.zona5.includes(provinceName)) return "Zona 5";
  if (zones.zona6.includes(provinceName)) return "Zona 6";
  if (zones.zona7.includes(provinceName)) return "Zona 7";
  if (zones.zona8.includes(provinceName)) return "Zona 8";
  return null;
};

const ItalyWindMap = ({ props }) => {

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

export default ItalyWindMap;
