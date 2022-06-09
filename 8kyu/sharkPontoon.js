function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
    dolphin ? sharkSpeed = sharkSpeed / 2 : sharkSpeed

    return sharkDistance / sharkSpeed > pontoonDistance / youSpeed ? "Alive!" : "Shark Bait!"
}

//https://www.codewars.com/kata/57e921d8b36340f1fd000059