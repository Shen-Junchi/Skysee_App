# Skysee_App
This is an app used to chat and get answer , being a good tool of browser using. 

This App should have the following functions:
1. Read the pdf file and understand the file



Web design related knowledge: 

1. head and body:
   
   a. In `<head>`, we put some information like 
   
   b. In `<body>`, I finished

I put the Web browser files into these documents, named website. 

# update 2024/12/28
主要更新网页主题样貌特别是右半部分的CSS搭建 

其中还是有几个问题：

   按住Tab键不能实现空行 使得使用不流畅 
加入匹配文章观点 找到相关的知识点 比如说生物 或者是别的 

另一个小问题在于 应该自动匹配用户使用语言进行翻译: 录入

# update 2024/12/30

主要问题集中在对话生成上 
另一个问题在于如何实现历史记录 目前的想法是每次打开一个记录 就要记录下来 并且域名要换 比如说一开始是
'www.skysee.com'
现在先变成
'www.skysee/talk1.com'

# Update 2025/1/2
至于后面的如何实现后台 有几个思路
1. 确定使用者教育背景 设计prompt  比如说 有人问什么是光合作用 分析这个人问这个问题 差不多是什么等级的学生 如果是小学生 那么prompt就是 `教给小学生 什么是 {}`再输入input

最简单的是
一开始的问题 {} 加入的prompt就是 `简单的解释一下 如何简单的说明白这个问题 {Question}` 


2. quick citation 如何快速引用 引用的格式 比如说牛津格式引用

# Update 2025/1/3
https://monica.im/webapp/doc-chat?doc_id=b4a2951729eb4729b0c8eab863834f5d 这个是路由的格式


# Update 2025/1/5
具体的页数 比如说 超链接的形式定位到具体的位置 比如说就研究方法而言 他在第五页 超链接到第五页
与此同时 匹配用户的工作情况 对于学生 他们有自己的写论文高峰期 那这个时候的学生 我们主要进行毕业论文的模式设计

前端具体返回的值：
三种情况 
1. 用户状态set up 更改后 传递setup
2. pdf 加问题 用户ID 组成为 userID&userChatID 初始化的时候 
3. 用户问题 加上用户ID 加上用户userID&userChatID
