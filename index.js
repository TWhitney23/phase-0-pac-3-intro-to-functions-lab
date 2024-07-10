function shout(string) {
    return string.toUpperCase();
}

hello.toUpperCase();

function logShout(hello) {
    console.log(hello.toUpperCase())
}


function whisper(string) {
    return string.toLowerCase();
}


function logWhisper(hello) {
    console.log(hello.toLowerCase())
}



function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
        return "I can\'t hear you!"
    } else if (string === "Let's have dinner together!") {
        return "I would love to!";
      } else {
        return "YES INDEED!";
      }
    }