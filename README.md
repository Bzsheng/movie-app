# 高分电影小应用

技术栈

- Scrapy爬虫框架(py中的一个爬虫框架，)
- React hooks(制作前端界面)
- useSWR(数据请求)
- Rgg.js,egg-sequelize(访问数据库，暴露接口)
- MySQL数据库
- docker(在服务器启动MySQL,Egg)

这是一个个人制作的网页小应用，分享了豆瓣高分电影，数据来源[豆瓣](https://www.douban.com/)，数据获取使用Python的Scrapy爬虫框架，将数据存储到MySQL数据库中，使用React hooks制作前端界面，使用useSWR发送网络请求，在Egg中使用egg-sequelize访问数据库，暴露端口供前端访问。

## Scrapy爬虫框架

[Scrapy框架](https://scrapy.org/)是一个为了爬取网站数据，提取结构性数据而编写的应用框架。框架的核心部分是spider文件，用于解析网页内容。

解析网页内容主要有两种方式，一种是Xpath表达式，另一种是CSS表达式。
这里使用的是Xpath路径表达式(路径表达式+索引+属性)

数据存储只需要在pipelines.py中连接数据库，然后插入数据即可。

## React hooks

[React hooks](https://reactjs.org/docs/hooks-intro.html)是react 16.8引入的特性，允许在不写class的情况下操作state和react的其他特性。

使用React hooks后，代码减少很多，状态管理，生命周期等方面也简化了很多。入门相对class组件而言更容易

## useSWR

[SWR](https://www.npmjs.com/package/swr)是用于远程数据获取的React Hooks库。可以使用npm直接安装(`npm i swr`)。

``` javascript
const fetcher = (url: string) =>
  fetch(url)
    .then(r => r.json())
            
const { data } = useSWR('http://localhost:7001/movie', fetcher)
```

参数：

- key：数据请求的地址
- fetcher：数据请求的函数

返回值：

- data：请求的数据

最后再对获取到数据处理，渲染到页面上。

## Egg.js和egg-sequelize

[Egg.js](https://eggjs.org/zh-cn/intro/index.html)为企业级框架和应用而生。Egg简单易扩展，只实现了非常基础的一些东西，如果需要实现更多的功能，可以使用扩展插件来完成。

[Sequelize](https://sequelize.org/)是一种比较流行的ORM（Object Relation Mapping，对象关系映射）框架。面向对象编程将所有实体看作是对象，关系型数据库则是采用对象之间的联系连接数据。如果关系也用对象表达，就可以使用面向对象编程来操作关系型数据库。**ORM就是通过实例对象的语法，完成关系型数据库操作的技术。**

[egg-sequelize](https://www.npmjs.com/package/egg-sequelize)是用于Egg的Sequelize插件。可以使用npm直接安装。

- [使用egg-sequelize连接数据库](https://mp.weixin.qq.com/s?__biz=MzA4NTQ3NTAzNA==&mid=2447778827&idx=1&sn=88926e1b54f5ca7426ea180efc636081&chksm=8bc5efbebcb266a8d565acc9fe9de6381646eb3f2686507d9f34c23b0a04d8c2b531f3ceb96a&token=287120736&lang=zh_CN#rd)

## docker

[Docker](https://www.docker.com/)是一个开源的容器引擎，让开发者可以打包他们的应用以及依赖包到一个可移植的镜像中，然后发布到任何流行的Linux或Windows机器上，也可以实现虚拟化。

在服务器使用docker运行mysql和egg服务，暴露接口，前端访问该接口获取数据，从而更新数据。

![个人微信公众号](https://img-blog.csdnimg.cn/20200407111014270.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQxOTA3ODA2,size_16,color_FFFFFF,t_70#pic_center)