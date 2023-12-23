import { MdPanoramaVerticalSelect } from "react-icons/md";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content">
  <aside>
   
    <MdPanoramaVerticalSelect className="text-4xl text-yellow-500"/>
    <p>TMS SYS.<br/>Providing reliable tech since 1992</p>
  </aside> 
  <nav>
    <header className="footer-title">Services</header> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <header className="footer-title">Company</header> 
   <Link to='/'>  <a className="link link-hover">Home</a></Link>
   <Link to='/about'>  <a className="link link-hover">About us</a></Link>
   <Link to='/dashboard'>  <a className="link link-hover">Dashboard</a></Link>


    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <header className="footer-title">Legal</header> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
        </div>
    );
};

export default Footer;