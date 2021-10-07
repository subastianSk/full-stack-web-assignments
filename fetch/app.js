async function getData() {
    const url = 'https://randomuser.me/api/?results=2';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderUsers() {
    let respond = await getData();
    console.log(respond);
    let html = '';
    respond.results.forEach(user => {
        let htmlSegment = `<div class="user">
                            <img src="${user.picture.large}" >
                            <h2>${user.name.first} ${user.name.last}</h2> 
                            <div class="email"><a href="email:${user.email}">
                            ${user.email}</a>
                        </div>
                            </div>`;  
       
     html += htmlSegment;
   });
     let container = document.querySelector('.container');
     container.innerHTML = html;
}
 renderUsers();