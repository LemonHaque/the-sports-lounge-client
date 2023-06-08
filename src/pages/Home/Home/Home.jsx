
import { Helmet } from "react-helmet-async";
import Banner from "../banner/Banner";
import Gallery from "../gallery/Gallery";
import PopularClasses from "../popularClasses/PopularClasses";
import PopularInstructor from "../popularInstructors/PopularInstructor";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Sports Lounge | Home</title>
            </Helmet>
           <Banner></Banner>
           <PopularClasses></PopularClasses>
           <PopularInstructor></PopularInstructor>
           <Gallery></Gallery>
        </div>
    );
};

export default Home;