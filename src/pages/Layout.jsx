// Elements na di nag babago ilalagay siya sa layout component.
import { Outlet, Link } from "react-router-dom";
function Layout() {
    return (
    //Sticky Footer
    <main className="d-flex flex-column min-vh-100"> 
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand fw-bold text-white" to="/">React Routing Demo</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link fw-bold text-white" to="about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fw-bold text-white" to="contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    <div className="container p-5">
        {/*  */}
        <Outlet></Outlet> 
    </div>
    
    {/* mt-auto for sticky footer */}
    <footer className="footer bg-light mt-auto"> 
        <p className="text-center p-3 fw-bold">This is a footer</p>
    </footer>
    </main>

        
    );
}

export default Layout;

