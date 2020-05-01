

var storeData = [];

initialLocalStoragePlace();


$(".save-button").on("click", function (event, state) {

    var inputText = $(".input-text-" + this.id).val();
    var thisIstheId = this.id;
    console.log(inputText + " this is input text");
    console.log(thisIstheId + " this is input text");


    checkifSavedInArray(inputText, thisIstheId);

});
// });


function checkifSavedInArray(inputText, thisIstheId) {

    newArray = [];
    console.log(thisIstheId + " this item ID");
    console.log(inputText + " this is input text");
    newArray.push({ textValue: inputText, id: thisIstheId });
    var storeDataLocalStorage = JSON.stringify(newArray);
    localStorage.setItem(thisIstheId, storeDataLocalStorage);


}

function initialLocalStoragePlace() {

    var totalCal = 18;

    for (var i = 8; i < totalCal; i++) {

        var dataOfStorage = JSON.parse(localStorage.getItem(i));
        console.log(dataOfStorage);
        if (dataOfStorage != null) {
            console.log(dataOfStorage + " data of strage ");
            var textValueVar = dataOfStorage[0].textValue;
            console.log(textValueVar + " text value var");
            var dataIdVar = dataOfStorage[0].id;
            let input = $(".input-text-" + dataIdVar);
            input.val(input.val() + textValueVar);

        }


    }

}
