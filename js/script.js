// Copyright (c) 2023 Osamah All rights reserved
//
// Created by: Osamah
// Created on: Mar 2023
// This file contains the JS functions for index.html

/**
 * This function gets users first name and age and shows it back to user.
 */
function enterClicked() {
  // input
  const firstName = document.getElementById("first-name").value
  const userhousenumber = parseInt(document.getElementById("House").value)
  const userStreetname = document.getElementById("Street").value

  // output
  document.getElementById("address").innerHTML =
    "Your info is: " + firstName + userhousenumber + userStreetname + "."
}
