import * as React from 'react'
import { useTranslation } from 'react-i18next'
import Create from './Create'

export default function Form() {
  const [state, setState] = React.useState(true)
  const { t } = useTranslation()
  return (
    <>
      <h2>{t('Form')}</h2>
      <Create />
    </>
  )
}
