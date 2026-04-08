import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <nav>
            <h2>Job Portal</h2>
            <Link to="/">Home</Link> | { }
            <Link to="/about">About</Link> | { }
            <Link to="/jobs">Jobs</Link> | { }
            <Link to="/contact">Contact</Link> | { }
            <Link to="/add-job">Add Job</Link> | { }
            <Link to="/login">Login</Link>
        </nav>
    )
}

export default Navbar;