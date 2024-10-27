import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import CoachesPage from './Coaches';
import Academies from './Academies';
import Mercavi from './Mercavi';
import EventsMain from './EventsMain';
import PlayersPage from './Players';
import CourtsPage from './Court';
import Admin from './admin';


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coaches" element={<CoachesPage />} />
        <Route path="/Academies" element={<Academies />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/Mercavi" element={<Mercavi />} />
        <Route path="/Events" element={<EventsMain />} />
        <Route path="/Courts" element={<CourtsPage />} />
        <Route path="/Players" element={<PlayersPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
