import { Page } from "../shared/types"
import { motion } from 'framer-motion'
import { classes } from '../constants'

type Props = {
  setSelectedPage: (value: Page) => void
}

type Class = {
  img: string,
  name: string,
  description: string
}

const ClassCard = ({ img, name, description }: Class) => {
  const overlayStyles = 'p-5 absolute z-[20] flex h-full w-[450px] flex-col items-center justify-center whitespace-normal bg-primary-500 text-center text-white opacity-0 duration-500 hover:opacity-90'
  return (
    <li className="relative mx-5 inline-block w-[450px] object-contain">
      <div className={`${overlayStyles}`}>
        <h4 className="text-2xl">{name}</h4>
        <p className="mt-5">{description}</p>
      </div>
      <img src={img} alt={`${img}`} />
    </li>
  )
}

const Classes = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="bg-primary-100 w-full py-40">
      <motion.div onViewportEnter={() => setSelectedPage(Page.OurClasses)}>
        <motion.div
          className="mx-auto w-5/6"
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
          }}
        >
          <div className="md:w-3/5">
            <h2 className='basis-3/5 font-montserrat text-3xl font-bold uppercase'>Our Classes</h2>
            <p className="py-5">
              Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
              tellus quam porttitor. Mauris velit euismod elementum arcu neque
              facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
              enim mattis odio in risus nunc.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map(({ img, name, description }, index) => (
              <ClassCard
                key={index}
                img={img}
                name={name}
                description={description}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  )
}

export default Classes