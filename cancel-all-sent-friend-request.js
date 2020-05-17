(function() {
	var cancelRequest = true;
	const goneFn = () => {
		if(cancelRequest){
			var inputs = document.getElementsByClassName('_54k8 _52jg _56bs _26vk _2b4n _56bt');
			if(inputs.length > 0){
				for(var i=0; i != inputs.length; i++) {   
					inputs[i].click();					
					if( i == (inputs.length-1)){
						setTimeout(() => {
							removeElements();
						}, 500);
					}
				}
			}else{
				alert("No More Result Found!");
			}
		}else{
			alert("All Friend Request Cancelled Successfully!");
			location.reload();
		}
	};
	goneFn();
	const removeElements = () => {
		while (document.getElementsByClassName('_55wp _7om2 _5pxa _8yo0')[0]) {
			document.getElementsByClassName('_55wp _7om2 _5pxa _8yo0')[0].remove();
		}
		setTimeout(() => {
			loadMore();
		}, 1000);
	};
	const loadMore = () => {
		var noMore = document.getElementsByClassName('_52lz'); 
		if(noMore){
			cancelRequest = false;
			location.reload();
		}else{
			window.scrollTo(0,document.body.scrollHeight);
			setTimeout(() => {
				goneFn();
			}, 500);
		}
	};
})();
