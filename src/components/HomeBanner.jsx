import { useContext } from 'react';
import { NasaContext } from '../context/nasaContext';
import { motion } from 'framer-motion';

const HomeBanner = () => {
  const { nasaHeroBanner } = useContext(NasaContext);

  return (
    <div className="homebanner">
      {nasaHeroBanner && (
        <motion.img
          whileHover={{
            scale: 1.1,
            filter: 'contrast(2)',
            transition: { duration: 2 },
          }}
          src={nasaHeroBanner.url}
        />
      )}
    </div>
  );
};

export default HomeBanner;
