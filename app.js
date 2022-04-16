const ApiUrl = "https://api.github.com/users/";

const btnSearch = document.querySelector(".btn__Search");
const inputName = document.querySelector("#inputName");
const imgAvatar = document.querySelector("#avatar");
const showUser = document.querySelector(".show__user");
const showUerLogin = document.querySelector(".show__user--login");
const locations = document.querySelector(".locations");
const post = document.querySelector(".post");
const userFollowing = document.querySelector(".user__Following");
const userFollowers = document.querySelector(".user__Followers");
const apiShow = document.querySelector(".api__show");



btnSearch.addEventListener ("click", (event)=>{
    let searchs = inputName.value;
    if(!searchs){
        alert("enter type user name")
        return;
    }
    fetch(ApiUrl + searchs , { method : "GET" })
    .then(function(response){
        return response.json();
    })
    .then((data) => {
        render(data);
        apiShow.className ='api__show'; 
    });
    
});

  function render(data) {
    const { avatar_url, hireable, following, followers, location, name , public_repos , id , login , html_url} = data;
    imgAvatar.src = avatar_url;
    showUser.innerText = name; 

    showUerLogin.href = html_url;
    locations.innerText = location;
    post.innerText = [public_repos + ' ' + 'Repositores'] ;
    userFollowers.innerText =[followers + ' ' +'followersss'] ;
    userFollowing.textContent = [following + ' ' + 'following'];

    console.log(); 
    
  }
  
  






    
