import React from 'react'
import { Page } from '../shared/types'

type Props = {
  setSelectedPage: (value: Page) => void
}

const Contact = ({ setSelectedPage }: Props) => {
  return (
    <section>
      Contact
    </section>
  )
}

export default Contact