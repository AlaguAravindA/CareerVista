import styled from "styled-components";
import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
import { Link } from "react-router-dom";
import { Logo } from "../components";

const Landing = () => {
  return (
    <Wrapper>
      {/* <nav>
        <Logo />
      </nav> */}
      <div className="bg">
        <Logo />
      </div>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Certainly! Here's a short paragraph for describing CareerVista, the
            job tracking website: "CareerVista is your ultimate destination for
            navigating the ever-evolving landscape of career opportunities. With
            our intuitive platform, job seekers can effortlessly track their
            professional journey, explore diverse job listings, and connect with
            leading employers. Our innovative tools empower users to stay
            organized, set career goals, and embark on new paths with
            confidence. Whether you're a seasoned professional or just starting
            your career journey, CareerVista provides the insights and resources
            you need to thrive in today's competitive job market. Join us and
            unlock the doors to endless possibilities for growth and success!"
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn ">
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
