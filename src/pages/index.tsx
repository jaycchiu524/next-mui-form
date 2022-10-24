import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Header from '@/components/Header'

const App = styled('div')`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  min-height: 100vh;
  background: white;
  color: black;
`

const Home: NextPage = () => {
  const { push } = useRouter()

  useEffect(() => {
    push('/company')
  }, [])
  return (
    <App>
      <Header />
    </App>
  )
}

export default Home
