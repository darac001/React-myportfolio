import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import { AiFillHtml5 } from "react-icons/ai";
import { SiCss3, SiReact, SiJavascript, SiTailwindcss } from "react-icons/si";
import python from "../assets/python.svg";
import Tools from "../components/Tools";




const MySkills = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (

    <section id="skills" className="md:pt-10 md:pb-24 md:grid md:grid-cols-4 md:gap-x-48">
      {isAboveMediumScreens ? (<>

        <div className="skills col-span-3">
          {/* skills title*/}
          <div className="md:flex md:justify-between mt-32">
            <motion.div
              className="md:w-1/3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}

              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="font-josefin font-semibold text-4xl mb-5">
                SK<span className="text-red">ILLS</span>
              </p>
              <LineGradient width="w-1/3" />
            </motion.div>
          </div>

          {/* SKILLS */}
          <div className="md:grid md:grid-cols-4 md:gap-x-24 md:mt-6">
            {/* html */}
            <motion.div
              className=" mt-5 text-center flex flex-col justify-center items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: -50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="h-32 card flex justify-center items-center">
                <div className="z-10">
                  <AiFillHtml5 className="text-[100px] fill-red mx-1.5" />
                </div>

              </div>
              <p className="mt-5 text-center text-[20px] font-josefin text-grey">
                HTML
              </p>
            </motion.div>
            {/* css */}
            <motion.div
              className="mt-10 text-center flex flex-col justify-center items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: -50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="h-32 card flex justify-center items-center">
                <div className="z-10">
                  <SiCss3 className="text-[80px] fill-blue mx-1.5" />
                </div>

              </div>
              <p className="mt-5 text-center text-[20px] font-josefin text-grey">
                CSS
              </p>
            </motion.div>


            {/* js */}
            <motion.div
              className=" mt-10 text-center flex flex-col justify-center items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: -50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="h-32 card flex justify-center items-center">
                <div className="z-10">
                  <SiJavascript className="text-[70px] fill-yellow-js mx-1.5" />
                </div>
              </div>
              <p className="mt-5 text-center text-[20px] font-josefin text-grey">
                Javascript
              </p>
            </motion.div>
            {/* react */}
            <motion.div
              className=" mt-10 text-center flex flex-col justify-center items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: -50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="h-32 card flex justify-center items-center">
                <div className="z-10">
                  <SiReact className="text-[80px] fill-cyan mx-1.5" />
                </div>
              </div>
              <p className="mt-5 text-center text-[20px] font-josefin text-grey">
                REACT
              </p>
            </motion.div>

            {/* tailiwinds */}

            <motion.div
              className=" mt-10 text-center flex flex-col justify-center items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: -50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="h-32 card flex justify-center items-center">
                <div className="z-10">
                  <SiTailwindcss className="text-[80px] fill-cyan-tail mx-1.5" />
                </div>
              </div>
              <p className="mt-5 text-center text-[20px] font-josefin text-grey">
                Tailwinds
              </p>
            </motion.div>

            {/* python */}
            <motion.div
              className=" mt-10 text-center flex flex-col justify-center items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: -50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="h-32 card flex justify-center items-center">
                <div className="z-10">
                  <img className="w-24" src={python} alt="python" />
                </div>
              </div>
              <p className="mt-5 text-center text-[20px] font-josefin text-grey">
                Python
              </p>
            </motion.div>

          </div>
        </div>
        <div className="tools">
          {/* tools title*/}
          <div className="md:flex md:justify-between mt-32">
            <motion.div
              className="md:w-2/3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="font-josefin font-semibold text-4xl mb-5">
                <span className="text-red">TOO</span>LS
              </p>
              <LineGradient width="w-4/5" />
            </motion.div>
          </div>
          {/* tools */}
          <div className="md:grid grid-cols-1 mt-16 ">

            <Tools />

          </div>
        </div>
      </>
      ) : (
        <div className="flex flex-col justify-center items-center text-center mt-16 mb-12">
          <motion.div
            className="md:w-1/3 mb-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}

            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p className="font-josefin font-semibold text-4xl mb-5">
              SK<span className="text-red">ILLS</span>
            </p>
            <LineGradient width="w-full" />
          </motion.div>

          {/* SKILLS */}
          
          <motion.div
              className=" w-2/3 grid grid-cols-4 gap-3 mt-5 text-center justify-center items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: -50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="h-14 flex justify-center items-center">
                <div className="z-10">
                  <AiFillHtml5 className="text-[60px] fill-red" />
                </div>
              </div>
              <div className="h-14 flex justify-center items-center">
                <div className="z-10">
                  <SiCss3 className="text-[50px] fill-blue" />
                </div>
              </div>
              <div className="h-14 flex justify-center items-center">
                <div className="z-10">
                  <SiJavascript className="text-[45px] fill-yellow-js" />
                </div>
              </div>
              <div className="h-14 flex justify-center items-center">
                <div className="z-10">
                  <SiReact className="text-[50px] fill-cyan" />
                </div>
              </div>
              <div></div>
              <div className="h-14 flex justify-center items-center">
                <div className="z-10">
                  <SiTailwindcss className="text-[50px] fill-cyan-tail" />
                </div>
              </div>
              <div className="h-14 flex justify-center items-center">
                <div className="z-10 w-9">
                  <img src={python} alt="python" />
                </div>
              </div>
            </motion.div>
            <div className="tools">
          {/* tools title*/}
          <div className="md:flex md:justify-between mt-14">
            <motion.div
              className="md:w-2/3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="font-josefin font-semibold text-4xl mb-5">
                <span className="text-red">TOO</span>LS
              </p>
              <LineGradient width="w-4/5" />
            </motion.div>
          </div>
          {/* tools */}
          <div className="md:grid grid-cols-1 mt-16 ">

            <Tools />

          </div>
        </div>
          
        </div>)}

    </section>


  );
};

export default MySkills;


