var thunk = function(fn){
	return function(){
		var args = Array.prototype.slice.call(arguments, 0);
		var ctx = this;
		return function(callback){
			args.push(callback);			
			fn.apply(ctx, args);  // 为何是ctx，而不是fn？@TODO
		};
	};
};

module.exports = thunk;