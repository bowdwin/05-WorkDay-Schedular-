var storeData = [];

//calls function that places local storage onto page
initialLocalStoragePlace();
// grabs current day and places on page from moment
$("#currentDay").text(moment().format('LL'));
// user clicks save button this function is called
$(".save-button").on("click", function (event, state) {
    var inputText = $(".input-text-" + this.id).val();
    var thisIstheId = this.id;
    //calls function that pushes text to local storage for each save input box
    pushArraytoLocalStorage(inputText, thisIstheId);
});
function pushArraytoLocalStorage(inputText, thisIstheId) {
    //creates new array to store the push to local storage
    newArray = [];
    //pushes into array
    newArray.push({ textValue: inputText, id: thisIstheId });
    //creates a string for local storage
    var storeDataLocalStorage = JSON.stringify(newArray);
    //stores in local storage
    localStorage.setItem(thisIstheId, storeDataLocalStorage);
}
function initialLocalStoragePlace() {
    //variable used to help with forloop, number is used for class in loop as well as data storage element
    var totalCal = 18;
    //gets current time
    var currentTime = moment().format('H');
    //for loop that will get local storage and place on HTMl page as well as apply css classes for past future and present
    for (var i = 8; i < totalCal; i++) {
        var dataOfStorage = JSON.parse(localStorage.getItem(i));
        if (dataOfStorage != null) {
            var textValueVar = dataOfStorage[0].textValue;
            var dataIdVar = dataOfStorage[0].id;
            let input = $(".input-text-" + dataIdVar);
            input.val(input.val() + textValueVar);
        }
        if (currentTime > i) {
            $(".input-text-" + i).addClass("past");
        }
        else if (currentTime < i) {
            $(".input-text-" + i).addClass("future");
        }
        else {
            $(".input-text-" + i).addClass("present");
        }
    }
}

