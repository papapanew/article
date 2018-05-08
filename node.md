#什么是node.js   [官网](http://nodejs.org/)
 * 不是一门语言;不是框架;不是库;
 * 是JavaScript运行时环境;(解析和运行javasc代码)
 * 以前javascript只能在浏览器运行
 * 现在javascript能脱离浏览器在node运行
 * 基于chorme的v8引擎上开发出来一个运行javascript的环境
 
## 浏览器的javascript
 * EcmaScript
 * Bom,Dom

## node.js的javascript
 * 没有Bom，Dom
 * EcmaScript
 * 操作服务器级别的api
  - fs文件读写
    * 例子readFile(path[,options],callback)
    * var fs =require('fs')
    * fs.readFile('a.txt',function(error,data){
    	console.log(data)
  	})
  - 网络服务构建
  - 网络通信等

## node.js特性
 * 事件驱动
 * 非阻塞IO模型(异步操作)
 * 轻量和高效

## npm
 * 开源库生态系统
 * 绝大多数javascript包都放在npm上
