<template>
  <div>
    <Header/>
    <Home/>
    <Footer/>
  </div>
</template>

<script>
  // 引入组件
  import Header from '../components/Header/Header'
  import Footer from '../components/Footer/Footer'
  import Home from '../pages/Home/Home'
export default {
  data () {
    return {

    }
  },
  // 注册组件
  components: {
    Header,
    Home,
    Footer,
  }
}
</script>

<style>

 
</style>
