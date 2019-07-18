import React from 'react'

import Page1 from '../components/resume/Page1'
import Page2 from '../components/resume/Page2'

import { IResume } from '../model/Resume'

interface IPrintablePageProps {
  resume: IResume
}

const PrintablePage = ({ resume }: IPrintablePageProps) => (
  <>
    <Page1 resume={resume} printable />
    <Page2 resume={resume} printable />
  </>
)

export default PrintablePage
