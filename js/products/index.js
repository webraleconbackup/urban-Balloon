
const birthdaySelector = document.getElementById("birthday-decorations")
const anniversarySelector = document.getElementById("anniversary-decorations")
const babyShowerSelector = document.getElementById("baby-shower-welcome")
const banquetHallSelector = document.getElementById("banquet-hall")
const justmarriedSelector = document.getElementById("just-married")
const adultbirthdaySelector = document.getElementById("adult-birthday")
const gallerySelector = document.getElementById("gallery")

const birthdayHomeSelector = document.getElementById("birthday-decorations-home")
const anniversaryHomeSelector = document.getElementById("anniversary-decorations-home")
const babyShowerHomeSelector = document.getElementById("baby-shower-welcome-home")
const banquetHallHomeSelector = document.getElementById("banquet-hall-home")
const justmarriedHomeSelector = document.getElementById("just-married-home")
const adultbirthdayHomeSelector = document.getElementById("adult-birthday-home")




const formatAmount = (amount) => {
    if(amount){
        return new Intl.NumberFormat("en-In",{
            style: "currency",
            currency: "INR"
        }).format(Number(amount))
    } else {
        return ""
    }
}


const share = (imageURL) => {
    window.location = 'whatsapp://send?text='+encodeURIComponent(imageURL);
}



function getBirthdayDecorations(){
    birthdaySelector.innerHTML = "";
    birthdayDecorations.map((item,index)=>{
        birthdaySelector.innerHTML += `
        <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
        <div class="team-item">
            <div class="position-relative overflow-hidden">
                <img class="img-fluid" style="width:100%; height:278px; border-radius:40px 20px 0 0;" src="${item.image}" alt="">
                <div class="team-overlay position-absolute start-0 top-0 w-100 h-100" style="width:278px; height: 278px;">
                
                    <a class="btn mx-1" onclick="makeCall()">CALL NOW</a>
                    
                </div>
            </div>
            <div class="bg-light text-center p-4">
                <h5 class="fw-bold mb-0">${item.te}</h5>
                <div class="d-flex justify-content-between align-items-center mt-3">
                    <span class="mx-1 text-white" onclick="handleBookNowButtonClick('/img/birthday/1a.jpeg')" style="color:black !important;">BOOK NOW</span>
                    <button class="btn btn-primary mx-1" onclick="handleBookNowButtonClick('/img/birthday/1a.jpeg')" style="background-color:black !important"> <i class="fa fa-phone-alt"></i> </button>
                </div>
                </div>
                </div>
                </div>
                `
            })
        }
        
        // <small>Price: ${formatAmount(item.price)}</small>

function getAnniversaryDecorations(){
    anniversarySelector.innerHTML = "";
    anniversaryDecorations.map((item,index)=>{
        anniversarySelector.innerHTML += `
        <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
        <div class="team-item">
            <div class="position-relative overflow-hidden">
                <img class="img-fluid" style="width:100%; height:278px border-radius:40px 20px 0 0;; src="${item.image}" alt="">
                <div class="team-overlay position-absolute start-0 top-0 w-100 h-100" style="width:278px; height: 278px;">
                    <a class="btn mx-1" onclick="makeCall()">CALL NOW</a>
                    
                </div>
            </div>
            <div class="bg-light text-center p-4">
                <h5 class="fw-bold mb-0">${item.title}</h5>
                <div class="d-flex justify-content-between align-items-center mt-3">
                <span class="mx-1 text-white" onclick="handleBookNowButtonClick('/img/birthday/1a.jpeg')" style="color:black !important;">GET QUOTES</span>
                <button class="btn btn-primary mx-1" onclick="handleBookNowButtonClick('/img/birthday/1a.jpeg')" style="background-color: black !important"> <i class="fa fa-phone-alt"></i> </button>
            </div>
            </div>
        </div>
    </div>
    <style>
    

        `
    })
}

