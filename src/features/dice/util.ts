import { TMatrix } from './type'

export const identityMatrixFourByFour: TMatrix = [
  [1, 0, 0, 0],
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 0, 0, 1],
]

export function multiplyMatrix(matrix1: TMatrix, matrix2: TMatrix) {
  const i1 = matrix1.length
  const j1 = matrix1[0].length
  const j2 = matrix2[0].length

  const answer = [] /* answer is i1 x j2 */

  for (let i = 0; i < i1; i++) {
    const row = []
    for (let j = 0; j < j2; j++) {
      let sum = 0
      for (let k = 0; k < j1; k++) {
        sum += matrix1[i][k] * matrix2[k][j]
      }
      row.push(sum)
    }
    answer.push(row)
  }
  /* https://ko.wikipedia.org/wiki/%ED%96%89%EB%A0%AC_%EA%B3%B1%EC%85%88 */

  return answer
}

export const rotatorMatrices = {
  xcw: [
    [1, 0, 0, 0],
    [0, 0, 1, 0],
    [0, -1, 0, 0],
    [0, 0, 0, 1],
  ],
  xccw: [
    [1, 0, 0, 0],
    [0, 0, -1, 0],
    [0, 1, 0, 0],
    [0, 0, 0, 1],
  ],
  ycw: [
    [0, 0, -1, 0],
    [0, 1, 0, 0],
    [1, 0, 0, 0],
    [0, 0, 0, 1],
  ],
  yccw: [
    [0, 0, 1, 0],
    [0, 1, 0, 0],
    [-1, 0, 0, 0],
    [0, 0, 0, 1],
  ],
  zcw: [
    [0, 1, 0, 0],
    [-1, 0, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1],
  ],
  zccw: [
    [0, -1, 0, 0],
    [1, 0, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1],
  ],
}

export function makeMatrix3dTextFromMatrix(matrix: TMatrix): string {
  return `matrix3d(${matrix.flat().join(',')})`
}

export const _side = {
  1: [
    [
      [1, 0, 0, 0],
      [0, 1, 0, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 1],
    ],
    [
      [-1, 0, 0, 0],
      [0, -1, 0, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 1],
    ],
    [
      [0, -1, 0, 0],
      [1, 0, 0, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 1],
    ],
    [
      [0, 1, 0, 0],
      [-1, 0, 0, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 1],
    ],
  ],
  2: [
    [
      [-1, 0, 0, 0],
      [0, 0, 1, 0],
      [0, 1, 0, 0],
      [0, 0, 0, 1],
    ],
    [
      [1, 0, 0, 0],
      [0, 0, 1, 0],
      [0, -1, 0, 0],
      [0, 0, 0, 1],
    ],
    [
      [0, 1, 0, 0],
      [0, 0, 1, 0],
      [1, 0, 0, 0],
      [0, 0, 0, 1],
    ],
    [
      [0, -1, 0, 0],
      [0, 0, 1, 0],
      [-1, 0, 0, 0],
      [0, 0, 0, 1],
    ],
  ],
  3: [
    [
      [0, 0, 1, 0],
      [-1, 0, 0, 0],
      [0, -1, 0, 0],
      [0, 0, 0, 1],
    ],
    [
      [0, 0, 1, 0],
      [1, 0, 0, 0],
      [0, 1, 0, 0],
      [0, 0, 0, 1],
    ],
    [
      [0, 0, 1, 0],
      [0, 1, 0, 0],
      [-1, 0, 0, 0],
      [0, 0, 0, 1],
    ],
    [
      [0, 0, 1, 0],
      [0, -1, 0, 0],
      [1, 0, 0, 0],
      [0, 0, 0, 1],
    ],
  ],
  4: [
    [
      [0, 0, -1, 0],
      [0, 1, 0, 0],
      [1, 0, 0, 0],
      [0, 0, 0, 1],
    ],
    [
      [0, 0, -1, 0],
      [-1, 0, 0, 0],
      [0, 1, 0, 0],
      [0, 0, 0, 1],
    ],
    [
      [0, 0, -1, 0],
      [0, -1, 0, 0],
      [-1, 0, 0, 0],
      [0, 0, 0, 1],
    ],
    [
      [0, 0, -1, 0],
      [1, 0, 0, 0],
      [0, -1, 0, 0],
      [0, 0, 0, 1],
    ],
  ],
  5: [
    [
      [0, -1, 0, 0],
      [0, 0, -1, 0],
      [1, 0, 0, 0],
      [0, 0, 0, 1],
    ],
    [
      [1, 0, 0, 0],
      [0, 0, -1, 0],
      [0, 1, 0, 0],
      [0, 0, 0, 1],
    ],
    [
      [0, 1, 0, 0],
      [0, 0, -1, 0],
      [-1, 0, 0, 0],
      [0, 0, 0, 1],
    ],
    [
      [-1, 0, 0, 0],
      [0, 0, -1, 0],
      [0, -1, 0, 0],
      [0, 0, 0, 1],
    ],
  ],
  6: [
    [
      [1, 0, 0, 0],
      [0, -1, 0, 0],
      [0, 0, -1, 0],
      [0, 0, 0, 1],
    ],
    [
      [0, 1, 0, 0],
      [1, 0, 0, 0],
      [0, 0, -1, 0],
      [0, 0, 0, 1],
    ],
    [
      [-1, 0, 0, 0],
      [0, 1, 0, 0],
      [0, 0, -1, 0],
      [0, 0, 0, 1],
    ],
    [
      [0, -1, 0, 0],
      [-1, 0, 0, 0],
      [0, 0, -1, 0],
      [0, 0, 0, 1],
    ],
  ],
}

export function matrixToTopside(m: TMatrix) {
  if (_side[1].some((m2) => areEqual(m, m2))) return 1
  if (_side[2].some((m2) => areEqual(m, m2))) return 2
  if (_side[3].some((m2) => areEqual(m, m2))) return 3
  if (_side[4].some((m2) => areEqual(m, m2))) return 4
  if (_side[5].some((m2) => areEqual(m, m2))) return 5
  if (_side[6].some((m2) => areEqual(m, m2))) return 6
}

export function areEqual(matrix1: TMatrix, matrix2: TMatrix) {
  for (let i = 0; i < matrix1.length; i++) {
    for (let j = 0; j < matrix1[0].length; j++) {
      if (matrix1[i][j] !== matrix2[i][j]) {
        return false
      }
    }
  }
  return true
}

export function matrixToString(matrix: TMatrix) {
  return matrix.map((row) => row.map((el) => String(el).padStart(3)).join('')).join('\n')
}

export function getRepresentativeMatrix(topside: number) {
  switch (topside) {
    case 1:
      return _side[1][0]
    case 2:
      return _side[2][0]
    case 3:
      return _side[3][0]
    case 4:
      return _side[4][1]
    case 5:
      return _side[5][0]
    case 6:
      return _side[6][0]
    default:
      return _side[1][0]
  }
}

// https://gist.github.com/f5io/7466669
// Get 3D CSS rotation value from matrix3d() with JavaScript https://stackoverflow.com/questions/34450835/get-3d-css-rotation-value-from-matrix3d-with-javascript
