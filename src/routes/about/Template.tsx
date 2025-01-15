import * as React from 'react'
import { ConnectedProps } from 'observable-duck'
import Duck from './Duck'
import { useTranslation } from 'react-i18next'

export default function About(props: ConnectedProps<Duck>) {
  const { duck, store, dispatch } = props
  const [state, setState] = React.useState(true)
  const { t } = useTranslation()
  return (
    <>
      <h2>{t('关于')}</h2>
    </>
  )
}
