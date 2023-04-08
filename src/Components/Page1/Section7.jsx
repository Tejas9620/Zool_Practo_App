const Section7 = () => {
  return (
    <div className="Section7 container">
      <div className="container d-lg-flex d-sm-block justify-content-around">
        <div className="d-flex w-75 justify-content-center ps-5">
          <img className="w-75 mt-3 me-4 pb-sm-3 " src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/footer-img.png" alt="" />
        </div>
        <div className="mt-sm-5">
          <h2>Download the Practo app</h2>
          <p>
            Access video consultation with India’s top doctors on the Practo app.
            Connect with doctors online, available 24/7, from the comfort of your
            home.
          </p>
          <div className="w-100 mt-5">
            <h3>Get the link to download the app</h3>
            <div className="d-lg-flex d-sm-block row mx-2">
              <div className="input-group h-75 row d-flex col-lg-4 col w-75 ">
                <div className="input-group-text col-lg-2 col-sm w-25 ">+91</div>
                <input type="tel" className="form-control col-sm-6 me-lg-2 w-lg-50 w-lg-75 " placeholder="Enter phone number"  />
              </div>
              <div className="col-lg-3 col-sm-3 mx-sm-auto  ms-lg-2  py-0 h-75  btn-info text-center">
                <h5 className="btn bg-info" >Send SMS</h5>
              </div>
            </div>
          </div>
          <div className="d-lg-flex d-sm-block mt-5">
            <div className="btn">
              <img src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/google_play.png" alt="" />
            </div>
            <div className="btn">
              <img src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/apple_store.png" alt="" />
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}

export default Section7;