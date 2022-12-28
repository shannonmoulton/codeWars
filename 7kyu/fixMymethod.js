function myFunction() {
    var myObject = {
        objProperty: "string",
        objMethod: function () {
            return myObject.objProperty;
        }
    }

    return myObject;
};

//https://www.codewars.com/kata/558710234f02dcc4a8000005