import { useNavigate, useRouteError } from "react-router-dom";
import style  from "./Error.module.css"
export default function Error() {
    const error:any = useRouteError();
    console.log(error);
    const navigate = useNavigate();
    const navigateHandler = () => {
        navigate(-1);
    }
    // console.log(navigate);
    return (
        <>
            <div className={style.tsparticles}></div>
            <div style={{display: 'inline-flex'}}>
                <div className={style.images}>
                    <img className={style.cup} src="/Error_images/cup.svg" />
                    <img className={style.cat} src="/Error_images/cat.svg" />
                </div>
                <div className={style.para}>
                    <header>
                        <h2>{error.status}.</h2>
                        <h3>{error.data}.</h3>
                        {/* <h6>{error.data}</h6> */}
                    </header>

                    <p>
                        Don't worry, sometimes even we make mistakes. You can find plenty of
                        other things on our homepage.
                    </p>

                    <button className={style.button} onClick={navigateHandler}>&larr; Go back</button>
                </div>
            </div>
        </>
    )
}