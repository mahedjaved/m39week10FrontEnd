# Description

> Recap of fundamentals of React.js
> Includes making forms, fetching API and outputting user info
> [FINISHED] > Focus on building up and using Mongoose backend to setup users
> [FINISHED] CR operations

# Future Changes and Improvements

> [TODO] Performing UD operations

> Andy didnt have a try catch statement for his hashPassword middleware function ! I had to add it myself later when working with logout and update request

# Tips N Learned

> Make sure to always use {} in React arguments ONLY ! if you do this index.js then arguments go to UNDEFINED

> Occured when working on updates, token and password went to UNDERFINED

> Also, the response messages from Andy's backend are ONLY OUTPUTTED if they are console.logged in React front-end !!

> The Update User function token was not being passed --> it finally worked by removing the dot, which makes no sense because it is the same token, I used for Logout !

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
