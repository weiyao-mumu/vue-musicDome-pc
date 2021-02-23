<template>
    <div class="Left">
<!--        这是左边的部分-->
        <div class="title">
            发现音乐
        </div>
        <ul class="ul" v-for="(item,index) in SongList" :key="index">
            <li @click="aaa(index)">
                <div class="name">{{item.name}}</div>
                <div class="artists">{{item.artists[0].name}}</div>
            </li>
        </ul>
    </div>
</template>

<script>
  import Msg from "./Msg.js";
  export default {
    name: "Left" ,
    data(){
      return{
        SongVal:'',
        SongList:'',
        songer:[]
      }
    },
    mounted() {
      //  接受兄弟组件的参数,注意this指向的问题（坑）
      let _this = this;
      Msg.$on("songName",function (res) {
        _this.SongVal = res;
      })
    },
    //watch去监听这个res参数
    watch:{
      SongVal:function (val) {
        let _this = this;
        // console.log(val);
        let url = `/?type=1&s=${val}`;
        this.$http.get(url).then((res)=>{
           if(res.data.code == 200){
             _this.SongList = res.data.result.songs;
           }
     }).catch((err)=>{
       console.log(err);
       throw '搜索歌曲失败';
     })
      }
    },
    methods:{
      aaa:function (index) {
        let map = new Map();
       let imgUrl =  this.SongList[index].artists[0].picUrl;
        let Id =  this.SongList[index].id;
        let name = this.SongList[index].artists[0].name;
        let songName = this.SongList[index].name;
        map.set("id",Id);
        map.set("imgUrl",imgUrl)
        map.set("name",name);
        map.set("songName",songName);
        Msg.$emit("songMap",map);
      }
    }
  }
</script>

<style scoped>
.Left{
    width: 125px;
    height: 500px;
}
.title{
    margin-top: 2px;
    width: 125px;
    text-align: center;
    color: red;
    background-color: #fff;
}
li{
    list-style: none;
}
ul{
    padding: 0;
}
.ul li{
    width: 125px;
    /*height: 50px;*/
    text-align: center;
    line-height: 50px;
    margin-top: 2px;
    font-size: 10px;
    background-color: #fff;
    cursor: pointer;
    overflow: hidden;
}
.ul li:hover{
    color: deeppink;
}
.name{
    width: 125px;
    height: 20px;
    white-space:nowrap ;
}
.artists{
        width: 125px;
        height: 40px;
        white-space:nowrap ;
}
</style>