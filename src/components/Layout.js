import React from 'react'
import { Global, css } from '@emotion/core'

const Layout = ({ children }) => (
  <>
    <Global
      styles={css`
        box-sizing: border-box;
        margin: 0;

        * + * {
          margin-top: 1rem;
        }

        html,
        body {
          margin: 0;
          font-family: 'Courier Prime', monospace;
          font-size: 1.2rem;
          line-height: 1.5;
          color: #555;
        }

        /* remove margin for main div that gatsby mounts into */
        > div {
          margin-top: 0;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          line-height: 1.1;
          color: #222;

          + * {
            margin-top: 0.5rem;
          }
        }

        strong {
          color: #222;
        }

        li {
          margin-top: 0.25rem;
        }
      `}
    />
    <header />
    <main
      css={css`
        margin: 2rem auto 4rem;
        max-width: 90vw;
        width: 550px;
      `}
    >
      {children}
    </main>
  </>
)

export default Layout
