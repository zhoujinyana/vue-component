<template>
    <h3>componentB</h3>
    <p>{{ title }}</p>
    <p>{{ age }}</p>
    <p v-for="(item,inndex) of names" :key="inndex">{{ item }}</p>

</template>

<script>
export default{
    data(){
        return{
            
        }
    },
    // 警告：prop是只读的
    props:{
        title:{
            type:[String,Number,Array,Object],
            required:true//校验prop的必选项，如果没有title会报错
        },
        age:{
            type:Number,
            default:0
        },
        names:{
            type:Array,
            default(){
                return ["空"]
            }
        }

    }
}

</script>