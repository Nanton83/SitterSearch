class Sitters {
    constructor(){
        this.sitters = []
        this.adapter = new SittersAdapter()
        // this.bindEventListers()
        this.fetchAndLoadSitters()
    }

    fetchAndLoadSitters(){
        this.adapter.getSitters().then(sitters => {
            console.log(sitters)
        })
    }
}