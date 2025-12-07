// import worldMapData from "@/data/countries-data.json";
// import { ComposableMap, Geographies, Geography } from "react-simple-maps";


// const WorldMap = () => {
//     console.log(worldMapData);


//   return (
//     <div style={{ height: "300px", overflow: "hidden" }}>
//       {/* <ComposableMap projection="geoMercator">
//         <Geographies geography={worldMapData}>
//           {({ geographies }) =>
//             geographies.map((geo) => (
//               <Geography
//                 key={geo.rsmKey}
//                 geography={geo}
//                 style={{
//                   default: { fill: "#D6D6DA", outline: "none" },
//                   hover: { fill: "#A0AEC0", outline: "none" },
//                   pressed: { fill: "#4A5568", outline: "none" }
//                 }}
//               />
//             ))
//           }
//         </Geographies>
//       </ComposableMap> */}

//         <ComposableMap>
//             <Geographies geography={worldMapData}>
//                 {({ geographies }) =>
//                     geographies.map((geo) => (
//                         <Geography key={geo.rsmKey} geography={geo} />
//                     ))
//                 }
//             </Geographies>
//         </ComposableMap>

//     </div>
//   );
// };

// export default WorldMap;






import worldMapData from "@/data/countries-data.json";
import { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { Tooltip } from "react-tooltip";

interface geographiesProps {
  geographies: string
}

const WorldMap = () => {
  const [tooltipContent, setTooltipContent] = useState("");

  return (
    <div className="relative">
      <Tooltip id="map-tooltip" place="top" content={tooltipContent} />

      <ComposableMap>
        <Geographies geography={worldMapData}>
          {({ geographies }: geographiesProps) =>
            geographies.map((geo) => {
              const countryName =
                geo.properties.name ||
                geo.properties.ADMIN || // for 110m dataset
                "Unknown";

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  data-tooltip-id="map-tooltip"
                  data-tooltip-content={countryName}
                  onMouseEnter={() => {
                    setTooltipContent(countryName);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  style={{
                    default: {
                      fill: "#d1d5db",
                      outline: "none",
                      stroke: "#fff",     // country border
                      strokeWidth: 1,
                    },
                    hover: {
                      fill: "#333",
                      outline: "none",
                    },
                    pressed: {
                      fill: "#000",
                      outline: "none",
                    },
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

export default WorldMap;
