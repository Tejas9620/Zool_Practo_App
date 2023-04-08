import "./Section4.css"


import { useRef, useEffect } from "react";

const Section4 = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    const items = carousel.querySelectorAll(".carousel-item");
    const minPerSlide = 4;

    items.forEach((el) => {
      let next = el.nextElementSibling;
      for (let i = 1; i < minPerSlide; i++) {
        if (!next) {
          // Wrap carousel by using first child
          next = items[0];
        }
        const cloneChild = next.cloneNode(true);
        el.appendChild(cloneChild.children[0]);
        next = next.nextElementSibling;
      }
    });
  }, []);

  return (
    <div className="section4 mb-5 pb-3 carousel" ref={carouselRef}>
      <div className="container  my-3">
      <h5 className="title">Book an appointment for an in-clinic consultation</h5>
      <p className="para">Find experienced doctors across all specialties</p>
      </div>
      <div className="container  text-center my-3">
      <div className="row mx-auto my-auto justify-content-between">
        <div id="recipeCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <div className="col-md-6 col-lg-3 mx-2">
                <div className="card">
                  <div className="card-img">
                    <img
                      src="https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-dentist@2x.jpg"
                      className="img-fluid"
                    />
                  </div>
                  <div className="card-body px-1">
                    <h6>Dentist</h6>
                    <p className="card-text">
                      Teething troubles? Schedule a dental checkup
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="col-md-6 col-lg-3 mx-2">
                <div className="card">
                  <div className="card-img">
                    <img
                      src="https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-gynecologist@2x.jpg"
                      className="img-fluid"
                    />
                  </div>
                  <div className="card-body px-1">
                    <h6>Gynecologist/Obstetrician</h6>
                    <p className="card-text">
                      Explore for women's health, pregnancy and infertility
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="col-md-6 col-lg-3 mx-2">
                <div className="card">
                  <div className="card-img">
                    <img
                      src="https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-dietitian@2x.jpg"
                      className="img-fluid"
                    />
                  </div>
                  <div className="card-body px-1">
                    <h6>Dietitian/Nutrition</h6>
                    <p className="card-text">
                      Get guidance on eating right, weight and sports nutrition
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="col-md-6 col-lg-3 mx-2">
                <div className="card">
                  <div className="card-img">
                    <img
                      src="https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-physiotherapist@2x.jpg"
                      className="img-fluid"
                    />
                  </div>
                  <div className="card-body px-1">
                    <h6>Physiotherapist</h6>
                    <p className="card-text">
                      Pulled a muscle? Get it treated by a trained
                      physiotherapist
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="col-md-6 col-lg-3 mx-2">
                <div className="card">
                  <div className="card-img">
                    <img
                      src="https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-general-surgeon@2x.jpg"
                      className="img-fluid"
                    />
                  </div>
                  <div className="card-body px-1">
                    <h6>General surgeon</h6>
                    <p className="card-text">
                      Need to get operated? Find the right surgeon
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="col-md-6 col-lg-3 mx-2">
                <div className="card">
                  <div className="card-img">
                    <img
                      src="https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-orthopedist@2x.jpg"
                      className="img-fluid"
                    />
                  </div>
                  <div className="card-body px-1">
                    <h6>Orthopedist</h6>
                    <p className="card-text">
                      For Bone and Joints issues, spinal injuries and more
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="col-md-6 col-lg-3 mx-2">
                <div className="card">
                  <div className="card-img">
                    <img
                      src="https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-general-doctor@2x.jpg"
                      className="img-fluid"
                    />
                  </div>
                  <div className="card-body px-1">
                    <h6>General physician</h6>
                    <p className="card-text">
                      Find the right family doctor in your neighborhood
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="col-md-6 col-lg-3 mx-2">
                <div className="card">
                  <div className="card-img">
                    <img
                      src="https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-pediatrician@2x.jpg"
                      className="img-fluid"
                    />
                  </div>
                  <div className="card-body px-1">
                    <h6>Pediatrician</h6>
                    <p className="card-text">
                      Child Specialists and Doctors for Infant
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="col-md-6 col-lg-3 mx-2">
                <div className="card">
                  <div className="card-img">
                    <img
                      src="https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-gastroenterologist@2x.jpg"
                      className="img-fluid"
                    />
                  </div>
                  <div className="card-body px-1">
                    <h6>Gastroenterologist</h6>
                    <p className="card-text">
                      Explore for issues of digestive system, liver and pancreas
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev bg-transparent w-aut"
            href="#recipeCarousel"
            role="button"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          </a>
          <a
            className="carousel-control-next bg-transparent w-aut"
            href="#recipeCarousel"
            role="button"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
          </a>
        </div>
      </div>
    </div>
    
    </div>
  );
}
export default Section4;