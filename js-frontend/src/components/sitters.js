class Sitters {
    constructor(){
        this.sitters = []
        this.adapter = new SittersAdapter()
        // this.bindEventListers()
        this.fetchAndLoadSitters()
    }

    fetchAndLoadSitters(){
        this.adapter
        .getSitters()
        .then(sitters => {
            sitters.forEach(sitter => this.sitters.push(sitter))
        })
        .then(() => {
            this.render()
        })
    }

    render(){
        const sittersContainer = document.getElementById('sitters-container')
        sittersContainer.innerHTML = 'my sitters here'
        console.log('The sitters are', this.sitters)
    }
}