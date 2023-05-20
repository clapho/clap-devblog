'use client'

import Link from 'next/link'
import styled from 'styled-components'

export default function Header() {
  return (
    <HeaderLayout>
      <Link href="/">
        <h1>Clap devlog</h1>
      </Link>
      <Nav>
        <Link href="/about">About</Link>
        <Link href="/posts">Posts</Link>
      </Nav>
    </HeaderLayout>
  )
}

const HeaderLayout = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
`
const Nav = styled.nav`
  & a {
    padding: 0 8px;
  }
`
