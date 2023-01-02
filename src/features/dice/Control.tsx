/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useAppDispatch } from '../../app/hooks'
import {
  changeMatrix,
  rotateXCCW,
  rotateXCW,
  rotateYCCW,
  rotateYCW,
  rotateZCCW,
  rotateZCW,
  toggleUntilt,
} from './diceSlice'
import { Matrix } from '../../common/Matrix'
import { _side } from './util'
import { outwrapCss, wrapCss } from './Dice'
import { useEffect, useRef, useState } from 'react'

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
  const [shaking, setShaking] = useState<boolean>(false)
  const refTimer = useRef<number | null>(null)
  const button1 = useRef<HTMLButtonElement>(null)
  const button2 = useRef<HTMLButtonElement>(null)
  const button3 = useRef<HTMLButtonElement>(null)
  const button4 = useRef<HTMLButtonElement>(null)
  const button5 = useRef<HTMLButtonElement>(null)
  const button6 = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (shaking === true && refTimer.current === null) {
      let count = 30
      refTimer.current = setInterval(() => {
        const buttons = [button1, button1, button1, button3, button3, button3, button3, button3, button5]
        const ran = Math.floor(Math.random() * buttons.length)
        buttons[ran].current?.click()
        count--
        if (count === 0) {
          clearInterval(refTimer.current!)
          refTimer.current = null
          setShaking(false)
        }
      }, 70) as unknown as number
    }
  }, [shaking])

  useEffect(() => () => clearInterval(refTimer.current!), [])

  return (
    <>
      <div css={outerwrapCss}>
        <div css={outwrapCss} style={{ position: 'sticky', top: 0 }}>
          <button ref={button1} onClick={() => dispatch(rotateXCW())}>
            Rotate X axis clockwise
          </button>
          <button ref={button2} onClick={() => dispatch(rotateXCCW())}>
            Rotate X axis counterclockwise
          </button>
          <button ref={button3} onClick={() => dispatch(rotateYCW())}>
            Rotate Y axis clockwise
          </button>
          <button ref={button4} onClick={() => dispatch(rotateYCCW())}>
            Rotate Y axis counterclockwise
          </button>
          <button ref={button5} onClick={() => dispatch(rotateZCW())}>
            Rotate Z axis clockwise
          </button>
          <button ref={button6} onClick={() => dispatch(rotateZCCW())}>
            Rotate Z axis counterclockwise
          </button>
          <button onClick={() => setShaking(true)} disabled={shaking}>
            Shaking!
          </button>
          <button onClick={() => dispatch(toggleUntilt())}>Toggle tilt</button>
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
