import React from 'react'
import SectionHeading from '../common/SectionHeading'
import { ILanguage } from '../../model/Resume'

interface ILanguagesProps {
  languages: ILanguage[]
}

const Languages = ({ languages }: ILanguagesProps) => (
  <>
    <SectionHeading>Languages</SectionHeading>
    {languages.map(language => (
      <div key={language.language}>
        {`${language.language} - ${language.fluency}`}
      </div>
    ))}
  </>
)

export default Languages
