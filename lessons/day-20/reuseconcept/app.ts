import UserApi from "./UserApi";

main();


async function main(){
    const baseUrl = "https://jsonplaceholder.typicode.com";
    const userApiHandler = new UserApi(baseUrl);

    //Get all users
    const allUsers: any[] = await userApiHandler.getUsers();

    //Create user
    const user = {
        name: "Teo co don",
        password: "aicungbiet"
    }

    const userCreationResponse = await userApiHandler.createUsers(user);
    console.log(userCreationResponse);
    
}