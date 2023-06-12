import { useEffect, useState } from "react";
import { Slide } from "react-awesome-reveal";
import TrainingClassCard from "../../shared/trainingClass/TrainingClassCard";

const PopularClasses = () => {
    const [classes, setClasses] = useState([]);
    useEffect(() => {
        fetch('https://the-sports-lounge-server.vercel.app/classes')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.type === 'popular')
                setClasses(popularItems)
            })

    }, [])

    return (
        <section>
            <Slide>
            <div className="text-center my-10">
                <p className="text-xl font-semibold bg-black bg-opacity-20 rounded px-4 py-2 w-1/4 md:w-1/6 mx-auto text-black-700 my-4">From Our Class</p>
                <p className="text-4xl md:text-5xl font-bold text-black uppercase border-b-4 py-4 w-6/12 mx-auto">Popular Classes</p>
                <div className="max-w-3xl mx-auto"><p >Here is our popular traning courses.Students love to get trained with us.So, what are you waiting for? Hurry up!! Otherwisw you will miss the exciting training classes....</p></div>
            </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {

                        classes.map(item => <TrainingClassCard
                            key={item._id}
                            item={item}
                        ></TrainingClassCard>)

                    }
                </div>
            </Slide>

        </section>
    );
};

export default PopularClasses;