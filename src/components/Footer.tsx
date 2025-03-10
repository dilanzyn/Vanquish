import Images from "../assets/assets";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#313134] text-white py-10 px-6 md:px-14">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center items-start justify-center h-[380px] md:h-[150px] lg:h-[100px]">
        {/* Column 1: Logo */}
        <div className="flex justify-center md:justify-start w-full">
          <img
            src={Images.Images.logo}
            className="w-[200px] md:w-[250px] block"
            alt="Logo"
          />
        </div>

        {/* Column 2: Contact Info */}
        <div className="space-y-2">
          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:+1-555-123-4567" className="hover:underline">
              +1 (555) 123-4567
            </a>
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:info@vanquishmuaythai.com"
              className="hover:underline"
            >
              info@vanquishmuaythai.com
            </a>
          </p>
          <p>
            <strong>Address:</strong>{" "}
            <a
              href="https://goo.gl/maps/..."
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              123 Muay Thai St., Bangkok, Thailand
            </a>
          </p>
        </div>

        {/* Column 3: Business Hours */}
        <div className="space-y-2">
          <p className="font-bold">Business Hours:</p>
          <p>Mon–Fri: 6am – 9pm</p>
          <p>Sat–Sun: 8am – 6pm</p>
        </div>

        {/* Column 4: Social Media */}
        <div className="space-y-2 flex flex-col items-center md:items-start">
          <p className="text-lg font-bold">Follow us</p>
          <div className="flex gap-4">
            <img className="w-6 h-6" src={Images.Icons.Insta} alt="Instagram" />
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
    </footer>
  );
};

export default Footer;
