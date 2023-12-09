import { Link } from "react-router-dom"

export default function Header () {
    return <>
        <header className="Header">
            <div className="logo">Router Study</div>
            <nav>
            <div>
            {/* a 태그는 페이지를 새로고침 하면서 페이지 이동 시킴 */}
            {/* Link 컴포넌트는 컴포넌트만 변경함 (페이지 새로고침 X) */}
            <Link to="/">Home</Link>
            </div>
            <div>
            <Link to="/products">Product</Link>
            </div>
            </nav>
        </header>
    </>
}