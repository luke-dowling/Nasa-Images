import { NasaContext } from '../context/nasaContext';
import { useContext, useState } from 'react';
import GalleryImage from './GalleryImage';
import { useInView } from 'react-intersection-observer';
import { AnimatePresence } from 'framer-motion';
import { Box } from './StarsBackground';

const Gallery = () => {
  const [animation, setAnimation] = useState({ opacity: 1, x: '0' });
  const { nasaImages } = useContext(NasaContext);
  const { ref, inView, entry } = useInView({
    threshold: 0.5,
    onChange: (inView) => {
      setAnimation(
        inView
          ? {
              opacity: 1,
              x: '0',
            }
          : { opacity: 0, x: '-10px' }
      );
    },
  });

  const imageList =
    nasaImages &&
    nasaImages.map((image, index) => {
      return (
        <GalleryImage
          data={image}
          index={index}
          inView={inView}
          animation={animation}
          key={image.date}
        ></GalleryImage>
      );
    });
  return (
    <>
      <Box></Box>
      <div ref={ref} className="images" id="gallery">
        {nasaImages && imageList}
        {/* <InView threshold={0.8}>
        {({ inView, ref, entry }) => (
          <div ref={ref} className="images" id="gallery">
            {nasaImages &&
              nasaImages.map((image, index) => {
                return (
                  <GalleryImage
                    data={image}
                    index={index}
                    inView={inView}
                    key={image.date}
                  ></GalleryImage>
                );
              })}
          </div>
        )}
      </InView> */}{' '}
      </div>
    </>
  );
};

export default Gallery;
