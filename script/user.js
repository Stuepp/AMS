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
navbts = ['friends-icon.png','chat-icon.png','user-icon.png']
function startNavBar(){
    let navbar = document.createElement('nav')
    navbar.className('navbar')
    navbar.getElementById('body').appendChild(navbar)
    for(let count = 0; count < 3; count++){
        let i = document.createElement('i')
        i.getElementsByClassName('navbar').appendChild(i)
        i.setAttribute('id',navbts[count])
        let img = document.createElement('img')
        img.src = 'img/'+navbts[count]
        img.alt = navbts[count]
        img.style = 'width: 30px; height: 30px;'
        img.document.getElementById('navbts[count]').appendChild(img)
    }
}

window.onload = startNavBar()