import { useContext } from 'react';
import { useQuery } from 'react-query'
import { AuthContext } from '../Providers/AuthProviders';

const useCart =() =>{
   
    const {user} = useContext(AuthContext);

   
        const { isLoading,data: cart =[]} = useQuery({
            queryKey:['carts',user?.email],
            queryFn: async () =>{
                const response = await fetch(`http://localhost:4000/carts?email=${user?.email}`)
                return response.json();
            }
        })
        return [cart, isLoading];
}

export default useCart;
