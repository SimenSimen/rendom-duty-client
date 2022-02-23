<template>
  <div class="store-index-page">
    <section
      v-if="!stores.length"
      class="w-full flex justify-center items-center flex-col mt-8"
    >
      <h1 class="text-3xl text-gray-500 mb-2">尚未新增任何店別</h1>
      <h4 class="text-gray-400">請先新增店別才可使用排班</h4>
    </section>

    <block-layout v-else class="my-4 mt-8">
      <head-title>店別列表</head-title>
      <text-bar />

      <section class="flex flex-wrap mt-6">
        <template v-for="store in stores">
          <div class="w-6/12 pb-2 pr-2">
            <store-card
              :id="store.id"
              :key="store.id"
              :name="store.name"
              :description="store.description"
            />
          </div>
        </template>
      </section>
    </block-layout>

    <block-layout class="create-section my-4">
      <head-title>新增店別</head-title>
      <text-bar />

      <section
        class="
          border border-solid border-gray-200
          mt-4
          p-4
          rounded-md
          shadow-md
        "
      >
        <form class="create-form" action="">
          <div class="mb-2">
            <label class="mr-4">
              <span class="text-red-600">*</span>
              <span class="mr-2">名稱</span>
              <input
                class="border border-solid border-gray-200 px-4 py-2 rounded-md"
                name="name"
                type="text"
                placeholder="請輸入店別名稱"
                autocomplete="off"
              />
            </label>

            <label class="mr-4">
              <span class="mr-2">描述</span>
              <input
                class="
                  border border-solid border-gray-200
                  px-4
                  py-2
                  rounded-md
                  w-6/12
                "
                name="description"
                type="text"
                placeholder="(選填) 一個簡易的描述。"
                autocomplete="off"
              />
            </label>
          </div>

          <div class="text-center mt-4">
            <button
              class="
                submit-button
                text-white
                bg-blue-500
                rounded-md
                text-xl
                font-bold
                w-4/12
                py-2
                shadow-xl
              "
            >
              確認添加
            </button>
          </div>
        </form>
      </section>
    </block-layout>

    <br /><br /><br /><br /><br />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import layoutMixin from '@/mixins/layout'
import StoreCard from '@/components/StoreCard/Index.vue'

export default (Vue as ComponentMixinsHelper<LayoutMixin>).extend({
  name: 'StoreIndexPage',
  components: {
    StoreCard,
  },
  mixins: [layoutMixin],
  data() {
    return {
      stores: [
        {
          name: '豐原道',
          id: 'test-test-test-store',
          description: '一間不錯的店',
        },
      ],
    }
  },
})
</script>
