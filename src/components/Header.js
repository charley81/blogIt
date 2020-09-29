import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { Link } from 'gatsby'

const NavLink = styled(Link)`
  color: #222;
  font-size: 1rem;
  margin-right: 1rem;
  text-decoration: none;
  font-weight: ${props => props.fontweight || 'normal'};

  &.current-page {
    border-bottom: 2px solid #222;
  }

  &:last-of-type {
    margin-right: 0;
  }
`

const Header = () => (
  <header
    css={css`
      background: #eee;
      border-bottom: 1px solid #ddd;
      display: flex;
      justify-content: space-between;
      padding: 0.5rem calc((100vw - 550px) / 2);
      height: 50px;
      align-items: center;
      margin: 0;

      nav {
        margin: 0;
      }
    `}
  >
    <NavLink to='/' fontWeight='bold'>
      blogIt
    </NavLink>
    <nav>
      <NavLink to='/' activeClassName='current-page'>
        Home
      </NavLink>
      <NavLink to='/about' activeClassName='current-page'>
        About
      </NavLink>
    </nav>
  </header>
)

export default Header
