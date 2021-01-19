browser.runtime.onMessage.addListener(notify);

function onError(error) {
    console.error(`Error: ${error}`);
  }

function notify(message) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        let exists = false;
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            exists = true;
        }
        browser.tabs.query({
            currentWindow: true,
            active: true
          }, function(tabs){
            browser.tabs.sendMessage(
                tabs[0].id,
                {exists: exists}
              ).catch(onError);
        })
       
    };
    xhr.open("GET", message.url, true);
    xhr.send();
}
