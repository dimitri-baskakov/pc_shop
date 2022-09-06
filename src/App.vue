<template>
  <router-view />
</template>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App'
})
</script>

<style lang="scss">
  * {
    &::-webkit-scrollbar {
      width: 5px;
      height: 8px;
      background-color: #B3B3B3;
    }
    &::-webkit-scrollbar-thumb {
        background: #616161;
    }
  }
</style>
