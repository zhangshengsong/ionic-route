Welcome to ionic-route路由构建! 有不足的请发送邮件到  zhou_kai_12@163.com  进行补充，谢谢
===================

1、创建结构目录
-------------

> **Menu:**

> - js
> - style
> - view
> - src
> - index.html

 2、创建index.html
-------------
```
   < body ng-app= "myApp" class= "light-bg" >
      < ion -nav-bar class= "bar-positive" > //公用的头部导航
         < ion -nav-back-button ></ ion- nav-back-button > // 头部导航之中的返回按钮
      </ ion -nav-bar >
      < ion -nav-view > //最顶层的视图
      </ ion -nav-view >
   </ body >
```
3、创建index.js文件配置以及controllers.js控制器文件
-------------
index.js
//依赖注入ionic  以及控制器配置
```
var myApp = angular.module( 'myApp' , ['ionic' , 'app-controllers']);  

//初始化配置
//$stateProvider $urlRouterProvider 路由的代理商配置 
myApp.config([ '$stateProvider' ,'$urlRouterProvider' , function( $stateProvider , $urlRouterProvider ){
   $stateProvider
   .state( "tabs" ,{    //主路由控制器
        url: '/tabs' ,// 改变地址栏的值
        templateUrl:'views/tabs.html' ,//路由要访问的文件
        abstract: true //这个模板作为app的基石
    })
   .state( "tabs.main" ,{
       url :"/main" ,   // 改变地址栏的值
       views:{             //子路由的视图
           'main-tab' :{
             templateUrl: "views/main-view/main.html" , //访问的地址
             controller: "main-controller"    //绑定控制器
           }
      }
   })

   $urlRouterProvider.otherwise( "/tabs/main" );   // 重定向路由

}])
```
controller.js
```
var controllers= angular.module( "app-controllers" ,[]);
```
//所有的控制器都写到controllers下

4、建立主路由的tabs.html（基于微信为模型）
-------------
```
< ion -tabs class = "tabs-positive tabs-icon-top">
   < ion -tab title = "微信" href ="#/tabs/main" icon-on = "ion-ios-chatbubble" icon-off = "ion-ios-chatbubble-outline" badge ="20" badge-style = "badge-assertive" >
      < ion -nav-view name= "main-tab" ></ion - nav-view>
   </ ion -tab >
   < ion -tab title = "通讯录" href ="#/tabs/contact" icon-on = "ion-ios-people" icon-off = "ion-ios-people-outline"  >
      < ion -nav-view name= "contact-tab" ></ion - nav-view>
   </ ion -tab >
   < ion -tab title = "发现" href ="#/tabs/discover" icon-on = "ion-ios-speedometer" icon-off = "ion-ios-speedometer-outline" >
      < ion -nav-view name= "discover-tab" ></ion - nav-view>
   </ ion -tab >
   < ion -tab title = "我" href ="#/tabs/me" icon-on = "ion-ios-person" icon-off = "ion-ios-person-outline" >
      < ion -nav-view name= "me-tab"></ ion -nav-view >
   </ ion -tab >
</ ion -tabs >

```
	* title: tab的内容标题
	* href : 一种tab延伸出来的类似a标签的href属性
	* ion-on : 点击后的图标
	* ion-off : 未点击的图标 
	* <ion-nav-view> 定义啦子页面的视图（index.html也定义是视图，这里属于视图嵌套视图）


5、新建main.html路由文件
-------------
```
< ion -view view-title = "微信" >
   < ion -nav-buttons side = "right">
      < a class= "button" ng-click = "addfirend()" >添加好友</ a>
   </ ion -nav-buttons >
   < ion -content >
      main
   </ ion -content >
</ ion -view >
```
	* view-title 映射到index.html页<ion-nav-bar>的标题
	* side-right : 图标居右
	* <ion-view> 路由页面视图



6、打开服务器 访问index.html文件，会自动重定义路由为/tab/main
-------------

7.扩展 页面间传值
-------------
修改路由文件
```
.state( "tabs.main" ,{
       url :"/main/:value" ,   // 改变地址栏的值
       views:{             //子路由的视图
           'main-tab' :{
             templateUrl: "views/main-view/main.html" , //访问的地址
             controller: "main-controller"    //绑定控制器
           }
      }
   })
```
	* 修改URL后的参数  加入/：value（value是需要传的值）


控制器接收传过来的值
```
controllers .controller( "sao-firend" ,["$scope"  , "$stateParams" , function( $scope  , $stateParams){
    console .log($stateParams)
}]);
```

	* 注入$sateParams  就可以获取路由传过来的值

