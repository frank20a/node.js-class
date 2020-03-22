const chalk = require("chalk")
const yargs = require("yargs")
const notes = require("./notes.js")

//Customising yargs
yargs.version("1.1.0")

//Add Command
yargs.command({
    command: "add",
    describe: "Add a new note",
    builder: {
        title: {
            describe: "The notes title",
            demandOption: true,
            type: "string"
        },
        body: {
            describe: "The notes contents",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv) { 
        notes.addNote(argv.title, argv.body)
    }
})

//Remove Command
yargs.command({
    command: "remove",
    describe: "Removes a note",
    builder: {
        title: {
            describe: "The notes title",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

//List Command
yargs.command({
    command: "list",
    describe: "Lists all notes",
    handler() {
        notes.listNotes()
    }
})

//Read Command
yargs.command({
    command: "read",
    describe: "Returns a notes contents",
    builder: {
        title: {
            describe: "The notes title",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

yargs.parse()