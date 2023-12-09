import { Link } from "react-router-dom"
import SignUp from "../components/SignUp"

export default function HomePage () {
    return <>
        <div style={{fontSize: "30px", fontWeight: "bold"}}>여기는 메인 페이지</div>
        <button><Link to="/photo">포토 페이지</Link></button>
        <SignUp />
            </>
}