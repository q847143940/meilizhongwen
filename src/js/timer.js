
function display()
{
	// 创建一个当前时间的对象
	var oDate = new Date();

	var year = oDate.getFullYear();
	var month = oDate.getMonth() + 1;
	var day = oDate.getDate();
// 获取日期对象的 时、分、秒
	var h = oDate.getHours();
	var m = oDate.getMinutes();
	var s = oDate.getSeconds();
// 星期
	var week = oDate.getDay();

	var str = "";
	
	str += year + "年" + month + "月" + day + "日 ";

	var arr = ["日", "一",  "二",  "三",  "四",  "五",  "六"];

	str += "星期" + arr[week] + " ";
	
	if (h < 10)
	{
		str += "0";
	}
	str += h;
	str += ":";


	if (m < 10)
	{
		str += "0";
	}
	str += m;
	str += ":";


	if (s < 10)
	{
		str += "0";
	}
	str += s;
	str += "HKT";
//// 获取日期对象的毫秒数
//	var ms = oDate.getMilliseconds();
//	str += ".";
//	str += ms;

	document.getElementsByClassName("bottom_1")[0].innerHTML = str;
}

function func()
{
//	console.log(func)
	setInterval( display , 10);
	
}
window.onload=function(){
	func()
}


