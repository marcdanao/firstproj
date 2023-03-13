import React from 'react'
import styles from '@/styles/Home.module.css'

interface UserObj {
  idNumber: number;
  firstName:string;
  lastName: string;
  age: number;
  course: string;
  school: string;
  }
  
  interface DisplayUser {
    users: UserObj[];
  }
  
  const DisplayUser = ({ users }: DisplayUser) => {
  
    return(
      <div>
        {
            users.map((user:UserObj)=>{
                return(
                    <div>
                      <table className='table'>
                        <thead>
                          <tr>
                            <th>ID Number</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                            <th>Course</th>
                            <th>School</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>{user?.idNumber}</td>
                            <td>{user?.firstName}</td>
                            <td>{user?.lastName}</td>
                            <td>{user?.age}</td>
                            <td>{user?.course}</td>
                            <td>{user?.school}</td>
                          </tr>
                        </tbody>
                        </table>
                    </div>
                )
            })
        }
      </div>
    );
  };

export default DisplayUser
