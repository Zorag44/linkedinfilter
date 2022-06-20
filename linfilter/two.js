
// async function getCurrentTab() {
//     let queryOptions = { active: true, lastFocusedWindow: true };
//     // `tab` will either be a `tabs.Tab` instance or `undefined`.
//     let [tab] = await chrome.tabs.query(queryOptions);
//     return tab.id;
//   }
var input;
document.getElementById("hello").addEventListener("click", async()=>{
    input = document.getElementsByTagName("input")[0].value;
    console.log(input);
    // if(input!=''){
    //     console.log(input);
    //     localStorage.setItem("inp",input);
    //     chrome.storage.sync.set({"inp": input}, function() {
    //         console.log('Value is set to ' + input);
    //       });
    // }
    // let tab= await chrome.tabs.query({ active: true, currentWindow: true });
    // console.log(tab.id);
    // let queryOptions = { active: true, lastFocusedWindow: true };
    // // `tab` will either be a `tabs.Tab` instance or `undefined`.
    // let [tab] = await chrome.tabs.query(queryOptions);
    // chrome.scripting.executeScript({

    //     target: { tabId: tab.id },
    
    //     function: check(input),
    
    //   });

});
// export {input};
// export input;

// function save(){
    
//     // localStorage.setItem("mark",true);
// }
// function check(){
//     var input = document.getElementsByTagName("input")[0].value;
//     if(input!=''){
//         console.log(input);
//         localStorage.setItem("inp",input);
//         chrome.storage.sync.set({"inp": input}, function() {
//             console.log('Value is set to ' + input);
//           });
//     }
// }
function check(input){
    console.log("Removing");
    console.log("hi");
    var textToRemove;
    chrome.storage.sync.get(['inp'], function(result) {
        console.log('Value currently is ' + result.key);
        textToRemove=result.key;
        localStorage.setItem("inp",result.key);
      });
    textToRemove=localStorage.getItem("inp");
    textToRemove=input;
    if(textToRemove!=''){
        console.log("working");
        var eles2=document.getElementsByClassName('comments-comment-item');
        for(let i=0;i<eles2.length;i++){
            var html = (eles2[i].innerHTML.toUpperCase());
            if(html.indexOf(textToRemove.toUpperCase()) != -1){
                eles2[i].style = "display: none;"
            }
        }
    }
}
// setInterval(check,2000)

