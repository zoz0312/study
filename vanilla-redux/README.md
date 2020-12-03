# Vanilla Redux
바닐라 JS에서의 Redux와 React에서의 동작 공부
<br />

📆 기간
2020.11.30

## Link
https://zoz0312.github.io/crow/

## Redux
JavaScript에서의 상태 관리를 할 수 있는 라이브러리.

### React JS
```javascript
import { createStore } from 'redux';
const DEFINE_VARIABLE = 'define';
const test = item => { type: DEFINE_VARIABLE };
const reducer = (state = [], { type, item }) => {
  switch (type) {
    case DEFINE_VARIABLE: return [{ item }, ...state];
    default: return state;
  }
}
const stroe = createStore(reducer);
export const actionCreators = { test };
export default store;
```
Redux만 사용했을 때의 기본 코드 흐름입니다.
<br />
dispatch는 해당 state를 업데이트 하는 코드에서 사용됩니다.
<br />

### React toolkit
```javascript
const test = createSlice({
  name: 'test',
  initialState: [],
  reducers: {
    define: (state, action) => {
      state.push({ item: action.payload })
    }
  }
});
const store = configureStore({ reducer: test.reducer });
export const { test } = test.actions;
export default store;
```
기존 Redux에서 코드를 간결하게 작성할 수 있는 toolkit을 사용했을때의 흐름입니다.
<br />
reducers에서 단순 mutaion을 하려면 value의 함수가 return값이 없습니다.
<br />
그렇지 않고 새로운 state를 할당해 주려면 return시 새로운 state를 반환해야합니다.
<br />
State정의는 간결해지고 기존 사용되는 부분은 약간의 수정이 필요합니다.
