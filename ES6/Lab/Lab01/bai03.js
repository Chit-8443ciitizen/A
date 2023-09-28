console.log(` Lab 1 bài 3 \n   `)
fetch('https://63a16120a543280f77548d0f.mockapi.io/tx3en1cj8hjaw/tqwu5d31kjdih2o')
.then(res => {return res.json()})
.then(data => console.log(data));
