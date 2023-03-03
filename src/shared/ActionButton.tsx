import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { Page } from "./types"

type Props = {
  children: React.ReactNode,
  setSelectedPage: (value: Page) => void
}

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
      className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white duration-300"
      onClick={() => setSelectedPage(Page.ContactUs)}
      href={`#${Page.ContactUs}`}
    >
      {children}
    </AnchorLink>
  )
}

export default ActionButton