function getBabyShowerDecorations(){
    babyShowerSelector.innerHTML = "";
    babyDecorations.map((item,index)=>{
        babyShowerSelector.innerHTML += `
        <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
        <div class="team-item">
            <div class="position-relative overflow-hidden">
                <img class="img-fluid" style="width:100%; height:278px; border-radius:40px 20px 0 0;" src="${item.image}" alt="">
                <div class="team-overlay position-absolute start-0 top-0 w-100 h-100" style="width:278px; height: 278px;">
                    <a class="btn mx-1" onclick="makeCall()">CALL NOW</a>
                    
                </div>
            </div>
            <div class="bg-light text-center p-4">
                <h5 class="fw-bold mb-0">${item.title}</h5>
                <div class="d-flex justify-content-between align-items-center mt-3">
                <span class="mx-1 text-white" onclick="handleBookNowButtonClick('/img/birthday/1a.jpeg')" style="color:black !important;">GET QUOTES</span>
                <button class="btn btn-primary mx-1" onclick="handleBookNowButtonClick('/img/birthday/1a.jpeg')" style="background-color:black !important"> <i class="fa fa-phone-alt"></i> </button>
            </div>
            </div>
        </div>
    </div>
        `
    })
}


function getBanquetHall(){
    banquetHallSelector.innerHTML = "";
    banquetHallDecoration.map((item,index)=>{
        banquetHallSelector.innerHTML += `
        <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
        <div class="team-item">
            <div class="position-relative overflow-hidden">
                <img class="img-fluid" style="width:100%; height:278px; border-radius:40px 20px 0 0;" src="${item.image}" alt="">
                <div class="team-overlay position-absolute start-0 top-0 w-100 h-100" style="width:278px; height: 278px;">
                    <a class="btn mx-1" onclick="makeCall()">CALL NOW</a>
                    
                </div>
            </div>
            <div class="bg-light text-center p-4">
                <h5 class="fw-bold mb-0">${item.title}</h5>
                <div class="d-flex justify-content-between align-items-center mt-3">
                <span class="mx-1 text-white" onclick="handleBookNowButtonClick('/img/birthday/1a.jpeg')" style="color:black !important;">GET QUOTES</span>
                <button class="btn btn-primary mx-1" onclick="handleBookNowButtonClick('/img/birthday/1a.jpeg')" style="background-color:black !important"> <i class="fa fa-phone-alt"></i> </button>
            </div>
            </div>
        </div>
    </div>
        `
    })
}

function getjustmarried(){
    justmarriedSelector.innerHTML = "";
    justmarriedDecoration.map((item,index)=>{
        justmarriedSelector.innerHTML += `
        <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
        <div class="team-item">
            <div class="position-relative overflow-hidden">
                <img class="img-fluid" style="width:100%; height:278px; border-radius:40px 20px 0 0;" src="${item.image}" alt="">
                <div class="team-overlay position-absolute start-0 top-0 w-100 h-100" style="width:278px; height: 278px;">
                    <a class="btn mx-1" onclick="makeCall()">CALL NOW</a>
                    
                </div>
            </div>
            <div class="bg-light text-center p-4">
                <h5 class="fw-bold mb-0">${item.title}</h5>
                <div class="d-flex justify-content-between align-items-center mt-3">
                <span class="mx-1 text-white" onclick="handleBookNowButtonClick('/img/birthday/1a.jpeg')" style="color:black !important;">GET QUOTES</span>
                <button class="btn btn-primary mx-1" onclick="handleBookNowButtonClick('/img/birthday/1a.jpeg')" style="background-color:black !important"> <i class="fa fa-phone-alt"></i> </button>
            </div>
            </div>
        </div>
    </div>
        `
    })
}

