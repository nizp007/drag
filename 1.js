function Drag(id){
	this.obj = document.getElementById(id);
	var _this = this;
	this.obj.addEventListener('mousedown',function(ev){
		var e = ev || window.event;
		_this.fnDown(e);
	},false);
}
