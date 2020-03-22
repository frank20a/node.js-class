// const square = (x) => {
//     return x*x
// }

// const square = (x) => x*x

// console.log(square(3))

const event = {
    name: "birthday party",
    guestList: ["Frank", "Leia", "Luke"],
    printGuestList() {
        console.log("Guestlist for " + this.name)
        this.guestList.forEach(guest => console.log(guest + " is attending " + this.name))
    }
}

event.printGuestList()