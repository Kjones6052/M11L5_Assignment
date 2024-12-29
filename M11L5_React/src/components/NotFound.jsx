// Import
import { NavLink } from "react-router-dom";
import { Image } from "react-bootstrap";
import notFound from '../assets/notFound.jpg'

function NotFound() {
    return (
        <div className="container text-white text-center">
            <h2>404 - Not Found</h2>
            <Image src={notFound} roundedCircle={true} fluid={true} />
            <p>Sorry, the product you are looking is currently lost, possibly hiding under a rock.</p>
            <p>
                You can always go back to the <NavLink to="/">homepage</NavLink>
            </p>
        </div>
    )
}

// Export
export default NotFound;