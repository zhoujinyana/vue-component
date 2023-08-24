<template>
    <h3>Slot续集</h3>
    <slot name="header">插槽默认值</slot>
    <hr>
    <a href="#">我是插入在中间的内容</a>
    <slot name="main">插槽默认值</slot>

</template>

<script>
export default{
    data(){
        return{
           

        }
    }
}
</script>