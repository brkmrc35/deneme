class person {
    
    constructor(firstname,lastname) {

     this.firstname = firstname
     this.lastname = lastname

    }

    grettings() {
 
     console.log(`Hello ${this.firstname} ${this.lastname}`)

    }

}

const p1 = new person("Burak" , "Miraç" , "Üçkardeş")
const p2 = new person("Ali" , "Hamza" , "Üçkardeş")

console.log(p1)
console.log(p2)

p1.grettings()
p2.grettings()