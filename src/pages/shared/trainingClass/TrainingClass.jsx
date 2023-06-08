
const TrainingClass = ({ item }) => {
    const { image,  name, numberOfStudents } = item;
    return (
        <div>
             
            <div className=" w-96 h-[450px] glass text-center border-40 bg-black text-white">
                <figure><img src={image} alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="text-xl font-semibold">{name}</h2>
                    <p className="text-lg">Number of Attendence: {numberOfStudents}</p>
                    <p className="absolute top-2 right-2 btn btn-sm btn-warning">Trending</p>
                    <div className="card-actions justify-end mx-auto">
                        
                        <button className="btn btn-warning btn-outline">Get Admited!</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrainingClass;