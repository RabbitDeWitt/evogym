import { Logo } from '../assets'
import { footerLinks } from '../constants'

const Footer = () => {
  return (
    <footer className='bg-primary-100 py-16'>
      <div className='justify-center mx-auto w-5/6 gap-16 md:flex'>
        <div className='mt-16 basis-1/2 md:mt-0'>
          <img src={Logo} alt="logo" />
          <p className='my-5'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed eaque animi eos neque iure ipsa magnam incidunt, quibusdam tenetur explicabo ducimus eum hic rem ab. Cupiditate ab quos sequi temporibus.
          </p>
          <p>
            © Evogym All Rights Reserved.
          </p>
        </div>
        <div className='mt-16 basis-1/4 md:mt-0'>
          <h4 className='font-bold'>Links</h4>
          {footerLinks.map(({ link }, index) => (
            <p key={index} className={`${index !== footerLinks.length - 1 ? 'my-5' : ''}`}>{link}</p>
          ))}
        </div>
        <div className='mt-16 basis-1/4 md:mt-0'>
          <h4 className='font-bold'>Contact Us</h4>
          <p className='my-5'>Tempus metus mattis risus volutpat egestas.</p>
          <p>(333)425-6825</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer