const Section5 = () => {
    return (
        <div className="section5 justify-content-center container mt-5">
            <hr />
            <div className="m-lg-5 justify-content-center px-3 pt-3 row d-flex">
                <div className="container p-3 col-lg-5 col-sm-12">
                    <h3>Read top articles from health experts</h3>
                    <p >Health articles that keep you informed about good health practices and achieve your goals.</p>
                    <div >
                        <a href="/home" className="text-decoration-none">See all articles</a>
                    </div>
                </div>
                <div className="d-flex navbar row col-lg-6 col-sm-12 ">
                    <div className="col-lg col-sm-12">
                        <img className="img-fluid rounded " src="https://www.practostatic.com/fit/5fd27b74d9477cb633445cf3f105078bbc479910" alt="" />
                        <p className='text text-info'>
                            <a href="/home" className="text text-info text-decoration-none" style={{ fontSize: "0.7rem" }}> <b>CORONAVIRUS</b> </a>
                        </p>
                        <h6>12 Coronavirus Myths and Facts That Ypu Should Be Aware Of</h6>
                        <p style={{ fontSize: "0.8rem" }}>Dr.Diana Borgio</p>
                    </div>
                    <div className="col-lg col-sm-12 ">
                        <img className="img-fluid rounded " src="https://www.practostatic.com/fit/bade52edc7fb158bf627216bf96c2b881a97f30c" alt="" />
                        <p className='text text-info'>
                            <a href="/home" className="text text-info text-decoration-none" style={{ fontSize: "0.7rem" }}>
                                <b>VITAMINS AND SUPPLIMENTS</b>
                            </a></p>
                        <h6>Eating Right To Build Immunity Against Cold and Viral Infections</h6>
                        <p style={{ fontSize: "0.8rem" }}>Dr.Diana Borgio</p>
                    </div>
                </div>
            </div>

            <hr />
        </div>
    );
}

export default Section5;