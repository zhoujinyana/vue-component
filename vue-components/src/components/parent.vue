<template>
    <h3>Parent</h3>
    <!-- 动态数据传递，props传递数据，只能从父级传递给子级 -->
    <child :title="message" :age="age" :names="names" :userInfo="userInfo"/>
</template>

<script>
import child from './child.vue';
export default{
    components:{
        child
    },
    data(){
        return{
            message:"Parent数据!",
            age:20,
            names:["iwen","ime"],
            userInfo:{
                name:"iwen",
                age:20
            }

        }
    }
}
</script>