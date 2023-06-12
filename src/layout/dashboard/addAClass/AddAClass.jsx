import { useForm } from 'react-hook-form';
import UseAxiosSecure from '../../../hooks/UseAxiosSecure';
import Swal from 'sweetalert2';


const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const AddAClass = () => {
    const [axiosSecure] = UseAxiosSecure();
    const { register, handleSubmit, reset } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.image[0])
        formData.append('profilePic', data.profilePic[0])
        // console.log(data);
        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    const { name, price, sports, type, email, instructorName,availableSeats,numberOfStudents } = data;
                    const newItem = { name, price: parseFloat(price), sports, type, email, instructorName, availableSeats: parseFloat(availableSeats),numberOfStudents:parseFloat(numberOfStudents), image: imgURL,profilePic: imgURL,  }
                    console.log(newItem)
                    axiosSecure.post('/classes', newItem)
                        .then(data => {
                            console.log('after posting new menu item', data.data)
                            if (data.data.insertedId) {
                                reset();
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Class added successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })
                }
            })
    };
    // console.log(errors);


    return (
        <div className='bg-black glass bg-opacity-20 px-20'>
            <div className="text-center mb-5">
                <p className="text-4xl md:text-5xl font-bold text-black uppercase border-b-4 py-4 w-4/12 mx-auto">Add A New Class</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex gap-4'>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text font-semibold">Class Name</span>
                            </label>
                            <input type="text" placeholder="Class Name"
                                {...register("name", { required: true, maxLength: 120 })}
                                className="input input-bordered w-full " />
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text font-semibold">Sports Name</span>
                            </label>
                            <input type="text" placeholder="Sports Name"
                                {...register("sports", { required: true, maxLength: 120 })}
                                className="input input-bordered w-full " />
                        </div>
                    </div>
                    <div className="flex">
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Type</span>
                            </label>
                            <select defaultValue="Pick One" {...register("type", { required: true })} className="select select-bordered">
                                <option disabled>Pick One</option>
                                <option>regular</option>
                                <option>popular</option>
                            </select>
                        </div>

                        <div className="form-control w-full ml-4">
                            <label className="label">
                                <span className="label-text font-semibold">Price*</span>
                            </label>
                            <input type="number" {...register("price", { required: true })} placeholder="Type here" className="input input-bordered w-full " />
                        </div>
                    </div>
                    <div className='flex gap-4'>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text font-semibold">Email</span>
                            </label>
                            <input type="text" placeholder="example@email.com"
                                {...register("email", { required: true, maxLength: 120 })}
                                className="input input-bordered w-full " />
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text font-semibold">Instructor Name</span>
                            </label>
                            <input type="text" placeholder="Instructor Name"
                                {...register("instructorName", { required: true, maxLength: 120 })}
                                className="input input-bordered w-full " />
                        </div>
                    </div>
                    <div className='flex gap-4'>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text font-semibold">Availale Seats</span>
                            </label>
                            <input type="number" placeholder="Type here"
                                {...register("availableSeats", { required: true, maxLength: 120 })}
                                className="input input-bordered w-full " />
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text font-semibold">Number Of Students</span>
                            </label>
                            <input type="number" placeholder="Type here"
                                {...register("numberOfStudents", { required: true, maxLength: 120 })}
                                className="input input-bordered w-full " />
                        </div>
                    </div>
                    <div className='flex gap-4'>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Image*</span>
                            </label>
                            <input type="file" {...register("image", { required: true })} className="file-input file-input-warning file-input-bordered w-full " />
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Profile Picture</span>
                            </label>
                            <input type="file" {...register("profilePic", { required: true })} className="file-input file-input-warning file-input-bordered w-full " />
                        </div>
                    </div>
                    <input className="btn btn-warning mt-6 w-2/5" type="submit" value="Add Item" />
                </form>
            </div>
        </div>
    );
};

export default AddAClass;