function getadultbirthday(){
    adultbirthdaySelector.innerHTML = "";
    adultbirthdayDecoration.map((item,index)=>{
        adultbirthdaySelector.innerHTML += `
        <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
        <div class="team-item">
            <div class="position-relative overflow-hidden">
                <img class="img-fluid" style="width:100%; height:278px; border-radius:40px 20px 0 0;" src="${item.image}" alt="">
                <div class="team-overlay position-absolute start-0 top-0 w-100 h-100" style="width:278px; height: 278px;">
                    <a class="btn mx-1" onclick="makeCall()">CALL NOW</a>
                    
                </div>
            </div>
            <div class="bg-light text-center p-4">
                <h5 class="fw-bold mb-0">${item.title}</h5>
                <div class="d-flex justify-content-between align-items-center mt-3">
                <span class="mx-1 text-white" onclick="handleBookNowButtonClick('/img/birthday/1a.jpeg')" style="color:black !important;">GET QUOTES</span>
                <button class="btn btn-primary mx-1" onclick="handleBookNowButtonClick('/img/birthday/1a.jpeg')" style="background-color:black !important"> <i class="fa fa-phone-alt"></i> </button>
            </div>
            </div>
        </div>
    </div>
        `
    })
}


function getGallery(){
    gallerySelector.innerHTML = "";
    [...birthdayDecorations,...anniversaryDecorations,...babyDecorations,...banquetHallDecoration].map((item,index)=>{
        gallerySelector.innerHTML += `
        <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
        <div class="team-item">
            <div class="position-relative overflow-hidden">
                <img class="img-fluid" style="width:100%; height:278px;" src="${item.image}" alt="">
            </div>
        </div>
    </div>
        `
    })
}


function getBirthdayDecorationsHome(){
    birthdayHomeSelector.innerHTML = "";
    birthdayDecorations.splice(0,4).map((item,index)=>{
        birthdayHomeSelector.innerHTML += `
        <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
        <div class="team-item">
            <div class="position-relative overflow-hidden">
                <img class="img-fluid" style="width:100%; height:278px; border-radius:40px 20px 0 0;" src="${item.image}" alt="">
                <div class="team-overlay position-absolute start-0 top-0 w-100 h-100" style="width:278px; height: 278px; border-radius: 20px;">
                    <a class="btn mx-1" onclick="makeCall()">CALL NOW</a>
                    
                </div>
            </div>
            <div class="bg-light text-center p-4">
                <h5 class="fw-bold mb-0">${item.title}</h5>
                
                <div class="d-flex justify-content-between align-items-center mt-3">
                <span class="mx-1 text-white" onclick="handleBookNowButtonClick('/img/birthday/1a.jpeg')" style="color:black !important;">GET QUOTES</span>
                <button class="btn btn-primary mx-1" onclick="handleBookNowButtonClick('/img/birthday/1a.jpeg')" style="background-color:black !important"> <i class="fa fa-phone-alt"></i> </button>
            </div>                </div>
                </div>
                </div>
                `
            })
        }
        
        // <small>Price: ${formatAmount(item.price)}</small>

function getAnniversaryDecorationsHome(){
    anniversaryHomeSelector.innerHTML = "";
    anniversaryDecorations.splice(0,4).map((item,index)=>{
        anniversaryHomeSelector.innerHTML += `
        <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
        <div class="team-item">
            <div class="position-relative overflow-hidden">
                <img class="img-fluid" style="width:100%; height:278px; border-radius:40px 20px 0 0;" src="${item.image}" alt="">
                <div class="team-overlay position-absolute start-0 top-0 w-100 h-100" style="width:278px; height: 278px;">
                    <a class="btn mx-1" onclick="makeCall()">CALL NOW</a>
                    
                </div>
            </div>
            <div class="bg-light text-center p-4">
                <h5 class="fw-bold mb-0">${item.title}</h5>
                <div class="d-flex justify-content-between align-items-center mt-3">
                <span class="mx-1 text-white" onclick="handleBookNowButtonClick('/img/birthday/1a.jpeg')" style="color:black !important;">GET QUOTES</span>
                <button class="btn btn-primary mx-1" onclick="handleBookNowButtonClick('/img/birthday/1a.jpeg')" style="background-color:black !important"> <i class="fa fa-phone-alt"></i> </button>
            </div>            </div>
        </div>
    </div>
        `
    })
}

