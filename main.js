var pin = [];
var num=0;
var persona=['1br0','Pr0xY','Spectra'];
var per;

function pres(n){
	pin[num]=n;
	num++;
	document.getElementById("dot"+ (num)).style.backgroundColor="white";
	if(pin=='1,8,6,4'){per=0};
	if(pin=='8,1,7,6'){per=1};
	if(pin=='1,3,4,7'){per=2};
	if(per!=null){
		alert("Welcome "+persona[per]);
		persona=persona[per];
		per=null;
		goto('chat');
	}

	if(num==4){
		pin=[];
		num=0;
		for(var i=1;i<5;i++){
			document.getElementById("dot"+ (i)).style.backgroundColor="black";
		}
	}
}
