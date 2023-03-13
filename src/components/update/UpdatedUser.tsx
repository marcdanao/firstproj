import React, {useState} from 'react'
interface UpdateUserProps{
    searchByIdCallback: (id:any)=>void
    updateUser:any
    updateCallback: (event:any)=>void
}

function UpdatedUser({searchByIdCallback, updateUser, updateCallback}:UpdateUserProps){
    const [updatedUser, setUpdatedUser] = useState();
       const handleUpdate = (event:any)=>{
        if(updateUser){
            updateCallback(updatedUser);
        } return event;
        };
        const handleChange = (event: any) =>{
            console.log({updatedUser})
            setUpdatedUser(() => ({
                ...updateUser,
                [event.target.name]: event.target.value,
              }));            
        };
        const searchById = (event: any) =>{
            searchByIdCallback(event.target.value)
        };
        
            
    return (
      <div>
        <form onSubmit={handleUpdate}>
          <div>
              ID Number:
              <input type="number" name="idNumber" onChange={searchById} placeholder="Your ID Number"/>
          </div>
          <div>
              First Name:
              <input type="string" name="firstName" onChange={handleChange} defaultValue={updateUser?.firstName} placeholder="First Name"/>
          </div>
          <div>
              Last Name:
              <input type="string" name="lastName" onChange={handleChange} defaultValue={updateUser?.lastName} placeholder="Last Name"/>
          </div>
          <div>
              Age:
              <input type="number" name="age" onChange={handleChange} defaultValue={updateUser?.age}placeholder="Age"/>
          </div>
          <div>
              Couse:
              <input type="string" name="course" onChange={handleChange}defaultValue={updateUser?.course}placeholder="Course"/>
          </div>
          <div>
              School:
              <input type="string" name="school" onChange={handleChange}defaultValue={updateUser?.school} placeholder="School Name"/>
          </div>
              <button type="button" onClick={handleUpdate}>Update User</button>
              </form>
      </div>
    )  
    }

export default UpdatedUser