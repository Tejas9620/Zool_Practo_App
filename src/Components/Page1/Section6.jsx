const Section6 = () => {
    return (
        <div className="section6 container-fluid">
            <div className="container my-3 py-3">
                <div id="DemoCarousel" className="carousel slide" data-interval="1500" data-ride="carousel">

                    <ol className="carousel-indicators m-auto my-3" >
                        <li data-target="#DemoCarousel" data-slide-to="0" className="bg-dark"></li>
                        <li data-target="#DemoCarousel" data-slide-to="1" className="bg-dark"></li>
                        <li data-target="#DemoCarousel" data-slide-to="2" className="bg-dark"></li>
                    </ol>
                    <div className="carousel-inner w-lg-75 w-sm-100 mx-0 container" >
                        <div className="item text-center mt-5 active">
                            <h1 className="mt-4  pt-4 fw-bold">What our users have to say</h1>
                            <div className="caption-top w-lg-75">
                                <h4 className="mt-4 " >Very helpful. Far easier than doing same things on computer. Allows quick and easy search with speedy booking. Even maintains history of doctors visited.</h4>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section6;