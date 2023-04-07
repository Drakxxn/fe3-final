import React from 'react'
import Form from '../Components/Form'
import { useTheme } from '../Components/utils/global.context'

const Contact = () => {
  const {theme} = useTheme()
  return (
    <div className={theme.footerBody}>
      <h2 className={theme.title}>Want to know more?</h2>
      <p className={theme.text}>Send us your questions and we will contact you</p>
      <Form/>
    </div>
  )
}

export default Contact