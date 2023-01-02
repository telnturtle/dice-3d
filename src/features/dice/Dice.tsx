/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { ReactElement } from 'react'
import { selectMatrix, selectUntilt } from './diceSlice'
import { useAppSelector } from '../../app/hooks'
import { D6 } from '../../common/D6'
import { makeMatrix3dTextFromMatrix, matrixToTopside, multiplyMatrix } from './util'
import { Matrix } from '../../common/Matrix'
import { TMatrix } from './type'

export const outwrapCss = css`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 0 1rem;
  box-sizing: border-box;
`

export const wrapCss = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-width: 10rem;
  max-width: 20rem;
  padding: 1rem 0;
  box-sizing: border-box;
`

/**
 * ⚀ ⚁ ⚂ ⚃ ⚄ ⚅
 */
export function Dice(): ReactElement {
  const matrix = useAppSelector(selectMatrix)
  const untilt = useAppSelector(selectUntilt)
  return (
    <div css={outwrapCss}>
      <div
        css={css`
          ${wrapCss};
          justify-content: space-evenly;
        `}
      >
        <D6 matrix3d={makeMatrix3dTextFromMatrix(tiltMatrix(matrix))} />
        <D6 matrix3d={makeMatrix3dTextFromMatrix(matrix)} />
        <D6 matrix3d={makeMatrix3dTextFromMatrix(untilt ? matrix : tiltMatrix(matrix))} />
      </div>
      <div css={wrapCss}>
        <Matrix matrix={matrix} copy />
      </div>
      <div css={wrapCss} style={{ fontWeight: 300 }}>{`topside: ${matrixToTopside(matrix)}`}</div>
    </div>
  )
}

function tiltMatrix(matrix: TMatrix) {
  return multiplyMatrix(
    multiplyMatrix(matrix, [
      [1, 0, 0, 0],
      [0, Math.cos(-Math.PI / 16), Math.sin(-Math.PI / 16), 0],
      [0, -Math.sin(-Math.PI / 16), Math.cos(-Math.PI / 16), 0],
      [0, 0, 0, 1],
    ]),
    [
      [Math.cos(Math.PI / 16), 0, Math.sin(Math.PI / 16), 0],
      [0, 1, 0, 0],
      [-Math.sin(Math.PI / 16), 0, Math.cos(Math.PI / 16), 0],
      [0, 0, 0, 1],
    ]
  )
}
