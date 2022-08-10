# Information

> Recap of fundamentals of React.js
> Includes making forms, fetching API and outputting user info
> [FINISHED] > Focus on building up and using Mongoose backend to setup users

# Future Changes

> [TODO] Performing CRUD operations

# Unused Code Placed Here

> Code to be improved for rendering

<h2>User Information Form</h2>
<input onKeyDown={(event) => handleUser(event)}></input>
<ul>
    {user.map((item, index) => {
        return <li key={index}>{item}</li>;
    })}
</ul>

> Code to improve form for multiple entries --> NOT RECOMMENDED though

This cancelled, it needs to be rebuild for multiple user entry, you can use both ENTER key or form button, I'd have reviews that you dont need to list it since it will just add to the data as you go

const handleUser = async (event) => {
if (event.key === "Enter") {
console.log(`[info handleUserEnter] You pressed enter`);
const userArray = [...user];
userArray.push(event.target.value);
setUser(userArray);
