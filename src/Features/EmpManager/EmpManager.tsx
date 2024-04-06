import { Outlet,Link } from "react-router-dom";
import style from "./EmpManager.module.css";
export default function EmpManager() {
    return (
        <div>
            <div className={style.navbar}>
            <Link to ='/EmpManager'>ViewList</Link> 
            <Link to ='/EmpManager/EmpCreate'>Register Employee</Link>
        
             <nav className="navbar my-6 my-lg-0">
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2 search_name" type="search" placeholder="Search By Email ID" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0 search" type="submit" id="search">Search</button>
                    </form>
             </nav>
            </div> 
            <Outlet /> 
        </div>
    )
}