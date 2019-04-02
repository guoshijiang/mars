<template>
  <div class = 'pre ' >
    <!-- 顶部 -->
    <nav-header title='帮助' back='true'></nav-header> 
    <!-- 内容 -->
    <div class="content help_text"  style="height:calc(100% - 44px)">
      <h5>关注区块链</h5>

        <p>1.HTTP是一种超文本传送协议（HyperText Transfer Protocol）,是一套计算机在网络中通信的一种规则。
        在TCP/IP体系结构中，HTTP属于应用层协议，位于TCP/IP协议的顶层 </p>

        <p>2.HTTP是一种无状态的的协议，意思是指 在Web 浏览器（客户端）和
         Web 服务器之间不需要建立持久的连接。整个过程就是当一个客户端向服务器端发送一个请求(request)，然后Web服务器返回一个响应(response),之后连接就关闭了，在服务端此时是没有保留连接的信息。
         </p>

        <p>3.HTTP 遵循 请求/响应(request/response) 模型的，所有的通信交互都被构造在一套请求和响应模型中。 </p>

        <p>4.浏览WEB时，浏览器通过HTTP协议与WEB服务器交换信息，Web服务器向Web浏览器返回的文件都有与之相关的类型,这些信息类型的格式由MIME定义。</p>
        
        <p>1.HTTP是一种超文本传送协议（HyperText Transfer Protocol）,是一套计算机在网络中通信的一种规则。
        在TCP/IP体系结构中，HTTP属于应用 层协议，位于TCP/IP协议的顶层 </p>

        <p>2.HTTP是一种无状态的的协议，意思是指 在Web 浏览器（客户端）和
       
          Web 服务器之间不需要建立持久的连接。整个过程就是当一个客户端向服务器端发送一个请求(request)，然后Web服务器返回一个响应(response),之后连接就关闭了，在服务端此时是没有保留连接的信息。
         </p>
        <p>3.HTTP 遵循 请求/响应(request/response) 模型的，所有的通信交互都被构造在一套请求和响应模型中。 </p>

        <p>4.浏览WEB时，浏览器通过HTTP协议与WEB服务器交换信息，Web服务器向Web浏览器返回的文件都有与之相关的类型,这些信息类型的格式由MIME定义。</p>
    </div>    
  </div>
</template>

<script>
import { Actionsheet, Group, XSwitch, Toast } from 'vux'

export default {
  components: {
    Group,
    XSwitch,
	Toast,
	Actionsheet,
    navHeader:()=>import('@/components/navHeader')
  },
  data () {
    return {
		
    }
  },
  mounted() {
    console.log('点击了',111)
  },
  methods: {
  }
}
</script>

<style lang="less">
.help_text{
  overflow: scroll;
  padding: 20px;
  box-sizing: border-box;
  h5{
    text-align: center;
    font-size: 18px;
    line-height: 18px;
  }
  pre{
    width: 100%;
  }
  p{
    letter-spacing: 0px;
    text-align: justify;
    line-height: 24px;
    margin-top: 10px;
    text-indent: 20px;
  }
}
</style>