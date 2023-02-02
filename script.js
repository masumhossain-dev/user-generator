const loadUsers = () =>{
   fetch('https://randomuser.me/api/?results=5000').then(res=>res.json()).then(data => displayUsers(data.results))
}
const displayUsers = users =>{
   const usersContainer = document.getElementById('user-container');
   for(const user of users){
      console.log(user)
      const userDiv = document.createElement
      ('div');
      userDiv.innerHTML = `
      <h3>User Id: ${user.id.name} - ${user.id.value}</h3>
      <h3>Name: ${user.name.title} ${user.name.first} ${user.name.last}</h3>
      <h3>Email: ${user.email}</h3>
      `;
      usersContainer.appendChild(userDiv
         )
   }
}