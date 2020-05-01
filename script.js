var storeData = [];
initialLocalStoragePlace();

$("#currentDay").text(moment().format('LL'));
$(".save-button").on("click", function (event, state) {
    var inputText = $(".input-text-" + this.id).val();
    var thisIstheId = this.id;
    checkifSavedInArray(inputText, thisIstheId);
});
function checkifSavedInArray(inputText, thisIstheId) {
    newArray = [];
    newArray.push({ textValue: inputText, id: thisIstheId });
    var storeDataLocalStorage = JSON.stringify(newArray);
    localStorage.setItem(thisIstheId, storeDataLocalStorage);
}
function initialLocalStoragePlace() {
    var totalCal = 18;
    var currentTime = moment().format('H');
    console.log(currentTime);
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

