const readline = require("readline-sync");

const BASE_URL = "https://jsonplaceholder.typicode.com";
const USER_ENDPOINT = `${BASE_URL}/users`;
const POST_ENDPOINT = `${BASE_URL}/posts`;


//main function
app();

function app(){
    let isPlaying = true;

    handlePromise();

    function handlePromise() {
        if(isPlaying){
        printMenu();
        getUserOption()
            .then(function(userOption){
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
            }).then(handlePromise);
        }else{
            return;
        }
    }
}

function printMenu() {
    console.log(`
        1. Get a post content
        2. Get all posts
        0. Exit!
    `);
}

function getUserOption(){
    return new Promise (function (resolve){
        resolve(_getUserInput("Select your option: ")) ;
    })
}

function handleGetPostContent(){
    const userId = _getUserInput("userId: ");
    return _getAllPostForUser(userId).then(function (returnedData){
        if(returnedData.hasUser){
            const postId = _getUserInput("postId: ");
            const returnedPostContent = returnedData.returnedPostsForUser.filter(function(response){
                return response.id === postId;
            })
            console.log(returnedPostContent);
    }
})
}

function handleGetAllPostsForAllUser(){
    const userId = _getUserInput("userId: ");
    return _getAllPostForUser(userId).then(function(returnedAllPost){
        if (returnedAllPost.hasUser){
            console.log(returnedAllPost.returnedPostsForUser);
        }
    })
 
}

function _getAllPostForUser(userId){
    return fetch(`${USER_ENDPOINT}/${userId}`)
        .then(function(userResponse){
            let hasUser = userResponse.ok;
            if(hasUser){
                // console.log(hasUser);
                
                return fetch (POST_ENDPOINT)
                    .then (function (postResponse){
                        // console.log(postResponse);
                        
                        return postResponse.json()
                            .then (function (response){
                                // console.log(response);
                                
                                const returnedPostsForUser = response.filter(function (post){
                                    // console.log(post)
                                    return post.userId === userId;
                                })
                                // console.log(returnedPostsForUser);
                                
                                return{
                                    hasUser: true,
                                    returnedPostsForUser: returnedPostsForUser
                                }
                           })                
                        
            })}else{
                console.log(`User ID ${userId} is not existing`);
                return { hasUser: false};
                
            }
            
            })
        
}

function _getUserInput(question){
    return Number(readline.question(question));
}