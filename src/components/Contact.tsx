import { Page } from '../shared/types'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { ContactUsPageGraphic } from '../assets'

type Props = {
  setSelectedPage: (value: Page) => void
}

const Contact = ({ setSelectedPage }: Props) => {
  const inputStyles = 'mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder:text-white placeholder:uppercase'

  const {
    register,
    trigger,
    formState: { errors }

  } = useForm()

  const onSubmit = async (e: any) => {
    const isValid = await trigger()
    if (!isValid) e.preventDefault()
  }

  return (
    <section id='contactus' className='mx-auto w-5/6 pt-24 pb-32'>
      <motion.div onViewportEnter={() => { setSelectedPage(Page.ContactUs) }}>
        <motion.div
          className='md:w-3/5'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
          }}
        >
          <h2 className='basis-3/5 font-montserrat text-3xl font-bold uppercase'>
            <span className='text-primary-500'>Join now</span> to get in shape
          </h2>
          <p className='my-5'>
            Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl
            sapien vel rhoncus. Placerat at in enim pellentesque. Nulla
            adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.
          </p>
        </motion.div>

        <div className='mt-10 justify-between gap-8 md:flex'>
          <motion.div
            className='mt-10 basis-3/5 md:mt-0'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <form
              target='_blank'
              onSubmit={onSubmit}
              method='POST'
              action='https://formsubmit.co/f4e280d060f05db3a4cdc83ba13ec72f'
            >
              <input
                className={inputStyles}
                placeholder='Name'
                type="text"
                {...register('name', {
                  required: true,
                  maxLength: 100
                })}
              />
              {errors.name ? (
                <p className='mt-1 text-primary-500'>
                  {errors.name.type === 'required' ? 'This field is required.' : null}
                  {errors.name.type === 'maxLength' ? 'Max length is 100 character' : null}
                </p>
              ) : null}

              <input
                className={inputStyles}
                placeholder='E-mail'
                type="email"
                {...register('email', {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                })}
              />
              {errors.email ? (
                <p className='mt-1 text-primary-500'>
                  {errors.email.type === 'required' ? 'This field is required.' : null}
                  {errors.email.type === 'pattern' ? 'Invalid e-mail address' : null}
                </p>
              ) : null}

              <textarea
                className={`${inputStyles} resize-none`}
                placeholder='Message'
                rows={4}
                cols={50}
                {...register('message', {
                  required: true,
                  maxLength: 2000
                })}
              />
              {errors.message ? (
                <p className='mt-1 text-primary-500'>
                  {errors.message.type === 'required' ? 'This field is required.' : null}
                  {errors.message.type === 'maxLength' ? 'Max length is 2000 character' : null}
                </p>
              ) : null}

              <button
                className='mt-5 rounded-lg bg-secondary-500 px-20 py-3 duration-300 hover:text-white hover:bg-primary-500 uppercase'
                type="submit"
              >
                Submit
              </button>
            </form>
          </motion.div>
          <motion.div
            className='relative mt-16 basis-2/5 md:mt-0'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <div className='md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]'>
              <img src={ContactUsPageGraphic} alt="contact-us-page-graphic" className='w-full' />
            </div>

          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact