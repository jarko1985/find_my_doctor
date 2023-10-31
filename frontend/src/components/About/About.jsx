import React from "react";
import aboutImg from "../../assets/images/about.png";
import aboutCardImg from "../../assets/images/about-card.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
          {/* About Image */}
          <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 lg:order-1">
            <img src={aboutImg} alt="about image" />
            <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">
              <img src={aboutCardImg} alt="about card image" />
            </div>
          </div>
          {/* About Content */}
          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
            <h2 className="heading">Proud to be one of the natoins best</h2>
            <p className="text__para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam reprehenderit illo non itaque. Autem cumque illo, nihil
              necessitatibus atque repudiandae. Nam ratione beatae perspiciatis
              tenetur!
            </p>
            <p className="text__para mt-[30px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
              minus, facere officia debitis ut nisi quidem quam, quibusdam
              voluptas vel, suscipit itaque provident magnam harum!
            </p>
            <Link to="/">
              <button className="btn"> Learn more</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
