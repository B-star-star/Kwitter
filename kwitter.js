function addUser()
{
    user_name=document.getElementById("user_name").Value;
    localStorage.getItem("username",user_name);
    window.location="kwitter_room.html";
}