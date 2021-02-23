<template>
    <div class="right">
       {{fullName}}
        <audio :src="url" id="audio"></audio>
        <div class="right_middle">
            <div class="right_two">
                <div class="middle"></div>
                <div class="btn-play" @click="Mysing"></div>
            </div>
        </div>
    </div>
</template>

<script>
  import Msg from "./Msg.js";
  export default {

    name: "Right",
    data(){
      return{
        singer:'',
        img:'',
        name:'',
        songName:'',
        url:'',
        toggkle:'off'
      }
    },
    mounted() {
      let _this = this;
      Msg.$on("songMap",function (res) {
        // console.log(res)
        _this.singer  =res.get('id');
        _this.img = res.get("imgUrl");
        _this.name = res.get("name");
        _this.songName = res.get("songName");
      })
    },
    methods:{
      Mysing:function () {
      //  获取音乐播放器
        var obtn = document.querySelector(".btn-play");
        var oAudio = document.querySelector("audio");
        if (this.toggkle === "off") {
          oAudio.play();
          obtn.style.backgroundImage = "url(img/stop.png)";
          this.toggkle = "NO";
        } else {
          oAudio.pause();
          obtn.style.backgroundImage = "url(img/play.png)";
          this.toggkle = "off";
        }
      }
    },
    computed:{
       fullName:function () {
            return "当前播放的是:"+this.songName+"----"+this.name;
       }
    },
    watch:{
      singer:function (id) {
        console.log(id);
      //  通过这个id查询数据将歌手的歌获取到
        this.url = `http://music.163.com/song/media/outer/url?id=${id}.mp3`;
        let bb = document.querySelector(".btn-play");
        let aa = document.querySelector("audio");
        bb.style.backgroundImage = "url(img/play.png)";
        aa.pause();
      },
      img:function (val) {
        // console.log(val);

      },
      name:function (name) {
        // console.log(name);
      },
      songName:function (val) {
        // console.log(val)
      }
    }
  }
</script>

<style scoped>
.right{
    position: relative;
    width: 870px;
    height: 460px;
    /*background-color: pink;*/
}
    .right_middle{
        position: absolute;
        top:50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 200px;
        height: 200px;
        background:url("/img/page4-music-bg.png") no-repeat 0 0;
        background-size: 200px 200px;
        border-radius: 50%;
    }
    .right_two{
        position: absolute;
        top:50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 120px;
        height: 120px;
        background-color: lawngreen;
        background:url("http://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg") no-repeat 0 0;
        background-size: 120px 120px;
        border-radius: 50%;
    }
    .middle{
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -25px;
        margin-top: -25px;
        width: 50px;
        background:url("/img/btn-bg.png") no-repeat 0 0;
        background-size: 50px 50px;
        height: 50px;
        /*background-color: lightcoral;*/
        border-radius: 50%;
        /*opacity: 0;*/
        animation: run 4s linear infinite;
    }
.btn-play {
    z-index: 1;
    position: absolute;
   top: 47px;
    left: 50px;
    width: 25px;
    height: 25px;
     /*background-color: aqua;*/
    background-image: url("/img/play.png");
    /* transform: translate(130%, 80%); */
    background-repeat: no-repeat;
    background-position: center;
}
@keyframes run {
    0% {
        transform: rotate(0);
    }
    100% {
        transform: rotate(360deg);
    }
}
@keyframes child {
     0% {
         background-position: 0 0;
     }
     100% {
         background-position: 0 -2110px;
     }
 }
</style>