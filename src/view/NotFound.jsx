import { NavLink, useNavigate } from 'react-router-dom';
import "@/style/NotFound.scss"
const NotFound = () => {

    return (
        <main className="NotFound">
            <div className='item'>
                <div>Not Found</div>
                <NavLink className='link'   to="/wall/">GO HOME</NavLink>
            </div>

        </main>
    )
}
export default NotFound;