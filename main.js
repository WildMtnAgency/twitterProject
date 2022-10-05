var user1 = {
    userName: '@elonmusk',
    displayName: 'Elon Musk',
    joinedDate: 'June 2009',
    followingCount: 103,
    followerCount: 47900000,
    avatarURL: 'assets/elonmusk.jpg',
    coverPhotoURL: 'assets/elonmusk-cover.jpeg',
    tweets: [
        {
            text: 'I admit to judging books by their cover',
            timestamp: '2/10/2021 00:01:20',
            replied: 5000,
            retweets: 7500,
            likes: 52000000
        },
        {
            text: 'Starship to the moon',
            timestamp: '2/09/2021 18:37:12',
            replied: 2500,
            retweets: 10000,
            likes: 85000000
        },
        {
            text: 'Out on launch pad, engine swap underway',
            timestamp: '2/09/2021 12:11:51',
            replied: 5000,
            retweets: 2500,
            likes: 230000
        }
    ]
};

var user2 = {
    userName: '@BillGates',
    displayName: 'Bill Gates',
    joinedDate: 'June 2009',
    followingCount: 274,
    followerCount: 53800000,
    avatarURL: 'assets/billgates.jpg',
    coverPhotoURL: 'assets/billgates-cover.jpeg',
    tweets: [
        {
            text: 'Everybody asks, how is the next Windows coming along? But nobody asks how is Bill? :/',
            timestamp: '2/10/2021 00:01:20'
        },
        {
            text: 'Should I start tweeting memes? Let me know in a comment.',
            timestamp: '2/09/2021 18:37:12'
        },
        {
            text: 'In 2020, I read a book every hour.',
            timestamp: '2/09/2021 12:11:51'
        }
    ]
};

let header = document.getElementById('header');
header.innerHTML = `
<div id="profile-name">
    <div id="backCtr"><ion-icon id="backBtn" name="arrow-back"></ion-icon></div>
    <div class="name">
        <h4>${user1.displayName} <ion-icon id="verified" name="checkmark-circle"></ion-icon></h4>
        <p>${user1.tweets.length} Tweets</p>
    </div>    
</div>
`;

let bgCoverCtr = document.getElementById('background-cover-img');
bgCoverCtr.innerHTML = `<img src="${user1.coverPhotoURL}">`;

let profileDetailsCtr = document.getElementById('profile-details-ctr');
profileDetailsCtr.innerHTML = `
<div id="followBtn-ctr"><button id="followBtn">Following</button></div>
<div id="avatar-ctr">
    <img id="avatar" src="${user1.avatarURL}">
</div>
<div class="profile-details">
    <h4>${user1.displayName}</h4>
    <p>${user1.userName}</p>
    <div class="calendar"><p><ion-icon id="calendar" name="calendar-outline"></ion-icon> Joined ${user1.joinedDate}</p></div>
    <div id="follower">
        <p><span id="followBold">${user1.followingCount}</span> Following</p>
        <p><span id="followBold">${user1.followerCount}</span> Followers</p>
    </div> 
</div>
<div class="tabs">
    <div class="tab"><a href="#">Tweets</a></div>
    <div class="tab"><a href="#">Tweets &amp; replies</a></div>
    <div class="tab"><a href="#">Media</a></div>
    <div class="tab"><a href="#">Likes</a></div>
</div>
`;

//rows are created based on each tweet
let tweetsCtrDOM = document.getElementById('tweets-ctr');
let row;

for(tweet of user1.tweets){
    row = document.createElement('div');
    row.id = 'row';
    tweetsCtrDOM.appendChild(row);
}

for(let i=0; i < row.length; i++){
    console.log(row[i])
}


//rows
// tweetMenu-ctr - ... -- way left
// tweetAvatr-ctr - avatar pic - circle
// tweet-topper - name, handle, . , timestamp 
// tweet-text - tweet-text
// engage-ctr - icons & #'s

// let tweetsCtrDOM = document.getElementById('tweets-ctr');
//     let row = document.createElement('div');
//     row.classList.add('row');
//     row.innerHTML = `
//     <div id="tweetMenu-ctr"><ion-icon id="menuIcon" name="ellipsis-horizontal-sharp"></ion-icon></div>
//     <div id="tweetAvatar-ctr">
//         <img id="tweetAvatar" src="${user1.avatarURL}">
//     </div>
//     <div id="tweet-topper">
//         <h6>${user1.displayName} <ion-icon id="verified" name="checkmark-circle"></ion-icon></h6>
//         <p>${user1.userName} · </p>
//         <p>${user1.timestamp}</p>
//     </div>
//     `;
//     tweetsCtrDOM.append(row);
    
//     for(tweet of user1.tweets){
//     let tweetTextDiv = document.createElement('div');
//     tweetTextDiv.classList.add('tweet-text');
//     tweetTextDiv.innerHTML = `<p>${tweet.text}</p>`;
//     row.appendChild(tweetTextDiv);
    
//     let engageCtr = document.createElement('div');
//     engageCtr.classList.add('engage-ctr');
//     engageCtr.innerHTML = `
//     <div class="engage">
//         <p><ion-icon class="icon" id="replyIcon" name="chatbubble-outline"></ion-icon> ${tweet.replied}k</p>
//     </div>
//     <div class="engage">
//         <p><ion-icon class="icon" id="retweetIcon" name="repeat-outline"></ion-icon> ${tweet.retweets/1000}k</p>
//     </div>
//     <div class="engage">
//         <p><ion-icon class="icon" id="likeIcon" name="heart-outline"></ion-icon> ${tweet.likes/1000}k</p>
//     </div>
//     <div class="engage">
//         <p><ion-icon class="icon" id="shareIcon" name="share-outline"></ion-icon></p>
//     </div>
//     `;
//     //append into row below
//     row.appendChild(engageCtr);
// }

