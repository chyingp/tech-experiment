Promise.reject(new Error('reason')).catch(function(error){
	console.log(error.message);
});