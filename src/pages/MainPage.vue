<template>
  <div class="ss-w-[100vw] ss-h-[100vh] ss-box-border ss-flex ss-flex-col ss-justify-center ss-items-center ss-px-[10px]">
    <div class="ss-w-full ss-flex ss-flex-col ss-rounded-[10px] ss-py-[10px] ss-items-center ss-bg-[rgba(255,255,255,.9)] ss-max-w-[1024px] ss-mx-auto backdrop-blur-[24px] ss-shadow-[0_0_25px_rgba(0,0,0,.3)]">
      <div class="ss-w-full ss-flex ss-flex-row ss-items-center ss-px-[10px]">
          <!-- @filter="filterFn" -->
          <!-- use-input -->
        <q-select
          filled
          v-model="searchType"
          :dense="true"
          input-debounce="0"
          label="SOSO站"
          :options="options"
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
        <q-input
          outlined
          @keydown.tab="changeSearchType"
          @keydown.enter="searchAction"
          v-model="keyword"
          placeholder="soso一下"
          class="ss-mr-[10px] ss-flex-1"
          :dense="true"
        />
        <q-btn
          unelevated
          color="primary"
          label="SOSO"
          @click="searchAction"
          class="ss-border-[1px] ss-border-[rgba(0,0,0,.24)] ss-border-solid ss-box-content ss-py-0 ss-rounded-[4px]"
        />
      </div>
    </div>
    <q-dialog v-model="isShowSosoTips">
      <q-card style="width: 350px">
        <q-card-section class="ss-flex-row ss-items-center ss-justify-center">
          <div class="text-grey">{{sosoTips}}</div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainPage',
  setup() {
    const stringOptions = [
      {
        label:'百度',
        value: 'baidu',
        url: 'https://www.baidu.com/s?wd=${query}'
      },{
        label:'必应',
        value: 'bing',
        url: 'https://cn.bing.com/search?q=${query}'
      },{
        label:'Google',
        value: 'google',
        url: 'https://www.google.com.hk/search?q=${query}'
      },{
        label:'知乎',
        value: 'zhihu',
        url: 'https://www.zhihu.com/search?q=${query}'
      },{
        label:'搜狗',
        value: 'sogou',
        url: 'http://sogou.com/web?query=${query}'
      },{
        label:'头条',
        value: 'toutiao',
        url: 'https://so.toutiao.com/search?dvpf=pc&keyword=${query}'
      },{
        label:'GitHub',
        value: 'github',
        url: 'https://github.com/search?q=${query}&type=repositories'
      },{
        label:'NPM',
        value: 'npm',
        url: 'https://www.npmjs.com/search?q=${query}'
      }
    ];
    const options = ref(stringOptions);
    const keyword = ref('');
    const sosoTips = ref('');
    const isShowSosoTips = ref(false);
    const searchTypeIndex = ref(0);
    const searchType = ref(stringOptions[0]);

    /**
     * 修改搜索类别
     */
    const changeSearchType = (e) => {
      console.log('---- changeSearchType ----:', e);
      e.preventDefault();
      let tempSearchTypeIndex = searchTypeIndex.value;
      tempSearchTypeIndex = tempSearchTypeIndex + 1;
      if (tempSearchTypeIndex >= stringOptions.length) {
        tempSearchTypeIndex = 0;
      }
      searchTypeIndex.value = tempSearchTypeIndex;
      searchType.value = stringOptions[tempSearchTypeIndex];
    }

    /**
     * 搜索页面打开
     */
    const searchAction = (e) => {
      // 搜索内容不能为空
      if (keyword.value.trim() === '') {
        sosoTips.value = '搜索内容不能为空';
        isShowSosoTips.value = true;
        setTimeout(() => {
          isShowSosoTips.value = false;
        }, 3000);
        return;
      }
      window.open(searchType.value.url.replace('${query}', keyword.value), '_blank');
    }
    return {
      searchType,
      options,
      keyword,
      isShowSosoTips,
      sosoTips,
      changeSearchType,
      searchAction,
      searchTypeIndex
    }
  }
})
</script>
