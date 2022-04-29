//如何调用
// <li onclick="layerTc('url')">产品介绍</li>


window.onload = function(){
    
    $(function(){
        
        //在header插入layer
        var script=document.createElement("script");
        script.type="text/javascript";
        script.src="js/layer.js";
        document.getElementsByTagName('head')[0].appendChild(script); 
        
        window.layerTc = function(obj){

            console.log(obj);

            // 这个JS是用来做稳定性说明引用的
            var win_wt = $(window).width();   //获取屏幕宽度；
            if(win_wt<1100){
              wap_wt(obj);
            }else{
              pc_wt(obj);
            }
            
            
            
            
            
        }
        
        //首先定义两个函数，分别是WAP和PC
        function wap_wt(obj){
            layer.open({
          type: 2,
          area: ['98%', '600px'],
          fixed: false, //不固定
          maxmin: false,  //显示最大化最小化
          content: obj,
          shade: [0.8, '#393D49'],  //遮罩  
          shadeClose: true, //关机遮罩关闭
          btn: ['知道了'], //提示按钮
          btnAlign: 'c' //按钮居中
                  }); 
          };
        function pc_wt(obj){
            layer.open({
          type: 2,
          area: ['600px', '600px'],
          fixed: false, //不固定
          shadeClose: true,
          maxmin: false,  //显示最大化最小化
          content: obj,
          shade: [0.8, '#393D49'],  //遮罩  一般这个不用管
          btn: ['知道了'], //提示按钮
          btnAlign: 'c'
                  }); 
          };
        
        
        
    });
    
    
    
}





