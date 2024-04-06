import { Link } from "react-router-dom";

export default function Nav() {
    return (

        <>
            <div>
                <nav className="navbar navbar-dark bg-dark my-6 my-lg-0">

                    <a className="navbar-brand" href="#">
                        <img src="./public/Preloader_2.gif" width="30" height="30" className="d-inline-block align-top"
                            alt="" />
                        MyEmployee.com
                    </a>
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0" style={{ display: 'flex',flexDirection:'row' }}>

                        <li className="nav-item">
                            <button className="btn btn-outline-success my-2 my-sm-0" id="show" hidden>CREATE NEW USER</button>
                        </li>
                    </ul>

                    <div style={{display:"flex",justifyContent:"space-between",gap:"80px",color:"white !important",padding: '14px 20px'}}>

                    <Link to ='/'>Home</Link> 
            <Link to ='/AboutUs'>AboutUs</Link> 
            <Link to ='EmpManager'>EmpManager</Link> 
                    </div>
                   
                </nav>
            </div>
        </>
    )
}