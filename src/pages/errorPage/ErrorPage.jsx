
import { Link, useRouteError } from 'react-router-dom'
import img from "../../assets/error.png"
const ErrorPage = () => {
    const { error } = useRouteError()
    return (
        <section>

            <div className='h-1/2 w-1/2 mx-auto my-4'>
                <p className='text-4xl font-bold text-center text-blue-600'>Page Not Found !!!</p>
                <img className='md:w-3/4 mx-auto' src={img} alt="" />
                <Link to='/' className='btn w-full btn-primary font-semibold my-4'>
                    Back to Home
                </Link>
                <p className='mt-4 text-2xl md:text-4xl text-red-800'>
                {error?.message}
            </p>
            </div>
            



        </section>
    )
}

export default ErrorPage