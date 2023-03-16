import React from 'react'
import { motion } from "framer-motion";
import { SiGit, SiGithub, SiNpm, SiFigma, SiAirtable } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";

const tools = [
    { id: 1, logo: <SiGit className="text-[30px] fill-white" />, title: "Git" },
    { id: 2, logo: <SiGithub className="text-[30px] fill-white" />, title: "Github" },
    { id: 3, logo: <SiNpm className="text-[30px] fill-white" />, title: "Npm" },
    { id: 4, logo: <TbBrandVscode className="text-[30px] fill-white" />, title: "VSCode" },
    { id: 5, logo: <SiFigma className="text-[30px] fill-white" />, title: "Figma" },
    { id: 6, logo: <SiAirtable className="text-[30px] fill-white" />, title: "Airtable" },
]
const Tools = () => {
    return (
        <div>
            {tools.map((tool, i) => {
                return (

                    <motion.div
                        className="md:w-2/3"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5, delay: i * 0.2 }}
                        variants={{
                            hidden: { opacity: 0, x: 50 },
                            visible: { opacity: 1, x: 0 },
                        }}
                    >
                        <div key={i} className="h-16 flex">
                            <p>{tool.logo}</p>
                            <p className="ml-3 text-center text-[18px] font-josefin text-grey"> {tool.title} </p>
                        </div>
                    </motion.div>
                )
            }
            )
            }
        </div>
    )
}

export default Tools



