const elFormUsername = document.querySelector("#form-username");
const elCard = document.querySelector(".card");
const elCardImg = document.querySelector(".card-img-top");
const elCardBtn = document.querySelector("#card-btn");
const elCardTitle = document.querySelector("#card-title");

const getGitHubUser = async (username) => {
        try {
          if (!username) {
              return null;
          }
          const url = await fetch(`https://api.github.com/users/${username}`);
          let res = await url.json();
          if (res?.login) {
              return res;
          }
      } catch (error) {
          console.log(error);
      }
      return "Not Found"
      }

elFormUsername.onsubmit = async (e) => {
    e.preventDefault();
    let input = elFormUsername.firstElementChild.value
    let res = await getGitHubUser(input)

    if (res.login) {

        elCardImg.classList.remove("d-none")
        elCard.classList.remove("d-none")
        elCardBtn.classList.remove("d-none")
        elCardTitle.innerText = res.login
        elCardImg.src = res.avatar_url
        elCardBtn.href = res.html_url

        elFormUsername.firstElementChild.value = ""
        return elCard
    }

    else {

        elCardImg.classList.add("d-none")
        elCardBtn.classList.add("d-none")
        elCardTitle.innerText = `Not Found`;

        return elCard
    }
};