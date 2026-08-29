// const applications = [
//     { company: "Google",   role: "SDE",        status: "Applied",  salary: 40 },
//     { company: "Amazon",   role: "Backend Dev", status: "Rejected", salary: 35 },
//     { company: "Flipkart", role: "SDE",        status: "Applied",  salary: 30 },
//     { company: "Swiggy",   role: "Frontend",   status: "Offer",    salary: 28 },
// ];

// applications.forEach(item => {
//     console.log(item.company);
// })

// const all_companies = applications.map(item => item.company);
// console.log(all_companies);

// const applied_companies = applications.filter(item => item.status === "Applied");
// console.log(applied_companies);

// const frontend_role = applications.find(item => item.role === "Frontend");
// console.log(frontend_role);

// const total_salary = applications.reduce((acc, item) => acc + item.salary, 0);
// console.log(total_salary);


// // A Curious question:
// // so what if i want to log an array of only the names of companies who offered me a frontend role? like should i use a combination of map() and find() in this case or foreach?

// // curious try:
// const frontend_companies = applications.filter(item => item.role === "Frontend").map(item => item.company);
// console.log((frontend_companies));




// async function getUser() {
//     try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
//         const data = await response.json();
//         console.log(`${data.name}, ${data.email}`);
//     }
//     catch (error){
//         console.log(`Error: ${error}`);
        
//     }
// }

// getUser();







// async function getUsers() {
//     try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")
//         const data = await response.json()
//         const userNames = data.map(item => item.name)
//         console.log(userNames);
//         const filteredUsers = data.filter(item => item.website.includes(".com")).map(item => item.name)
//         console.log(filteredUsers);
        
        
//     }
//     catch(e){
//         console.log(`Error: ${e}`);
        
//     }
// }

// getUsers()