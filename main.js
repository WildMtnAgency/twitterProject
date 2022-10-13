var user = {
    user1: {
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
    },
    user2: {
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
                timestamp: '2/10/2021 00:01:20',
                replied: 8000,
                retweets: 1400,
                likes: 630000
            },
            {
                text: 'Should I start tweeting memes? Let me know in a comment.',
                timestamp: '2/09/2021 18:37:12',
                replied: 5000,
                retweets: 7500,
                likes: 520000
            },
            {
                text: 'In 2020, I read a book every hour.',
                timestamp: '2/09/2021 12:11:51',
                replied: 2000,
                retweets: 6000,
                likes: 830000
            }
        ]
    }
};

//BONUS CHALLENGE
//the params is the queryString that is to be added below as users.queryString...

// let queryStr = new URLSearchParams(window.location.search);
// console.log(queryString.get(user))

// let params = (new URL(document.location)).searchParams; //user=user1
// let userQuery = params.get('user'); //user1
// console.log(userQuery)
let params2 = new URLSearchParams(document.location.search)
let query = params2.get('user')
// console.log(query + ' is query')
// console.log(user[query])
let urlParams = user[query];


let header = document.getElementById('header');
header.innerHTML = `
<div id="profile-name">
    <div id="backCtr"><ion-icon id="backBtn" name="arrow-back"></ion-icon></div>
    <div class="name">
        <h4>${urlParams.displayName} <ion-icon id="verified" name="checkmark-circle"></ion-icon></h4>
        <p>${urlParams.tweets.length} Tweets</p>
    </div>    
</div>
`;

let bgCoverCtr = document.getElementById('background-cover-img');
bgCoverCtr.innerHTML = `<img src="${urlParams.coverPhotoURL}">`;

let profileDetailsCtr = document.getElementById('profile-details-ctr');
profileDetailsCtr.innerHTML = `
<div id="followBtn-ctr"><button id="followBtn">Following</button></div>
<div id="avatar-ctr">
    <img id="avatar" src="${urlParams.avatarURL}">
</div>
<div class="profile-details">
    <h4>${urlParams.displayName}</h4>
    <p>${urlParams.userName}</p>
    <div class="calendar"><p><ion-icon id="calendar" name="calendar-outline"></ion-icon> Joined ${urlParams.joinedDate}</p></div>
    <div id="follower">
        <p><span id="followBold">${urlParams.followingCount}</span> Following</p>
        <p><span id="followBold">${urlParams.followerCount}</span> Followers</p>
    </div> 
</div>
<div class="tabs">
    <div class="tab"><a href="#">Tweets</a></div>
    <div class="tab"><a href="#">Tweets &amp; replies</a></div>
    <div class="tab"><a href="#">Media</a></div>
    <div class="tab"><a href="#">Likes</a></div>
</div>
`;

let tweetsCtrDOM = document.getElementById('tweets-ctr');
let row;

for(tweet of urlParams.tweets){
    row = document.createElement('div');
    row.id = 'row';
    row.innerHTML = `
    <div class="top-row">
    <div id="tweetAvatar-ctr">
        <img id="tweetAvatar" src="${urlParams.avatarURL}">
    </div>
    <div id="tweet-topper">
        <h6>${urlParams.displayName} <ion-icon id="verifiedIcon" name="checkmark-circle"></ion-icon></h6>
        <p>${urlParams.userName} · ${tweet.timestamp}</p>
    </div>
    <div id="tweetMenu"><ion-icon id="menuIcon" name="ellipsis-horizontal-sharp"></ion-icon></div>
    </div>
    `;
    tweetsCtrDOM.appendChild(row);

    let tweetText = document.createElement('div');
    tweetText.classList.add('tweet-text');
    tweetText.innerHTML = `<p>${tweet.text}</p>`;
    row.appendChild(tweetText);

    let engageCtr = document.createElement('div');
    engageCtr.classList.add('engage-ctr');
    engageCtr.innerHTML = `
    <div class="engage">
        <p><ion-icon class="icon" id="replyIcon" name="chatbubble-outline"></ion-icon> ${tweet.replied}k</p>
    </div>
    <div class="engage">
        <p><ion-icon class="icon" id="retweetIcon" name="repeat-outline"></ion-icon> ${tweet.retweets/1000}k</p>
    </div>
    <div class="engage">
        <p><ion-icon class="icon" id="likeIcon" name="heart-outline"></ion-icon> ${tweet.likes/1000}k</p>
    </div>
    <div class="engage">
        <p><ion-icon class="icon" id="shareIcon" name="share-outline"></ion-icon></p>
    </div>
    `;
    row.appendChild(engageCtr);
}

let tweetsFeed = document.getElementById('tweets-feed');
				let dates = urlParams.tweets;
				console.log(dates)