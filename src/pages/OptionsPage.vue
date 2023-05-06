<template>
  <div class="fullscreen bg-blue text-white text-center q-pa-md flex flex-center">
      <div>OptionsPage</div>

      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="blue"
        unelevated
        to="/"
        label="Go Home"
        no-caps
      />
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'OptionsPage'
})
</script>
