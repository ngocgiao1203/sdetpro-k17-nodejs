const readline = require("readline-sync");

const BASE_URL = "https://jsonplaceholder.typicode.com";
const USER_ENDPOINT = `${BASE_URL}/users`;
const POST_ENDPOINT = `${BASE_URL}/posts`;

//Main function
app();

async function app() {
    let isPlaying = true;
    await handlePromise(isPlaying);
}
async function handlePromise(isPlaying) {
    if (!isPlaying) {
        console.log(`See you again`);
        return;
    }

    printMenu();
    let userOption = await _getUserOption();
    switch (userOption) {
        case 1:
            await getTargetPost();
            break; 
        case 2:
            await getAllPosts();
            break; 
        case 0:
            console.log(`See you again`);
            return; 
        default:
            console.log(`Pls input valid option`);
    }

    await handlePromise(isPlaying);
}


//support function
function printMenu(){
    console.log(`
        1. Get a post content
        2. Get all posts
        0. Exit!
    `);
}

async function getTargetPost(){
    let userId = _getUserInput("userId: ");
    let response = await getAllPostForUser(userId)
    // return getAllPostForUser(userId).then(function(response){
        if(response.hasUser){
            const postId = _getUserInput("post id: ");
            const returnedData = response.returnedPostList.filter(function(responsePost){
                return responsePost.id === postId;
            })
            console.log(returnedData);
        }else{
            return
        }
    }

async function getAllPosts() {
    let userId = _getUserInput("userId: ");
    let response = await getAllPostForUser(userId);
    // return getAllPostForUser(userId).then(function (response) {
        if(response.hasUser){
            console.log(response.returnedPostList);
        }else{
            return
        }
    }

async function getAllPostForUser(userId){
    // return fetch(`${USER_ENDPOINT}/${userId}`)
    let userResult = await fetch(`${USER_ENDPOINT}/${userId}`)
        // .then(function(userResult){
            let hasUser = userResult.ok;
            if(hasUser){
                let postResponse = await fetch(POST_ENDPOINT)
                let response = await postResponse.json()
                const returnedPostList = response.filter(function(postsLists){
                    return postsLists.userId === userId;
                })
                return{
                    hasUser: true,
                    returnedPostList: returnedPostList
                }
            }else{
                console.log(`${userId} is not existing`);
                return {hasUser: false}
                
            }
        }
async function _getUserOption(){
    return _getUserInput("Select your option: ");
    // return new Promise(function(resolve){
    //     resolve (_getUserInput("Select your option: "));
    // })
}




function _getUserInput(question){
    return Number(readline.question(question));
}