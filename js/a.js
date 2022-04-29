window.onload = function () {
  $(function () {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://www.layuicdn.com/layer/layer.js";
    document.getElementsByTagName("head")[0].appendChild(script);
    window.layerTc = function (obj) {
      console.log(obj);
      var win_wt = $(window).width();
      if (win_wt < 1100) {
        wap_wt(obj);
      } else {
        pc_wt(obj);
      }
    };
    function wap_wt(obj) {
      layer.open({
        type: 2,
        area: ["98%", "600px"],
        fixed: false,
        maxmin: false,
        content: obj,
        shade: [0.8, "#393D49"],
        shadeClose: true,
        btn: ["了解"],
        btnAlign: "c"
      });
    }
    function pc_wt(obj) {
      layer.open({
        type: 2,
        area: ["600px", "600px"],
        fixed: false,
        shadeClose: true,
        maxmin: false,
        content: obj,
        shade: [0.8, "#393D49"],
        btn: ["了解"],
        btnAlign: "c"
      });
    }
  });
};
