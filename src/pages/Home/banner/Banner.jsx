
import {  Zoom } from 'react-awesome-reveal';
import bg1 from '../../../assets/bg1.jpg';
import bg2 from '../../../assets/bg2.jpg';
import bg3 from '../../../assets/bg3.jpg';
import bg4 from '../../../assets/bg4.jpg';

const Banner = () => {
    return (
        <div>
            <Zoom>
            <div className="carousel h-screen">
                <div id="slide1" className="carousel-item relative w-full">
                    <div
                        className="absolute inset-0 z-0"
                        style={{
                            backgroundImage: `url(${bg4})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    ></div>
                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-transparent to-black"></div>

                    <div className="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                        <h3 className="text-4xl font-bold mb-4">Turn Your Summer Booring to</h3>
                        <h2 className="font-bold text-7xl text-yellow-500">Exciting Sports</h2>
                        <div className='max-w-3xl mx-auto mt-4 mb-10'>
                            <p>Let's make your summer vacation enjoyable and exciting also learn sports with proper skill with us.All champions are made when nobody is watching. Don't say, “We can't do it,” just say, “We will do it anyway.” Those who make the most of small opportunities find greater ones. Nothing is impossible.</p>
                            
                        </div>
                        <button className='btn btn-warning'>Explore More ❯❯</button>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 z-20 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
               <div id="slide2" className="carousel-item relative w-full">
                    <div
                        className="absolute inset-0 z-0"
                        style={{
                            backgroundImage: `url(${bg2})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    ></div>
                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-transparent to-black"></div>

                    <div className="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                        <h3 className="text-4xl font-bold mb-4">Turn Your Summer Booring to</h3>
                        <h2 className="font-bold text-7xl text-yellow-500">Exciting Sports</h2>
                        <div className='max-w-3xl mx-auto mt-4 mb-10'>
                            <p>Let's make your summer vacation enjoyable and exciting also learn sports with proper skill with us.All champions are made when nobody is watching. Don't say, “We can't do it,” just say, “We will do it anyway.” Those who make the most of small opportunities find greater ones. Nothing is impossible.</p>
                        </div>
                        <button className='btn btn-warning'>Explore More  ❯❯</button>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 z-20 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <div
                        className="absolute inset-0 z-0"
                        style={{
                            backgroundImage: `url(${bg3})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    ></div>
                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-transparent to-black"></div>

                    <div className="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                        <h3 className="text-4xl font-bold mb-4">Turn Your Summer Booring to</h3>
                        <h2 className="font-bold text-7xl text-yellow-500">Exciting Sports</h2>
                        <div className='max-w-3xl mx-auto mt-4 mb-10'>
                            <p>Let's make your summer vacation enjoyable and exciting also learn sports with proper skill with us.All champions are made when nobody is watching. Don't say, “We can't do it,” just say, “We will do it anyway.” Those who make the most of small opportunities find greater ones. Nothing is impossible.</p>
                        </div>
                        <button className='btn btn-warning'>Explore More  ❯❯</button>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 z-20 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <div
                        className="absolute inset-0 z-0"
                        style={{
                            backgroundImage: `url(${bg1})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    ></div>
                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-transparent to-black"></div>

                    <div className="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                        <h3 className="text-4xl font-bold mb-4">Turn Your Summer Booring to</h3>
                        <h2 className="font-bold text-7xl text-yellow-500">Exciting Sports</h2>
                        <div className='max-w-3xl mx-auto mt-4 mb-10'>
                            <p>Let's make your summer vacation enjoyable and exciting also learn sports with proper skill with us.All champions are made when nobody is watching. Don't say, “We can't do it,” just say, “We will do it anyway.” Those who make the most of small opportunities find greater ones. Nothing is impossible.</p>
                        </div>
                        <button className='btn btn-warning'>Explore More  ❯❯</button>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 z-20 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={bg4} className="w-full" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                        <h1 className="text-4xl font-bold mb-4">Heading 4</h1>
                        <p className="text-lg">Description 4</p>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 z-20 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            </Zoom>
        </div>
    );
};

export default Banner;
