async function main() {
    let res = await fetch('https://scratchdb.lefty.one/v3/forum/search?q=%20&o=newest'); 
    res = await res.json();
    let req = await fetch(`https://scratchdb.lefty.one/v3/user/info/${res.username}`);
    req = await req.json();

    let post = res.posts[0],
        time = new Date(post.time.posted),
        parsedTime = time.toString().split(" ");
    let parsed_time = `${parsedTime[0]} ${parsedTime[1]} ${parsedTime[2]} ${parsedTime[3]} ${parsedTime[4]}`;
    document.querySelector("#post").innerHTML = `<a href="https://scratch.mit.edu/discuss/post/${post.id}" id="first_link">
        <span>${parsed_time}</span>
    </a>
    <div id="user_info">
        <h1 id="username"><a href="//scratch.mit.edu/users/${post.username}">
            <img alt="This is meant to be the user's PFP" src="https://uploads.scratch.mit.edu/get_image/user/${req.id}_90x90.png">
            ${post.username}
        </a></h1>
        <span>${req.status}</span>
    </div>
    <div id="post_content">
        ${post.content.html}
    </div>
    <div id="about_topic">
        <h1><a href="https://scratch.mit.edu/discuss/topic/${post.topic.id}">${post.topic.title}</a></h1>
        In ${post.topic.category}
    </div>`;
}

main();

let seconds = 1;
setInterval(() => {
    document.querySelector("#secs_reload").innerText = (25 - seconds).toString();
    seconds++;
}, 1000);

document.querySelector("#instant_reload").addEventListener("click", () => {
    location.reload();
});

/* ＼(^ o ^)／ */