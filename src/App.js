import { BrowserRouter, Route, Routes, } from 'react-router-dom'
import CarShop from './CarShop/CarShop';
import PageNotFound from './CarShop/Component/PageNotFound/PageNotFound';
import MoreItem from './CarShop/Component/MOREITEM/MoreItem';
import Form from './CarShop/Component/FORM/Form';
import ManHinh from './CarShop/PAGE/ManHinh/ManHinhPage'
import Header from './CarShop/Header/Header';
import Carousel from './CarShop/Component/CAROUSEL/Carousel';
import Footer from './CarShop/Footer/Footer';
import HeaderFixed from './CarShop/Component/HEADERFIXED/HeaderFixed';
import GioiThieu from './CarShop/PAGE/GioiThieu/GioiThieu';
import CameraPage from './CarShop/PAGE/Camera/CameraPage';
import Den from './CarShop/PAGE/Den/Den';
import Table from './CarShop/PAGE/TABLE/Table';
import Register from './CarShop/Component/REGISTER/Register';
import { ToastContainer } from 'react-toastify';
import PhuKienPage from './CarShop/PAGE/PhuKien/PhuKien';
import Icon from './CarShop/Component/ICON/icon';





function App() {
  return (
    <BrowserRouter>
      <HeaderFixed />
      <Routes>
        <Route path='' Component={CarShop} />
        <Route path='/home' Component={CarShop} />
        <Route path='/table' Component={Table} />
        <Route path='/detail/:id' Component={MoreItem} />
        <Route path='/register' Component={Register} />
        <Route path='/form' Component={Form} />
        <Route exact path='*' Component={PageNotFound} />
        <Route exact path='/phutung' Component={() => {
          return <div>

            <Header />
            <Carousel />
            <ManHinh />
            <Footer />
            <Icon />
          </div>
        }} />
        <Route exact path='/phukien' Component={() => {
          return <div>

            <Header />
            <Carousel />
            <PhuKienPage />
            <Footer />
            <Icon />
          </div>
        }} />
        <Route exact path='/locnhot' Component={() => {
          return <div>

            <Header />
            <Carousel />
            <CameraPage />
            <Footer />
            <Icon />
          </div>
        }} />
        <Route exact path='/detailing' Component={() => {
          return <div>
            <Header />
            <Carousel />
            <Den />
            <Footer />
            <Icon />
          </div>
        }} />
        {/* <Route exact path='/gioithieu' Component={() => {
          return <div>

            <Header />
            <GioiThieu />
            <Footer />
          </div>
        }} /> */}

      </Routes>
      <ToastContainer />
    </BrowserRouter >
  );
}

export default App;
