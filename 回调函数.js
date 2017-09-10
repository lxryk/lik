/*
* @Author: Administrator
* @Date:   2017-09-10 11:38:15
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-10 11:39:58
*/
function filter(arr,fn){
	var newarr=[];
	for(var i=0;i<arr.length;i++){
		if(fn(arr[i])){
			newarr[newarr.length]=arr[i];
		}
	}
	return newarr;
}