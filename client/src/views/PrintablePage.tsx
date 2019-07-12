import React from 'react'

import Resume from '../components/resume/Resume'
import { IResume } from '../model/Resume'

interface IPrintablePageProps {
  resume: IResume
}

const PrintablePage = ({ resume }: IPrintablePageProps) => (
  <Resume resume={resume} />
)

export default PrintablePage
