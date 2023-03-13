import React,{useState} from "react";

function DeleteUser({deleteUserCallback, searchByIdCallback, deleteUser}:any) {
    const handleDelete = () => {
        deleteUserCallback(deleteUser);
    };

    const searchById = (event:any) => {
    searchByIdCallback(event.target.value);
    }
    return(
        <div>
            <form onSubmit={handleDelete}>
            <div>
            ID Number:
            <input type="number" name="idNumber" onChange={searchById} placeholder="Fill up the ID Number"/>
            </div>
            <div>
            First Name:
            <input type="string" name="firstName"  defaultValue={deleteUser?.firstName} placeholder="First Name"/>
            </div>
            <div>
            Last Name:
            <input type="string" name="lastName"  defaultValue={deleteUser?.lastName} placeholder="Last Name"/>
            </div>
            <div>
            Age:
            <input type="number" name="age" defaultValue={deleteUser?.age} placeholder="Age"/>
            </div>
            <div>
            Couse:
            <input type="string" name="course" defaultValue={deleteUser?.course} placeholder="Course"/>
            </div>
            <div>
            School:
            <input type="string" name="school" defaultValue={deleteUser?.school} placeholder="School Name"/>
            </div>
            <button type="button" onClick={handleDelete}>Delete User</button>
            </form>
        </div>
    )
}

export default DeleteUser