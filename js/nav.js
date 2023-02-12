"use strict";

/******************************************************************************
 * Handling navbar clicks and updating navbar
 */

/** Show main list of all stories when click site name */

function navAllStories(evt) {
  console.debug("navAllStories", evt);
  hidePageComponents();
  putStoriesOnPage();
}

$body.on("click", "#nav-all", navAllStories);

/** Show login/signup on click on "login" */

function navLoginClick(evt) {
  console.debug("navLoginClick", evt);
  hidePageComponents();
  $loginForm.show();
  $signupForm.show();
}

$navLogin.on("click", navLoginClick);

/** When a user first logins in, update the navbar to reflect that. */

function updateNavOnLogin() {
  console.debug("updateNavOnLogin");
  $(".main-nav-links").show();
  $navLogin.hide();
  $navLogOut.show();
  $navUserProfile.text(`${currentUser.username}`).show();
}

// When users clicks submit add new story
function navLinkClick() {
  $addNewStory.show()

}

$navSubmit.on('click', navLinkClick);

async function submitStory(evt) {
  evt.preventDefault()
  let author = $('#story-author').val();
  let title = $('#story-title').val();
  let url = $('#story-url').val();
  let username = currentUser.username
  let storyData = {title, url, author, username }
  let newAddedStory = await storyList.addStory(currentUser, storyData);
  $addNewStory.hide("slow")
  generateStoryMarkup(storyData)
 return newAddedStory
}


$addNewStory.on('submit',submitStory)