// JavaScript Document

function navtab(n){
	var obj=document.getElementById("navtabs").getElementsByTagName("a")
	for(var i=0;i<obj.length;i++){
		if(i==n){
			obj[i].className="navhover"
			document.getElementById(obj[i].id+"text").style.display="block";
			}
		else{
			obj[i].className=""
		document.getElementById(obj[i].id+"text").style.display="none";
		}
	    }

	}

function c_rtab(n){
	var obj=document.getElementById("c_rtabs").getElementsByTagName("a")
	for(var i=0;i<obj.length;i++){
		if(i==n){
			obj[i].className="navhover"
			document.getElementById(obj[i].id+"text").style.display="block";
			}
		else{
			obj[i].className=""
		document.getElementById(obj[i].id+"text").style.display="none";
		}
	    }

	}
	
function shift1(n){
	var obj=document.getElementById("shift1").getElementsByTagName("a")
	for(var i=0;i<obj.length;i++){
		if(i==n){
			obj[i].className="shifthover"
			document.getElementById(obj[i].id+"text").style.display="block";
			}
		else{
			obj[i].className=""
		document.getElementById(obj[i].id+"text").style.display="none";
		}
	    }

	}
	
function shift2(n){
	var obj=document.getElementById("shift2").getElementsByTagName("a")
	for(var i=0;i<obj.length;i++){
		if(i==n){
			obj[i].className="shifthover"
			document.getElementById(obj[i].id+"text").style.display="block";
			}
		else{
			obj[i].className=""
		document.getElementById(obj[i].id+"text").style.display="none";
		}
	    }

	}
	
function shift3(n){
	var obj=document.getElementById("shift3").getElementsByTagName("a")
	for(var i=0;i<obj.length;i++){
		if(i==n){
			obj[i].className="shifthover"
			document.getElementById(obj[i].id+"text").style.display="block";
			}
		else{
			obj[i].className=""
		document.getElementById(obj[i].id+"text").style.display="none";
		}
	    }

	}
function news2th_l(n){
	var obj=document.getElementById("news2th_l").getElementsByTagName("a")
	for(var i=0;i<obj.length;i++){
		if(i==n){
			obj[i].className="navhover"
			document.getElementById(obj[i].id+"text").style.display="block";
			}
		else{
			obj[i].className=""
		document.getElementById(obj[i].id+"text").style.display="none";
		}
	    }

	}
function new2th_m(n){
	var obj=document.getElementById("new2th_m").getElementsByTagName("a")
	for(var i=0;i<obj.length;i++){
		if(i==n){
			obj[i].className="hovernav"
			document.getElementById(obj[i].id+"text").style.display="block";
			}
		else{
			obj[i].className=""
		document.getElementById(obj[i].id+"text").style.display="none";
		}
	    }

	}
function xq(n){
	var obj=document.getElementById("xq").getElementsByTagName("a")
	for(var i=0;i<obj.length;i++){
		if(i==n){
			obj[i].className="xqhover"
			document.getElementById(obj[i].id+"text").style.display="block";
			}
		else{
			obj[i].className=""
		document.getElementById(obj[i].id+"text").style.display="none";
		}
	    }

	}