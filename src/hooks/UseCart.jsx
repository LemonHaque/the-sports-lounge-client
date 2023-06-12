import { useQuery } from "@tanstack/react-query";
import UseAuth from "./UseAuth";
import UseAxiosSecure from "./UseAxiosSecure";

const UseCart = () => {
   const { user, loading } = UseAuth();
   const [axiosSecure] = UseAxiosSecure();
   const { refetch, data: cart = [] } = useQuery({
      queryKey: ['carts', user?.email],
      enabled: !loading,
      queryFn: async () => {
         const res = await axiosSecure(`/carts?email=${user?.email}`)
         // console.log('res from axios', res)
         return res.data;
      },
   })

   return [cart, refetch]

}
export default UseCart;