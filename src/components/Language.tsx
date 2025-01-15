import * as React from 'react'
import { useStore } from 'observable-duck/react'

import i18n from '@/i18n'
import { RootStore } from '@/store'

export default function LanguageSelect(props: React.ComponentProps<'select'>) {
  const { store, duck, dispatch } = useStore(RootStore)
  return (
    <select
      name='language'
      {...props}
      onChange={(e) => dispatch(duck.ducks.lang.creators.setLanguage(e.target.value))}
    >
      {i18n.languages.map((lang) => (
        <option value={lang}>{lang}</option>
      ))}
    </select>
  )
}
