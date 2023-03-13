import React, { useState } from 'react'
interface CreateUserProps{
    callBack: (user:UserObj)=> void;
}
interface UserObj {
    idNumber: number;
    firstName:string;
    lastName: string;
    age: number;
    course: string;
    school: string;
}

function CreateUser({callBack}: CreateUserProps) {
    const [user, setUser] = useState();
    
    const handleSubmit = (event:any)=>{
        if(user){
            callBack(user);
        }
    };
    const handleChange = (event: any) =>{
        setUser((oldDataInput: any) => ({...oldDataInput, [event.target.name]: event.target.value,}));
    };
  return (
    <div>
        <form onSubmit={handleSubmit} >

        <div>
            ID Number:
            <input type="number" name="idNumber" onChange={handleChange} placeholder="Fill up the ID Number"/>
        </div>
        <div>
            First Name:
            <input type="string" name="firstName" onChange={handleChange} placeholder="Fill up the First Name"/>
        </div>
        <div>
            Last Name:
            <input type="string" name="lastName" onChange={handleChange} placeholder="Fill up the ID Last Name"/>
        </div>
        <div>
            Age:
            <input type="number" name="age" onChange={handleChange}placeholder="Fill up the Age"/>
        </div>
        <div>
            Couse:
            <input type="string" name="course" onChange={handleChange} placeholder="Fill up the Course"/>
        </div>
        <div>
            School:
            <input type="string" name="school" onChange={handleChange} placeholder="Fill up the School Name"/>
        </div>
            <button type="button" onClick={handleSubmit}>Create User</button>
            </form>
    </div>
  )
}

export default CreateUser