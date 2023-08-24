<template>
<h3>组件事件</h3>
<ChildEvent @someEvent="getHandle"/>
<p>父元素：{{ message }}</p>
</template>

<script>
import ChildEvent from './childEvent.vue';
import childEvent from './childEvent.vue';
export default{
    data() {
        return {
            message:""
        }
    },
    components: {  ChildEvent },
    methods:{
        getHandle(data){
            //console.log("触发了",data);
            this.message = data;
        }
    }
}
</script>