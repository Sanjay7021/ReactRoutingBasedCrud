import { useState } from "react";
import { userState } from "../../services/EventHandlers"
import { getData, handleState, handleRadio, handlerCity, userCity } from "../../services/EventHandlers";
import { useNavigate, useParams } from "react-router-dom";



export default function EmpUpdate({ formData, setData, city, setCity, tempCity, setError, errorData, setfinalFormData, finalFormData, setFlag }) {
    const navigate = useNavigate();
    const params = useParams();
    // console.log("Params Values:",parseInt(params.id));
    const paramsid:number = parseInt(params.id);
    /* Handling Update button functionality of user. *storing updated data into useState for rerandering of the html*/
    const [updatedData, setUpdate]: any = useState([])
    const updateItem = (e: any) => {
        e.preventDefault();
        setData(formData);
        setUpdate([formData]);

        const newError: any = {};


        if (formData.age <= 20) {
            newError.date = "Employee age must be 20+";
            setError(newError);
            return

        }

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
        // var find = finalFormData.findIndex((item: any, key: any) => item.email == formData.email)
        // console.log("find", find);
        // finalFormData.splice(find, 1);
        // setfinalFormData([...finalFormData, formData])
        if (formData.city && formData.state && formData.gender && formData.status && formData.hobbies && formData.date) {
            setfinalFormData(finalFormData.map((item: any, key: any) => {
                if (key == paramsid) {
                    return formData;
                } else {
                    return item;
                }
            }))
            setFlag(0);
        }

        setError({});
        setCity([]);
        setData({
            name: "",
            email: "",
            date: new Date,
            age: 0,
            gender: "",
            status: "",
            state: "",
            city: "",
            hobbies: []
        })

        navigate("/EmpManager");
    }
    return (
        <>
            <div style={{ width: "100%", display: 'flex', justifyContent: 'center' }}>

                <form>
                    <h3 style={{ alignItems: "center" }}>UPDATE EMPLOYEE</h3>

                    <div className="form-group center">
                        <label >Name:</label>
                        <input type="text" className="form-control create_name" id="formGroupExampleInput" name='name' value={formData.name} onChange={(e) => getData(e, setData, formData)}
                            placeholder="Enter Name" />
                        {errorData.username && <span style={{ color: "red" }}>{errorData.username}</span>}
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input type="text" className="form-control create_email" id="formGroupExampleInput2" name='email' value={formData.email} onChange={(e) => getData(e, setData, formData)}
                            placeholder="Enter Email" />
                        {errorData.email && <span style={{ color: "red" }}>{errorData.email}</span>}
                    </div>
                    <div className="form-group center">
                        <label >Date of Birth:</label>
                        <input type="date" className="form-control create_name" id="formGroupExampleDate" name='date' value={formData.date} onChange={(e) => getData(e, setData, formData)} pattern="\d{4}-\d{2}-\d{2}" />
                        {errorData.date && <span style={{ color: "red" }}>{errorData.date}</span>}
                    </div>
                    <div className="form-group">
                        <label >Gender: </label>
                        <input type="radio" name="gender" value="male" checked={formData.gender == 'male' ? true : false} onChange={(e) => handleRadio(e, setData, formData)} /> Male&nbsp;
                        <input type="radio" name="gender" value="female" checked={formData.gender == 'female' ? true : false} onChange={(e) => handleRadio(e, setData, formData)} /> Female&nbsp;<br />
                        {errorData.gender && <span style={{ color: "red" }}>{errorData.gender}</span>}

                    </div>
                    <div className="form-group">
                        <label>Status: </label>
                        <input type="radio" name="status" id="" value="active" checked={formData.status == 'active' ? true : false} onChange={(e) => handleRadio(e, setData, formData)} /> Active&nbsp;
                        <input type="radio" name="status" id="" value="inactive" checked={formData.status == 'inactive' ? true : false} onChange={(e) => handleRadio(e, setData, formData)} /> Inactive&nbsp; <br />
                        {errorData.status && <span style={{ color: "red" }}>{errorData.status}</span>}

                    </div>
                    <div className="form-group">
                        <label >Hobbies:&nbsp;</label>
                        <label>
                            <input type="checkbox"
                                name="hobbies" id=""
                                value="painting"
                                checked={(formData.hobbies.includes('painting'))}

                                onChange={(e) => getData(e, setData, formData)} />
                            &nbsp;Painting
                        </label>&nbsp;

                        <label>
                            <input type="checkbox"
                                name="hobbies" id=""
                                checked={formData.hobbies.includes('sketching')}
                                value="sketching"
                                onChange={(e) => getData(e, setData, formData)} />
                            &nbsp;sketching
                        </label>&nbsp;

                        <label>
                            <input type="checkbox"
                                name="hobbies" id=""
                                checked={formData.hobbies.includes('whistling')}
                                value="whistling"
                                onChange={(e) => getData(e, setData, formData)} />
                            &nbsp;Whistling
                        </label>&nbsp;
                        {errorData.hobbies && <span style={{ color: "red" }}>{errorData.hobbies}</span>}

                    </div>
                    <ul className="navbar-nav my-2 my-lg-0" style={{ marginRight: '10px', paddingTop: "8px" }}>
                        <select name="state" id="dropdown" value={formData.state} className="form-control mr-sm-2" onChange={(e) => handleState(e, setData, tempCity, setCity, formData)}>
                            <option >Select State</option>
                            {userState.map((item) => <option value={item.id}>{item.name}</option>)}
                        </select>
                        {errorData.state && <span style={{ color: "red" }}>{errorData.state}</span>}

                    </ul>
                    <ul className="navbar-nav my-2 my-lg-0" style={{ marginRight: '10px', paddingTop: "8px" }}>
                        <select name="city" id="dropdown" className="form-control mr-sm-2" value={formData.city} onChange={(e) => handlerCity(e, setData, formData)}>
                            {userCity.map((item) => {
                                if(item.parentId == formData.state){
                                    return <option value={item.id}>{item.name}</option>
                                }else{
                                    return 
                                }
                            })}
                            {/* {city.map((item: any) => <option value={item.id}>{item.name}</option>)} */}
                        </select>
                        {errorData.city && <span style={{ color: "red" }}>{errorData.city}</span>}

                    </ul>

                    <button className="btn btn-warning" style={{ float: "right", margin: "10px" }} id="update" onClick={updateItem}>Save Changes</button>

                </form>
            </div>
            <br /><br /><br />
        </>

    )

}
