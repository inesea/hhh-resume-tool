import React from 'react'
import styled from 'styled-components'
import MainDetail from '../sections/MainDetail'
import IResume from '../../model/Resume'

const StyledMainColumn = styled.div``

interface IMainColumnProps {
  resume: IResume
}

const MainColumn = ({ resume }: IMainColumnProps) => (
  <StyledMainColumn>
    <MainDetail
      name={resume.basics.name}
      email={resume.basics.email}
      phoneNumber={resume.basics.phone}
      summaryText={resume.basics.summary}
    />
  </StyledMainColumn>
)

export default MainColumn
