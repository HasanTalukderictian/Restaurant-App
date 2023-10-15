import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { Helmet } from 'react-helmet-async';
import { useQuery } from 'react-query';
import useAxiosSecure from '../../../hooks/useAxiousSecure';

const AdminHome = () => {

    const {user} = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const {data: stats = {}} = useQuery({
        queryKey:['admin-stats'],
        queryFn: async() =>{
            const res = await  axiosSecure('/admin-stats');
            return res.data;
        }
    });

    return (
        <div className='w-full m-4'>
            <Helmet>
                <title>Baton|Admin Home</title>
            </Helmet>
            <h2 className='text=4xl'>Welcome Back {user.displayName}</h2>
        </div>
    );
};

export default AdminHome;