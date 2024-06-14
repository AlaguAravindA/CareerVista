import logo from "../assets/images/logo.png";

const Logo = () => {
  return (
    <img
      src={logo}
      alt="jobify"
      className="logo"
      width={"150px"}
      height={"80px"}
      style={{ borderRadius: "60px" }}
    />
  );
};

export default Logo;
