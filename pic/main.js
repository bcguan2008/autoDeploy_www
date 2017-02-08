(function(){

	var canvas = document.getElementById('draw_board'),
		context = canvas.getContext('2d'),
		length = {
			imageX: 0,
			imageY: 0,
			winX: window.innerWidth,
			winY: window.innerHeight,
			scale: 0,
			changed: 0,
			touches: {x: 0, y: 0},
			moves: {x: 0, y: 0}
		},
		image = new Image();

	image.src = canvas.getAttribute('data-image');
	canvas.removeAttribute('data-image');
	image.addEventListener('load', function(){
		initDrawImage();
	});
	window.addEventListener('resize', function(){
		length.winX = this.innerWidth, length.winY = this.innerHeight;
		initDrawImage();
	});
	touchEvent(canvas, listener);
	document.body.addEventListener('touchmove', function(event){
		event.preventDefault();
	}, false);

	function listener(event){
		event.preventDefault();
		var touches = event.targetTouches, one = touches[0], two = touches[1];

		switch(event.type){
			case 'touchstart':
				setTouches(one.clientX, one.clientY, 0);
				two && (length.changed = hypotenuse(Math.abs(one.clientX - two.clientX), Math.abs(one.clientY - two.clientY), 0, 0));
				break;
			case 'touchmove':
				if( two ){
					layoutMove(one.clientX, one.clientY, two.clientX, two.clientY);
					layoutScale(one.clientX, one.clientY, two.clientX, two.clientY);
				} else {
					layoutMove(one.clientX, one.clientY, 0, 0);
				}
				setTouches(one.clientX, one.clientY);
				break;
			case 'touchend':
				//end
		}
	}

	function setTouches(x, y){
		length.touches.x = x;
		length.touches.y = y;
	}

	function getTouches(){
		return length.touches;
	}

	// 缩放布局
	function layoutScale(ox, oy, tx, ty){
		var h;
		if( ox == tx ){//特殊情况1
			h = Math.abs(oy - ty);
		} else if( oy === ty ){//特殊情况2
			h = Math.abs(ox - tx);
		} else {
			h = hypotenuse(Math.abs(ox - tx), Math.abs(oy - ty));
		}
		drawImage(h);
	}

	// 移动布局
	function layoutMove(ox, oy, tx, ty){
		var t = getTouches(0);
		length.moves.x += ox - t.x, length.moves.y += oy - t.y;
		drawImage();
	}

	function hypotenuse(w, h){
		return Math.sqrt(w * w + h * h);
	}

	function touchEvent(elem, listener){
		elem.addEventListener('touchstart', listener, false);
		elem.addEventListener('touchmove', listener, false);
		elem.addEventListener('touchend', listener, false);
	}

	function initDrawImage(){
		canvas.width = length.winX, canvas.height = length.winY;
		drawImage();
	}

	function drawImage(h){
		var s, l = 0;
		s = {w: image.width, h: image.height};
		typeof h === 'number' && (l = h - length.changed, length.changed = h);
		length.winX - image.width > length.winY - image.height ? (s.sw = length.winX + length.scale + l) : (s.sh = length.winY + length.scale + l);
		s = scale(s);
		if( s.w < length.winX ) return;
		length.scale += l;
		context.clearRect(0, 0, canvas.width, canvas.height);
		context.drawImage(image, 0, 0, image.width, image.height, (length.winX - s.w) / 2 + length.moves.x, (length.winY - s.h) / 2 + length.moves.y, s.w, s.h);
	}

	function scale(options){
		var scale = {w: 0, h: 0};
		for(var i in options){
			if( !options.hasOwnProperty(i) ) continue;
			options[i] = parseFloat(options[i]);
		}

		if( !options.w || !options.h ) return scale;

		if( options.sw ){
			scale.w = options.sw;
			scale.h = options.h * options.sw / options.w;
			return scale;
		}
		if( options.sh ){
			scale.h = options.sh;
			scale.w = options.w * options.sh / options.h;
			return scale;
		}

		return scale;
	}

})();