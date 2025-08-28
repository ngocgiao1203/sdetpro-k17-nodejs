const readline = require("readline-sync");

const BASE_URL = "https://jsonplaceholder.typicode.com";
const USER_ENDPOINT = `${BASE_URL}/users`;
const POST_ENDPOINT = `${BASE_URL}/posts`;

//Main function
app();

/* 
1. if (!isPlaying) return; & case 0: isPlaying = false CÓ ĐANG CÙNG MỤC ĐÍCH SD KO?
2. tại sao return 1 function                         return handleGetPostContent();
3. Tại sao sau khi run function handlePromise(), lại có then handlePromise()


*/
//Support functions
function app() {
    let isPlaying = true; //global variable cho app()
    while (true) {
        handlePromise();
        // console.log(`Below handle promise `);
        
        break;
    }
    // console.log(`outofwhile`);
    
    
    function handlePromise() {
        // if (!isPlaying) return; //Nếu user ko chơi nữa -> break
        if (isPlaying){
            printMenu();
            getUserOption()
                .then(function (userOption) {
                    switch (userOption) {
                        case 1:
                            return handleGetPostContent();
                        case 2:
                            return handleGetAllPosts(); //lấy tất cả các posts liên quan đến user đó
                        case 0:
                            isPlaying = false;
                            console.log(`See you again!`);
                            break;
                        default:
                            console.log("Nhap lui roi Teo oi...");
                    }
                })
                .then(handlePromise); //đệ quy
                                        //Chờ khi promise dc giải quyết xong, mình sẽ gọi đúng hàm đó lại
                                        //Khi run dòng 26 -> "then" của dòng 37 sẽ chịu trách nhiệm chờ
        }else{
            return
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

function getUserOption() {
    return new Promise(function (resolve) {
        let userInput = _getUserInput("Select your option: ")
        resolve(userInput);
    });
}

//Support function
function handleGetPostContent() {
    const userId = _getUserInput("userId: ");

    return _getAllPostForUser(userId).then(function (returnedData) {
        if(returnedData.hasUser){
            const postId = _getUserInput("postId: ");
            const targetPost = returnedData.userRelatedPosts.filter(function (post) {
                return post.id === postId;
            });
            console.log(targetPost);
        }
    });
}

function handleGetAllPosts() {
    const userId = _getUserInput("userId: ");
    return _getAllPostForUser(userId).then(function (returnedData) {
        if(returnedData.hasUser){
            console.log(returnedData.userRelatedPosts);
        }
    });
}

function _getAllPostForUser(userId) {
    return fetch(`${USER_ENDPOINT}/${userId}`)
        .then(function (userResponse) {
            // console.log(userResponse);
                // return userResponse.json()
                //     .then(function (res){
                //         console.log(res.id); 
                //     })
                
                
            const hasUser = userResponse.ok; //fetch() support return "ok"
            if (hasUser) {
                //Logic to get post for that user
                return fetch(POST_ENDPOINT)
                    .then(function (response) {
                        return response.json()
                            .then(function (postResponse) {
                                    const userRelatedPosts = postResponse.filter(function (post) {
                                        //userRelatedPosts: return 1 array
                                        return post.userId === userId;
                                    });
                                    return {
                                        hasUser: true,
                                        userRelatedPosts: userRelatedPosts
                                    }
                            });
                    });
            } else {
                console.log(`UserId ${userId} is not existing!`);
                return { hasUser: false };
            }
        });
}

function _getUserInput(question) {
  return Number(readline.question(question));
}

//Test cho case 1: handleGetPostContent
//User tồn tại + post tồn tại
//User tồn tại + post ko tồn tại
//User ko tồn tại
