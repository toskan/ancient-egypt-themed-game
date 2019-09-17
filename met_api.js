

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
     let objectDate = [];
     let objectMedium = [];
     let objectURL = [];
     function useData (jsonData) {
          console.log(jsonData)
          elevenImages[elevenImages.length] = jsonData.primaryImageSmall;
          objectName[objectName.length] = jsonData.objectName;
          objectMedium[objectMedium.length] = jsonData.medium;
          objectDate[objectDate.length] = jsonData.objectDate;
          objectURL[objectURL.length] = jsonData.objectURL;
          console.log(elevenImages);
          console.log(objectName);
          console.log(objectDate);
          console.log(objectMedium);
          console.log(objectURL);
          $('.slides-content').prepend('<div class="slides-div"><h2 class="object-name">' + objectName[count] + '<h2><img class="eleven-images" src=' + elevenImages[count] + '><h3 class="object-date">' + objectDate[count] + '</h3><h3 class="object-medium">' + objectMedium[count] + '</h3><ul class="met-link-ul"><li class="met-link-li"><a class="met-link-a" href=' + objectURL[count]  + '>More info at the Metropolitan Museum</a></li></ul></div>');
          count++;
     }

     function addToSearch(dataItems) {
          fetch(dataItems)
          .then(convertToJson)
          .then(applyData);
     }

     function applyData(dataJson) {
          console.log(dataJson);
     }

     // <button class="display-left" onclick="plusDivs(-1)">&#10094;</button>
     // <button class="display-right" onclick="plusDivs(+1)">&#10095;</button>


// let slideIndex = 1;
// showDivs(slideIndex);

// function plusDivs(n) {
//      showDivs(slideIndex += n);
// }

// function showDivs(n) {
//      let x = $(".slides-div");
//      if (n > x.length) {slideIndex = 1}
//      if (n < 1) {slideIndex = x.length} ;
//      for (let i = 0; i < x.length; i++) {
//      $(x[i]).css("display", "none");
//      }
//      $(x[slideIndex-1]).css("display", "block");
// }

