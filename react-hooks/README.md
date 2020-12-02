# React Hooks
나만의 React Hooks 제작해보기
<br />

📆 기간
2020.12.02

## Hooks
함수형 기반 React에서 상태관리를 Class기반 React에 비해<br />
짧은 코드로 상태관리를 할 수 있습니다.

### 만든 함수들
 - [useAxios](#useAxios)
 - [useBeforeLeave](#useBeforeLeave)
 - [useClick](#useClick)
 - [useConfirm](#useConfirm)
 - [useFadeIn](#useFadeIn)
 - [useFullscreen](#useFullscreen)
 - [useInput](#useInput)
 - [useNetwork](#useNetwork)
 - [useNotification](#useNotification)
 - [usePreventLeave](#usePreventLeave)
 - [useScroll](#useScroll)
 - [useTabs](#useTabs)
 - [useTitle](#useTitle)

### useAxios
axios 요청을 하고, 재요청을 하는 trigger가 있는 함수
```javascript
// 인자
options: any = {} // axios options
axiosInstance = defaultAxios // axios instance

// 반환값
loading: boolean // 로딩 여부
error: any // catch의 에러
data: any // 가져온 데이터
refetch?: any // 데이터 다시 가져오기 위한 함수
```

### useBeforeLeave
마우스가 브라우저를 나갔는지 여부를 체크하는 함수
```javascript
// 인자
onBefore: Function // 나갔을때 실행할 함수
```

### useClick
Click evnet를 심는 함수
```javascript
// 인자
onClick: Function // 해당 ref에 담아줄 Click Event
```

### useConfirm
Confirm창을 띄우고, 확인 취소에 따른 동작 수행을 하는 함수
Click evnet를 심는 함수
```javascript
// 인자
message: string // 컨펌에 띄워줄 메시지
onConfirm: Function // 컨펌 OK시 수행할 함수
onCancle: Function // 컨펌 취소시 수행할 함수

// 반환값
Function // confirm 실행 함수 반환
```

### useFadeIn
컴포넌트 FadeIn을 하는 함수
```javascript
// 인자
duration: number // 실행 시간 (ms)
delay: number // 딜레이 (ms)
```

### useFullscreen
화면 최대화, 최소화 하는 함수
```javascript
// 인자
callback?: Function // 최대, 최소화후 실행할 함수
```

### useInput
Input에 onChange와 Filter를 제공해주는 함수
```javascript
// 인자
argValue: string // input 초기값
validator: Function // filter할 함수
```

### useNotification
브라우저 알림을 띄워주는 함수
```javascript
// 인자
argValue: string // input 초기값
validator: Function // filter할 함수
```

### useNetwork
네트워크 online 여부
```javascript
// 인자
onChange?: Function // 온, 오프라인 change일 때, 호출할 함수
```

### usePreventLeave
브라우저를 나가는지 여부를 확인해주는 함수
```javascript
// 반환값
enablePrevent: Function // 활성화하는 함수
disablePrevent: Function // 비활성화하는 함수
```

### useScroll
화면 스크롤 값을 제공해주는 함수
```javascript
// 반환값
{
  enablePrevent: Function // 활성화하는 함수
  disablePrevent: Function // 비활성화하는 함수
}
```

### useTabs
탭 컨트롤과 관련된 내용을 제공해주는 함수
```javascript
// 반환값
{
  x: number // Scroll X
  y: number // Scroll Y
}
```

### useTitle
Title의 값을 수정해주는 함수
```javascript
// 인자
initalTab: number // 초기화 할 현재 탭
allTabs: object[] // 전체 탭

// 반환값
{
  currentItem: object // 현제 Tab 정보
  changeItem: Dispatch<React.SetStateAction<number>> // 현제 탭 업데이트 할 dispatch
}
```