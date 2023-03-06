import { useEffect, useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { Logo } from '../assets'
import { navLinks } from '../constants'
import Link from './Link'
import { Page } from '../shared/types'
import { ActionButton } from '../shared'

type Props = {
  selectedPage: Page,
  setSelectedPage: (value: Page) => void
}

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  const [toggle, setToggle] = useState<boolean>(false)
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true)
      } else {
        setIsTopOfPage(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])


  const flexBetween = "flex justify-between items-center"
  return (
    <header className={`${flexBetween} fixed top-0 z-30 w-full p-6 ${!isTopOfPage ? 'bg-primary-100' : 'bg-transparent'}`}>
      <div className={`${flexBetween} mx-auto w-5/6`}>
        <div className={`${flexBetween} w-full gap-16`}>
          <img src={Logo} alt="logo" />

          <div className={`justify-between items-center w-full hidden md:flex`}>
            <nav>
              <ul className={`${flexBetween} gap-8 text-sm`}>
                {navLinks.map(({ title }, index) => (
                  <Link
                    key={index}
                    page={title}
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage} />
                ))}
              </ul>
            </nav>

            <div className={`${flexBetween} gap-8`}>
              <p className='duration-300 hover:text-primary-300 cursor-pointer'>Sign In</p>
              <ActionButton setSelectedPage={setSelectedPage}>
                Become a Member
              </ActionButton>
            </div>

          </div>

          <button
            className='rounded-full bg-secondary-500 md:hidden p-2 text-white'
            onClick={() => setToggle(prev => !prev)}
          >
            <AiOutlineMenu className='h-6 w-6' />
          </button>
        </div>

      </div>

      {/* MOBILE MENU */}

      <div className={`${toggle ? 'menu-actived' : 'menu-deactivated'} md:hidden`}>
        <div className='flex justify-end p-12'>
          <button
            className='p-2 text-gray-400'
            onClick={() => setToggle(prev => !prev)}
          >
            <AiOutlineClose className='h-6 w-6' />
          </button>
        </div>

        <ul className={`flex flex-col ml-[25%] gap-10 text-2xl`}>
          {navLinks.map(({ title }, index) => (
            <Link
              key={index}
              page={title}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </ul>
      </div>

    </header>
  )
}

export default Navbar