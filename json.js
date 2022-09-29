/* AJAX / JSON HTML/CSS DYNAMIC WEBPAGE APPLICATION */

/* dynamic html */
let newDiv = document.createElement('div');
let newImgTag = document.createElement('img');
let newP = document.createElement('p');

/* static html element selectors */
let coverCtr = document.getElementsByClassName('cover');
let header = document.getElementsByClassName('header');
const backgroundCoverImg = document.getElementById('background-cover-img');
let profileDetailsCtr = document.getElementsByClassName('profile-details-ctr');
let tweetsCtr = document.getElementById('tweets-ctr');

coverCtr.style.backgroundColor = 'gray';

newP.innerHTML = 'hello world';
header.appendChild(newP)


/* header */
// let backgroundImg = newImgTag;
// backgroundImg.src = `${user1.coverPhotoURL}`;

// let headerTop = newDiv;
// headerTop.innerHTML = `
//   <h4>${user1.displayName}</h4>
//   <span><ion-icon id="verifiedIcon" name="checkmark-circle-outline"></ion-icon></span>
//   <p>13.5K Tweets</p>
// `;
// header.innerHTML = `
// backLink.innerHTML = <span><ion-icon id="backBtn" name="arrow-back-outline"></ion-icon></span>;
// `;
// header.appendChild(headerTop);

