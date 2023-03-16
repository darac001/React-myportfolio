import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import { BiLinkExternal } from "react-icons/bi"




const Project = ({ title, site }) => {
 
  const projectTitle = title.split(" ").join("").toLowerCase();

  return (
    <motion.div variants={{
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    }} className="relative">

      <div className="item">
        <div className="item-image">
          <img src={`../assets/${projectTitle}.jpg`} alt={projectTitle} />
        </div>
        <div className="item-text">
          <div className="item-text-wrap">
            <p className="item-text-num text-2xl font-josefin font-semibold">{title}</p>

            <a href={site} target="_blank" rel="noreferrer">
              <div className="item-text-title">
                <p className="px-1">Live Demo </p>
                <BiLinkExternal className="mt-1"/>
              </div>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="md:pt-48 pt-24 md:pb-48 pb-24">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-josefin font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5 mb-10">
            <LineGradient width="w-1/3" />
          </div>
        </div>

      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3 gap-[1px] "
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-josefin font-semibold "
          >
            REACTJS WEB APPLICATIONS
          </div>
          <Project title="Mobile Shop E-Commerce Website" site="https://astounding-yeot-83c1a1.netlify.app/" />
          <Project title="Saigon Tours Company Website" site="https://saigon-tours.netlify.app" />

          {/* ROW 2 */}
          <Project title="HEX Shades-Tints Color Generator" site="https://color-gen-d.netlify.app/" />
          <Project title="Weather App" site="http://darac001.pythonanywhere.com/"  />
          

          <div
            className="flex justify-center text-center items-center p-10 bg-deep-black-nav
              max-w-[400px] max-h-[400px] text-2xl font-josefin font-semibold"
          >
            FLASK WEB APPLICATIONS
          </div>
        </motion.div>
      </div>
    </section >
  );
};

export default Projects;
