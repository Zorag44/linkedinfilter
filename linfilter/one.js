//this will remove all comments which contain any of the given strings in sessionStorage
//it will reset once the session is over
function removeIt(){
    var eles2=document.getElementsByClassName('comments-comment-item');
    for(let i=0;i<eles2.length;i++){
        var html = (eles2[i].innerHTML.toUpperCase());
        for(var ind=0;ind<sessionStorage.length;ind++){
            console.log(sessionStorage.getItem(sessionStorage.key(ind)));
            if(html.indexOf(sessionStorage.getItem(sessionStorage.key(ind)).toUpperCase()) != -1){
                eles2[i].style = "display: none;"
                continue;
            }
        }
        
    }
    
    

}

window.onload=start=()=>{
    var textToRemove=prompt("Enter keywords to remove or click on cancel to continue");
    while(textToRemove!=null){
        sessionStorage.setItem(textToRemove,textToRemove);
        textToRemove=prompt("Enter keywords to remove or click on cancel to continue");
    }

    setInterval(removeIt,2000);
};


