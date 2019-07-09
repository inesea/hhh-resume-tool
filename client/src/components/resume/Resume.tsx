import React from 'react'
import A4Page from '../page/A4Page'
import ColumnLayout from '../columnLayout/ColumnLayout'
import MainColumn from '../primaryColumn/PrimaryColumn'
import SecondaryColumn from '../secondaryColumn/SecondaryColumn'
import { IResume } from '../../model/Resume'

interface IResumeProps {
  resume: IResume
}

const Resume = ({ resume }: IResumeProps) => (
  <div id="resume">
    <A4Page>
      <ColumnLayout>
        <MainColumn resume={resume} />
        <SecondaryColumn resume={resume} />
      </ColumnLayout>
    </A4Page>
  </div>
)

export default Resume
