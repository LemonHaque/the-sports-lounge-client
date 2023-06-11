
import { useContext } from "react";
// import UseAuth from "./UseAuth";
// import UseAxiosSecure from "./UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../providers/AuthProvider";
import UseAxiosSecure from "./UseAxiosSecure";


const UseCart = () => {
    const [axiosSecure]= UseAxiosSecure()
    const { user, loading } = useContext(AuthContext);
    console.log(user);
    // const { loading } = useContext(AuthContext);

    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/carts?email=${user?.email}`)
            return res.data;
        },
    })
    console.log(cart);
    return [cart, refetch]

}
export default UseCart;