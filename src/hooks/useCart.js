import { useContext } from 'react';
import { useQuery } from 'react-query'
import { AuthContext } from '../Providers/AuthProviders';
import useAxiosSecure from './useAxiousSecure';

const useCart =() =>{
   
    const {user} = useContext(AuthContext);
    const token = localStorage.getItem('access-token');
    const [axiosSecure] = useAxiosSecure();

   
        const { refetch,data: cart =[]} = useQuery({
            // queryKey:['carts',user?.email],
            // queryFn: async () =>{
            //     const response = await (`http://localhost:4000/carts?email=${user?.email}`, 
            //    {headers: {
            //     authorization: `bearer ${token}`
            //    }})
            //     return response.json();
            // }

            queryKey:['carts',user?.email],
            queryFn: async () =>{
                const response = await axiosSecure(`/carts?email=${user?.email}`)
                  // console.log('res from axios', res)
                return response.data;
            }
        })
        return [cart, refetch];
}

export default useCart;
