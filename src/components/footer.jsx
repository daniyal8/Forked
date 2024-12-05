import React from "react";
import LinkedInIcon from '../assets/linkedin.png'
import FacebookIcon from "../assets/facebook.png"
import MailIcon from "../assets/mail.png"

const Footer = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-6 pb-6 px-6">
            <p className="text-xl text-[#135621] font-bold">Made with 💚 by Daniyal Sadiq</p>
            <div className="flex items-center justify-center gap-4 max-[700px]:flex-wrap">
                <button className="p-3 rounded-xl bg-white border-2 border-[#28A745]">
                    <a
                        href="https://www.linkedin.com/in/daniyal-sadiq-5767161b6/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-[#28A745] transition duration-200"
                    >
                        Connect with me on
                        <span>
                            <img className="w-5 mt-[-4px]" src={LinkedInIcon} alt="LinkedIn Icon" />
                        </span>
                    </a>
                </button>
                <button className="p-3 rounded-xl bg-white border-2 border-[#28A745]">
                    <a
                        href="https://www.facebook.com/daniyal.sadiq.1840"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-[#28A745] transition duration-200"
                    >
                        Get in touch with me on
                        <span>
                            <img className="w-5 mt-[-4px]" src={FacebookIcon} alt="Facebook Icon" />
                        </span>
                    </a>
                </button>
                <button className="p-3 rounded-xl bg-white flex items-center gap-2 border-2 border-[#28A745]">
                    <a
                        href="mailto:daniyalsadiq4@gmail.com"
                        className="flex items-center gap-2 hover:text-[#28A745] transition duration-200"
                    >
                        <span>Get in touch with me via</span>

                        <img
                            src={MailIcon}
                            alt="Email Icon"
                            className="w-5"
                        />
                    </a>
                </button>
            </div>
        </div>
    );
}
export default Footer