// bai 1 =================
console.log(`Lab 4 bài 1 \n`)
let promise = new Promise(function(resolve, reject){
    resolve(1);
    setTimeout(() => resolve(1), 1000);
})
promise.then(alert)

// bai 2 ===============
    console.log(`Lab 4 bài 2 \n`)

    // function myDisplayer(some) {
    //     document.getElementById("bai3").innerText = some;
    //   }

    // let myPromise = new Promise(function(myResolve, myReject) {
    //     let req = new XMLHttpRequest();
    //     req.open('GET', "https://63a16120a543280f77548d0f.mockapi.io/tx3en1cj8hjaw/tqwu5d31kjdih2o");
    //     if ( (req.status >= 200) && (req.status <= 400) ){
    //         const loadData = async () => {
    //               fetch('https://63a16120a543280f77548d0f.mockapi.io/tx3en1cj8hjaw/tqwu5d31kjdih2o')
    //               .then(res => {return res.json()})
    //               .then(data => console.log(data));
    //             }
    //         myResolve(req.response);
    //         loadData();
    //     }else{
    //         myReject("links not be Fetched");
    //     } 
    // });
    // myPromise.then(
    //     function(value) {myDisplayer(value);},
    //     function(error) {myDisplayer(error);}
    // )
    
    const fetchData = async()=> {
        try {
          const response = await fetch('https://63a16120a543280f77548d0f.mockapi.io/tx3en1cj8hjaw/tqwu5d31kjdih2o');
          
          if (!response.ok) {
            throw new Error(`Lỗi khi fetch dữ liệu: ${response.status}`);
          }
      
          const data = await response.json();
          return data;
        } catch (error) {
          console.error(error);
          throw error; // Đưa ra ngoại lệ để xử lý ở mức cao hơn (nếu cần)
        }
      }
      
      // Sử dụng fetchData:
      fetchData()
        .then(data => {
          console.log('Dữ liệu đã được fetch:', data);
          // Thực hiện xử lý dữ liệu ở đây
        })
        .catch(error => {
          console.error('Đã xảy ra lỗi:', error);
          // Thực hiện xử lý lỗi ở đây
        });
      