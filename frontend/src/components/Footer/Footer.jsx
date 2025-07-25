
import "./Footer.css"
import{ assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt='' />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industries standard dummy text ever since the 1500s, When an unknown printr took a galley of type ans scrambled it to make a type specimen book </p>
                <div className="footer-social-icon">
                  <img src={assets.facebook_icon} alt='' />
                  <img src={assets.twitter_icon} alt='' />
                  <img src={assets.linkedin_icon} alt='' />
                </div>
            </div>
            <div className="footer-content-center">
                  <h2>COMPANY</h2>
                  <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                  </ul>
            </div>
            <div className="footer-content-right">
                  <h2>GET IN TOUCH</h2>
                  <ul>
                    <li>+1-342-343-6540</li>
                    <li>contact@Tomato.com</li>
                  </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2024 @ Tomato.com - All Right Reserved.</p>

    </div>
  )
}

export default Footer