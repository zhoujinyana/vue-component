<template>
<h3>Child</h3>
<button @click="clickEventHandle">传递数据</button>
</template>

<script>
export default{
    data(){
        return{
            msg:"child数据！！"
        }

    },
    methods:{
        clickEventHandle(){
            //console.log("哈哈哈");
            //自定义事件
            this.$emit("someEvent",this.msg)
        }
    }
}
</script>
<!-- 父传子：props；子传父：自定义事件（this.$emit") -->