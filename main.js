class Carousel{

    constructor(element, options = {}){
        this.element = element
        this.options = Object.assign({}),{
            slidesToScroll : 1,
            slidesVisible : 1,
        }, option
        debugger
    }
}

document.addEventListener("DOMContentLoaded", function()){
    new Carousel (document.querySelector('#carousel__main')),{
        slidesToScroll : 1,
    }
}