<template>
  <h1>{{ message }}</h1>
  <div>
    <span>
      seat: {{ seat }}
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
    const seat = computed(() => store.state.seat.seat);
    const test = computed(() => store.getters);

    const doubleGetters = computed(() => store.getters.doubleCount);
    // const inc = () => store.commit("setCounter", counter.value + 1);

    return { seat, test, doubleGetters };
  },
  data() {
    return {
      message : 'Hello Vue!!!'
    }
  }
}
</script>