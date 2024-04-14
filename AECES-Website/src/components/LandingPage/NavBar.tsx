function NavBar() {
    return (
        <>
            <nav className="navbar fixed-top navbar-light bg-light">
                <a className="navbar-brand fs-6 ms-3" href="#">
                    <img src="/aeces-logo.png" width="50" height="50" alt="" />
                        Ateneo Electronics and Computer Engineering Society
                </a>
                <div className="d-flex justify-content-end align-items-center">
                    <a className="nav-item nav-link active px-4" href="#">Home</a>
                    <a className="nav-item nav-link active px-4" href="#">Projects</a>
                    <a className="nav-item nav-link active px-4" href="#">About</a>
                    <a className="nav-item nav-link active px-4" href="#">Contact Us</a>
                </div>
            </nav>

        </>
    )
}

export default NavBar