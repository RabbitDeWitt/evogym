import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Page } from '../shared/types'

type Props = {
  page: string,
  selectedPage: Page,
  setSelectedPage: (value: Page) => void
}

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as Page;

  return (
    <AnchorLink
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
      className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""} duration-500 hover:text-primary-300`}
    >
      {page}
    </AnchorLink>

  )
}

export default Link