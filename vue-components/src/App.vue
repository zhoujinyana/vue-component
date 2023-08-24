<template>
  <!-- 3显示组件 -->
  <!-- <MyComponents /> -->
  <!-- <Header />
  <Main />
  <Aside /> -->
  <parent />
  <componentA />
  <componentEvent />
  <Main1 />
  <componentC />
  <AttrComponent class="attr-container"/>
  
 
</template>
<script>
//1.引入组件
// import MyComponents from './components/MyComponents.vue';
// //import Header from './components/Header.vue';
// import Main from './components/Main.vue';
// import Aside from './components/Aside.vue';
import parent from './components/parent.vue';
import componentA from './components/componentA.vue';
import componentEvent from './components/componentEvent.vue';
import Main1 from './components/Main1.vue'
import componentC from './components/componentC.vue';
import AttrComponent from './components/AttrComponent.vue';



export default{
  //2.注入组件
  components:{
    //MyComponents,
    //Header,
    //Main,
    //Aside
    parent,
    componentA,
    componentEvent,
    Main1,
    componentC,
    AttrComponent
   

  }
}

</script>

<style>

</style>