import img1 from '../../../assets/gallery/1.jpg'
import img2 from '../../../assets/gallery/2.jpg'
import img3 from '../../../assets/gallery/3.jpg'
import img4 from '../../../assets/gallery/4.jpg'
import img5 from '../../../assets/gallery/5.jpg'


const Gallery = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="text-center my-10">
                <p className="text-xl font-semibold bg-blue-100 rounded px-4 py-3 w-1/6 md:w-[150px] mx-auto text-blue-700 my-4">Join With Us</p>
                <p className="text-4xl md:text-6xl font-bold text-blue-700">Our Gallery</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-8">
                <div><img className='h-72' src={img1} alt="" /></div>
                <div><img className='h-72' src={img2} alt="" /></div>
                <div><img className='h-72' src={img3} alt="" /></div>
            </div>
            <div className="md:flex w-full px-8 my-4 gap-4">
                <div><img src={img4} alt="" /></div>
                <div><img src={img5} alt="" /><button className='btn btn-outline btn-warning my-2 '>See More </button></div>
            </div>
        </div>
    );
};

export default Gallery;