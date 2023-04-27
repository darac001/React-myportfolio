import LineGradient from "../components/LineGradient";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
// import { TfiEmail } from 'react-icons/tfi'
// import { SlPhone } from "react-icons/sl";

const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    console.log("~ e", e);
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contact" className="flex flex-col content-center justify-center md:w-4/5 mx-auto contact py-24 my-24 bg-deep-black-nav">
      {/* HEADINGS */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
        className="flex content-center justify-center pb-10"
      >
        <div>
          <p className="font-josefin font-semibold text-4xl">
            <span className="text-yellow">CONTACT ME</span> <span className="md:inline hidden">TO GET STARTED</span> 
          </p>
          <div className="flex md:justify-end my-5">
            <LineGradient width="w-full" />
          </div>
        </div>
      </motion.div>

      {/* FORM */}
      <div >


        <motion.div
          className="mx-auto w-4/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}

        >
          <form
            target="_blank"
            onSubmit={onSubmit}
            action="https://formspree.io/f/xwkjqpvd"
            method="POST"
          >
            <div className="w-full md:grid gap-5 grid-cols-2">
              <div>
                <label htmlFor="username" className="font-futura mb-4 text-dark-grey ">Name*</label>
                <input
                  className="w-full text-white bg-transparent border-[1px] focus:bg-white focus:opacity-100 focus:text-black opacity-30 font-futura placeholder-dark-grey md:p-4 pl-6"
                  type="text"
                  id="username"
                  
                  {...register("name", {
                    required: true,
                    maxLength: 100,
                  })}
                />
                {errors.name && (
                  <p className="text-red mt-1">
                    {errors.name.type === "required" && "This field is required."}
                    {errors.name.type === "maxLength" && "Max length is 100 char."}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="font-futura mb-4 text-dark-grey ">Email*</label>
                <input
                  className="w-full bg-transparent opacity-30 border-[1px] focus:opacity-100 focus:bg-white focus:text-black font-futura  placeholder-dark-grey md:p-4 pl-6 md:placeholder:inline "
                  type="text"
                  id="email"
                  
                  {...register("email", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  })}
                />
                {errors.email && (
                  <p className="text-red mt-1">
                    {errors.email.type === "required" && "This field is required."}
                    {errors.email.type === "pattern" && "Invalid email address."}
                  </p>
                )}
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="area" className="font-futura mb-4 text-dark-grey ">Message*</label>
              <textarea
                className="w-full bg-transparent border-[1px] opacity-30 focus:bg-white focus:opacity-100 focus:text-black font-futura placeholder-dark-grey p-4 pl-6"
                name="message"
                id="area"
                
                rows="4"
                cols="50"
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className="text-red mt-1">
                  {errors.message.type === "required" &&
                    "This field is required."}
                  {errors.message.type === "maxLength" &&
                    "Max length is 2000 char."}
                </p>
              )}
            </div>

            <div className="text-center md:flex justify-between content-center mt-9">
              <button
                className="py-3 px-10 h-[58px] bg-opaque-black font-futura mb-5 md:mb-0 text-white hover:bg-red hover:text-white transition duration-500"
                type="submit"
              >
                Submit now
              </button>
              {/* <div className="flex justify-left items-left md:flex-row md:mr-60 flex-col ">
                <a href="mailto:darko.skocic1@gmail.com" className="flex items-center m-1 md:mr-3 hover:opacity-40">
                  <div className="flex items-center mr-2 relative z-0 before:absolute before:-top-50 before:-left-[0px] before:h-full 
                                  before:w-full before:max-w-[40px] before:border-[1px] before:border-red before:rounded-[50%] text-red before:bg-red before:bg-opacity-20">
                    <TfiEmail className="m-2 text-[14px]" />  
                  </div>
                  <p className="font-futura text-dark-grey">darko.skocic1@gmail.com</p>  
                  
                </a>
                <div className="flex items-center m-1">
                  <div className="flex items-center mr-2 relative z-0 before:absolute before:-top-50 before:-left-[0px] before:h-full 
                                  before:w-full before:max-w-[40px] before:border-[1px] before:border-red before:rounded-[50%] text-red before:bg-red before:bg-opacity-20">
                    <SlPhone className="m-2 text-[14px]" />
                  </div>
                  <p className="font-futura text-dark-grey">+1 587-966-1920</p>
                </div>

              </div> */}

            </div>
          </form>
        </motion.div>


      </div>
    </section>
  );
};

export default Contact;
