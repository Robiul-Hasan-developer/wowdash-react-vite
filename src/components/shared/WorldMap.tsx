
import WorldMapImage from '@/assets/world-map/world-map-img.png';

const WorldMap = () => {

  return (
    <div className={`h-full relative`}>
        <img src={WorldMapImage} alt="World Map" className='w-full h-full object-cover' />
    </div>
  );
};

export default WorldMap;
