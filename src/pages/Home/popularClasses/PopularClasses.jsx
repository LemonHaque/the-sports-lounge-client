import { useEffect, useState } from "react";
import TrainingClass from "../../shared/trainingClass/TrainingClass";
import { Slide } from "react-awesome-reveal";

const PopularClasses = () => {
    const [classes, setClasses] = useState([]);
    useEffect(() => {
        fetch('classes.json')
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
                    <p className="text-xl font-semibold bg-blue-100 rounded px-4 py-3 w-1/6 md:w-[150px] mx-auto text-blue-700 my-4">From Our Class</p>
                    <p className="text-4xl md:text-5xl font-bold text-blue-700 uppercase border-y-4 py-4 w-4/12 mx-auto">Popular Classes</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-10">
                    {

                        classes.map(item => <TrainingClass
                            key={item._id}
                            item={item}
                        ></TrainingClass>)

                    }
                </div>
            </Slide>

        </section>
    );
};

export default PopularClasses;