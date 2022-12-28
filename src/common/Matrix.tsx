/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { TMatrix } from '../features/dice/type'
import { copyToClipboard } from './util'

export interface MatrixProps {
  matrix: TMatrix
  copy?: boolean
}

export function Matrix({ matrix, copy }: MatrixProps) {
  return (
    <>
      {copy ? (
        <div
          css={css`
            padding: 1rem;
          `}
        >
          <button onClick={() => copyToClipboard(JSON.stringify(matrix))}>copy</button>
        </div>
      ) : null}
      <div
        css={css`
          display: grid;
          gap: 0;
          grid-template: repeat(4, 1fr) / repeat(4, 1fr);
        `}
      >
        {matrix.flat().map((el, i) => (
          <span
            key={i}
            css={css`
              display: flex;
              width: 2rem;
              height: 2rem;
              justify-content: center;
              align-items: center;
              font-weight: 600;
              border-radius: 20%;
              background-color: rgb(196, 213, 228);
            `}
          >
            {el}
          </span>
        ))}
      </div>
    </>
  )
}
