<template>
  <h1>{{ message }}</h1>
  <div>
    <span>
      counter: {{ counter }}
    </span>
    <span>
      test: {{ test }}
    </span>
    <span>
      doubleGetters: {{ doubleGetters }}
    </span>
  </div>
</template>

<script>
import { computed, onMounted, toRef } from "vue";
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();
    const counter = computed(() => store.state.seat.count);
    const test = computed(() => store.getters);

    const doubleGetters = computed(() => store.getters.doubleCount);
    const inc = () => store.commit("setCounter", counter.value + 1);

    return { counter, test, doubleGetters };
  },
  data() {
    return {
      message : 'Hello Vue!!!'
    }
  }
}
</script>