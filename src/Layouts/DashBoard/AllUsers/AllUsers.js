import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaTrashAlt, FaUserSecret } from 'react-icons/fa';
import { useQuery } from 'react-query';
import Swal from 'sweetalert2';

const AllUsers = () => {

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:4000/users')
        return res.json();
    })

    const handleMakeAdmin = user =>{
        fetch(`http://localhost:4000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an Admin Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }

   


    const handleDelete =(user) =>{

    }

    return (
        <div className='w-full'>
            <Helmet>
                <title>Baton|All Users</title>
            </Helmet>
            <h2 className='text-3xl text-semibold my-4'> Total Users :  {users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <td>#</td>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Role</td>
                            <td>Email</td>
                            
                            
                            
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((user, index) => <tr 
                            key={user._id} >
                                <th>{index  + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{ 
                              user.role ==='admin' ?  'admin' : <button onClick={() => handleMakeAdmin(user)}
                              className="btn btn-ghost bg-orange-500 btn-lg text-white"><FaUserSecret></FaUserSecret>
                              </button>}</td>
                                
                                <td> <button onClick={() => handleDelete(user)}
                                 className="btn btn-ghost bg-red-500 btn-lg text-white"><FaTrashAlt></FaTrashAlt>
                                 </button></td>
                            </tr>)
                        }

             

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;