function getBabyShowerDecorationsHome(){
    babyShowerHomeSelector.innerHTML = "";
    babyDecorations.splice(0,4).map((item,index)=>{
        babyShowerHomeSelector.innerHTML += `
        <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
        <div class="team-item">
            <div class="position-relative overflow-hidden">
                <img class="img-fluid" style="width:100%; height:278px; border-radius:40px 20px 0 0;" src="${item.image}" alt="">
                <div class="team-overlay position-absolute start-0 top-0 w-100 h-100" style="width:278px; height: 278px;">
                    <a class="btn mx-1" onclick="makeCall()">CALL NOW</a>
                    
                </div>
            </div>
            <div class="bg-light text-center p-4">
                <h5 class="fw-bold mb-0">${item.title}</h5>
                <div class="d-flex justify-content-between align-items-center mt-3">
                <span class="mx-1 text-white" onclick="handleBookNowButtonClick('/img/birthday/1a.jpeg')" style="color:black !important;">GET QUOTES</span>
                <button class="btn btn-primary mx-1" onclick="handleBookNowButtonClick('/img/birthday/1a.jpeg')" style="background-color:black !important"> <i class="fa fa-phone-alt"></i> </button>
            </div>            </div>
        </div>
    </div>
        `
    })
}


function getBanquetHallHome(){
    banquetHallHomeSelector.innerHTML = "";
    banquetHallDecoration.splice(0,4).map((item,index)=>{
        banquetHallHomeSelector.innerHTML += `
        <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
        <div class="team-item">
            <div class="position-relative overflow-hidden">
                <img class="img-fluid" style="width:100%; height:278px; border-radius:40px 20px 0 0;" src="${item.image}" alt="">
                <div class="team-overlay position-absolute start-0 top-0 w-100 h-100" style="width:278px; height: 278px;">
                    <a class="btn mx-1" onclick="makeCall()">CALL NOW</a>
                    
                </div>
            </div>
            <div class="bg-light text-center p-4">
                <h5 class="fw-bold mb-0">${item.title}</h5>
                <div class="d-flex justify-content-between align-items-center mt-3">
                <span class="mx-1 text-white" onclick="handleBookNowButtonClick('/img/birthday/1a.jpeg')" style="color:black !important;">GET QUOTES</span>
                <button class="btn btn-primary mx-1" onclick="handleBookNowButtonClick('/img/birthday/1a.jpeg'); " style="background-color:black !important"> <i class="fa fa-phone-alt"></i> </button>
            </div>            </div>
        </div>
    </div>
        `
    })
}


function getjustmarriedHome(){
    justmarriedHomeSelector.innerHTML = "";
    justmarriedDecoration.splice(0,4).map((item,index)=>{
        justmarriedHomeSelector.innerHTML += `
        <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
        <div class="team-item">
            <div class="position-relative overflow-hidden">
                <img class="img-fluid" style="width:100%; height:278px; border-radius:40px 20px 0 0;" src="${item.image}" alt="">
                <div class="team-overlay position-absolute start-0 top-0 w-100 h-100" style="width:278px; height: 278px;">
                    <a class="btn mx-1" onclick="makeCall()">CALL NOW</a>
                    
                </div>
            </div>
            <div class="bg-light text-center p-4">
                <h5 class="fw-bold mb-0">${item.title}</h5>
                <div class="d-flex justify-content-between align-items-center mt-3">
                <span class="mx-1 text-white" onclick="handleBookNowButtonClick('/img/birthday/1a.jpeg')" style="color:black !important;">GET QUOTES</span>
                <button class="btn btn-primary mx-1" onclick="handleBookNowButtonClick('/img/birthday/1a.jpeg')" style="background-color:black !important"> <i class="fa fa-phone-alt"></i> </button>
            </div>            </div>
        </div>
    </div>
        `
    })
}

