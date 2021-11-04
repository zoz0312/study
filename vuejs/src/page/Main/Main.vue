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

<script lang="ts">
interface fType {
  lang: string;
}

import { computed } from "vue";
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();
    const seat = computed(() => store.state.seat);
    const test = computed(() => store.getters);

    const doubleGetters = computed(() => store.getters.doubleCount);
    // const inc = () => store.commit("setCounter", counter.value + 1);
    const obj: fType = {
      lang: '123',
    }

    return { seat, test, doubleGetters };
  },
  data() {
    return {
      message : 'Hello Vue!!!'
    }
  }
}
</script>