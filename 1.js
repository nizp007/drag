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
	
	document.addEventListener('mouseup',up,false);
	function move(ev){
		var e = ev || window.event;
		_this.fnMove(e);
	}
	function up(){
		_this.fnUp(move,up);
	}
	ev.preventDefault();
}
Drag.prototype.fnMove = function(ev){
	this.obj.style.left = ev.pageX - this.disX + 'px';
	this.obj.style.top = ev.pageY - this.disY + 'px';
}
Drag.prototype.fnUp = function(move,up){
	document.removeEventListener('mousemove',move,false);
	document.removeEventListener('mouseup',up,false);
}
