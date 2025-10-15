# 可以对接sora2去水印的网页，界面充满科技感
### 作者
去水印的网友是我在5ime/vue-page基础上改的，感谢5ime作者的无私奉献
### 页面展示
![图片/1.png](https://github.com/xiaolou888/qushuiyin-jianyi/blob/main/图片/1.png)
![图片/2.png](https://github.com/xiaolou888/qushuiyin-jianyi/blob/main/图片/2.png)
### 说明
- 代码直接下载就可以使用，我没有按照编译做，我是直接修改编译后的代码的
- 网友可以对接sora2去水印，直接对接接口就行
- sora2去水印接口：https://api.yuantoai.com/
- 登录后在接口查询页面可以找到接口地址，复制下来
- 最主要的是这个接口可以下载官方原地址视频，是的，**<font color='red'>官方原地址视频</font>**
![图片/api.png](https://github.com/xiaolou888/qushuiyin-jianyi/blob/main/图片/api.png)
![图片/3.png](https://github.com/xiaolou888/qushuiyin-jianyi/blob/main/%E5%9B%BE%E7%89%87/3.png)
### 使用教程
- 打开js/app.ba1f30b3.js
- 搜索：
```
https://api.yuantoai.com/api/dsp/{clientSecretKey}/{clientId}/?url=
```
- 把刚才复制的地址填写上去就行
- 如果要官方原地址视频，可以在前面加上open. 地址就是这样的：
```
https://open.api.yuantoai.com/api/dsp/{clientSecretKey}/{clientId}/?url=
```
这样解析的地址就是官方原地址视频了，这个网站厉害啊

### 特别感谢
原作者：[5ime](https://github.com/5ime/vue-page)
