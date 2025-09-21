class Post{

    constructor (userId, id, title, body){
        this._userId = userId;
        this._id = id;
        this._title = title;
        this._body = body;
    }
    //Nếu mình ko có "explicit declare" cho constructor thì nó sẽ có 1 default constructor cho mình
    //Để construct được cái Post này -> tôi cần 1 userId, id, title, body
    //Mục đích của constructor: khi tạo 1 model nào đó, tôi cần data nào đó -> đổ vào các property
        //Hoặc cách 2: tạo 1 object rỗng -> dùng setter

    getUserId(){
        return this._userId;
    }
    getId(){
        return this._id;
    }
    getTitle(){
        return this._title;
    }
    getBody(){
        return this._body;
    }


    setUserId(userId){
        this._userId = userId;
    }
    setId(id){
        this._id = id;
    }
    setTitle(title){
        this._title = title;
    }
    setBody(body){
        this._body = body
    }
}

module.exports = Post;
