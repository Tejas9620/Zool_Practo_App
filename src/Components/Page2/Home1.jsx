const Home1 = () => {
    return (
        <nav className="Home1 navbar  navbar-expand-lg bg-body-tertiary sticky-top" style={{ position: "sticky", top: 0 }}>
            <div className="container Nav">
                <button aria-controls="navbarSupportedContentx" aria-expanded="false" aria-label="Toggle navigation"
                    className="navbar-toggler" data-bs-target="#navbarSupportedContentx" data-bs-toggle="collapse"
                    type="button">
                    <span className="navbar-toggler-icon "></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContentx">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/home">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/home">
                                Healthy Hair
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/home">
                                Healthy Eating
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/home">
                                Healthy Skin
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/home">
                                Weight Loss
                            </a>
                        </li>
                        <li className="nav-item dropdown DropDownOfNav">
                            <a
                                className="nav-link dropdown-toggle"
                                href="/home"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Explore
                            </a>
                            <ul className="dropdown-menu ">
                                <li>
                                    <a className="dropdown-item" href="/home"></a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="/home"></a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="/home"></a>
                                </li>
                            </ul>
                        </li>
                    </ul>

                    <div className="search-box">
                        <form>
                            <input
                                type="text"
                                name="search"
                                id="srch"
                                placeholder="Search"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Home1;