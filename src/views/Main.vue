<template>
    <div class="container">
        <div class="top">
            <My-search></My-search>
        </div>
        <div class="bottom">
            <div class="bottom_left">
                <My-left></My-left>
            </div>
            <div class="bottom_right">
                <My-right></My-right>
            </div>
        </div>
    </div>
</template>

<script lang="js">
// 搜索功能
    import Search from "../components/Search";
    import Left from "../components/Left";
    import Right from "../components/Right";
  export default {
    name: "Main",
    components:{
      'My-search':Search,
      'My-left':Left,
      'My-right':Right
    }
  }
</script>

<style scoped>
    .container{
        width: 1000px;
        height: 500px;
        background-color: #f5f5f5;
        margin: 20px auto;
    }
    .bottom{
        margin-top: 2px;
        width: 1000px;
        height: 460px;
        background-color: #f5f5f5;
    }
    .bottom_left{
        float: left;
        width: 125px;
        height: 460px;
        /*background-color: greenyellow;*/
        overflow-y:auto;
        /*overflow: hidden;*/
    }
    .bottom_left::-webkit-scrollbar {
        width: 4px;
        /*height: 4px;*/
    }
    .bottom_left::-webkit-scrollbar-thumb {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
        background: rgba(0,0,0,0.2);
    }
    .bottom_left::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
        border-radius: 0;
        background: rgba(0,0,0,0.1);

    }
    .bottom_right{
        float: right;
        width: 870px;
        height: 460px;
        /*background-color: teal;*/
    }
</style>