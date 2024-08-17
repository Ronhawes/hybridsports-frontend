import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import CoachesPage from './Coaches';
import Academies from './Academies';
import Mercavi from './Mercavi';
import EventsMain from './EventsMain';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coaches" element={<CoachesPage />} />
        <Route path="/Academies" element={<Academies />} />
        <Route path="/Mercavi" element={<Mercavi />} />
        <Route path="/Events" element={<EventsMain />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
