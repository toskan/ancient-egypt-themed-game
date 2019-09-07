function onReady () {
     console.log(document.readyState)
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
     console.log(images)

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
     shuffleArray(array18)
     console.log(array18)
     //  The Fisher-Yates algorithm works by picking one random element for each original array element, and then excluding it from the next draw. Just like randomly picking from a deck of cards.
     //  This exclusion is done in a clever way (invented by Durstenfeld for use by computers) by swapping the picked element with the current element, and then picking the next random element from the remainder. For optimal efficiency, the loop runs backwards so that the random pick is simplified

     let imageArray = []
     for (let i = 0; i < array18.length; i++) {
          imageArray.splice(array18[i], 0, images[i])
     }
     let imagesContainer = []
     for (let i = 0; i < array18.length; i++) {
          imagesContainer[i] = i
          imagesContainer[i] = '#image-' + imagesContainer[i]
     }
     console.log(imageArray)
     console.log(imagesContainer)
    
     let cards = [
          {
          cardContainer: $('#flip-card-0'),
          imageInsert: $('#image-0').attr('src', this.image),
          cardInner: $('#flip-card-inner-0'),
          cardTop: $('#flip-card-top-0'),
          cardBottom: $('#flip-card-bottom-0'),
          },
          {
          cardContainer: $('#flip-card-1'),
          imageInsert: $('#image-1').attr('src', this.image),
          cardInner: $('#flip-card-inner-1'),
          cardTop: $('#flip-card-top-1'),
          cardBottom: $('#flip-card-bottom-1'),
          },
          {
          cardContainer: $('#flip-card-2'),
          imageInsert: $('#image-2').attr('src', this.image),
          cardInner: $('#flip-card-inner-2'),
          cardTop: $('#flip-card-top-2'),
          cardBottom: $('#flip-card-bottom-2'),
          },
          {
          cardContainer: $('#flip-card-3'),
          imageInsert: $('#image-3').attr('src', this.image),
          cardInner: $('#flip-card-inner-3'),
          cardTop: $('#flip-card-top-3'),
          cardBottom: $('#flip-card-bottom-3'), 
          },
          {
          cardContainer: $('#flip-card-4'),
          imageInsert: $('#image-4').attr('src', this.image),
          cardInner: $('#flip-card-inner-4'),
          cardTop: $('#flip-card-top-4'),
          cardBottom: $('#flip-card-bottom-4'),
          },
          {
          cardContainer: $('#flip-card-4'),
          imageInsert: $('#image-4').attr('src', this.image),
          cardInner: $('#flip-card-inner-4'),
          cardTop: $('#flip-card-top-4'),
          cardBottom: $('#flip-card-bottom-4'),
          },
          {
          cardContainer: $('#flip-card-5'),
          imageInsert: $('#image-5').attr('src', this.image),
          cardInner: $('#flip-card-inner-5'),
          cardTop: $('#flip-card-top-5'),
          cardBottom: $('#flip-card-bottom-5'),
          },
          {
          cardContainer: $('#flip-card-6'),
          imageInsert: $('#image-6').attr('src', this.image),
          cardInner: $('#flip-card-inner-6'),
          cardTop: $('#flip-card-top-6'),
          cardBottom: $('#flip-card-bottom-6'),
          },
          {
          cardContainer: $('#flip-card-7'),
          imageInsert: $('#image-7').attr('src', this.image),
          cardInner: $('#flip-card-inner-7'),
          cardTop: $('#flip-card-top-7'),
          cardBottom: $('#flip-card-bottom-7'),
          },
          {
          cardContainer: $('#flip-card-8'),
          imageInsert: $('#image-8').attr('src', this.image),
          cardInner: $('#flip-card-inner-8'),
          cardBottom: $('#flip-card-bottom-8'),
          },
          {
          cardContainer: $('#flip-card-9'),
          imageInsert: $('#image-9').attr('src', this.image),
          cardInner: $('#flip-card-inner-9'),
          cardTop: $('#flip-card-top-9'),
          cardBottom: $('#flip-card-bottom-9'),
          },
          {
          cardContainer: $('#flip-card-10'),
          imageInsert: $('#image-10').attr('src', this.image),
          cardInner: $('#flip-card-inner-10'),
          cardTop: $('#flip-card-top-10'),
          cardBottom: $('#flip-card-bottom-10'),
          },
          {
          cardContainer: $('#flip-card-11'),
          imageInsert: $('#image-11').attr('src', this.image),
          cardInner: $('#flip-card-inner-11'),
          cardTop: $('#flip-card-top-11'),
          cardBottom: $('#flip-card-bottom-11'),
          },
          {
          cardContainer: $('#flip-card-12'),
          imageInsert: $('#image-12').attr('src', this.image),
          cardInner: $('#flip-card-inner-12'),
          cardTop: $('#flip-card-top-12'),
          cardBottom: $('#flip-card-bottom-12'),
          },
          {
          cardContainer: $('#flip-card-13'),
          imageInsert: $('#image-13').attr('src', this.image),
          cardInner: $('#flip-card-inner-13'),
          cardTop: $('#flip-card-top-13'),
          cardBottom: $('#flip-card-bottom-13'),
          },
          {
          cardContainer: $('#flip-card-14'),
          imageInsert: $('#image-14').attr('src', this.image),
          cardInner: $('#flip-card-inner-14'),
          cardTop: $('#flip-card-top-14'),
          cardBottom: $('#flip-card-bottom-14'),
          },
          {
          cardContainer: $('#flip-card-15'),
          imageInsert: $('#image-15').attr('src', this.image),
          cardInner: $('#flip-card-inner-15'),
          cardTop: $('#flip-card-top-15'),
          cardBottom: $('#flip-card-bottom-15'),
          },
          {
          cardContainer: $('#flip-card-16'),
          imageInsert: $('#image-16').attr('src', this.image),
          cardInner: $('#flip-card-inner-16'),
          cardTop: $('#flip-card-top-16'),
          cardBottom: $('#flip-card-bottom-16'),
          },
          {
          cardContainer: $('#flip-card-17'),
          imageInsert: $('#image-17').attr('src', this.image),
          cardInner: $('#flip-card-inner-17'),
          cardTop: $('#flip-card-top-17'),
          cardBottom: $('#flip-card-bottom-17'), 
          },
     ];

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
     
     $(function() {
          let imgDivs = $('.flip-card-inner')
          imgDivs.on('click', function () {
          $(this).toggleClass('flip');
          });
     });

     // $(function() {
     //      let imgDivs = $('.flip-card-inner')
     //      imgDivs.on('click', function () {
     //           if (!$(this).hasClass('flip')) {
     //           $(this).addClass('flip');     
     //           }
     //           else {
     //                $(this).removeClass('flip'); 
     //           }
     //      });
     // });     
     
     var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
     if (isChrome) {
          $('.flip-card-bottom, .flip-card-top').css({'backface-visibility': 'visible', ' -webkit-backface-visibility': 'visible'});
     } 

     }
$('document').ready(onReady);



