const fs = require("fs")
const chalk = require("chalk")

const readNote = (title) => {
    const note = loadNotes().find(i => i.title === title)

    if(note){
        console.log(chalk.yellow(note.title) + ": " + note.body)
    } else {
        console.log(chalk.bgRed("Note not found!"))
    }
    
}

const listNotes = () => {
    const notes = loadNotes()

    console.log(chalk.blue("These are your notes:"))
    notes.forEach(element => {
        console.log(chalk.yellow(element.title))
    });
}

const addNote = (title, body) => {
    const notes = loadNotes()
    
    if (!notes.find(i => i.title === title)) {     //Check for duplicate entries
        notes.push({
            title: title,
            body: body
        })
        console.log("New note saved...")
    } else {
        console.log("Duplicate note found! Note not saved...")
    }
    

    saveNotes(notes)
}

const removeNote = (title) => {
    const notes = loadNotes()
    const remNotes = notes.filter(i => i.title !== title)
    if (notes.length === remNotes.length){
        console.log(chalk.bgRed("Note not found"))
    } else {
        saveNotes(remNotes)
        console.log(chalk.bgGreen.black("Note removed!"))
    }
}

const saveNotes = (arr) => fs.writeFileSync("notes.json", JSON.stringify(arr))

const loadNotes = () => {
    try {
        return JSON.parse(fs.readFileSync("notes.json"))
    } catch (e) {
        console.log(chalk.bgRed(e))
        return []
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}