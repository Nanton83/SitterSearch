class SittersAdapter{
    constructor(){
        this.baseUrl = 
        'http://localhost:3000/api/v1/sitters'
    }

    getSitters(){
        return fetch(this.baseUrl).then(res => res.json()
        
        )
    }
}