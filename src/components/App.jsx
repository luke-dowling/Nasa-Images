import '../scss/app.scss';
import Nav from './Nav';
import HomeBanner from './HomeBanner';
import Gallery from './Gallery';
import { useContext } from 'react';
import { NasaContext } from '../context/nasaContext';

const App = () => {
  const { nasaHeroBanner } = useContext(NasaContext);

  console.log('nasa hero banner ->', nasaHeroBanner);
  return (
    <div className="app">
      <Nav />
      <HomeBanner></HomeBanner>
      <Gallery></Gallery>
    </div>
  );
};

export default App;
