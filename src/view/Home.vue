<template>
  <div class='pre' style="height:calc(100% - 44px)">
    <!-- 顶部 -->
    <nav-header title='资产'></nav-header> 
    <!-- 内容 -->
    <div class="content " style="height:calc(100% - 44px)">
      <div class="vux-demo">
        <img class="logo" src="../assets/vux_logo.png">
        <h1> </h1>
      </div>
      <group title="cell demo">
        <cell title="VUX" value="cool" cell-label-color='#ccc' v-model='val' is-link @click.native="go('cool')"></cell>
        <cell title="VUE" value="host33" is-link link='/trade'></cell>
      </group>
      <div class="vux-demo">
        <img class="logo" src="../assets/vux_logo.png">
        <h1> </h1>
      </div>
      <group title="cell demo">
        <cell title="VUX" value="cool" cell-label-color='#ccc' v-model='val' is-link @click.native="go('cool')"></cell>
        <cell title="VUE" value="host33" is-link link='/trade'></cell>
      </group>
      <div class="vux-demo">
        <img class="logo" src="../assets/vux_logo.png">
        <h1> </h1>
      </div>
      <group title="cell demo">
        <cell title="VUX" value="cool" cell-label-color='#ccc' v-model='val' is-link @click.native="go('cool')"></cell>
        <cell title="VUE" value="host33" is-link link='/trade'></cell>
      </group>
        <div class="vux-demo">
        <img class="logo" src="../assets/vux_logo.png">
        <h1> </h1>
      </div>
      <group title="cell demo">
        <cell title="VUX" value="cool" cell-label-color='#ccc' v-model='val' is-link @click.native="go('cool')"></cell>
        <cell title="VUE" value="host33" is-link link='/trade'></cell>
      </group>
        <div class="vux-demo">
        <img class="logo" src="../assets/vux_logo.png">
        <h1> </h1>
      </div>
      <group title="cell demo">
        <cell title="VUX" value="cool" cell-label-color='#ccc' v-model='val' is-link @click.native="go('cool')"></cell>
        <cell title="VUE111" value="host33" is-link link='/trade'></cell>
      </group>
    </div> 
    <!-- 底部 -->
    <tab class="tab_footer" :active='0'></tab>

  </div>
</template>

<script>
import { Group, Cell } from 'vux'
import { Actionsheet } from 'vux'

export default {
  components: {
    Group,
    Cell,
    Actionsheet,
    tab:()=>import('@/components/tab'),
    navHeader:()=>import('@/components/navHeader')
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!',
      val:'ww'
    }
  },
  methods: {
    go(a){
      this.$router.push({name:'Detail'})
    }
  },
}
</script>

<style lang="less">
.vux-demo {
  text-align: center;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
