// Elements na di nag babago ilalagay siya sa layout component.
import { Outlet, Link } from "react-router-dom";
function Layout() {
    return (
    <>
    <nav ClassName="navbar navbar-expand-lg navbar-light bg-light">
    <a ClassName="navbar-brand" href="#">Navbar</a>
    <button ClassName="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span ClassName="navbar-toggler-icon"></span>
    </button>
        <div ClassName="collapse navbar-collapse" id="navbarNav">
            <ul ClassName="navbar-nav">
            <li ClassName="nav-item active">
                <a ClassName="nav-link" href="#">Home <span ClassName="sr-only">(current)</span></a>
            </li>
            <li ClassName="nav-item">
                <a ClassName="nav-link" href="#">Features</a>
            </li>
            <li ClassName="nav-item">
                <a ClassName="nav-link" href="#">Pricing</a>
            </li>
            <li ClassName="nav-item">
                <a ClassName="nav-link disabled" href="#">Disabled</a>
            </li>
            </ul>
        </div>
    </nav>

    <div className="container">

    </div>
    </>

        
        // <>
        //     <nav>
        //         <ul>
        //             <li>
        //                 <Link to="/home">Home</Link>
        //             </li>
        //             <li>
        //                 <Link to="/contact">Contact</Link>
        //             </li>
        //             <li>
        //                 <Link to="/about">About</Link>
        //             </li>
        //         </ul>
        //     </nav>
        //     <Outlet />
        // </>
    );
}

export default Layout;

