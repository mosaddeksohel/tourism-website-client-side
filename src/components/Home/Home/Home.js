import React from 'react';
import Explore from '../../../Page/Explore/Explore';
import Aboutus from '../../Aboutus/Aboutus';
import Carusel from '../Carusel/Carusel';
import Guide from '../Guide/Guide';
import Footer from '../Shared/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Carusel></Carusel>
            <Explore />
            <Guide />
            <Aboutus />
            <Footer></Footer>
        </div>
    );
};

export default Home;