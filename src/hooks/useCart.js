import { useContext } from 'react';
import { useQuery } from 'react-query'
import { AuthContext } from '../Providers/AuthProviders';

const useCart =() =>{
   
    const {user} = useContext(AuthContext);

   
        const { refetch,data: cart =[]} = useQuery({
            queryKey:['carts',user?.email],
            queryFn: async () =>{
                const response = await fetch(`http://localhost:4000/carts?email=${user?.email}`)
                return response.json();
            }
        })
        return [cart, refetch];
}

export default useCart;
