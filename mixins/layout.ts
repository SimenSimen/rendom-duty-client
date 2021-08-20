import Vue from 'vue'
import BlockLayout from '@/components/Block/Index.vue'
import TextBar from '@/components/TitleBar/Index.vue'
import HeadTitle from '@/components/HeadTitle/Index.vue'

const Mixin = Vue.extend({
  components: {
    BlockLayout,
    TextBar,
    HeadTitle,
  },
})

declare global {
  type LayoutMixin = InstanceType<typeof Mixin>
}

export default Mixin
