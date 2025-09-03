// Import the RequestHandler controller.
const RequestHandler = require('./RequestHandler');
// Import readline-sync to get user input from the console.
const readline = require("readline-sync");

// Main function to run the application logic.
async function app() {
    let isPlaying = true;

    // The main loop that handles user input and actions.
    async function handlePromise() {
        if (!isPlaying) {
            console.log(`Hẹn gặp lại bạn lần sau!`);
            return;
        }

        printMenu();
        const userOption = getUserOption();

        const requestHandler = new RequestHandler();

        switch (userOption) {
            case 1:
                const userIdGetPost = getUserInput("Nhập ID người dùng (userId): ");
                const postId = getUserInput("Nhập ID bài viết (postId): ");
                const singlePost = await requestHandler.printTargetPost(userIdGetPost, postId);
                if (singlePost) {
                    console.log(`\n--- Nội dung bài viết cho Người dùng ID ${userIdGetPost}, Bài viết ID ${postId} ---`);
                    console.log(singlePost);
                } else {
                    console.log(`\nKhông tìm thấy bài viết với ID ${postId} cho người dùng ${userIdGetPost}.`);
                }
                break;
            case 2:
                const userIdGetAllPosts = getUserInput("Nhập ID người dùng (userId): ");
                const allPosts = await requestHandler.printAllPosts(userIdGetAllPosts);
                if (allPosts.length > 0) {
                    console.log(`\n--- Tất cả bài viết cho Người dùng ID ${userIdGetAllPosts} ---`);
                    console.log(allPosts);
                } else {
                    console.log(`\nKhông tìm thấy bài viết nào cho người dùng ID ${userIdGetAllPosts}.`);
                }
                break;
            case 0:
                isPlaying = false;
                break;
            default:
                console.log(`Lựa chọn không hợp lệ, vui lòng thử lại.`);
                break;
        }

        await handlePromise();
    }

    handlePromise();
}

// Displays the menu options to the user.
function printMenu() {
    console.log(`
        1. Lấy nội dung một bài viết
        2. Lấy tất cả bài viết của một người dùng
        0. Thoát!
    `);
}

// Gets the user's choice from the menu.
function getUserOption() {
    return getUserInput("Chọn tùy chọn của bạn: ");
}

// Helper function to get a numerical input from the user.
function getUserInput(question) {
    return Number(readline.question(question));
}

// Execute the main function.
app();
