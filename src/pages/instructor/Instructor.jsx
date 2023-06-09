import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const Instructor = () => {
    const [instructor, setInstructor] = useState([]);

    useEffect(() => {
        fetch('classes.json')
            .then(res => res.json())
            .then(data => {
                setInstructor(data)
                console.log(data);
            })
    }, []);
    return (
        <div className="py-20 mx-20">
            <Helmet>
                <title>Sports Lounge | Instructor</title>
            </Helmet>
            <div className="text-center my-10">
                <p className="text-xl font-semibold bg-black bg-opacity-20 rounded px-4 py-2 w-1/5 md:w-1/5 mx-auto text-black-700 my-4">All of Our</p>
                <p className="text-4xl md:text-5xl font-bold text-black uppercase border-y-4 py-4 w-4/12 mx-auto">Instructors</p>
            </div>
            <div className="grid gap-8">
                {
                    instructor.map(single => <div key={single._id}>

                        <div className="card card-side  shadow-xl glass bg-black bg-opacity-80 text-white">
                            <figure><img className="h-96" src={single.profilePic} alt="Instructor" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Instructor Name: {single.instructorName}</h2>
                                <h2 className="">Offered Course: {single.name}</h2>
                                <p>Email: {single.email}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-warning">Enroll Now</button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>

        </div>
    );
};

export default Instructor;