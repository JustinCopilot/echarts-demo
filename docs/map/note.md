## 地图组件常见配置

### geo

```js
{
    type:'map', //绘制类型 String
    map:'chinaMap', //地图来源 String
    roam:true, //是否开启平移、缩放等功能 boolean
    zoom:8, //地图缩放级别（数字越大，地图越局部）number
    center:[104.2,30.5], //地图的中心点  coordinate
    label:{ //设置地图的文字信息
        show:false, //是否展示boolean
        color:'blue', //文字颜色string/16进制
        fontSize:9 //字体大小number
    },
    itemStyle:{
        areaColor:'pink' //地图颜色string/16进制
    }
}
```

### tooltip

```js
{
    // 触发类型
    trigger:'item', //item图形触发，放到图形上触发；axis坐标轴触发
    // 坐标轴指示器
    axisPointer:{
        type:'cross'//line显示一个实线，shadow显示阴影效果，cross十字准星
    },
    showContent:false,//是否显示悬浮层
    // 悬浮层的样式（css样式
    backgroundColor:"pink",
    // 自定义提示框信息:该函数的返回值就是提示框的内容
    formatter(params){
        for(let i=0;i<params.length;i++){
            return "名字："+params[i].name //或者直接写html内容
        }
    }
}
```

### 地图标记

```js
{
    // 散点图
    series: [
        {
            type: "scatter", //图表类型:散点图
            data: [
                {
                    name: "北京市", //数据项的名字
                    value: [116.42, 39.92],/ /坐标
                }
            ],
            coordinateSystem:'geo', //通过地图显示散点位置
            symbolSize:30 //点的大小
        },
        {
            type: "effectScatter", //图表类型:涟漪效果的散点图
            data: [
                {
                    name: "西安市", //数据项的名字
                    value: [108.95, 34.26], //坐标
                }
            ],
            coordinateSystem:'geo', //通过地图显示位置
            symbolSize:30 //点的大小
        }
    ]
}
```
