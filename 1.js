function Drag(id){
	this.obj = document.getElementById(id);
	var _this = this;
	this.obj.addEventListener('mousedown',function(ev){
		var e = ev || window.event;
		_this.fnDown(e);
	},false);
}
Drag.prototype.fnDown = function(ev){
	this.disX = ev.pageX - this.obj.offsetLeft;
	this.disY = ev.pageY - this.obj.offsetTop;
	var _this = this;
	document.addEventListener('mousemove',move,false);
	function move(ev){
		var e = ev || window.event;
		_this.fnMove(e);
	}
}
Drag.prototype.fnMove = function(ev){
	this.obj.style.left = ev.clientX - this.disX + 'px';
	this.obj.style.top = ev.clientY - this.disY + 'px';
}
