import { footerLinks } from "../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
   

    return (
        <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-24 bg-slate-900">
            <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500">
                <div>
                    <img className="w-34 md:w-32" src="" alt="logo" />
                    <p className="max-w-[410px] mt-6">Our grocery delivery app makes shopping simple and fast.
                     From fresh fruits and vegetables to household essentials, everything you need is just a click away.
                     We bring your groceries straight to your doorstep, saving you time and effort.</p>
                </div>
                <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
                    {footerLinks.map((section, index) => (
                        <div key={index}>
                            <h3 className="font-semibold text-base text-gray-900 md:mb-5 mb-2">{section.title}</h3>
                            <ul className="text-sm space-y-1">
                                {section.links.map((link, i) => (
                                    <li key={i}>
                                        <Link to={link.url} className="hover:underline transition">{link.text}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <p className="py-4 text-center text-sm md:text-base text-gray-500/80">
                Copyright {new Date().getFullYear()} © <a href="https://example.com">Piriyan</a> All Right Reserved.
            </p>
        </div>
    );
};
export default  Footer;