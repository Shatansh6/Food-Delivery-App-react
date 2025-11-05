import assets from "../../assets/assets";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="left">
          <img className="w-[150px]" src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus,
            consectetur ipsa? Eos, omnis iusto. Voluptates a beatae unde, illum
            neque enim aspernatur provident perferendis sed culpa velit vero
            suscipit voluptatum.
          </p>
          <div className="social-icon flex gap-2">
            <img  src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="center">
          <h2  className="font-extrabold text-xl">COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="right">
          <h2 className="font-extrabold text-xl">GET IN TOUCH</h2>
          <ul>
            <li>8889997770</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="copyright">
        Copyright 2024 Tomato.com - All Right
      </p>
    </div>
  );
}

export default Footer;
