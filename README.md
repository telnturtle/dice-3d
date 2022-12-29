# dice-3d

주사위를 삼차원으로 90도 단위로 회전시키며 그에맞게 바뀌는 변환행렬을 본다.

혹은 주어진 변환행렬을 선택하여 주사위가 어떻게 돌아가는지 본다.

## 회전변환행렬

X축 회전

```math
\begin{bmatrix}1&0&0&0\\0&\cos(\theta)&\sin(\theta)&0\\0&-\sin(\theta)&\cos(\theta)&0\\0&0&0&1 \end{bmatrix}
```

Y축 회전

```math
\begin{bmatrix}\cos(\theta)&0&-\sin(\theta)&0\\0&1&0&0\\\sin(\theta)&0&\cos(\theta)&0\\0&0&0&1 \end{bmatrix}
```

Z축 회전

```math
\begin{bmatrix}\cos(\theta)&\sin(\theta)&0&0\\-\sin(\theta)&\cos(\theta)&0&0\\0&0&1&0\\0&0&0&1 \end{bmatrix}
```

이다.

$\theta$는 시계방향이며 CSS의 `transform: matrix3d()`에 회전행렬을 적용한 결과는 `transform: rotateX()`, `transform: rotateY()`, `transform: rotateZ()`과 각각 동치이다. 일례로 `transform: rotateX(90deg)`는 물체를 X축의 시계반향으로 90도 회전시킨다.

Rotation matrix: [Wikipedia](https://en.wikipedia.org/wiki/Rotation_matrix#In_three_dimensions)

Transformation matrix: [Wikipedia](https://en.wikipedia.org/wiki/Transformation_matrix#Rotation)

Markdown LaTex 수식작성법: [Air on the C String](https://velog.io/@d2h10s/LaTex-Markdown-%EC%88%98%EC%8B%9D-%EC%9E%91%EC%84%B1%EB%B2%95)

## redux-toolkit과 Create React App

처음으로 redux-toolkit을 사용해보았으며 스토어 구성에 [cra-template-redux-typescript](https://github.com/reduxjs/cra-template-redux-typescript)를 참고하였다.

[Redux 스타일 가이드](https://ko.redux.js.org/style-guide/)도 참고했다. 이전에 쓰던 모듈구조와 유사하게 features folders 접근을 적용했다. 모듈구조는 features folders의 one-feature-one-folder와 비슷하지만, JS 파일만 들어있고 컴포넌트는 바깥으로 빠져 있는 폴더구조이다. 내가 이름지은 것이라서 다른곳에서 본 적은 없다.

## 스크린샷

![주사위가 4로 되어있는 화면 스크린샷](./%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7.png)

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `yarn`

Install the dependencies for start the app.

#### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `yarn deploy`

Deploy the app to https://telnturtle.github.io/dice-3d.
