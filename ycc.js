function aaa(){var divHtml=document.createElement("div");divHtml.innerHTML="<div style='position: fixed;bottom: 1.1rem;left: 50%;width: 100%;transform: translateX(-50%);width: 100%;text-align: center;background-color: #FFF;margin: 0;box-sizing: border-box;'><span class='aabb' style='margin-bottom: 0.2rem;color: #FFF;display: inline-block;width: 6.98rem;height: 0.7rem;line-height: 0.7rem;font-size: 0.3rem;border-radius: 0.1rem;font-weight: bold;background-color: #FF0000;color: #FFF;margin-top: 0.2rem;'>go!</span></div>";document.querySelector(".btn").before(divHtml);document.getElementsByClassName("aabb")[0].onclick=function(){if(!ds){bbb();ds=setInterval(bbb,jg);}else{clearInterval(ds);ds=undefined;}};}function bbb(){var ba=ccc().split(":");var bb="14";if(ba[0]=="15"||ba[0]=="16"){bb="32";}if(ba[1]>=bb){document.getElementsByClassName("btn")[0].childNodes[0].click();document.querySelector(".btn span").classList.remove("btn-gray");document.getElementsByClassName("aabb")[0].innerText=ccc()+"抢券中...";}else{document.getElementsByClassName("aabb")[0].innerText=ccc();}}function ccc(){var nowDate=new Date();return nowDate.toLocaleTimeString()+":"+nowDate.getMilliseconds()}var ds;aaa();var jg=500;
