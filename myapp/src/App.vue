<template>
  <div>
    <Header/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
  // 引入组件
  import Header from './components/Header/Header'
  import Footer from './components/Footer/Footer'
export default {
  data () {
    return {

    }
  },
  // 注册组件
  components: {
    Header,
    Footer,
  }
}
</script>

<style>

 
</style>
