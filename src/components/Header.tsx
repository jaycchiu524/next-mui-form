import React from 'react'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'

type Props = {}

const Nav = styled('header')`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 30px;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: black;
  color: white;
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

const Header = (props: Props) => {
  const { push } = useRouter()
  return (
    <Nav>
      <Icon>Kreatipedia</Icon>
      <Links>
        <Link onClick={() => push('/company')}>Company</Link>
        <Link onClick={() => push('/job-post')}>Job Post</Link>
      </Links>
    </Nav>
  )
}

export default Header
