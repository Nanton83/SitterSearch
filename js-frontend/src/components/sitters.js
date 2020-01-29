class Sitters {
    constructor(){
        this.sitters = []
        this.adapter = new SittersAdapter()
        this.initiBindingsAndEventListers()
        this.fetchAndLoadSitters()
    }

    initiBindingsAndEventListers(){
        this.sittersContainer = document.getElementById('sitters-container')
    }

    fetchAndLoadSitters(){
        this.adapter
        .getSitters()
        .then(sitters => {
            sitters.forEach(sitter => this.sitters.push(new Sitter(sitter)))
            console.log(this.notes)
        })
        .then(() => {
            this.render()
        })
    }

    render(){
        this.sittersContainer.innerHTML = this.sitters.map(sitter => sitter.renderLi()).join('')
    }
}