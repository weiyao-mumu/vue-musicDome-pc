<template>
        <div class="Upper">
            <div class="logo">
                <img src="logo.jpg" alt="">
            </div>
            <div class="sreach_upper">
                <span class="jpg">
                    <img src="sreach.png" alt="">
                </span>
                <input class="input_top" type="text" @keyup.13="sreachKeyUp">
<!--                <a  id="sreach" href="#!" @click="sreachClick">搜索</a>-->
            </div>

        </div>
</template>
<script  lang="js">
  import Msg from "./Msg.js";
  export default {
    name: "Sreach",
    data(){
      return{
        list:[]
      }
    },
    methods:{
      sreachKeyUp:function (e) {
        //获取input输入框的值，每次回车后清空
        // console.log(e.target.value)
        //
        // let url = `/?type=1&s=${e.target.value}`;
        // console.log(url)
        Msg.$emit("songName",e.target.value);
      //  当我点击它的是时候，必须发送一个axios，来查询接口，通过名字查询
     /*   this.$http.get(url).then((res)=>{
          if(res.data.code == 200){
          //  说明查询有值，需要将这个通过EventsBus 事件总线，进行兄弟传值。
            console.log(res.data);
            this.list = res.data.result.songs;
            // console.log(this.list)
            Msg.$emit("songName",this.list);
          }
        }).catch((err)=>{
          console.log(err);
          throw '搜索歌曲失败';
        })*/
        e.target.value = '';
      }
    }
  }
</script>

<style scoped>
    .Upper{
        width: 1000px;
        height: 40px;
        background-color: skyblue;
        margin-top: 20px;
    }
    .logo{
        float: left;
        width: 38px;
        height: 38px;
        background-color:salmon;
        margin-left: 40px;
        border-radius: 50%;
        overflow: hidden;
        line-height: 40px;
    }
    .logo img{
        width: 100%;
        height: 40px;
    }
    .sreach_upper{
        position: relative;
        width: 250px;
        height: 40px;
        /*background-color:lightcoral;*/
        margin: 0 auto;
        text-align: center;
        line-height:40px;
    }
    input:focus { outline: none; }
    .input_top{
        margin-right: 10px;
        border: none;
        border-radius: 50px;
        width: 150px;
        height: 20px;
        padding-left: 28px;
    }
    a{
        text-decoration: none;
    }
    #sreach{
        color:#000;
    }
    .jpg{
        position: absolute;
        top: 6px;
        left: 40px;
        display: block;
        width: 20px;
        height: 20px;
        z-index: 1;    }
    .jpg>img{
        width: 100%;
        height: 20px;
    }
</style>