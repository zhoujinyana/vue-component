<template>
  <!-- <SlotsBase>
    <div>
      <h3>
        插槽标题
      </h3>
      <p>
        插槽内容
      </p>
    </div>

  </SlotsBase> -->
  <!-- <SlotsTwo>
    <template #:header>
      v-slot可以用#来代替 -->
      <!-- <h3>{{ message }}</h3>
    </template>
    <template #:main>
      <p>内容</p>
    </template>
    
    
  </SlotsTwo> -->

  <SlotsAttr >
    <template #header="slotProps">

    
    <h3>{{ currentTest }}-{{ slotProps.msg }}</h3>
  </template>
  <template #main="slotProps">
    <p>{{ slotProps.demo }}</p>

  </template>
  </SlotsAttr>

</template>

<script>
import SlotsBase from './components/SlotsBase.vue';
import SlotsTwo from './components/SlotsTwo.vue';
import SlotsAttr from './components/SlotsAttr.vue'
export default{
  data(){
    return{
      message:"插槽内容续集在父元素中定义",
      currentTest:"测试内容"

    }
  },
  components:{
    SlotsBase,
    SlotsTwo,
    SlotsAttr
 
  }
}
</script>

<style>


</style>