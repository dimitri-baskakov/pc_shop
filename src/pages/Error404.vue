<template>
  <div class="fullscreen bg-blue text-white text-center q-pa-md flex flex-center not-found">
    <div>
      <div style="font-size: 30vh" class="not-found__title">
        404
      </div>

      <div class="text-h2 not-found__subtitle" style="opacity:.4">
        Oops. Nothing here...
      </div>

      <q-btn
        class="q-mt-xl not-found__btn"
        color="white"
        text-color="blue"
        unelevated
        to="/"
        label="Go Home"
        no-caps
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Error404'
})
</script>

<style lang="scss" scoped>
  @media (max-width: 833px) {
    .not-found {
      &__title {
        font-size: 15vh !important;
      }
      &__subtitle {
        font-size: 3vh !important;
      }
    }
  }
</style>
