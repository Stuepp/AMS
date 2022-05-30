class User{
    constructor(name, description, age, friends, picture){
        this.name = name
        this.description = description
        this.age = age
        this.friends = friends
        this.picture = picture

        console.log(`Hi ${name} is here!`)
    }

    getName(){
        return this.name
    }
    getDescription(){
        return this.description
    }
    getAge(){
        return this.age
    }
    getFriends(){
        return this.friends
    }
    getPicture(){
        return this.picture
    }
    setName(name){
        this.name = name
    }
    setDescription(description){
        this.description = description
    }
    setAge(age){
        this.age = age
    }
    setFriends(friends){
        this.friends = friends
    }
    setPicture(picture){
        this.picture = picture
    }

    addFriend(friend){
        this.getFriends.push(friend)
    }
}

let user1 = new User('Poporoca','Roca slayer', 21, ['josé','zé'], 'imagem')// name, description, age, friends, picture