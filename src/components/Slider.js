import React from "react";


const Slider = () => {
 

  return (
    <section id="tranding">
    <div class="container">
      <h3 class="text-center section-subheading">- popular Delivery -</h3>
      <h1 class="text-center section-heading">Tranding food</h1>
    </div>
    <div class="container">
      <div class="swiper tranding-slider">
        <div class="swiper-wrapper">
         
          <div class="swiper-slide tranding-slide">
            <div class="tranding-slide-img">
              <img src="./slider/images/tranding-food-1.png" alt="Tranding"/>
            </div>
            <div class="tranding-slide-content">
             
              <div class="tranding-slide-content-bottom">
                <h2 class="food-name">
                  Special Pizza
                </h2>
                
              </div>
            </div>
          </div>
        
          <div class="swiper-slide tranding-slide">
            <div class="tranding-slide-img">
              <img src="./slider/images/tranding-food-2.png" alt="Tranding"/>
            </div>
            <div class="tranding-slide-content">
              
              <div class="tranding-slide-content-bottom">
                <h2 class="food-name">
                  Meat Ball
                </h2>
                
              </div>
            </div>
          </div>
          
          <div class="swiper-slide tranding-slide">
            <div class="tranding-slide-img">
              <img src="./slider/images/tranding-food-3.png" alt="Tranding"/>
            </div>
            <div class="tranding-slide-content">
            
              <div class="tranding-slide-content-bottom">
                <h2 class="food-name">
                  Burger
                </h2>
                
              </div>
            </div>
          </div>
          
          <div class="swiper-slide tranding-slide">
            <div class="tranding-slide-img">
              <img src="./slider/images/tranding-food-4.png" alt="Tranding"/>
            </div>
            <div class="tranding-slide-content">
              
              <div class="tranding-slide-content-bottom">
                <h2 class="food-name">
                  Frish Curry
                </h2>
                
              </div>
            </div>
          </div>
         
          <div class="swiper-slide tranding-slide">
            <div class="tranding-slide-img">
              <img src="./slider/images/tranding-food-5.png" alt="Tranding"/>
            </div>
            <div class="tranding-slide-content">
              
              <div class="tranding-slide-content-bottom">
                <h2 class="food-name">
                  Pane Cake
                </h2>
               
              </div>
            </div>
          </div>
         
          <div class="swiper-slide tranding-slide">
            <div class="tranding-slide-img">
              <img src="./slider/images/tranding-food-6.png" alt="Tranding"/>
            </div>
            <div class="tranding-slide-content">
            
              <div class="tranding-slide-content-bottom">
                <h2 class="food-name">
                  Vanilla cake
                </h2>
               
              </div>
            </div>
          </div>
        
          <div class="swiper-slide tranding-slide">
            <div class="tranding-slide-img">
              <img src="./slider/images/tranding-food-7.png" alt="Tranding"/>
            </div>
            <div class="tranding-slide-content">
           
              <div class="tranding-slide-content-bottom">
                <h2 class="food-name">
                  Straw Cake
                </h2>
               
              </div>
            </div>
          </div>
          
        </div>

        <div class="tranding-slider-control">
          <div class="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div class="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div class="swiper-pagination"></div>
        </div>

      </div>
    </div>
  </section>
  );
};

export default Slider;
