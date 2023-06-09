import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";


const PopularInstructor = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetch('classes.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.type === 'popular')
                setClasses(popularItems)
            })
    }, []);

    return (
        <div>
            <Fade duration={3000}>
                <div className="text-center my-10">
                    <p className="text-xl font-semibold bg-black bg-opacity-20 rounded px-4 py-2 w-1/4 md:w-1/6 mx-auto text-black-700 my-4">From Our Class</p>
                    <p className="text-4xl md:text-5xl font-bold text-black uppercase border-y-4 py-4 w-6/12 mx-auto">Popular Instructors</p>
                    <div className="max-w-3xl mx-auto"><p >Here is our popular traning courses.Students love to get trained with us.So, what are you waiting for? Hurry up!! Otherwisw you will miss the exciting training classes....</p></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {
                        classes.map(item => <div key={item._id}>

                            <div className="card w-96 shadow image-full">
                                <img className="rounded" src={item.image} alt="" />
                                <div className="card-body">
                                    <h2 className="card-title text-white">Instructor: {item.instructorName}</h2>
                                    <h2 className="text-white  card-title ">Course: {item.name}</h2>
                                    <p className="text-white ">If a dog chews shoes whose shoes does he choose?</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-warning">Enroll Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </Fade>
        </div>
    );
};

export default PopularInstructor;