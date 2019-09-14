

let imageObjectIDS = [551302, 570708, 544864, 546748, 546745, 544222, 543870, 547803, 551502, 549070, 548580]

let apiURL = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/';

let urls = [];


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
     let elevenImages = []
     let objectMedium = []
     let objectDate = []
     let objectName = []
     let objectPeriod = []
     let objectURL = []
     function useData (jsonData) {
          // console.log(jsonData);
          console.log(jsonData.primaryImageSmall);
          // console.log(jsonData.medium);
          // console.log(jsonData.objectDate);
          // console.log(jsonData.objectName);
          // console.log(jsonData.period);
          // console.log(jsonData.objectURL);
          // for (let i = 0; i < 11; i++) {
               $('img').attr('src', jsonData.primaryImageSmall);
               objectMedium = jsonData.medium;
               objectDate = jsonData.objectDate;
               objectName = jsonData.objectName;
               objectPeriod = jsonData.period;
               objectURL = jsonData.objectURL; 
          // }
          console.log(elevenImages);
          // console.log(objectMedium);
          // console.log(jsonData.objectDate);
          // console.log(objectName);
          // console.log(objectPeriod);
          // console.log(objectURL); 
     }

     function addToSearch(dataItems) {
          fetch(dataItems)
          .then(convertToJson)
          .then(applyData);
     }

     function applyData(dataJson) {
          console.log(dataJson);
     }
     

// fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects/551302")
