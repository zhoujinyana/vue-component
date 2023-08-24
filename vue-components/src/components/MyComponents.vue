<template>
    <div class="container">{{ message }}</div>
    <div>测试</div>
    </template>
    <script>
    export default{
      data(){
        return{
          message:"组件基础组成"
        }
    
      }
    }
    </script>
    
    <!-- scoped:让当前样式在当前组件中生效，这个代码中的测试则不会具有这个样式 -->
    <style scoped>
    .container{
      font-size: 30px;
      color: brown;
    }
    </style>