// Function to move to the previous slide
function prevSlide(carouselId) {
    
    var carousel = document.getElementById(carouselId);
    var slides = carousel.getElementsByClassName("carousel-item");
    var indicators = carousel.getElementsByClassName("productCard_indicator");
    var currentSlideIndex = 0;
    for (var i = 0; i < slides.length; i++) {
        if (slides[i].classList.contains("active")) {
            currentSlideIndex = i;
            slides[i].classList.remove("active");
            indicators[i].classList.remove("productCard_indicatorActive");
            break;
        }
    }
    if(currentSlideIndex == 0){
        currentSlideIndex = 5;
    }
    var prevSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    slides[prevSlideIndex].classList.add("active");
    currentSlide(carouselId, prevSlideIndex);
    indicators[prevSlideIndex].classList.add("productCard_indicatorActive");
}

// Function to move to the next slide
function nextSlide(carouselId) {
    var carousel = document.getElementById(carouselId);
    var slides = carousel.getElementsByClassName("carousel-item");
    console.log("Length", slides.length);
    var indicators = carousel.getElementsByClassName("productCard_indicator");
    var currentSlideIndex = 0;
    for (var i = 0; i < slides.length; i++) {
        if (slides[i].classList.contains("active")) {
            currentSlideIndex = i;
            console.log("currentSlideIndex",currentSlideIndex);
            slides[i].classList.remove("active");
            indicators[i].classList.remove("productCard_indicatorActive");
            break;
        }
    }
    var nextSlideIndex = (currentSlideIndex + 1);
    console.log("currentSlideIndex",currentSlideIndex);
    console.log(nextSlideIndex);
    if(nextSlideIndex >=5){
    nextSlideIndex = 0;
    console.log("nextSlideIndex",nextSlideIndex);
    }
    slides[nextSlideIndex].classList.add("active");
    currentSlide(carouselId, nextSlideIndex);
    indicators[nextSlideIndex].classList.add("productCard_indicatorActive");
}

// Function to move to a specific slide
function currentSlide(carouselId, _index) {
    
    var carousel = document.getElementById(carouselId);
    var slides = carousel.getElementsByClassName("carousel-item");
    var indicators = carousel.getElementsByClassName("productCard_indicator");
    var index = _index;
    if(index>=5){
        index = 0;
    }
    console.log("Setting current slide", index);
    for (var i = 0; i < slides.length; i++) {
        if (i === index) {
            slides[i].classList.add("active");
            indicators[i].classList.add("productCard_indicatorActive");
        } else {
            slides[i].classList.remove("active");
            indicators[i].classList.remove("productCard_indicatorActive");
        }
    }
}
// prevSlide('carousel_1');
// nextSlide('carousel_1');
// currentSlide('carousel_1', 2); 
