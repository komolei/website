   var myChart = echarts.init(document.getElementById('drew'));
   var option = {
       baseOption: {
           series: [{
               type: 'pie',
               radius: '75%',
               roseType: 'angle',
               itemStyle: {
                   emphasis: {
                       shadowBlur: 100,
                       shadowOffsetX: 10,
                       shadowColor: 'rgba(0, 0, 0, 0.5)'
                   }
               },
               data: [{
                   value: 305,
                   name: 'AJAX,JSONP'
               }, {
                   value: 244,
                   name: 'LESS,SASS,BOOTSTRAP'
               }, {
                   value: 310,
                   name: 'NPM,Gulp,Webpack'
               }, {
                   value: 335,
                   name: 'Javascript&Jquery'
               }, {
                   value: 300,
                   name: 'HTML5&CSS3'
               }, {
                   value: 265,
                   name: 'NodeJs,VueJs'
               }, ]
           }],
           backgroundColor: "#111",
           textStyle: {
               fontWeight: "bold",
               fontSize: 20,
           }
       },
   };
   myChart.setOption(option)
   $(window).resize(function() {
       myChart.resize()
   })