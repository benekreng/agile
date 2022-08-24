// Errors handler scripts

function displayError(status) {
    let logDiv = document.getElementById("log");
    status ? logDiv.style.display = 'flex' :  logDiv.style.display = 'none';
}

//https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror
window.onerror = function (msg, url, lineNo, columnNo, error) {
    console.log("eRr run")
    const string = msg.toLowerCase();
    const substring = 'script error';
    
    if (string.indexOf(substring) > -1) {
        alert('Script Error: See Browser Console for Detail');
    }
    
    else {
        const message = [
            'Message: ' + msg,
            'URL: ' + url,
            'Line: ' + lineNo,
            'Column: ' + columnNo,
            'Error object: ' + JSON.stringify(error)
        ].join('\n - ');

        console.log(message);
        document.getElementById("logText").innerHTML = msg;
        displayError(true)
    }

    return false;
};


function displayCustomError(status) {
    let logDiv = document.getElementById("customLog");
    status ? logDiv.style.display = 'flex' :  logDiv.style.display = 'none';
}

let customError = (msg) => {
    console.log(msg);
    document.getElementById("customLogText").innerHTML = msg;
    displayCustomError(true)
}