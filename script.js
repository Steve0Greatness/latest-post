async function main() {
    let res = await fetch('https://scratchdb.lefty.one/v3/forum/search?q=%20&o=newest');
    res = await res.json();
    let post = res.posts[0].id;
    document.getElementById("post").href = `https://scratch.mit.edu/discuss/post/${post}`;
    document.getElementById("post").innerText = `https://scratch.mit.edu/discuss/post/${post}`;
}

main();
