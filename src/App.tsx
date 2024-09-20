import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideBar from "./components/sidebar";
import "./index.css";
import MotorComponent from "./components/pages/motor";
import CaravanComponent from "./components/pages/caravan";
import TuningComponent from "./components/pages/tuning";
import UsedCarComponent from "./components/pages/usedCar";
import CampingComponent from "./components/pages/camping";
import CarouselComponent from "./components/pages/carousel";
import UsersListComponent from "./components/pages/usersList";
import ScrollToTop from "./components/scrollToTop";
import { campcar } from "./components/mockdata/motor";
import { campcarCaravan } from "./components/mockdata/mockdatacaravan";
import { campcarTuning } from "./components/mockdata/mockdatatuning";
import { campcarUsedCar } from "./components/mockdata/mockdatausedcar";
import { campcarCampingPlace } from "./components/mockdata/mockdatacamping";

function App() {
  return (
    <BrowserRouter>
      <SideBar />
      <ScrollToTop />
      <Routes>
        <Route
          path="/motor"
          element={<MotorComponent maindata={campcar.maindata} />}
        />
        <Route
          path="/caravan"
          element={<CaravanComponent maindata={campcarCaravan.maindata} />}
        />
        <Route
          path="/tuning"
          element={<TuningComponent maindata={campcarTuning.maindata} />}
        />
        <Route
          path="/usedCar"
          element={<UsedCarComponent maindata={campcarUsedCar.maindata} />}
        />
        <Route path="/camping" element={<CampingComponent maindata={campcarCampingPlace.maindata} />} />
        <Route path="/carousel" element={<CarouselComponent />} />
        <Route path="/usersList" element={<UsersListComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
