import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import { TMatrix } from './type'
import { identityMatrixFourByFour, multiplyMatrix, rotatorMatrices } from './util'

export interface DiceState {
  matrix: TMatrix
  untilt: boolean
}

const initialState: DiceState = {
  matrix: identityMatrixFourByFour,
  untilt: true,
}

export const diceSlice = createSlice({
  name: 'dice',
  initialState,
  reducers: {
    rotateXCW: (state) => {
      state.matrix = multiplyMatrix(state.matrix, rotatorMatrices.xcw)
    },
    rotateXCCW: (state) => {
      state.matrix = multiplyMatrix(state.matrix, rotatorMatrices.xccw)
    },
    rotateYCW: (state) => {
      state.matrix = multiplyMatrix(state.matrix, rotatorMatrices.ycw)
    },
    rotateYCCW: (state) => {
      state.matrix = multiplyMatrix(state.matrix, rotatorMatrices.yccw)
    },
    rotateZCW: (state) => {
      state.matrix = multiplyMatrix(state.matrix, rotatorMatrices.zcw)
    },
    rotateZCCW: (state) => {
      state.matrix = multiplyMatrix(state.matrix, rotatorMatrices.zccw)
    },
    changeMatrix: (state, action: PayloadAction<TMatrix>) => {
      state.matrix = action.payload
    },
    toggleUntilt: (state) => {
      state.untilt = !state.untilt
    },
  },
})

export const { rotateXCW, rotateXCCW, rotateYCW, rotateYCCW, rotateZCW, rotateZCCW, changeMatrix, toggleUntilt } =
  diceSlice.actions

export const selectMatrix = (state: RootState) => state.dice.matrix
export const selectUntilt = (state: RootState) => state.dice.untilt

export const diceReducer = diceSlice.reducer
