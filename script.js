async function main() {
    let res = await fetch('https://forum-test.chiroyce.repl.co/');
    res = await res.json();
    location.replace(`https://scratch.mit/edu/post/${res.latest_post}`);
}

main();
