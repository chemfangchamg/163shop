<template>
  <div>
      <p>Home</p>
      <Page1Box/>
      <Slide/>
      <Page1Box/>
      <Page1Box/>
  </div>
</template>

<script>
  // 引入组件
import Page1Box from '../../components/Page1Box/Page1Box'
import Slide from '../../components/Slide/Slide'
export default {
  data () {
    return {

    }
  },
  // 注册组件
  components: {
    Page1Box,
    Slide,
  }
}
</script>

<style>

 
</style>
