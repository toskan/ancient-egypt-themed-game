function onReady () {
     console.log(document.readyState);
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
               console.log(imagesContainer[i]);
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
               $(this).toggleClass('flip', true);
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
     
     var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
     if (isChrome) {
          $('.flip-card-bottom, .flip-card-top').css({'backface-visibility': 'visible', ' -webkit-backface-visibility': 'visible'});
     } 

}
$('document').ready(onReady);







