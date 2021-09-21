<!-- HomeIndex -->
<template>
    <div>

      <div style='height:300px'>
     
      <VanSwipe :data="imagesList" />
      </div>
    </div>
</template>

<script>
import VanSwipe from '@/components/VanSwipe'
export default {
  name: 'HomeIndex',
  components: {
    VanSwipe
  },
  data() {
    return {
    imagesList: [
        'https://img01.yzcdn.cn/vant/apple-1.jpg',
        'https://img01.yzcdn.cn/vant/apple-2.jpg',
      ]
    }
  },

  computed: {},

  mounted() {},

  methods: {}
}
</script>
<style lang="scss" scoped>

</style>
