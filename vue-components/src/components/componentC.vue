<template>
<h3>componentC</h3>
<componentD title="标题" :onEvent="dataFn"/>
<p>父元素：{{ message }}</p>
</template>

<script>
import componentD from './componentD.vue';
export default{
    data(){
        return{
            message:""

        }
    },
    components:{
        componentD
    },
    methods:{
        dataFn(data){
            console.log(data);
            this.message = data
        }
    }
}
</script>