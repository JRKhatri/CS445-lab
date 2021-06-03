window.onload= function(){
     refreshUser();
     document.getElementById("refreshBtn").onclick = refreshUser;
     }
    
function refreshUser(){
    fetchDisplay('https://randomuser.me/api/');
    fetchDisplayOne('https://randomuser.me/api/');
    fetchDisplayTwo('https://randomuser.me/api/');

}

async function fetchDisplay(url){
    let response = await fetch(url);
    let jsonObj = await response.json();

    let firstName = jsonObj.results[0].name.first;
    let lastName = jsonObj.results[0].name.last;
    let phone = jsonObj.results[0].phone;
    let email = jsonObj.results[0].email;
    let profilePhoto = jsonObj.results[0].picture.large;

    document.getElementById("name").innerHTML = firstName +" "+lastName;
    document.getElementById("phone").innerHTML = phone;
    document.getElementById("email").innerHTML = email;
    document.getElementById("profileImage").src = profilePhoto;
    
}

    async function fetchDisplayOne(url){
        let response = await fetch(url);
        let jsonObj = await response.json();
        let firstName = jsonObj.results[0].name.first;
        let lastName = jsonObj.results[0].name.last;
        let phone = jsonObj.results[0].phone;
        let email = jsonObj.results[0].email;
        let profilePhoto = jsonObj.results[0].picture.large;

    document.getElementById("name1").innerHTML = firstName +" "+lastName;
    document.getElementById("phone1").innerHTML = phone;
    document.getElementById("email1").innerHTML = email;
    document.getElementById("profileImage1").src = profilePhoto;
    }
    async function fetchDisplayTwo(url){
        let response = await fetch(url);
        let jsonObj = await response.json();
        let firstName = jsonObj.results[0].name.first;
        let lastName = jsonObj.results[0].name.last;
        let phone = jsonObj.results[0].phone;
        let email = jsonObj.results[0].email;
        let profilePhoto = jsonObj.results[0].picture.large;

    document.getElementById("name2").innerHTML = firstName +" "+lastName;
    document.getElementById("phone2").innerHTML = phone;
    document.getElementById("email2").innerHTML = email;
    document.getElementById("profileImage2").src = profilePhoto;
}


