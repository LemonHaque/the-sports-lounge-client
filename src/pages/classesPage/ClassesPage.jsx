import { useEffect, useState } from "react";
import TrainingClassCard from "../shared/trainingClass/TrainingClassCard";

const ClassesPage = () => {


    const [classes, setClasses] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => {
                setClasses(data)
            })

    }, [])


    return (
        <section className="py-20">

            <div className="text-center py-10">
                <p className="text-xl font-semibold bg-black bg-opacity-20 rounded px-4 py-2 w-1/4 md:w-1/6 mx-auto text-black-700 my-4">All of Our</p>
                <p className="text-4xl md:text-5xl font-bold text-black uppercase border-y-4 py-4 w-6/12 mx-auto">Provide Classes</p>
                <div className="max-w-3xl mx-auto"><p >Here is our all traning courses that we provide.Students love to get trained with us.So, what are you waiting for? Hurry up!! Otherwisw you will miss the exciting training classes....</p></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-10">
                {

                    classes.map(item => <TrainingClassCard
                        key={item._id}
                        item={item}
                    ></TrainingClassCard>)

                }
            </div>


        </section>
    );
};

export default ClassesPage;