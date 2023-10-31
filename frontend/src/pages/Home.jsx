import React, { useState, useEffect } from "react";
import heroImg01 from "../assets/images/hero-img01.png";
import heroImg02 from "../assets/images/hero-img02.png";
import heroImg03 from "../assets/images/hero-img03.png";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import About from "../components/About/About";
import ServiceList from "../components/Services/ServiceList";
import featuredImg from "../assets/images/feature-img.png";
import videoIcon from "../assets/images/video-icon.png";
import avatarIcon from "../assets/images/avatar-icon.png";
import faqImg from "../assets/images/faq-img.png";
import DoctorList from "../components/Doctors/DoctorList";
import FaqList from "../components/Faq/FaqList";
import Testimonial from "../components/Testimonial/Testimonial";
const Home = () => {
  const yearsLimit = 30;
  const clinicLimit = 15;
  const satisfactionLimit = 100;
  const [years, setYears] = useState(0);
  const [clinics, setClinics] = useState(0);
  const [satisfaction, setSatisfaction] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setYears((prevYear) => {
        if (prevYear < yearsLimit) {
          return prevYear + 1;
        } else {
          clearInterval(interval);
          return prevYear;
        }
      });
    }, 100);
    return () => clearInterval(interval);
  }, [yearsLimit]);
  useEffect(() => {
    const interval = setInterval(() => {
      setClinics((prevClinic) => {
        if (prevClinic < clinicLimit) {
          return prevClinic + 1;
        } else {
          clearInterval(interval);
          return prevClinic;
        }
      });
    }, 200);
    return () => clearInterval(interval);
  }, [clinicLimit]);
  useEffect(() => {
    const interval = setInterval(() => {
      setSatisfaction((prev) => {
        if (prev < satisfactionLimit) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 30);
    return () => clearInterval(interval);
  }, [satisfactionLimit]);
  return (
    <>
      {/* Hero Section */}
      <section className="hero__section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            {/* Hero Content */}
            <div>
              <div className="lg:w-[570px] flex flex-col items-center lg:block ">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px] text-center lg:text-left ">
                  We help patients live healthy,longer life
                </h1>
                <p className="text__para text-center lg:text-left ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus sapiente tempora odit officia unde voluptatem, quos
                  provident, error aperiam eum iusto porro non ut eveniet facere
                  aut expedita quam? Dignissimos odit repellat eius odio culpa.
                </p>
                <button className="btn">Request an appointment</button>
              </div>

              {/* Hero Counter */}
              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div>
                  <h2 className="text-center text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    +{years}
                  </h2>
                  <span className="mx-auto w-[120px] h-2 bg-yellowColor rounded-full block mt-[14px]"></span>
                  <p className="text__para text-center lg:text-left">
                    Years of Experience
                  </p>
                </div>
                <div>
                  <h2 className="text-center text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    +{clinics}
                  </h2>
                  <span className="mx-auto w-[120px] h-2 bg-purpleColor rounded-full block mt-[14px]"></span>
                  <p className="text__para text-center lg:text-left">
                    Clinic Location
                  </p>
                </div>
                <div>
                  <h2 className="text-center text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    {satisfaction}%
                  </h2>
                  <span className="mx-auto w-[120px] h-2 bg-irisBlueColor rounded-full block mt-[14px]"></span>
                  <p className="text__para text-center lg:text-left">
                    Patient satisfaction
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-[30px] justify-end">
              <div>
                <img className="w-full" src={heroImg01} alt="Hero Image" />
              </div>
              <div className="mt-[30px]">
                <img
                  src={heroImg02}
                  alt="Hero Image"
                  className="w-full mb-[30px]"
                />
                <img src={heroImg03} alt="Hero Image" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero Section End */}
      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Providing the best medical services
            </h2>
            <p className="text__para text-center">
              World-class care for everyone. Our health system offers unmatched
              expert health care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon01} alt="icon1" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700px] text-center">
                  Find a Doctor
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  World-class care for everyone. Our health system offers
                  unmatched expert health care.
                </p>
                <Link
                  to="/doctors"
                  className="h-[44px] w-[44px] rounded-full border border-[#181A1E] mt-[30px] mx-auto flex items-center 
                  justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon02} alt="icon1" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700px] text-center">
                  Find a Location
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  World-class care for everyone. Our health system offers
                  unmatched expert health care.
                </p>
                <Link
                  to="/doctors"
                  className="h-[44px] w-[44px] rounded-full border border-[#181A1E] mt-[30px] mx-auto flex items-center 
                  justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon03} alt="icon1" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700px] text-center">
                  Book An Appointment
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  World-class care for everyone. Our health system offers
                  unmatched expert health care.
                </p>
                <Link
                  to="/doctors"
                  className="h-[44px] w-[44px] rounded-full border border-[#181A1E] mt-[30px] mx-auto flex items-center 
                  justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <About />
      {/* Services Section */}
      <section className="mt-3 lg:mt-[35px]">
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our Medical Services</h2>
            <p className="text__para text-center">
              World-class care for everyone. Our health system offers unmatched
              expert health care.
            </p>
          </div>
          <ServiceList />
        </div>
      </section>
      {/* Services Section end */}
      {/* Featured Section */}
      <section>
        <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row">
            <div className="xl:w-[670px]">
              <h2 className="heading">
                Get Virtual Treatment <br /> Anytime
              </h2>
              <ul className="pl-4">
                <li className="text__para">
                  1. Schedule the appointment directly
                </li>
                <li className="text__para">
                  2. Search for your physician here, and contact their office
                </li>
                <li className="text__para">
                  3. View our physicians who are accepting new patients, use the
                  online scheduling tool to select appointment time
                </li>
              </ul>
              <Link to="/">
                <button className="btn">Learn More</button>
              </Link>
            </div>

            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
              <img className="w-3/4" src={featuredImg} alt="featured image" />
              <div
                className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px]
               left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[6px] lg:gap-3">
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]">
                      Tue, 24
                    </p>
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[400]">
                      10:00 AM
                    </p>
                  </div>

                  <span
                    className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center 
                justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]"
                  >
                    <img src={videoIcon} alt="video icon" />
                  </span>
                </div>

                <div
                  className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px]
                 text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full"
                >
                  Consulatation
                </div>
                <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                  <img src={avatarIcon} alt="avatar icon" />
                  <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor">
                    Hassan Jarko
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Featured Section end */}
      {/* Our Great Doctors Section */}
      <section className="mt-[10px] lg:mt-[55px]">
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our Great Doctors</h2>
            <p className="text__para text-center">
              World-class care for everyone. Our health system offers unmatched
              expert health care.
            </p>
          </div>
          <DoctorList />
        </div>
      </section>
      {/* Our Great Doctors Section end */}
      {/* FAQ SECTION */}
      <section className="mt-4 lg:mt-[55px]">
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <div className="w-1/2 hidden md:block">
              <img src={faqImg} alt="" />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="heading text-center">
                Frequently asked questions by our beloved patients
              </h2>
              <FaqList />
            </div>
          </div>
        </div>
      </section>
      {/* FAQ SECTION END */}
      {/* Testimonies SECTION */}
      <section className="mt-5 lg:mt-[40px]">
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">What Our Patient say</h2>
            <p className="text__para text-center">
              World-class care for everyone. Our health system offers unmatched
              expert health care.
            </p>
          </div>
          <Testimonial />
        </div>
      </section>
      {/* Testimonies SECTION END */}
    </>
  );
};

export default Home;