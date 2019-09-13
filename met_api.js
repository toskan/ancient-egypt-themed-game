

let imageObjectIDS = [551302, 570708, 544864, 546748, 546745, 544222, 543870, 547803, 551502, 549070, 548580]

let urls = ["https://collectionapi.metmuseum.org/public/collection/v1/objects/551302",
"https://collectionapi.metmuseum.org/public/collection/v1/objects/570708",
"https://collectionapi.metmuseum.org/public/collection/v1/objects/544864",
"https://collectionapi.metmuseum.org/public/collection/v1/objects/546748",
"https://collectionapi.metmuseum.org/public/collection/v1/objects/546745",
"https://collectionapi.metmuseum.org/public/collection/v1/objects/544222",
"https://collectionapi.metmuseum.org/public/collection/v1/objects/543870",
"https://collectionapi.metmuseum.org/public/collection/v1/objects/547803",
"https://collectionapi.metmuseum.org/public/collection/v1/objects/551502",
"https://collectionapi.metmuseum.org/public/collection/v1/objects/549070",
"https://collectionapi.metmuseum.org/public/collection/v1/objects/548580"]

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
