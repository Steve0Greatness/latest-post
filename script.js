async function main() {
    let res = await fetch('https://forum-test.chiroyce.repl.co/');
    res = await res.json();
    document.getElementById("post").href = `https://scratch.mit.edu/discuss/post/${res.latest_post}`;
    document.getElementById("post").innerText = `https://scratch.mit.edu/discuss/post/${res.latest_post}`;
}

main();
