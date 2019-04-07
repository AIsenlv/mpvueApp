<template>
    <div class="content">
        <img class="img"  src="../../assets/user.png" alt="">
        <button @click="go" class="btn">点我去嗨皮</button> 
    </div>
</template>
<script>
import obj from '../../utils/index'
export default {
    data(){
        return{
            name:'ssss',
        }
    },
    computed:{
       
    },
    created(){
        console.log(this.name);
        //     wx.showModal({
        //     title:'提示',
        //     content:'这是一个示例弹窗',
        //     success:function(res){
        //       console.log(res)
        //       if(res.confirm){
        //         wx.switchTab({
        //             url: '/pages/index/main'
        //         })
        //       }else {
        //         console.log('用户点击了取消')
        //       }
        //     }
        //   })
  
    },
    // onload(){
        //     console.log(222222);
    // }
    methods:{
        go(){
            //    wx.switchTab({
            //        url:'/pages/index/index'
            //    })
            // console.log(this);
            let url='/pages/index/index';
            this.$router.push({ path: url, isTab: true })
        }
    }
}
</script>
<style lang="less">

</style>


