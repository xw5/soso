<template>
  <div class="ss-w-[100vw] ss-h-[100vh] ss-flex ss-flex-col ss-justify-center ss-items-center">
    <div class="ss-w-full ss-flex ss-flex-col ss-rounded-[10px] ss-py-[10px] ss-items-center ss-bg-[rgba(255,255,255,.9)] ss-max-w-[1024px] ss-mx-auto ss-max-[1024px]:ss-mx-[10px] backdrop-blur-[24px]">
      <div class="ss-w-full ss-flex ss-flex-row ss-items-center ss-px-[10px]">
        <q-select
          filled
          v-model="model"
          use-input
          :dense="true"
          input-debounce="0"
          label="搜搜站"
          :options="options"
          @filter="filterFn"
          style="width: 150px"
          class="ss-mr-[10px]"
        >
          <template v-slot:no-option>
            <q-item>
              <q-item-section class="text-grey">
                No results
              </q-item-section>
            </q-item>
          </template>
        </q-select>
        <q-input outlined v-model="ph" placeholder="soso一下" class="ss-mr-[10px] ss-flex-1" :dense="true" />
        <q-btn unelevated color="primary" label="SOSO" class="ss-border-[1px] ss-border-[rgba(0,0,0,.24)] ss-border-solid ss-box-content ss-py-0 ss-rounded-[4px]" />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainPage',
  setup() {
    const stringOptions = ['百度', '必应', 'Google', '知乎'];
    const options = ref(stringOptions);
    return {
      model: '',
      options
    }
  }
})
</script>
