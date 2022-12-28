/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { ReactElement } from 'react'

const wrapCss = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5rem;
  width: 5rem;
`

export interface D6Props {
  matrix3d?: string
}

export function D6({ matrix3d = '' }: D6Props) {
  return (
    <div css={wrapCss}>
      <D6Dice {...{ matrix3d }} />
    </div>
  )
}

const diceCss = css`
  display: grid;
  grid-template-columns: 1fr;
  height: 100%;
  width: 100%;
  list-style-type: none;
  transform-style: preserve-3d;
  transition: transform 0.125s ease-in-out;
  margin-inline-start: 0;
  padding-inline-start: 0;
  margin-block-start: 0;
  margin-block-end: 0;
  & .dot {
    align-self: center;
    background-color: #666;
    border-radius: 50%;
    box-shadow: inset -0.15rem 0.15rem 0.25rem rgba(0, 0, 0, 0.5);
    display: block;
    height: calc(90%);
    width: calc(90%);
    width: calc(90%);
    justify-self: center;
  }
  & [data-die='1'] {
    transform: rotate3d(0, 0, 0, 90deg) translateZ(2.5rem);
  }
  & [data-die='2'] {
    transform: rotate3d(-1, 0, 0, 90deg) translateZ(2.5rem);
  }
  & [data-die='3'] {
    transform: rotate3d(0, 1, 0, 90deg) translateZ(2.5rem);
  }
  & [data-die='4'] {
    transform: rotate3d(0, -1, 0, 90deg) translateZ(2.5rem);
  }
  & [data-die='5'] {
    transform: rotate3d(1, 0, 0, 90deg) translateZ(2.5rem);
  }
  & [data-die='6'] {
    transform: rotate3d(1, 0, 0, 180deg) translateZ(2.5rem);
  }
  & [data-die='1'] .dot:nth-of-type(1) {
    grid-area: five;
  }
  & [data-die='2'] .dot:nth-of-type(1) {
    grid-area: one;
  }
  & [data-die='2'] .dot:nth-of-type(2) {
    grid-area: nine;
  }
  & [data-die='3'] .dot:nth-of-type(1) {
    grid-area: one;
  }
  & [data-die='3'] .dot:nth-of-type(2) {
    grid-area: five;
  }
  & [data-die='3'] .dot:nth-of-type(3) {
    grid-area: nine;
  }
  & [data-die='4'] .dot:nth-of-type(1) {
    grid-area: one;
  }
  & [data-die='4'] .dot:nth-of-type(2) {
    grid-area: three;
  }
  & [data-die='4'] .dot:nth-of-type(3) {
    grid-area: seven;
  }
  & [data-die='4'] .dot:nth-of-type(4) {
    grid-area: nine;
  }
  & [data-die='5'] .dot:nth-of-type(1) {
    grid-area: one;
  }
  & [data-die='5'] .dot:nth-of-type(2) {
    grid-area: three;
  }
  & [data-die='5'] .dot:nth-of-type(3) {
    grid-area: five;
  }
  & [data-die='5'] .dot:nth-of-type(4) {
    grid-area: seven;
  }
  & [data-die='5'] .dot:nth-of-type(5) {
    grid-area: nine;
  }
  & [data-die='6'] .dot:nth-of-type(1) {
    grid-area: one;
  }
  & [data-die='6'] .dot:nth-of-type(2) {
    grid-area: three;
  }
  & [data-die='6'] .dot:nth-of-type(3) {
    grid-area: four;
  }
  & [data-die='6'] .dot:nth-of-type(4) {
    grid-area: six;
  }
  & [data-die='6'] .dot:nth-of-type(5) {
    grid-area: seven;
  }
  & [data-die='6'] .dot:nth-of-type(6) {
    grid-area: nine;
  }
`

export interface D6DiceProps {}

const dieCss = css`
  box-shadow: inset -0.35rem 0.35rem 0.75rem rgba(0, 0, 0, 0.3), inset 0.5rem -0.25rem 0.5rem rgba(0, 0, 0, 0.15);
  border-radius: 10%;
  display: grid;
  grid-column: 1;
  grid-row: 1;
  grid-template-areas:
    'one two three'
    'four five six'
    'seven eight nine';
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  padding: calc(100% / 6);
  height: 100%;
  width: 100%;
  background: linear-gradient(
    90deg,
    rgba(191, 191, 191, 0.6752688172043011) 0%,
    rgba(9, 9, 121, 0.4473118279569892) 35%,
    rgba(149, 237, 255, 1) 100%
  );
  background: rgb(209, 209, 209);
  box-sizing: border-box;
`

export function D6Dice({ matrix3d }: { matrix3d: string }): ReactElement {
  return (
    <ol css={diceCss} style={{ transform: matrix3d }}>
      <li css={dieCss} data-die="1">
        <span className="dot" />
      </li>
      <li css={dieCss} data-die="2">
        <span className="dot" />
        <span className="dot" />
      </li>
      <li css={dieCss} data-die="3">
        <span className="dot" />
        <span className="dot" />
        <span className="dot" />
      </li>
      <li css={dieCss} data-die="4">
        <span className="dot" />
        <span className="dot" />
        <span className="dot" />
        <span className="dot" />
      </li>
      <li css={dieCss} data-die="5">
        <span className="dot" />
        <span className="dot" />
        <span className="dot" />
        <span className="dot" />
        <span className="dot" />
      </li>
      <li css={dieCss} data-die="6">
        <span className="dot" />
        <span className="dot" />
        <span className="dot" />
        <span className="dot" />
        <span className="dot" />
        <span className="dot" />
      </li>
    </ol>
  )
}
