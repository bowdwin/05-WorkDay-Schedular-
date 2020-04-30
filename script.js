
// $(document).ready(function () {

//empty array for local storage
var storeData = [];
// $('.save-button').click(function () {
// e.preventDefault();
// user clicks save button
$(".save-button").on("click", function () {

    // stores input text into inputtext
    // var storeData = []

    //this is working kinda stores in one variable
    var inputText = $(".input-text-" + this.id).val();
    console.log(inputText + " input text is");

    console.log(this.id + " this item ID");
    console.log(inputText + " this is input text");
    // push into array
    storeData.push({ textValue: inputText, id: this.id });
    var storeDataLocalStorage = JSON.stringify(storeData);

    localStorage.setItem("data", storeDataLocalStorage);


    // scores.push({ name: names.value, score: score });
    // var scoresStringed = JSON.stringify(scores);
    // localStorage.setItem("item", scoresStringed);
    // // checkifSavedInArray(this);


    //need to call a function to check if something exist and replace it or push it 
    //should be another function



});
// });


function checkifSavedInArray(thisItem, inputText) {


}

