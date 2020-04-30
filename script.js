


// $(document).ready(function () {
initialLocalStoragePlace();
//empty array for local storage
var storeData = [];
// $('.save-button').click(function () {
// e.preventDefault();
// user clicks save button

// var placeCalItems = JSON.parse(localStorage.getItem("item")); 
$(".save-button").on("click", function () {

    // stores input text into inputtext
    // var storeData = []
    var inputText = $(".input-text-" + this.id).val();
    var thisIstheId = this.id;
    console.log(inputText + " this is input text");
    console.log(thisIstheId + " this is input text");

    //this is working kinda stores in one variable
    // getLocalStorage(thisIstheId);

    // checkifSavedInArray(inputText, thisIstheId);

    // scores.push({ name: names.value, score: score });
    // var scoresStringed = JSON.stringify(scores);
    // localStorage.setItem("item", scoresStringed);
    // // checkifSavedInArray(this);


    //need to call a function to check if something exist and replace it or push it 
    //should be another function



});
// });


function checkifSavedInArray(inputText, thisIstheId) {


    console.log(thisIstheId + " this item ID");
    console.log(inputText + " this is input text");
    // push into array

    // var data = JSON.parse(localStorage.getItem("data"));
    // console.log(data + " parsed data from local");

    storeData.push({ textValue: inputText, id: thisIstheId });
    // var storeDataLocalStorage = JSON.stringify(storeData);
    var locText = data[0].textValue;
    var locId = data[0].id;

    console.log(locText);
    console.log(locId);


    // localStorage.setItem("data", storeDataLocalStorage);

}

function getLocalStorage() {
    var dataArray = [];
    var data = JSON.parse(localStorage.getItem("data"));
    console.log(data + " parsed data from local");
    for (var i = 0; i < data.length; i++) {

        dataArray.push({ textValue: data[i].textValue, id: data[i].id });

    }
    console.log(dataArray[0].id);


}

function initialLocalStoragePlace() {
    // console.log($(".container").html());
    var dataArray = [];
    var data = JSON.parse(localStorage.getItem("data"));
    console.log(data);
    for (var i = 0; i < data.length; i++) {
        var textValueVar = data[i].textValue
        var dataIdVar = data[i].id
        // console.log(textValueVar);
        // console.log(dataIdVar);

        let input = $(".input-text-8");
        input.val(input.val() + textValueVar);
        // console.log(input + "inputtext");
        dataArray.push({ textValue: data[i].textValue, id: data[i].id });
        // console.log($(".input-text-8").val() + " this is the log of val8");
        // console.log($(".input-text-8").val());
        // $('.input-text-8').val($('.input-text-8').val().replace(textValueVar));
        // console.log($('.input-text-8').val($('.input-text-8').val().replace("keith")) + "this is to replace");
        // console.log($(".input-text-10").val($("textValueVar")));
        // $(".input-text-9").val($(textValueVar));


        // console.log(data);

    }
    // for (var k = 1; k < dataArray.length; k++) {
    //     if ($(".input-"))

}