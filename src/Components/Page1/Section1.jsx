const Section1 = () => {
    return (
        <div className="section1 container px-2 p-sm-3">
            <div className="d-lg-flex d-sm-block my-3">
                <div className="col-lg-4 shadow bg-white rounded"><input className="w-100 form-control" placeholder="📍Location" type="text" /></div>
                <div className="col-lg-5 shadow bg-white rounded"><input className="w-100 form-control" type="text" placeholder="🔍Search doctors,clinics,hospitals,ets..." /></div>
            </div>
            <br /><br />
            
        </div>
    );
}

export default Section1;