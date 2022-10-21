import React from 'react'
import { useRouter } from 'next/router'

type Props = {}

const Company = (props: Props) => {
  const { query } = useRouter()
  const { id } = query

  return <div>id: {id}</div>
}

export default Company
