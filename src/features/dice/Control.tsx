/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useAppDispatch } from '../../app/hooks'
import { changeMatrix, rotateXCCW, rotateXCW, rotateYCCW, rotateYCW, rotateZCCW, rotateZCW } from './diceSlice'
import { Matrix } from '../../common/Matrix'
import { _side } from './util'
import { outwrapCss, wrapCss } from './Dice'

const padding1remCss = css`
  padding: 1rem;
`

const outerwrapCss = css`
  width: 100%;
  display: flex;
  flex-grow: 1;
  overflow-y: scroll;
  flex-flow: column;
`

export function Control() {
  const dispatch = useAppDispatch()

  return (
    <>
      <div css={outerwrapCss}>
        <div css={outwrapCss} style={{ position: 'sticky', top: 0 }}>
          <button onClick={() => dispatch(rotateXCW())}>Rotate X axis clockwise</button>
          <button onClick={() => dispatch(rotateXCCW())}>Rotate X axis counterclockwise</button>
          <button onClick={() => dispatch(rotateYCW())}>Rotate Y axis clockwise</button>
          <button onClick={() => dispatch(rotateYCCW())}>Rotate Y axis counterclockwise</button>
          <button onClick={() => dispatch(rotateZCW())}>Rotate Z axis clockwise</button>
          <button onClick={() => dispatch(rotateZCCW())}>Rotate Z axis counterclockwise</button>
        </div>
        <div css={outwrapCss}>
          {Object.entries(_side).map(([side, matrices]) =>
            matrices.map((matrix, i) => (
              <div
                css={css`
                  ${wrapCss};
                  ${padding1remCss}
                `}
                key={`${side}-${i}`}
              >
                <div css={padding1remCss}>
                  <button onClick={() => dispatch(changeMatrix(matrix))}>
                    apply {side}[{i}]
                  </button>
                </div>
                <Matrix matrix={matrix} />
              </div>
            ))
          )}
        </div>
      </div>
    </>
  )
}
