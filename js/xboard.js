var Xboard = function(){};

Xboard.prototype = {
  init:function(options){
    console.log(1);
  },
  getRect:function(){
    $("canvas").drawRect({
      strokeStyle: '#000',
      strokeWidth: 2,
      x: 150, y: 100,
      width: 50,
      height: 50,
      layer: true,
      draggable: true,
      name: 'polygan-4'
    });
  },
  drawPolygon6:function(){
    $("canvas").drawPolygon({
      strokeStyle: 'black',
      strokeWidth: 2,
      x: 200, y: 100,
      radius: 50,
      sides: 6,
      layer: true,
      draggable: true,
      name: 'polygan-6'
    });
  },
  drawPolygon3:function(){
    $("canvas").drawPolygon({
      strokeStyle: 'black',
      strokeWidth: 2,
      x: 200, y: 100,
      radius: 50,
      sides: 3,
      layer: true,
      draggable: true,
      name: 'polygan-3'
    });
  }

}