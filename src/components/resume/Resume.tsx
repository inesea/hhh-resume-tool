import React from 'react'
import A4Page from '../page/A4Page'
import ColumnLayout from '../columnLayout/ColumnLayout'
import MainColumn from '../columnLayout/MainColumn'
import SecondaryColumn from '../columnLayout/SecondaryColumn'
import IResume from '../../model/Resume'

interface IResumeProps {
  resume: IResume
}

const Resume = ({ resume }: IResumeProps) => (
  <A4Page>
    <ColumnLayout>
      <MainColumn resume={resume} />
      <SecondaryColumn resume={resume} />
    </ColumnLayout>
  </A4Page>
)

export default Resume
