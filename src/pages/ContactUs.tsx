import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Images from "../assets/assets";
import "./ContactUs.css";

const ContactUs: React.FC = () => {
  return (
    <div>
      <header className="h-[40%] pt-[8rem] mx-auto flex justify-center items-center bg-ContactUs bg-black text-white text-center opacity-0 animate-fade-in-up">
        <h1 className="text-[4rem] md:text-[6rem] 2xl:text-[8rem] font-bold font-Inter">
          CONTACT
        </h1>
      </header>
      <div className="bg-black flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-24 py-12 px-6 lg:px-20 xl:py-[10%]">
        {/* Text Content */}
        <div className="text-white text-center lg:text-left max-w-lg">
          <h1 className="font-bold text-4xl sm:text-5xl">Contact Us</h1>
          <p className="mt-4 text-lg">
            Have questions or need more information? We're here to help! Reach
            out to us with any inquiries about our classes, memberships, or
            facilities.
          </p>

          {/* Contact Methods */}
          <div className="pt-8 flex flex-col gap-4 items-center lg:items-start">
            <Contact icon={Images.Icons.Email} description="Email us" />
            <Contact icon={Images.Icons.Phone} description="Call us now" />
            <Contact icon={Images.Icons.WA} description="Whatsapp us" />
          </div>

          {/* Social Media Links */}
          <div className="py-6">
            <p className="text-white text-lg">Follow us</p>
            <div className="flex justify-center lg:justify-start gap-6 pt-4">
              <img
                className="w-6 h-6"
                src={Images.Icons.Insta}
                alt="Instagram"
              />
              <img className="w-6 h-6" src={Images.Icons.Fb} alt="Facebook" />
              <img className="w-6 h-6" src={Images.Icons.YT} alt="YouTube" />
              <img
                className="w-6 h-6"
                src={Images.Icons.LinkedIn}
                alt="LinkedIn"
              />
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="w-full lg:w-[40%] flex justify-center">
          <img
            className="w-full max-w-sm h-auto"
            src={Images.Images.Demon}
            alt="Demon"
          />
        </div>
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default ContactUs;
