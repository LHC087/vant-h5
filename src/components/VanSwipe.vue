<!-- VanSwipe -->
<template>
    <div >
    <van-swipe :autoplay="3000" >
      <van-swipe-item v-for="(image, index) in data" :key="index">
        <img v-lazy="image" style='width:100%'/>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
export default {
  name: 'VanSwipes',
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>


<style scoped>

</style>
