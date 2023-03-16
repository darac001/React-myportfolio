
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Landing = ({ setSelectedPage }) => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center gap-1 md:h-full py-20"
    >
      {/* IMAGE SECTION */}
      <div className="basis-2/5 z-10 mt-16 md:mt-40 md:mr-20 flex justify-center md:order-2">
        {isAboveLarge ? (
          <div
            className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10 
            before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-white  before:z-[-1]"
          >
            <img
              alt="profile"
              className="z-10 w-full max-w-[400px] md:max-w-[400px]"
              src="assets/profile.jpg"
            />
          </div>
        ) : (
          <img
            alt="profile"
            className="z-10 w-full max-w-[400px] md:max-w-[600px]"
            src="assets/profile.jpg"
          />
        )}
      </div>

      {/* MAIN TEXT */}
      <div className="z-30 basis-3/5 mt-12 md:mt-32">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="md:text-8xl font-futurabold z-10 text-center md:text-start">
            Front End {""}
            <span
              className="xs:relative xs:white xs:font-futurabold z-20 xs:before:content-splash
              before:absolute before:-left-[25px] before:-top-[40px] before:z-[-1] "
            >
              Developer
            </span>
          </p>

          <p className="tracking-widest md:relative text-2xl mb-4 font-josefin text-grey text-center md:text-start md:after:content-['']
              md:after:absolute md:after:w-[100px] md:after:bg-grey md:after:h-[1px] md:after:opacity-20 md:after:-top-[-13px] md:after:-left-[-200px]">
            DARKO SKOCIC
          </p>

          <p className="mt-10 mb-7 text-sm text-center md:text-start">Hello there! As a junior front end developer, I'm passionate about designing and developing engaging and 
            intuitive web applications that provide a seamless user experience.
            I've always been fascinated by the world of web development and design, and I'm 
            constantly seeking out new challenges and opportunities to expand my skillset. I have a 
            strong foundation in HTML, CSS, and ReactJS, and I'm always eager to learn more about 
            new technologies and best practices in the industry.</p>
        </motion.div>

        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >

          <AnchorLink
            className="rounded-sm bg-gradient-rainblue py-0.5 px-0.5"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div className="bg-deep-black py-3 hover:text-red transition duration-500 w-full h-full flex items-center justify-center px-10 font-josefin">
              Contact me
            </div>
          </AnchorLink>
        </motion.div>

      </div>

    </section>
  );
};

export default Landing;
