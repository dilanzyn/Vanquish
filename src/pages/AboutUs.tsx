import Footer from "../components/Footer";
import "./AboutUs.css";
import Images from "../assets/assets";

const AboutUs: React.FC = () => {
  return (
    <div className="bg-black h-screen">
      <header
        className="h-[40%] pt-[8rem] mx-auto flex justify-center items-center bg-aboutus bg-black text-white text-center opacity-0 animate-fade-in-up ">
        <h1 className="text-[4rem] md:text-[6rem] 2xl:text-[8rem] font-bold font-Inter tracking-widest">ABOUT US</h1>
      </header>

      <main>
        <section className="flex flex-col lg:flex-row bg-[#060606]">
          <div className="flex flex-col text-white justify-center xl:w-[90%]">
            <div className="flex flex-col gap-3 px-8 md:px-20">
              <img src={Images.Images.Tattoo} className="xl:w-[60%] xl:ml-16"></img>
              <h1 className=" font-bold font-Inter uppercase text-[2rem] xl:text-[3rem] text-center xl:text-left tracking-widest">
                History of vanquish
              </h1>
              <img src={Images.Images.Tattoo} className="xl:w-[60%] xl:ml-16"></img>
            </div>

            <p className="text-[1rem] text-center px-8 py-4 font-Inter tracking-widest md:px-20  xl:text-left">
              Vanquish Muay Thai and Fitness was established in 2020 by Coach
              Vimukthi Abeynayake, a certified instructor under the National
              Muay Thai Association of Sri Lanka and the Muay Thai Academy of
              America, following a long and exciting coaching career that began
              in his school days. Since its inception, the gym has achieved
              remarkable success, producing two WBC Muay Thai Sri Lanka
              champions and one IMO Muay Thai World Champion within just two
              years. Coach Vimukthi upholds and instills in his students the
              core values of Muay Thai—Respect, Honour, and Tradition—which form
              the foundation of discipline and integrity for every fighter in
              the gym. Recently, WBC Muaythai Sri Lanka announced that Vimukthi
              Abeynayake, alongside Renata Petrauskyte, will spearhead its
              business development and innovation initiatives.
            </p>
          </div>
          <div className="">
            <img src={Images.Images.AboutUsSection_1}></img>
          </div>
        </section>
        <section className="section2 w-full flex flex flex-col text-white">
          <div className="flex flex-col text-white py-[10rem] justify-center md:px-20">
            <div className="flex flex-col justify-end gap-3 px-8">
              <img src={Images.Images.Tattoo} className="xl:w-[35%] xl:ml-[60%]"></img>
              <h1 className=" font-bold font-Inter uppercase text-[3.5rem] text-center xl:text-right xl:text-[3rem] tracking-widest">
                Coach Vimukthi
              </h1>
              <img src={Images.Images.Tattoo} className="xl:w-[35%] xl:ml-[60%]"></img>
            </div>
            <p className="text-[1rem] text-center px-8 py-4 font-Inter tracking-widest xl:text-right xl:ml-[35%]">
              Vimukthi Abeynayake’s martial arts journey began at age 5,
              inspired by films like Rocky. Despite challenges like bullying and
              limited resources, he trained using mannequins from his father’s
              factory and toughened himself by kicking trees. At 12, he started
              karate lessons, saving lunch money and skipping meals, as his
              parents didn’t support his interest. By 2011, he represented Sri
              Lanka at an Asian competition, earning 4th place despite breaking
              two ribs. After his father’s cancer diagnosis, Vimukthi switched
              to Muay Thai, which became a coping mechanism. His discipline
              mantra, “Pain makes you remember things,” was shaped by setbacks,
              including balancing his job at Sri Lankan Airlines with intense
              training. Personal losses, such as his father’s death in 2016,
              tested his resolve, but inspired by Kru Miran, he continued. In
              2018, he began coaching at Knees and Knuckles, and in 2019, he
              founded Vanquish Muay Thai & Fitness to provide the mentorship he
              never had.
            </p>
          </div>
        </section>
        <section>
          <div className="bg-aboutus_2 flex flex-col justify-center text-white py-10 md:px-20">
            <div className="flex flex-col gap-3 px-8 ">
              <img src={Images.Images.Tattoo} className="xl:w-[35%] xl:mx-auto"></img>
              <h1 className=" font-bold font-Inter uppercase text-[3rem] text-center">
                Our Mission & Vision
              </h1>
              <img src={Images.Images.Tattoo} className="xl:w-[35%] xl:mx-auto"></img>
            </div>
            <p className="text-[1rem] mt-[2rem] font-Inter tracking-widest text-center px-8 xl:px-20">
              In Sri Lanka, the lack of professional fight organizations and a
              limited number of senior fighters leads to inexperienced junior
              fighters facing senior competitors, causing physical and mental
              harm. To address this, we aim to organize the Muay Thai
              Development League (MDL), an amateur tournament held every two
              weeks or once a month. Fighters will compete against others of
              similar experience, helping them develop skills and experience.
              The tournaments will be held at Vanquish Muay Thai & Fitness and
              governed by WBC amateur rules. Fighters will be categorized based
              on their number of fights: Novice (0-4), C Class (4-8), B Class
              (8-16), and Elite (16+), where they will compete against others at
              the same level. After 16 amateur fights, fighters can transition
              to the Pro Level to compete internationally.
            </p>
          </div>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default AboutUs;
