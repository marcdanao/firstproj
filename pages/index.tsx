import styles from '@/styles/Home.module.css'
import CreateUser from '@/src/components/user/CreateUser'
import DisplayUser from '@/src/components/display/DisplayUser'
import DeleteUser from '@/src/components/delete/DeleteUser'
import { useEffect, useState } from 'react'
import { Inter } from '@next/font/google'
import UpdateUser from '@/src/components/update/UpdatedUser'


interface UserObj {
  idNumber: number;
  firstName:string;
  lastName: string;
  age: number;
  course: string;
  school: string;
}

export default function Home() {
  const [users, setUsers]= useState<UserObj[]>([]);
  const [updateUser, setUpdateUser] = useState<UserObj>();
  const [deleteUser, setDeleteUser] = useState<UserObj>();

  const createUserFunc = (user:UserObj) =>{
    setUsers((oldUsers) => [...oldUsers, user]);
    console.log("users", users);
  };

  const searchById = (id:any) =>{
    setUpdateUser(users.filter((user) => id == user.idNumber)[0]);
   }
   const searchByIdDelete = (id:any) =>{
    setDeleteUser(users.filter((user) => id === user.idNumber)[0]);
   }

   const handleChange = (event: any) =>{
    setUpdateUser((oldDataInput: any) =>({
      ...oldDataInput, 
      [event.target.any]: 
      event.target.any}));
};
    
  const updateCallback =(updatevalue:UserObj) => {
    setUsers(users.map((user) => {
	//make this conditional statement
        if (user.idNumber == updatevalue.idNumber) {
          user = updatevalue;
        }
        return user;
      })
    );
  }


  
  const deleteUserCallback = (deleteduser:UserObj) =>{
   setUsers(
      users.filter((user) => 
        user?.idNumber !==  deleteduser?.idNumber
      )
    );
    //console.log(res);
   }
    return <div className={styles.Margin}> 
      <div className={styles.PaddingTop}>
        <h1>Create</h1>
        <CreateUser callBack={createUserFunc}/>
        </div>
      <div className={styles.PaddingTop}>
        <h1>Read</h1>
        <DisplayUser users={users}/>
        </div>
      <div className={styles.PaddingTop}>
        <h1>Update</h1>
        <UpdateUser searchByIdCallback={searchById}
                      updateUser = {updateUser}
                      updateCallback = {updateCallback}/>
      </div>
      <div className={styles.PaddingTop}>
        <h1>Delete</h1>
        <DeleteUser deleteUserCallback={deleteUserCallback}
                    deleteUser={deleteUser} 
                    searchByIdCallback={searchByIdDelete}
                    />
        </div>
    </div>;
}


