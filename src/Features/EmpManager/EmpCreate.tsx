import React from "react";
import { userState } from "../../services/EventHandlers"
import {getData,handleState,handleRadio,handlerCity,handleReset} from "../../services/EventHandlers";
import { userType } from "../../type";

export default function EmpCreate({ formData, setData, city, setCity, tempCity, setError, errorData, setfinalFormData, finalFormData }:{formData: userType,setData: React.Dispatch<React.SetStateAction<userType>>}) {

    /* submit button functionality *createEmployee */
    const handlerSubmit = (e: any) => {
        e.preventDefault();
        const { id } = e.target;
        if (id == "update") {
            setError({});
        } else {
            if (Object.keys(formData).length == 0) {
                console.log("no data")
            } else {
                e.preventDefault();

                const newError: any = {};


               

                if (!formData.name.trim()) {
                    newError.username = "Name is required";
                    setError(newError);
                    return
                }
                if (!formData.email.trim()) {
                    newError.email = "Email is required"
                    setError(newError);
                    return

                }
                if (formData.age <= 20) {
                    newError.date = "Employee age must be 20+";

                    setError(newError);
                    return;
                }
                if (!formData.gender.trim()) {
                    newError.gender = "Gender is required"

                }
                if (!formData.state.trim()) {
                    newError.state = "State is required"

                }
                if (!formData.city.trim()) {
                    newError.city = "City is required"
                }
                if (!formData.status.trim()) {
                    newError.status = "Status is required"
                }
                if (formData.hobbies.toString().length == 0) {
                    newError.hobbies = "hobbies is required"
                }

                setError(newError);

                if (formData.city && formData.state && formData.gender && formData.status && formData.hobbies && formData.date) {
                    setfinalFormData([...finalFormData, formData]);
                }
                handleReset(setError,setCity,setData);


            }
        }
    }


    return (
        <>
            <div style={{ width: "100%", display: 'flex', justifyContent: 'center' }}>

                <form onSubmit={handlerSubmit}>
                    <h3 style={{ alignItems: "center" }}>CREATE NEW EMPLOYEE</h3>

                    <div className="form-group center">
                        <label >Name:</label>
                        <input type="text" className="form-control create_name" id="formGroupExampleInput" name='name' value={formData.name} onChange={(e) => getData(e,setData,formData)}
                            placeholder="Enter Name" />
                        {errorData.username && <span style={{ color: "red" }}>{errorData.username}</span>}
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input type="text" className="form-control create_email" id="formGroupExampleInput2" name='email' value={formData.email} onChange={(e) => getData(e,setData,formData)}
                            placeholder="Enter Email" />
                        {errorData.email && <span style={{ color: "red" }}>{errorData.email}</span>}
                    </div>
                    <div className="form-group center">
                        <label >Date of Birth:</label>
                        <input type="date" className="form-control create_name" id="formGroupExampleDate" name='date' value={formData.date} onChange={(e) => getData(e,setData,formData)} pattern="\d{4}-\d{2}-\d{2}" />
                        {errorData.date && <span style={{ color: "red" }}>{errorData.date}</span>}
                    </div>
                    <div className="form-group">
                        <label >Gender: </label>
                        <input type="radio" name="gender" value="male" checked={formData.gender == 'male' ? true : false} onChange={(e) => handleRadio(e,setData,formData)} /> Male&nbsp;
                        <input type="radio" name="gender" value="female" checked={formData.gender == 'female' ? true : false} onChange={(e) => handleRadio(e,setData,formData)} /> Female&nbsp;<br />
                        {errorData.gender && <span style={{ color: "red" }}>{errorData.gender}</span>}

                    </div>
                    <div className="form-group">
                        <label>Status: </label>
                        <input type="radio" name="status" id="" value="active" checked={formData.status == 'active' ? true : false} onChange={(e) => handleRadio(e,setData,formData)} /> Active&nbsp;
                        <input type="radio" name="status" id="" value="inactive" checked={formData.status == 'inactive' ? true : false} onChange={(e) => handleRadio(e,setData,formData)} /> Inactive&nbsp; <br />
                        {errorData.status && <span style={{ color: "red" }}>{errorData.status}</span>}

                    </div>
                    <div className="form-group">
                        <label >Hobbies:&nbsp;</label>
                        <label>
                            <input type="checkbox"
                                name="hobbies" id=""
                                value="painting"
                                checked={(formData.hobbies.includes('painting'))}

                                onChange={(e) => getData(e,setData,formData)} />
                            &nbsp;Painting
                        </label>&nbsp;

                        <label>
                            <input type="checkbox"
                                name="hobbies" id=""
                                checked={formData.hobbies.includes('sketching')}
                                value="sketching"
                                onChange={(e) => getData(e,setData,formData)} />
                            &nbsp;sketching
                        </label>&nbsp;

                        <label>
                            <input type="checkbox"
                                name="hobbies" id=""
                                checked={formData.hobbies.includes('whistling')}
                                value="whistling"
                                onChange={(e) => getData(e,setData,formData)} />
                            &nbsp;Whistling
                        </label>&nbsp;
                        {errorData.hobbies && <span style={{ color: "red" }}>{errorData.hobbies}</span>}

                    </div>
                    <ul className="navbar-nav my-2 my-lg-0" style={{ marginRight: '10px', paddingTop: "8px" }}>
                        <select name="state" id="dropdown" value={formData.state} className="form-control mr-sm-2" onChange={(e) => handleState(e,setData,tempCity,setCity,formData)}>
                            <option >Select State</option>
                            {userState.map((item) => <option value={item.id}>{item.name}</option>)}
                        </select>
                        {errorData.state && <span style={{ color: "red" }}>{errorData.state}</span>}

                    </ul>
                    <ul className="navbar-nav my-2 my-lg-0" style={{ marginRight: '10px', paddingTop: "8px" }}>
                        <select name="city" id="dropdown" className="form-control mr-sm-2" value={formData.city} onChange={(e) => handlerCity(e,setData,formData)}>
                            <option value="select">Select City</option>
                            {city.map((item: any) => <option value={item.id}>{item.name}</option>)}
                        </select>
                        {errorData.city && <span style={{ color: "red" }}>{errorData.city}</span>}

                    </ul>

                    <button type="reset" className="btn btn-warning" style={{ float: "right", margin: "10px" }} id="create_remove" onClick={()=>handleReset(setError,setCity,setData)}>RESET</button>
                    <button type="submit" className="btn btn-success" style={{ float: "right", margin: "10px" }} id="create" >CREATE</button>
                </form>
            </div>
            <br /><br /><br />
        </>

    )
}