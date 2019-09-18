function onReady () {
     console.log(document.readyState);
     //NOT SURE THIS WORKS
     
     if  ((((window.matchMedia("(max-width: 414px)").matches)) && ((window.matchMedia( "(orientation: portrait)").matches))) || (((window.matchMedia("(max-width: 823px)").matches)) && ((window.matchMedia( "(orientation: landscape)").matches))))  {
          console.log(document.readyState);
          const images = [
               './images/img1_DP243443.jpg', 
               './images/img2_DP240268.jpg', 
               './images/img3_DP245119.jpg', 
               './images/img4_DP245144.jpg', 
               './images/img5_26.7.1416_01.jpg', 
               './images/img6_DP-17700-001.jpg',  
               './images/img1_DP243443.jpg', 
               './images/img2_DP240268.jpg', 
               './images/img3_DP245119.jpg', 
               './images/img4_DP245144.jpg', 
               './images/img5_26.7.1416_01.jpg',
               './images/img6_DP-17700-001.jpg',
          ]
          console.log(images)
          let matches = 0;

          let array12 = [];
          for (var i = 0; i < 12; i ++) {
               array12[i] = i;
          }
          function shuffleArray(array) {
               for (let i = array.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [array[i], array[j]] = [array[j], array[i]];
                    }
               }
          shuffleArray(array12);
          console.log(array12);

          let imageArray = []
          for (let i = 0; i < array12.length; i++) {
               imageArray.splice(array12[i], 0, images[i]);
          }
          console.log(imageArray);
          let imagesContainer = []
          for (let i = 0; i < 18; i++) {
               imagesContainer[i] = i;
               imagesContainer[i] = '#image-' + imagesContainer[i];
          }
          imagesContainer.splice(4, 2);
          imagesContainer.splice(8, 2);
          imagesContainer.splice(12, 2);
          console.log(imagesContainer);
          let innerCard = []
          for (let i = 0; i < 17; i++) {
               innerCard[i] = i;
               innerCard[i] = '#flip-card-inner-' + innerCard[i];
          }
          innerCard.splice(4, 2);
          innerCard.splice(8, 2);
          innerCard.splice(12, 2);
          console.log(innerCard);
          $('body').css('height', window.innerHeight); 

          $(window).resize(function() {
               $('body').css('height', window.innerHeight); 
          });

          $('#play').click(startPlay);
          function startPlay() { 
               if (document.readyState === "complete") { 
                    $('#header-play-div').hide();
                    $('.container').show();
                    $('body').css('background-image', 'none'); 
                    for (let i = 0; i < imagesContainer.length; i++) {
                         $(imagesContainer[i]).attr('src', imageArray[i]);
                    }
               }
               if (document.readyState !== "complete") {
                         $('.container, .loader-container').show();
                         $('#header-play-div, #row1, #row2, #row3').hide(); 
                    }
          }

          let storedEventData = []
          let x = 0;

          $('.flip-card-inner').each(function(j){
               $(this).on("click", {x:j}, function(event) {
                    storedEventData.push(event.data.x);
                    $(this).toggleClass('flip', true).promise.then
                    x++;
               if (x >= 2) {
                    compareImages();
                    }
               });
          });

          //because I'm going off event data, the conditionals are thrown off. The arrays depend on there being 18 items to match within the arrays that correspond to index-numbers throughout (associative).
          function compareImages() {
               setTimeout(function() {
                    if (($('#image-' + storedEventData[0]).attr('src')) === ($('#image-' + storedEventData[1]).attr('src'))) {
                         x = 0;
                         storedEventData = [];  
                         matches++
                         if (matches === 6) {
                              $('#win-restart').css("display", "block");
                         }  
                    }
                    else {
                         $(('#flip-card-inner-' + storedEventData[0])).toggleClass('flip', false);
                         $(('#flip-card-inner-' + storedEventData[1])).toggleClass('flip', false);
                         storedEventData = []; 
                         x = 0;
                    } 
               }, 2500);
          }
          
          console.log(storedEventData)

          $('.button-win-restart-topright').click(closeModal);
          function closeModal() {
               $('#win-restart').css("display", "none");
               location.reload();
          }

          $('#play-again').click(playAgain);
          function playAgain() {
               $('#win-restart').css("display", "none");
               location.reload();
          }

          $('#art-info').click(artInfo);
          function artInfo() {
               $('#win-restart').css("display", "none");
               $('#modal-slides').css("display", "block");
          }

          $('.button-display-topright').click(closeArtModal);
          function closeArtModal() {
               $('#modal-slides').css("display", "none");
               location.reload();
          }

          let imageObjectIDS = [551302, 544222, 547803, 551502, 549070, 548580, 544864, 546745];

     let apiURL = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/';

     let urls = [];
     let count = 0;

     imageObjectIDS.forEach(function(i, j){
          urls[j] = apiURL + i;
     });
     console.log(urls)

     Promise.all(urls.map(url =>
          fetch(url)
          .then(convertToJson)
          .then(useData)
     )) 

          function convertToJson(response) {
               //this returns the info so it can be worked with
               return response.json();
          }
          let elevenImages = [];
          let objectName = [];
          let objectCountry = []
          let objectDate = [];
          let objectMedium = [];
          let objectURL = [];
          function useData (jsonData) {
               console.log(jsonData)
               elevenImages[elevenImages.length] = jsonData.primaryImageSmall;
               objectName[objectName.length] = jsonData.objectName;
               objectCountry[objectCountry.length] = jsonData.country;
               objectMedium[objectMedium.length] = jsonData.medium;
               objectDate[objectDate.length] = jsonData.objectDate;
               objectURL[objectURL.length] = jsonData.objectURL;
               $('.slides-content').prepend('<div class="slides-div"><h2 class="object-name">' + objectName[count] + '<h2><img class="eleven-images" src=' + elevenImages[count] + '><h3 class="object-country">' + objectCountry[count] + '</h3><h3 class="object-date">' + objectDate[count] + '</h3><h3 class="object-medium">' + objectMedium[count] + '</h3><ul class="met-link-ul"><li class="met-link-li"><a class="met-link-a" href=' + objectURL[count]  + '>More info at the Metropolitan Museum</a></li></ul></div>');
               count++;
               $('.met-link-a').attr('target', '_blank');
          }

          function addToSearch(dataItems) {
               fetch(dataItems)
               .then(convertToJson)
               .then(applyData);
          }

          function applyData(dataJson) {
               console.log(dataJson);
          }

          var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
          if (isChrome) {
               $('.flip-card-bottom, .flip-card-top').css({'backface-visibility': 'visible', ' -webkit-backface-visibility': 'visible'});
          } 

     }
     //UNSURE REMOVE IF MOBILE SECTION
     else {
     const images = [
          './images/img1_DP243443.jpg', 
          './images/img2_DP240268.jpg', 
          './images/img3_DP245119.jpg', 
          './images/img4_DP245144.jpg', 
          './images/img5_26.7.1416_01.jpg', 
          './images/img6_DP-17700-001.jpg', 
          './images/img7_O.C.380_EGDP016765.jpg', 
          './images/img8_20.2.1.jpeg',
          './images/img9_DP-14816-003.jpg', 
          './images/img1_DP243443.jpg', 
          './images/img2_DP240268.jpg', 
          './images/img3_DP245119.jpg', 
          './images/img4_DP245144.jpg', 
          './images/img5_26.7.1416_01.jpg', 
          './images/img6_DP-17700-001.jpg', 
          './images/img7_O.C.380_EGDP016765.jpg', 
          './images/img8_20.2.1.jpeg', 
          './images/img9_DP-14816-003.jpg'
     ]
     let matches = 0;

     let array18 = [];
     for (var i = 0; i < 18; i ++) {
          array18[i] = i;
     }
     function shuffleArray(array) {
          for (let i = array.length - 1; i > 0; i--) {
               const j = Math.floor(Math.random() * (i + 1));
               [array[i], array[j]] = [array[j], array[i]];
               }
          }
     shuffleArray(array18);
     console.log(array18);

     //  The Fisher-Yates algorithm works by picking one random element for each original array element, and then excluding it from the next draw. Just like randomly picking from a deck of cards.
     //  This exclusion is done in a clever way (invented by Durstenfeld for use by computers) by swapping the picked element with the current element, and then picking the next random element from the remainder. For optimal efficiency, the loop runs backwards so that the random pick is simplified

     let imageArray = []
     for (let i = 0; i < array18.length; i++) {
          imageArray.splice(array18[i], 0, images[i]);
     }
     let imagesContainer = []
     for (let i = 0; i < array18.length; i++) {
          imagesContainer[i] = i;
          imagesContainer[i] = '#image-' + imagesContainer[i];
     }
     console.log(imageArray);
     let innerCard = []
     for (let i = 0; i < array18.length; i++) {
          innerCard[i] = i;
          innerCard[i] = '#flip-card-inner-' + innerCard[i];
     }

     $('body').css('height', window.innerHeight); 

     $(window).resize(function() {
          $('body').css('height', window.innerHeight); 
     });

     $('#play').click(startPlay);
     function startPlay() { 
          if (document.readyState === "complete") { 
               $('#header-play-div').hide();
               $('.container').show();
               $('body').css('background-image', 'none'); 
               for (let i = 0; i < imagesContainer.length; i++) {
                    $(imagesContainer[i]).attr('src', imageArray[i]);
               }
          }
          if (document.readyState !== "complete") {
                    $('.container, .loader-container').show();
                    $('#header-play-div, #row1, #row2, #row3').hide(); 
               }
     }

     let storedEventData = []
     let x = 0;

     $('.flip-card-inner').each(function(j){
          $(this).on("click", {x:j}, function(event) {
               storedEventData.push(event.data.x);
               $(this).toggleClass('flip', true).promise.then 
               // $(innerCard[storedEventData[0]]).off(event);
               x++;
          if (x >= 2) {
               compareImages();
               }
          });
     });
     
     function compareImages() {
          setTimeout(function() {
               if (imageArray[storedEventData[0]] === (imageArray[storedEventData[1]])) {
                    x = 0;
                    storedEventData = [];
                    matches++
                    alert(matches)
                    if (matches === 9) {
                         $('#win-restart').css("display", "block");
                    }  
               }
               else {
                    $(innerCard[storedEventData[0]]).toggleClass('flip', false);
                    $(innerCard[storedEventData[1]]).toggleClass('flip', false);
                    storedEventData = [];
                    x = 0;
               }    
          }, 2500);
     }
     
     console.log(storedEventData)

     $('.button-win-restart-topright').click(closeModal);
     function closeModal() {
          $('#win-restart').css("display", "none");
          location.reload();
     }

     $('#play-again').click(playAgain);
     function playAgain() {
          $('#win-restart').css("display", "none");
          location.reload();
     }

     $('#art-info').click(artInfo);
     function artInfo() {
          $('#win-restart').css("display", "none");
          $('#modal-slides').css("display", "block");
     }

     $('.button-display-topright').click(closeArtModal);
     function closeArtModal() {
          $('#modal-slides').css("display", "none");
          location.reload();
     }

     let imageObjectIDS = [551302, 546748, 544222, 543870, 547803, 551502, 549070, 548580, 544864, 570708, 546745]

let apiURL = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/';

let urls = [];
let count = 0;

imageObjectIDS.forEach(function(i, j){
     urls[j] = apiURL + i;
});
console.log(urls)

Promise.all(urls.map(url =>
     fetch(url)
     .then(convertToJson)
     .then(useData)
)) 

     function convertToJson(response) {
          //this returns the info so it can be worked with
          return response.json();
     }
     let elevenImages = [];
     let objectName = [];
     let objectCountry = []
     let objectDate = [];
     let objectMedium = [];
     let objectURL = [];
     function useData (jsonData) {
          console.log(jsonData)
          elevenImages[elevenImages.length] = jsonData.primaryImageSmall;
          objectName[objectName.length] = jsonData.objectName;
          objectCountry[objectCountry.length] = jsonData.country;
          objectMedium[objectMedium.length] = jsonData.medium;
          objectDate[objectDate.length] = jsonData.objectDate;
          objectURL[objectURL.length] = jsonData.objectURL;
          $('.slides-content').prepend('<div class="slides-div"><h2 class="object-name">' + objectName[count] + '<h2><img class="eleven-images" src=' + elevenImages[count] + '><h3 class="object-country">' + objectCountry[count] + '</h3><h3 class="object-date">' + objectDate[count] + '</h3><h3 class="object-medium">' + objectMedium[count] + '</h3><ul class="met-link-ul"><li class="met-link-li"><a class="met-link-a" href=' + objectURL[count]  + '>More info at the Metropolitan Museum</a></li></ul></div>');
          count++;
          $('.met-link-a').attr('target', '_blank');
     }

     function addToSearch(dataItems) {
          fetch(dataItems)
          .then(convertToJson)
          .then(applyData);
     }

     function applyData(dataJson) {
          console.log(dataJson);
     }

     var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
     if (isChrome) {
          $('.flip-card-bottom, .flip-card-top').css({'backface-visibility': 'visible', ' -webkit-backface-visibility': 'visible'});
     }
}
}
$('document').ready(onReady);







