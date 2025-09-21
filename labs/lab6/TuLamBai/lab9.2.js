const readline = require("readline-sync");

const BASE_URL = "https://jsonplaceholder.typicode.com";
const USER_ENDPOINT = `${BASE_URL}/users`;
const POST_ENDPOINT = `${BASE_URL}/posts`;


//main function
app();

async function app(){
    let isPlaying = true;

    handlePromise();

    async function handlePromise() {
        if(!isPlaying){
            return;
        }else{
            printMenu();
            let userOption = await getUserOption();
            switch(userOption){
                case 1: 
                    return handleGetPostContent();
                case 2:
                    return handleGetAllPostsForAllUser();
                case 0:
                    isPlaying = false;
                    console.log(`See you again`);
                    break;
                default:
                    console.log(`Nhap lui roi`);                      
                }
        }await handlePromise;

        }
    }

function printMenu() {
    console.log(`
        1. Get a post content
        2. Get all posts
        0. Exit!
    `);
}

async function getUserOption(){
    return _getUserInput("Select your option: ")
    // return new Promise (function (resolve){
    //     resolve(_getUserInput("Select your option: ")) ;
    // })
}

async function handleGetPostContent(){
    const userId = _getUserInput("userId: ");
    const returnedData = await _getAllPostForUser(userId)

    // return _getAllPostForUser(userId).then(function (returnedData){
        if(returnedData.hasUser){
            const postId = _getUserInput("postId: ");
            const returnedPostContent = returnedData.returnedPostsForUser.filter(function(response){
                return response.id === postId;
            })
            console.log(returnedPostContent);
    }
}


async function handleGetAllPostsForAllUser(){
    const userId = _getUserInput("userId: ");
    const returnedAllPost = await _getAllPostForUser(userId);
    // return _getAllPostForUser(userId).then(function(returnedAllPost){
        if (returnedAllPost.hasUser){
            console.log(returnedAllPost.returnedPostsForUser);
        }
    // })
 
}

async function _getAllPostForUser(userId){
    const userResponse = await fetch(`${USER_ENDPOINT}/${userId}`)
    // return fetch(`${USER_ENDPOINT}/${userId}`)
        // .then(function(userResponse){
            let hasUser = userResponse.ok;
            if(hasUser){   
                const postResponse = await fetch (POST_ENDPOINT)  
                // return fetch (POST_ENDPOINT)
                //     .then (function (postResponse){
                const response = await postResponse.json()   
                        // return postResponse.json()
                        //     .then (function (response){
                                
                                const returnedPostsForUser = response.filter(function (post){
                                    return post.userId === userId;
                                })                                
                                return{
                                    hasUser: true,
                                    returnedPostsForUser: returnedPostsForUser
                                }
                        //    })                
                        
            }else{
                console.log(`User ID ${userId} is not existing`);
                return { hasUser: false};   
            }
}

function _getUserInput(question){
    return Number(readline.question(question));
}