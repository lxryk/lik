/*
* @Author: Administrator
* @Date:   2017-09-10 11:21:18
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-10 11:24:03
*/
function some(arr,num){
		for(var i=0;i<arr.length;i++){
			if(arr[i]==num){
               return i;
			}
		}
		return -1;
	}