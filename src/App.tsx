/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Dice } from './features/dice/Dice'
import { Control } from './features/dice/Control'
function App() {
  return (
    <div
      css={css`
        display: flex;
        flex-flow: column;
        width: 100vw;
        height: 100vh;
        overflow: hidden;
      `}
    >
      <Dice />
      <h2
        css={css`
          padding: 1rem 1rem 0 1rem;
          font-weight: 300;
        `}
      >
        Controls
      </h2>
      <Control />
    </div>
  )
}

export default App
