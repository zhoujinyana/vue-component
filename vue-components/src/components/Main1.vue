<template>
    <h3>
        Main1
    </h3>
    <p>搜索的内容为：{{ search }}</p>
    <!-- 边输入，边得到 -->
    <SearchComponent @SearchEvent="getSearch"/>

</template>

<script>

import SearchComponent from './SearchComponent.vue';

export default{
    data(){
        return{
            search:""
        }
    },
    components:{
        SearchComponent

    },
    
    methods:{
        getSearch(data){
            this.search = data
        }
    },
    
   
}
</script>