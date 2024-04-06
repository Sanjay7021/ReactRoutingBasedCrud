import style1 from "./Home.module.css"

export default function Home() {
    return (
        <div className={style1.header}>
            <img src="./mng.jpeg" alt="" />
            <h1>Welcome to EmpManager</h1>
        </div>
    )
}