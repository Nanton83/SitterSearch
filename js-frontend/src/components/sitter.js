class Sitter{
    constructor(sitterJSON){
        this.id = sitterJSON.id
        this.name = sitterJSON.name
    }

    renderLi(){
        return `<li>${this.name}</li>`
    }
}