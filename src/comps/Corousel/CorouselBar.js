import React from "react";

function CorouselBar() {
  
  return (
    <div>
      <div className="d-flex p-2 corousalbody">
        <div className="corousebar p-2">
          <div
            id="carouselExampleControls"
            class="carousel slide"
            data-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="https://ii1.pepperfry.com/media/wysiwyg/banners/HB04_Web_03022022.jpg"
                  class="d-block w-100"
                  alt=""
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://ii2.pepperfry.com/media/wysiwyg/banners/HB02_Web_03022022.jpg"
                  class="d-block w-100"
                  alt=""
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://ii1.pepperfry.com/media/wysiwyg/banners/Promo_2X_07022022_nd.jpg"
                  class="d-block w-100"
                  alt=""
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://ii3.pepperfry.com/media/wysiwyg/banners/HB03_Web_03022022.jpg"
                  class="d-block w-100"
                  alt=""
                />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-target="#carouselExampleControls"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-target="#carouselExampleControls"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </button>
          </div>
        </div>
        <div className="p-2">
          <img
            src="https://ii2.pepperfry.com/media/wysiwyg/banners/Valentine_RHS.jpg"
            width="100%"
            height="100%"
            alt=""
          />
        </div>
      </div>
      <div className="p-4">
        <img width='100%'
          src="https://ii3.pepperfry.com/media/wysiwyg/banners/2021_web_regBanner_09022022.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default CorouselBar;
