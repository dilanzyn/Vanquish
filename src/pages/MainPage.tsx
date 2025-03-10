import Images from "../assets/assets";
import Button from "../components/Button";
import "./MainPage.css";
import Slideshow from "../components/Slideshow";
import IconCards from "../components/IconCards";
import CardSlider from "../components/CardSlider";
import ClassCard from "../components/ClassCard";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const MainPage: React.FC = () => {
  const imageUrls = [
    Images.Images.Slide1,
    Images.Images.Slide2,
    Images.Images.Slide3,
    Images.Images.Slide4,
  ];

  const faqItems = [
    {
      question: "What is Muay Thai?",
      answer:
        ' Muay Thai, also known as Thai Boxing, is a traditional martial art and combat sport from Thailand that uses stand-up striking along with various clinching techniques. It is known as "the art of eight limbs" because it involves the use of fists, elbows, knees, and shins.',
    },
    {
      question: "Do I need prior experience to join the gym?",
      answer:
        "No prior experience is necessary! Our gym welcomes beginners as well as experienced practitioners. Our trainers will tailor the training to your skill level and goals.",
    },
    {
      question: "What should I bring to my first class?",
      answer:
        "For your first class, wear comfortable athletic clothing and bring a water bottle. If you have hand wraps, gloves, or other gear, feel free to bring them, but we also provide essential equipment for beginners.",
    },
    {
      question: "Is there an age requirement to join the gym?",
      answer:
        "Our gym offers classes for various age groups, typically starting from age 8 and up. We have specific classes for kids, teens, and adults, ensuring appropriate training for all ages.",
    },
    {
      question: "How often should I train to see results?",
      answer:
        "The frequency of training depends on your personal goals. We recommend training at least 2-3 times a week to see noticeable improvements in fitness and technique. However, our trainers can provide a more personalized plan based on your goals.",
    },
    {
      question: "What safety measures are in place at the gym?",
      answer:
        "Safety is our top priority. We provide high-quality equipment, and our trainers ensure that all techniques are taught safely and correctly. We also have strict hygiene and sanitation protocols in place.",
    },
    {
      question: "Can I try a class before committing to a membership?",
      answer:
        "Yes, we offer a trial class for newcomers to experience our training environment and coaching style before committing to a membership.",
    },
    {
      question: "Are there any additional fees besides the membership?",
      answer:
        "Besides the membership fee, there may be additional costs for personal equipment (like gloves or shin guards), special workshops, or competitions. However, basic training equipment is available at the gym.",
    },
    {
      question: " What should I expect in a typical class? ",
      answer:
        " A typical class includes a warm-up, technique drills, pad work, bag work, and conditioning exercises. Depending on your level, you may also participate in sparring sessions. Our classes are structured to improve your strength, technique, and overall fitness.",
    },
    {
      question: "How can I cancel my membership?",
      answer:
        "To cancel your membership, please contact our front desk or send an email to our customer service team. Our cancellation policy requires a notice period, which will be outlined in your membership agreement.",
    },
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section className="cover">
        <div className="pt-[110px] h-screen grid">
        <video className="background-video" autoPlay muted loop>
        <source src={Images.video.Overlay} type="video/mp4" />
      </video>
          <img
            src={Images.Images.flags}
            alt="flags"
            className="flag bg-transparent"
          />
          <h2 className="text-main">
            THE POWER IS IN YOU
            <br />
            AND IN US ALL
          </h2>
          <Button
            icon={Images.Icons.ArrowDown}
            className="py-1 px-[2rem] btn-main "
            onClick={() => {
              scrollToSection("welcome");
            }}
          ></Button>
          <img
            src={Images.Images.coachMain}
            alt="coach"
            className="coach-main bg-transparent"
          />
          <img src={Images.Images.logo} alt="logo" className="logo-main " />
        </div>
      </section>
      <section className="bg-black">
        <div className="grid-2 py-[25%] md:py-[18.5%] lg:py-0">
          <img
            className="bg-black w-full gridImg"
            src={Images.Images.grid}
            alt="background"
          />
          <div className="text-white text-center font-inter font-bold MT lg:hidden">
            <div className="text-[4.5rem] leading-[4.5rem]">#BIGGEST</div>
            <div className="text-[3.8rem] leading-[4.5rem]">MUAY THAI</div>
            <div className="text-[5.8rem] leading-[4.5rem]">GYM IN</div>
            <div className="text-[4rem] leading-[4.5rem]">SRI LANKA</div>
          </div>
          <div className="text-white text-center font-inter font-bold MT hidden lg:block 2xl:scale-[1.8]">
            <div className="text-[5.5rem] leading-[5rem]">
              #BIGGEST MUAY THAI
            </div>
            <div className="text-[6.3rem] leading-[5rem]">GYM IN SRI LANKA</div>
          </div>
        </div>
        <div className="pt-[10rem] pb-[4rem] lg:pt-[5rem] lg:pb-[4rem]">
          <Slideshow images={imageUrls} autoPlay={true} interval={3000} />
        </div>
        <div>
          <img src={Images.Images.Welcome} className="mx-auto w-[80%] py-4 md:w-[50%] xl:w-[30%]" id="welcome"></img>
          <p className="text-white text-center text-[1.2rem] font-inter px-8 md:px-20 md:text-[1.5rem] lg:text-[1rem] lg:px-[13rem] 2xl:px-[20rem]">
            Vanquish Muay Thai & Fitness, your premier destination
            for Muay Thai, kickboxing, and cardio training.We offer a diverse
            range of classes tailored to all skill levels, from kids' and
            beginners' classes to intermediate sessions, private training, and
            competitive coaching. Led by our experienced head coach, Mr.
            Vimukthi Abeynayake, who founded Vanquish in 2019, we are committed
            to helping you achieve your fitness and martial arts goals.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-center gap-10 py-20 lg:pb-0">
          <IconCards icon={Images.Icons.PunchingBag} text="Boxing bags" />
          <IconCards
            icon={Images.Icons.BoxingRing}
            text="Full-sized boxing ring"
          />
          <IconCards
            icon={Images.Icons.Gloves}
            text="Specialized Muay Thai gear"
          />
          <IconCards icon={Images.Icons.Barbel} text="Workout equipment" />
        </div>
        {/* Need to change */}
        <div className="grid-3 bg-black py-[8rem] lg:py-[1rem]">
          <div className="ring-rot">
            <img src={Images.Images.Circle} className="animate-spin-slow" />
          </div>
          <div className="MV-text px-4 md:px-[3rem] text-white">
            <div className="">
              <h1 className="text-[4rem] text-center font-bold">MISSION</h1>
              <p className="text-[1rem] md:text-[1.5rem] lg:px-[300px] xl:px-[400px] 2xl:px-[600px] text-center pt-3">
                Our mission is to provide the best muay thai training and
                fitness facility in the island.
              </p>
            </div>
            <div className="pt-14">
              <h1 className="text-[4rem] text-center font-bold">VISION</h1>
              <p className="text-[1rem] md:text-[1.5rem] lg:px-[300px] xl:px-[400px] 2xl:px-[600px] text-center pt-3">
                Our vision is to create world class athletes to represent Sri
                Lanka on the global stage.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col lg:flex-row py-20">
            <div className="w-full lg:w-[80vw] lg:h-[60dvh] xl:px-20 2xl:pl-40 xl:w-[200vw] overflow-hidden">
            <img
              src={Images.Images.CoachMainSub}
              alt="coach"
              className="2xl:-translate-y-[10%]"
            />
            </div>
            <div className="text-white text-center lg:text-left font-Inter">
              <h1 className="font-bold text-[3rem] leading-[4rem] pt-6 md:pt-8 lg:px-20 2xl:pr-40 2xl:text-[4rem] 2xl:leading-[5rem]">
                Vimukthi Abeynayake
              </h1>
              <p className="pt-10 px-8 text-[1rem] md:text-[1.5rem] lg:text-[1rem] lg:px-20 2xl:text-[1rem]">
                The head coach and driving force behind Vanquish Muay Thai &
                Fitness, bringing over 17 years of experience in martial arts to
                the gym. A seasoned competitor both locally and internationally
                in Karate, Muay Thai, and Wushu Sanda, Coach Vimukthi is a
                certified coach under the World Boxing Council Muay Thai
                (Thailand) and the Muay Thai Academy of America. Additionally,
                he is a certified ring official by the World Boxing Council Muay
                Thai, ensuring his expertise extends beyond training to
                officiating. With his vast knowledge and passion for the sport,
                he inspires fighters at Vanquish to reach their full potential
                while upholding the values of respect, honor, and tradition.
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row-reverse pb-20">
            <div className="w-full lg:w-[80vw] lg:h-[60dvh] xl:px-20 2xl:pl-40 xl:w-[200vw] overflow-hidden">
            <img
              src={Images.Images.GevinhMainSub}
              alt="coach"
              className="2xl:-translate-y-[5%]"
            />
            </div>
            <div className="text-white text-center lg:text-left font-Inter">
              <h1 className="font-bold text-[3rem] leading-[4rem] pt-6 md:pt-8 lg:px-20 2xl:text-[4rem] 2xl:leading-[5rem] 2xl:pl-40">
                Gevin Linden
              </h1>
              <p className="pt-10 px-8 text-[1rem] md:text-[1.5rem] lg:text-[1rem] lg:px-20 2xl:text-[1rem] 2xl:pl-40">
                the assistant coach at Vanquish Muay Thai & Fitness and the
                reigning WBC Muay Thai Sri Lanka National Champion (75kg) for
                2023, as well as the 75kg IFMA National Muay Thai Champion for
                2025. With 4 years of experience and an impressive fight record
                of 12-2, including 4 professional and 6 amateur bouts, Gevin has
                competed in prestigious tournaments such as the WBC Amazing Muay
                Thai Festival in Bangkok (2024), the WBC Muay Thai Sri Lanka
                (2023), and the IMO tournament in Indonesia (2022). His
                achievements and dedication serve as an inspiration to fighters
                striving for excellence.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-black py-20">
        <h1 className="font-bold text-[2.6rem] md:text-[3rem] text-center text-white px-6">
          OUR FIGHTHERS
        </h1>
        <div className="flex items-center justify-center">
          <CardSlider />
        </div>
      </section>
      <section className="bg-black">
        <div className="w-full mx-auto text-center">
          <h1 className="font-bold text-[2.6rem] text-center text-white px-6">
            CLASSES & PRICING
          </h1>
          <h3 className="font-bold text-[1.5rem] text-center text-white px-6 py-10">
            PERSONAL TRAINING
          </h3>
        </div>
        <div className="flex flex-col lg:flex-row gap-16 mx-auto justify-center py-[30px] px-[2rem] lg:px-[10rem] 2xl:px-[20rem]">
          <div className="flex flex-col justify-start items-start">
          <ClassCard
            heading="With Coach vimukthi"
            image={Images.Images.TrainCoach}
            description="Personal training is custom made to meet your personal requirements and fitness level with attention to detail which will help you achieve your goals faster."
            content={
              <div>
              <div className="flex flex-col algin-center text-center leading-[30px] text-[16px] pb-4">
                <p className="font-bold">Coach Vimukthi One on One</p>
                <p>04 Sessions = Rs.22,000/=</p>
                <p>08 Sessions = Rs.44,000/=</p>
                <p>12 Sessions = Rs.66,000/=</p>
              </div>
              <div className="flex flex-col algin-center text-center leading-[30px] text-[16px]">
                <p className="font-bold">Buddy package (for two)</p>
                <p>04 Sessions = Rs.32,000/=</p>
                <p>08 Sessions = Rs.64,000/=</p>
                <p>12 Sessions = Rs.96,000/=</p>
              </div>
              </div>
            }
          />
          </div>
          <div className="flex flex-col justify-start items-start">
          <ClassCard
            heading="With Coach Gevin"
            image={Images.Images.TrainGevin}
            description="Personal training is custom made to meet your personal requirements and fitness level with attention to detail which will help you achieve your goals faster."
            content={
              <div>
              <div className="flex flex-col algin-center text-center leading-[30px] text-[16px] pb-4">
                <p className="font-bold">Coach Gevin One on One</p>
                <p>04 Sessions = Rs.16,000/=</p>
                <p>08 Sessions = Rs.32,000/=</p>
                <p>12 Sessions = Rs.48,000/=</p>
              </div>
              <div className="flex flex-col algin-center text-center leading-[30px] text-[16px]">
                <p className="font-bold">Buddy package (for two)</p>
                <p>04 Sessions = Rs.16,000/=</p>
                <p>08 Sessions = Rs.32,000/=</p>
                <p>12 Sessions = Rs.48,000/=</p>
              </div>
              </div>
            }
          />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-16 mx-auto justify-center py-[30px] px-[2rem] lg:px-[5rem]  2xl:px-[10rem]">
          <div className="flex flex-col justify-start items-center">
            <img src={Images.Icons.Kid_Icon} className="w-[30px] "></img>
            <h3 className="text-white font-bold text-[30px] text-center pt-[10px] pb-[30px]">
              KIDS CLASS
            </h3>
            <ClassCard
              image={Images.Images.Kid}
              description="Personal training is custom made to meet your personal requirements and fitness level with attention to detail which will help you achieve your goals faster."
              content={
                <div className="flex flex-col algin-center text-center leading-[30px] text-[16px]">
                  <p>Per Session = Rs.1,500/=</p>
                  <p>08 Sessions = Rs.8,000/=</p>
                  <p>12 Sessions = Rs.12,000/=</p>
                </div>
              }
            />
          </div>
          <div className="flex flex-col justify-start items-center ">
            <img src={Images.Icons.Basic_Icon} className="h-[71px] "></img>
            <h3 className="text-white font-bold text-[30px] text-center pt-[10px] pb-[30px] ">
              BASIC CLASS
            </h3>
            <ClassCard
              image={Images.Images.basic}
              description="Personal training is custom made to meet your personal requirements and fitness level with attention to detail which will help you achieve your goals faster."
              content={
                <div className="flex flex-col algin-center text-center leading-[30px] text-[16px]">
                  <p>Per Session = Rs.1,500/=</p>
                  <p>08 Sessions = Rs.8,000/=</p>
                  <p>12 Sessions = Rs.12,000/=</p>
                </div>
              }
            />
          </div>
          <div className="flex flex-col justify-start items-center">
            <img
              src={Images.Icons.Intermediate_Icon}
              className="h-[71px] "
            ></img>
            <h3 className="text-white font-bold text-[30px] text-center pt-[10px] pb-[30px]">
              INTERMEDIATE CLASS
            </h3>
            <ClassCard
              image={Images.Images.intermediate}
              description="Personal training is custom made to meet your personal requirements and fitness level with attention to detail which will help you achieve your goals faster."
              content={
                <div className="flex flex-col algin-center text-center leading-[30px] text-[16px]">
                  <p>Per Session = Rs.1,500/=</p>
                  <p>08 Sessions = Rs.8,000/=</p>
                  <p>12 Sessions = Rs.12,000/=</p>
                </div>
              }
            />
          </div>
        </div>
      </section>
      <section className="grid-layout bg-black ">
        <img src={Images.Images.Registration} className="grid-img"></img>
        <div className="text-white text-center flex flex-col items-center grid-text">
          <h1 className="font-bold text-[2rem] md:text-[3rem]">REGISTRAION</h1>
          <p className="font-bold text-[1rem] md:text-[1.4rem] pt-[20px]">
            Register now for just Rs. 2,500/=
          </p>
          <p className="text-[0.8rem] md:text-[1.2rem] pb-[50px] px-8 md:px-20 lg:px-32 xl:px-[300px] 2xl:px-[500px]">
            and train with experienced coaches in a supportive environment.
            Whether you're new or experienced, our gym offers world-class Muay
            Thai training to help you reach your fitness and martial arts goals.
          </p>
          <Button
            text="Contact us"
            className="px-6 py-1"
            onClick={() => {
              console.log("Click");
            }}
          ></Button>
        </div>
      </section>
      <section className="grid-layout bg-white py-[5rem] overflow-hidden">
        <img
          src={Images.Images.Terms}
          className="grid-img scale-[2] translate-x-[10rem]"
        ></img>
        <div className="text-black text-center flex flex-col items-center grid-text">
          <h1 className="font-bold text-[2rem]  md:text-[3rem]">
            TERMS & CONDITIONS
          </h1>
          <p className="text-[0.8rem] md:text-[1.2rem] pb-[50px] px-8 md:px-20 pt-4 lg:px-32 xl:px-[300px]  2xl:px-[500px]">
            By joining our Muay Thai gym, you agree to our terms and conditions,
            which outline membership policies, cancellation procedures, and gym
            conduct guidelines. Please review these carefully to ensure a safe
            and enjoyable experience for all members.
          </p>
          <Button
            text="Download PDF"
            className="px-6 py-1 bg-transparent text-black border-black hover:bg-white hover:text-black"
            onClick={() => {
              console.log("Click");
            }}
          ></Button>
        </div>
      </section>
      {/* <section className="grid-layout bg-black py-[5rem] overflow-hidden">
        <img src={Images.Images.Pay} className="grid-img scale-[2]"></img>
        <div className="text-white text-center flex flex-col items-center grid-text">
          <h1 className="font-bold text-[2rem]  md:text-[3rem]">
            PAY FOR LESSONS
          </h1>
          <p className="text-[0.8rem] md:text-[1.2rem] pb-[50px] px-8 md:px-20 pt-4 lg:px-32 xl:px-[300px]  2xl:px-[500px]">
            Easily and securely complete your payment for memberships and
            classes. Click below to access our payment portal and finalize your
            transaction. Thank you for choosing our gym!
          </p>
          <Button
            text="Pay Here"
            className="px-6 py-1 "
            onClick={() => {
              console.log("Click");
            }}
          ></Button>
        </div>
      </section> */}
      <section>
        <FAQ items={faqItems} />
      </section>
      <section>
        <div className="bg-black flex flex-col lg:flex-row justify-center items-center lg:justify-start gap-4 2xl:gap-0">
          <div className="text-white text-center lg:text-left">
            <h1 className="font-bold text-[60px] lg:px-20 2xl:px-40">
              Contact Us
            </h1>
            <p className="px-2 md:px-20 pt-4 xl:w-[80%] 2xl:w-[80%] 2xl:text-[1.2rem] 2xl:pl-40">
              Have questions or need more information? We're here to help! Reach
              out to us with any inquiries about our classes, memberships, or
              facilities.{" "}
            </p>
            <div className="pt-8 flex flex-col justify-center items-center lg:items-start lg:px-20 2xl:px-40">
              <Contact icon={Images.Icons.Email} description="Email us" />
              <Contact icon={Images.Icons.Phone} description="Call us now" />
              <Contact icon={Images.Icons.WA} description="Whatsapp us" />
            </div>
            <div className="py-6">
              <div>
                <p className="text-white text-center lg:text-left lg:px-20 2xl:px-40">
                  Follow us
                </p>
              </div>
              <div className="flex justify-center items-center lg:justify-start gap-8 pt-4 lg:px-20 2xl:px-40">
                <img className="w-6 h-6" src={Images.Icons.Insta} ></img>
                <img className="w-6 h-6" src={Images.Icons.Fb}></img>
                <img className="w-6 h-6" src={Images.Icons.YT}></img>
                <img className="w-6 h-6" src={Images.Icons.LinkedIn}></img>
              </div>
            </div>
          </div>
          <div className="lg:pr-20 2xl:pr-40">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.6638422587234!2d79.88821517568138!3d6.930722618295803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25b8b8f68da7b%3A0x1a917a441b00b936!2sVanquish%20Muay%20Thai%20%26%20Fitness!5e0!3m2!1sen!2slk!4v1739283274462!5m2!1sen!2slk" width="600" height="450"   loading="lazy"></iframe>
          </div>
        </div>
      </section>
      <section className="pt-[150px] bg-black">
        <img src={Images.Images.GroupPic} className="w-full" />
      </section>
      <Footer />
    </>
  );
};

export default MainPage;
