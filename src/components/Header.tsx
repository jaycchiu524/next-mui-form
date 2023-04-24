import React from 'react'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import Image from 'next/image'

type Props = {}

const Nav = styled('header')`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0 30px;
  top: 0;
  left: 0;
  width: 100%;
  /* height: 100px; */
  background: black;
  color: white;
`

const Row = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Icon = styled('h1')`
  display: flex;
  flex-direction: row;
  align-items: center;
`
const Links = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const Link = styled('h3')`
  margin-left: 50px;
  cursor: pointer;
`

const Intro = styled('p')`
  position: relative;
  color: white;
  font-size: 12px;
`

const Header = (props: Props) => {
  const { push } = useRouter()
  return (
    <Nav>
      <Row>
        <Links>
          <Icon>Job Portal Demo</Icon>
        </Links>
        <Links>
          <Link onClick={() => push('/company')}>Company</Link>
          <Link onClick={() => push('/job-post')}>Job Post</Link>
        </Links>
      </Row>

      <Intro>
        Welcome to our website demo, showcasing the integration of Next.js,
        Material-UI, and React Hook Form to create job portal form. This demo
        highlights the seamless combination of these technologies for building
        robust and user-friendly web applications.
      </Intro>
    </Nav>
  )
}

export default Header
