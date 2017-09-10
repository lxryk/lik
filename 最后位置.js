/*
* @Author: Administrator
* @Date:   2017-09-10 11:31:12
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-10 11:33:00
*/
function lastindexof(arr,num){
	for(var i=arr.length-1;i>-1;i--){
		if(arr[i]==num){
			return i;
		}
	}
	return -1;
}