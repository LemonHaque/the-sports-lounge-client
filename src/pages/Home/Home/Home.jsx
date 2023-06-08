
import Banner from "../banner/Banner";
import Gallery from "../gallery/Gallery";
import PopularClasses from "../popularClasses/PopularClasses";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <PopularClasses></PopularClasses>
           <Gallery></Gallery>
        </div>
    );
};

export default Home;