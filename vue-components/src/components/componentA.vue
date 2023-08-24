<template>
    <h3>componentA</h3>
    <componentB :title="title" :age="age"  :names="names"/>
</template>

<script>
import componentB from './componentB.vue';
export default{
    data(){
        return{
            title:"标题",
            age:20,
            names:["jack","lily"]

        }
    },
    components:{
        componentB

    }
}
</script>