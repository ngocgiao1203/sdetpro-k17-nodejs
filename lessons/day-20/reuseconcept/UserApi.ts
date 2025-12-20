import { BaseApiClient } from "./BaseApiClient";

export default class UserApi extends BaseApiClient{
    async getUsers(){
        return this.get('/users');
    }
    async createUsers(userObj: any){
        return this.post('/users', userObj);
    }
}