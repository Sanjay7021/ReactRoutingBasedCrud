import { getStateName, getCityName } from "../../services/EventHandlers"
import { editItem, deleteItem } from "../../services/EventHandlers";


export default function ViewList({ temp, finalFormData, setData, setFlag, setfinalFormData, useNavigate }) {
    const navigate = useNavigate();
    return (
        <>
            <div>
                <h2 style={{ color: "blue", marginLeft: "750px" }}>Employee Master</h2>
                <table className="table table-striped w-75 p-3" align="center">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">DOB</th>
                            <th scope="col">Age</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Hobbies</th>
                            <th scope="col">State</th>
                            <th scope="col">City</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody className="body" id="tableResult">

                        {finalFormData.length == 0 ? <tr rowSpan='5'><h3>Data Not Found<img src="/Preloader_2.gif" width="34" height="40" className="d-inline-block align-top"
                            alt="" /></h3></tr> : finalFormData.sort((a: any, b: any) => a.name.localeCompare(b.name)).map((value: any, key: any) => (
                                <tr key={key}>
                                    <td>{value.name}</td>
                                    <td>{value.email}</td>
                                    <td>{value.date}</td>
                                    <td>{value.age}</td>
                                    <td>{value.gender}</td>
                                    <td>{value.hobbies.join(",")}</td>
                                    <td>{getStateName(value.state)}</td>
                                    <td>{getCityName(value.city)}</td>
                                    <td style={{ color: value.status === 'active' ? 'green' : 'red' }}>{value.status}</td>
                                    <td><button className="btn btn-primary edit1" id={key} onClick={(e) => editItem(e, key, setFlag, setData, finalFormData, navigate)}>EDIT</button> || <button className="btn btn-danger delete-" id={key} onClick={(e) => deleteItem(e, key, finalFormData, setfinalFormData)}>DELETE</button></td>
                                </tr>))}
                    </tbody>
                </table>
            </div>
        </>
    )
}