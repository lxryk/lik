/*
* @Author: Administrator
* @Date:   2017-09-10 11:33:51
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-10 11:37:22
*/
/*  万能 删除  添加  */
function splice(arr,pos,num,...rest){
	var newarr=splicecancel(arr,pos,num);
	if(rest.length>0){
		newarr=spliceAdd(newarr,pos,...rest)
	}
	return newarr;
}


/*  删除  */
function splicecancel(arr,pos,num){
	var newarr=[];
	for(var i=0;i<arr.length;i++){
		if(i>=pos && i<pos+num){
			continue;
		}
        newarr[newarr.length]=arr[i];
	}
	return newarr;
}


/*  添加  */
function spliceAdd(arr,pos,...rest){
	var newarr=[];
	for(var i=0;i<pos;i++){
		newarr[newarr.length]=arr[i];
	}
	for(var i=0;i<rest.length;i++){
		newarr[newarr.length]=rest[i];
	}
	for(var i=pos;i<arr.length;i++){
		newarr[newarr.length]=arr[i];
	}
	return newarr;
}