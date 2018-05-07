!function(){
	function writeCode(prefix,code,fn){
		let container = document.querySelector('#code')
		let styleTag = document.querySelector('#styleTag')
		let n = 0
		let id = setInterval(()=>{
			n+=1
			container.innerHTML=code.substring(0,n)
			styleTag.innerHTML = code.substring(0,n)
			container.scrollTop = container.scrollHeight
			if(n >= code.length){
				window.clearInterval(id)
				fn && fn.call()
			}
		},30)
	}
	let code = `
      /**/
    .preview{
      height: 100%;
      border: 1px solid #fee433;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #fee433;
    }
    .wrapper{
      width:100%;
      height:165px;
      position:relative;
      background:#fee433;
    }
    .nose{
      width:0px;
      height:0px;
      border-radius:11px;
      border:11px solid;
      border-color:black transparent transparent ;
      z-index:2;
      position:absolute;
      left:50%;
      top:20px;
      margin-left:-11px;
    }
    .eye{
      width:49px;
      height:49px;
      background:#2e2e2e;
      position:absolute;
      border-radius:50%;
      border:2px solid #000
    }
    .eye::before{
      content:"";
      display:block;
      background:#fff;
      width:20px;
      height:20px;
      border-radius:50%;
      position:absolute;
      left:6px;
      top:-1px
    }
    .eye.left{
      right:50%;
      margin-right:90px;
    }
    .eye.right{
      left:50%;
      margin-left:90px;
    }
    .face{
      border-radius:50px;
      width:68px;
      height:68px;
      background:#fc0d1c;
      border:2px  solid;
      position:absolute;
      top:85px
    }
    .face.left{
      right:50%;
      margin-right:116px
    }
    .face.right{
      left:50%;
      margin-left:116px
    }
    .upperLip{
      width:80px;
      height:20px;
      border:3px solid black;
      position:absolute;
      top:50px;
      z-index: 1;
      background:#fde348
        
    }
    .upperLip.left{
      border-bottom-left-radius:40px 20px;
      border-top:none;
      border-right:none;
      transform:rotate(-20deg);
      right:50%;
      z-index: 1;
    }
    .upperLip.right{
      border-bottom-right-radius:40px 20px;
      border-top:none;
      border-left:none;
      transform:rotate(20deg);
      left:50%;
      z-index: 1;
      
    }
    .lowerLip-wrapper{
      bottom:0px;
      position:absolute;
      left:50%;
      margin-left:-150px;
      height:109px;
      overflow:hidden;
      width:300px;
    }
    .lowerLip{
      height:3500px;
      width:300px;
      background:#990513;
      border-radius:200px/2000px;
      border:2px solid black;
      position:absolute;
      bottom:0px;
      overflow:hidden
    }
    .lowerLip:after{
      content:'';
      position:absolute;
      bottom:-140px;
      left:50%;
      margin-left:-60px;
      width:120px;
      height:230px;
      background:#fc4a62;
      border:none;
      border-radius:50px/100px
    }
	`
	writeCode("",code)
}.call()
