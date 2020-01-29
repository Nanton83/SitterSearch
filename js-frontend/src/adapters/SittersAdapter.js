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

// Only job of sitters adapter is to communicate with API