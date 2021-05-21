<template>
    <tab-bar>
    <tab-bar-item path="/kazuma" activeColor="pink">
      <img slot="item-icon" src="../../../assets/img/tabbar/kazuma.jpg" alt="">
      <img slot="item-icon-active" src="../../../assets/img/tabbar/mika.jpg" alt="">
      <div slot="item-text">kazuma</div>
    </tab-bar-item>
    <tab-bar-item path="/mika">
      <img slot="item-icon" src="../../../assets/img/tabbar/mika.jpg" alt="">
      <img slot="item-icon-active" src="../../../assets/img/tabbar/kazuma.jpg" alt="">
      <div slot="item-text">mika</div>
    </tab-bar-item>
    <tab-bar-item path="/cealan">
      <img slot="item-icon" src="../../../assets/img/tabbar/cealan.jpg" alt="">
      <img slot="item-icon-active" src="../../../assets/img/tabbar/william.jpg" alt="">
      <div slot="item-text">cealan</div>
    </tab-bar-item>
    <tab-bar-item path="/william">
      <img slot="item-icon" src="../../../assets/img/tabbar/william.jpg" alt="">
      <img slot="item-icon-active" src="../../../assets/img/tabbar/cealan.jpg" alt="">
      <div slot="item-text">william</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from '../../common/tabbar/tabbar'
import TabBarItem from '../../common/tabbar/TabbarItem'

export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem  
    }
}
</script>

<style>

</style>