function getadultbirthdayHome(){
    adultbirthdayHomeSelector.innerHTML = "";
    adultbirthdayDecoration.splice(0,4).map((item,index)=>{
        adultbirthdayHomeSelector.innerHTML += `
        <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
        <div class="team-item">
            <div class="position-relative overflow-hidden">
                <img class="img-fluid" style="width:100%; height:278px; border-radius:40px 20px 0 0;" src="${item.image}" alt="">
                <div class="team-overlay position-absolute start-0 top-0 w-100 h-100" style="width:278px; height: 278px;">
                    <a class="btn mx-1" onclick="makeCall()">CALL NOW</a>
                    
                </div>
            </div>
            <div class="bg-light text-center p-4">
                <h5 class="fw-bold mb-0">${item.title}</h5>
                <div class="d-flex justify-content-between align-items-center mt-3">
                <span class="mx-1 text-white" onclick="handleBookNowButtonClick('/img/birthday/1a.jpeg')" style="color:black !important;">GET QUOTES</span>
                <button class="btn btn-primary mx-1" onclick="handleBookNowButtonClick('/img/birthday/1a.jpeg')" style="background-color:black !important"> <i class="fa fa-phone-alt"></i> </button>
            </div>            </div>
        </div>
    </div>
        `
    })
}

if(birthdaySelector){
    getBirthdayDecorations();
}

if(anniversarySelector){
    getAnniversaryDecorations();
}

if(babyShowerSelector){
    getBabyShowerDecorations();
}

if(banquetHallSelector){
    getBanquetHall();
}

if(justmarriedSelector){
    getjustmarried();
}

if(adultbirthdaySelector){
    getadultbirthday();
}


if(birthdayHomeSelector){
    getBirthdayDecorationsHome();
}

if(anniversaryHomeSelector){
    getAnniversaryDecorationsHome();
}

if(babyShowerHomeSelector){
    getBabyShowerDecorationsHome();
}

if(banquetHallHomeSelector){
    getBanquetHallHome();
}

if(justmarriedHomeSelector){
    getjustmarriedHome();
}

if(adultbirthdayHomeSelector){
    getadultbirthdayHome();
}



if(gallerySelector){
    getGallery();
}


function convertImageToBase64(imageUrl, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
      var reader = new FileReader();
      reader.onloadend = function() {
        var base64 = reader.result.split(',')[1];
        callback(base64);
      };
      reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', imageUrl);
    xhr.responseType = 'blob';
    xhr.send();
  }

  function sendWhatsAppMessage(phoneNumber, message, imageBase64) {
    var sanitizedPhoneNumber = phoneNumber.replace(/\D/g, '');
    var encodedMessage = `${message}\n\nProduct Image: \n${imageBase64}`;
    console.log(sanitizedPhoneNumber,encodedMessage,message,imageBase64)
    var deepLinkUrl = `tel:${sanitizedPhoneNumber}`;
    window.open(deepLinkUrl);
  }

  function handleBookNowButtonClick(productImage) {
    var phoneNumber = '9001495099';
    var message = 'Hello, The Urban Decorations, I want to book this decoration.';
    var imageUrl = productImage;
    
    sendWhatsAppMessage(phoneNumber, message, `https://urbanballoons.com${imageUrl}`);
    // convertImageToBase64(imageUrl, function(imageBase64) {
    // });
    
    function gtag_whatsapp_conversion(url) {
  var callback = function () {
    if (typeof(url) != 'undefined') {
      window.location = url;
    }
  };
  gtag('event', 'conversion', {
      'send_to': 'AW-446695777/P6pcCJfdjKEZEOGSgNUB',
      'event_callback': callback
  });
  return false;
}
  }
  
  function makeCall() {
    var phoneNumber = '9001495099'; // Specify the phone number here
    var telURI = 'tel:' + phoneNumber;
    window.open(telURI);
}
