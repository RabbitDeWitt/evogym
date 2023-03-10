import { Page } from '../shared/types'
import { benefits } from '../constants'
import { motion } from 'framer-motion'
import { IconType } from 'react-icons'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { ActionButton } from '../shared'
import { BenefitsPageGraphic } from '../assets'

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 }
  },

}

type Props = {
  setSelectedPage: (value: Page) => void
}

type benefit = {
  icon: IconType,
  title: string,
  description: string,
  setSelectedPage: (value: Page) => void
}

const BenefitCard = ({ icon, title, description, setSelectedPage }: benefit) => {
  const childVarient = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  }
  const cardIcon = (Icon: IconType) => <Icon className='w-6 h-6' />
  return (
    <motion.div
      className='mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center'
      variants={childVarient}
    >
      <div className='mb-4 flex justify-center'>
        <div className='rounded-full border-2 border-gray-100 bg-primary-100 p-4'>
          {cardIcon(icon)}
        </div>
      </div>

      <h4 className='font-bold'>{title}</h4>
      <p className='my-3'>{description}</p>
      <AnchorLink className='text-sm font-bold text-primary-500 underline hover:text-secondary-500' onClick={() => setSelectedPage(Page.ContactUs)} href={`#${Page.ContactUs}`}>
        <p>Learn More</p>
      </AnchorLink>

    </motion.div >
  )
}

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id='benefits' className='mx-auto min-h-full w-5/6 py-20'>
      <motion.div
        onViewportEnter={() => setSelectedPage(Page.Benefits)}
      >

        <motion.div
          className='md:w-3/5'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
          }}
        >
          <h2 className='basis-3/5 font-montserrat text-3xl font-bold uppercase'>
            More than just a gym.
          </h2>
          <p className='my-5 text-sm'>
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        </motion.div>

        <motion.div
          className='md:flex items-center justify-between gap-8 mt-5'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map(({ icon, title, description }, index) => (
            <BenefitCard key={index} icon={icon} title={title} description={description} setSelectedPage={setSelectedPage} />
          ))}
        </motion.div>

        <div className='mt-16 items-center justify-between gap-20 md:flex md:mt-28'>

          <img src={BenefitsPageGraphic} alt="benefits-page-graphic" className='mx-auto' />

          <div>

            <div className='relative'>
              <div className='before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves'>
                <motion.div
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 }
                  }}
                >
                  <h2 className='basis-3/5 font-montserrat text-3xl font-bold uppercase'>
                    Millions of happy members getting <span className='text-primary-500'>fit</span>.
                  </h2>
                </motion.div>
              </div>
            </div>

            <motion.div
              className='max-w-[760px]'
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 }
              }}
            >
              <p className='my-5'>
                Nascetur aenean massa auctor tincidunt. Iaculis potenti amet
                egestas ultrices consectetur adipiscing ultricies enim. Pulvinar
                fames vitae vitae quis. Quis amet vulputate tincidunt at in
                nulla nec. Consequat sed facilisis dui sit egestas ultrices
                tellus. Ullamcorper arcu id pretium sapien proin integer nisl.
                Felis orci diam odio.
              </p>
              <p className='mb-5'>
                Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
                tellus quam porttitor. Mauris velit euismod elementum arcu neque
                facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
                enim mattis odio in risus nunc.
              </p>
            </motion.div>


            <div className='relative mt-16'>
              <div className='before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles'>
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>


          </div>


        </div>

      </motion.div>
    </section>
  )
}

export default Benefits