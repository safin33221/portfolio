
var typed = new Typed(".typing",{
    strings:[ "","Student.","Web Desinger.","web developer.","YouTuber.","BugHunter."],
    typeSpeed:150,
    BackSpeed:100,
    loop:true
})

function hireme(){
    alert("what is your name?")
    var name = prompt()
    alert("welcome " + name + ". carry on your process")
}

function submitMsg(){

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    const success = document.getElementById('success') ;
    document.getElementById('hidden').style.display = "none";
    document.getElementById("result").style.display ="block"

    document.getElementById('names').innerHTML ="Your Name : " + name;
    document.getElementById('emails').innerHTML =" Your Email : "+ email;
    document.getElementById('subjects').innerHTML =" Subject : "+ subject;
    document.getElementById('messages').innerHTML =" Message : "+ message;
    document.getElementById('succes').innerHTML ="submit has been successfull";
    
}