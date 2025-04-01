import { FaFacebook } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { FaSnapchat } from "react-icons/fa6";
const Footer = () => {
    return (
        <div className="bg-neutral text-neutral-content text-center py-6">
            <footer className="footer sm:footer-horizontal  p-10">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <div>
                    <h6 className="footer-title">Social</h6>
                    <div className="flex gap-4">
                        <FaFacebook />
                        <RiTwitterXLine />
                        <FaWhatsapp />
                        <FaSnapchat />
                    </div>
                </div>
            </footer>
            <h2 className="font-bold">All rights reversed @copyright discountPro.com</h2>
        </div>
    );
};

export default Footer;