import React from "react";
import "./homeHero.css";

function HomeHero() {
  return (
    <div className="heroContainer">
      <div className="heroSection">
        <div className="heroText">
          <h3>Digital Shopping Hub Junction</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolor
            necessitatibus sunt temporibus! Autem cupiditate culpa aspernatur
            earum et obcaecati quis nihil repellat qui laborum placeat sequi cum
            ratione tempore quisquam explicabo temporibus omnis, iste
            repudiandae officia? Corporis, consequuntur tempora.
          </p>
          <div className="homeRating">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <span>198k</span>
            <p>Excellent Reviews</p>
          </div>
          <div className="heroBtns">
            <button className="offerBtn">Shop Now</button>
            <button>
              <i class="fa-solid fa-tag"></i>Offers
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeHero;
