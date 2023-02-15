import { getNasaHeroImage, getNasaImages } from '../helpers/apiHelpers';
import { createContext, useState, useEffect } from 'react';
export const NasaContext = createContext();

export const ContextProvider = (props) => {
  const [nasaImages, setNasaImages] = useState();
  const [nasaHeroBanner, setNasaHeroBanner] = useState();

  useEffect(() => {
    (async () => {
      const heroBanner = await getNasaHeroImage();
      const images = await getNasaImages();

      setNasaHeroBanner(heroBanner);
      setNasaImages(images);
    })();
  }, []);

  const sharedData = {
    nasaHeroBanner,
    nasaImages,
  };

  return (
    <NasaContext.Provider value={sharedData}>
      {props.children}
    </NasaContext.Provider>
  );
};
