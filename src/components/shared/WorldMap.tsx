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




import WorldMapImage from '@/assets/world-map/world-map-img.png';

const WorldMap = () => {

  return (
    <div className="relative">
        <img src={WorldMapImage} alt="World Map" />
    </div>
  );
};

export default WorldMap;
