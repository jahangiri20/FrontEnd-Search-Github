const ApiUrl = "https://api.github.com/users/";

const btnSearch = document.querySelector(".btn__Search");
const inputName = document.querySelector("#inputName");
const imgAvatar = document.querySelector("#avatar");
const showUser = document.querySelector(".show__user");
const post = document.querySelector(".post");
const userFollowing = document.querySelector(".user__Following");
const userFollowers = document.querySelector(".user__Followers");



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
    });
});

  function render(data) {
    const { avatar_url, hireable, following, followers, location, name , public_repos } = data;
    imgAvatar.src = avatar_url;
    showUser.innerText = name;
    post.innerText = public_repos;
    userFollowers.innerText = followers ;
    userFollowing.innerText = following;
    
    
   console.log(); 
    
  }
  
  






    
