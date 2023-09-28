    // bai 1
    var target = document.querySelector("#target");
    target.onmouseover = function (){
        target.style.backgroundColor = '#bf360c';
    }
    target.onmouseout = function (){
        target.style.backgroundColor = '#33691E';
    }

    // bai 2
    var h3Text = document.querySelector('h3');
    var txtInput = document.querySelector('#txtInput')
    txtInput.onkeyup = function(){
        h3Text.innerText = txtInput.value;
    } 

    // /////////////////////////////
    var target2 = document.querySelector("#target2");
    var h2El = document.createElement("h2");
    h2El.innerText = "Hello Polytechnic";
    h2El.setAttribute("class", "title");
    target2.appendChild(h2El);

    //  bai 3
    // Lấy thẻ ul#target 
    var target3 = document.querySelector("#target3");

    var users = [
        {id: 1, name: "Huynh Minh Hoa", gender: 1},
        {id: 2, name: "Trinh Thuy Tien", gender: 0},
        {id: 3, name: "Le Teo", gender: 1},
        {id: 4, name: "Thi No", gender: 0},
    ];

    
    // Sử dụng phương thức map để tạo mảng các thẻ li tương ứng với người dùng
    var userItems = users.map(function(user) {
        var genderText = user.gender === 1 ? 'male' : 'female';
        return `<li class="user_item">${user.id} - ${user.name} - ${genderText}</li>`;
    });

    // Sử dụng forEach để thêm từng thẻ li vào thẻ ul#target
    userItems.forEach(function(item) {
        target3.innerHTML += item;
    });

    // bai 4 ------------------------------------------------------
        // Lấy thẻ, nội dung các thẻ 
        var addId = document.querySelector("#addId");
        var addUserText = document.querySelector("#addUserText");
        var addUserGender = document.querySelector("#addUserGender");

        // thẻ trẻ kết quả
        var target4 = document.querySelector("#target4");

        // 
        const user4 = [];

        // Lấy thẻ ul#target  để trả kết quả
        var target4 = document.querySelector("#target4");

        // // sau khi nhấn 'add' sễ thực hiện
        var addAction = document.querySelector("#addAction");
        addAction.addEventListener("click", function() {
            //  thêm vào mảng user4
            
        
            var addIdValue = addId.value
            var addUserTextValue = addUserText.value
            var addUserGenderValue = addUserGender.value; 
            if (addIdValue=="" || addUserTextValue=="" || addUserGenderValue=="" ){
                confirm("Nhập lại ok ?");
            } else{
                // reset list user add
                target4.innerHTML="";
                // tạo user add
                var idAdd = addIdValue;
                var nameAdd = addUserTextValue;
                var genderAdd = addUserGenderValue; 
                const userAdd = {id: idAdd, name: nameAdd, gender: genderAdd };
                
                // // thêm user vào mảng user4
                // user4.push(userAdd);

                // tạo mảng user4
                user4.push(userAdd);
                function resetInput() {
                    idAdd = nameAdd = genderAdd ="";
                }
                resetInput();
                // Sử dụng phương thức map để tạo mảng các thẻ li tương ứng với người dùng
                var user4List = user4.map(function(userAdd) {
                    var genderText4 = (userAdd.gender == 1) ? 'male' : 'female';
                    var nameText4 = userAdd.name;
                    return `<li class="user_item4">${userAdd.id} - ${nameText4} - ${genderText4}</li>`;
                });

                // Sử dụng forEach để thêm từng thẻ li vào thẻ ul#target
                user4List.forEach(function(item) {
                    target4.innerHTML += item;
                });
            }
        });

    // bai 5-------------------------------------------
    // lấy input
    var day = document.querySelector("#day");
    var month = document.querySelector("#month");
    var year = document.querySelector("#year");
    
    var date5 = []; 
    // nhấn 'convert' & thực thi
    var convert = document.querySelector("#convert");
    
    convert.addEventListener("click", function() {
        var addDate = day.value
        var addMonth = month.value
        var addYear = year.value;
        if (addDate=="" || addMonth=="" || addYear=="" ){
            confirm("Nhập lại ok ?");
        } else{
        // hiển lại trang kq trắng
        target5.innerHTML="";

        const timeConvert = {d: addDate, m: addMonth, y: addYear };
            
        date5.push(timeConvert); 

        // Hàm định dạng số thành chuỗi với số 0 đứng trước (vd: 01, 02, 03)
        function pad(number) {
            return number < 10 ? '0' + number : number;
        }

        // Hàm lấy tên tháng (viết tắt)
        function getMonthName(month) {
            if (month == 1){ months = ['Jan']; } 
            else if  (month == 2) { months = ['Feb']; }
            else if  (month == 3) { months = ['Mar']; }
            else if  (month == 4) { months = ['Apr']; }
            else if  (month == 5) { months = ['May']; }
            else if  (month == 6) { months = ['Jun']; }
            else if  (month == 7) { months = ['Jul']; }
            else if  (month == 8) { months = ['Aug']; }
            else if  (month == 9) { months = ['Sep']; }
            else if  (month == 10) { months = ['Oct']; }
            else if  (month == 11) { months = ['Nov']; }
            else if  (month == 12) { months = ['Dec']; }
            else {
                confirm("Nhập lại tháng !")
            }
            return months[month];
        }

        // Hàm lấy tên tháng (đầy đủ)
        function getMonthNameFull(month) {
            if (month == 1){ months = ['January']; } 
            else if  (month == 2) { months = ['February']; }
            else if  (month == 3) { months = ['March']; }
            else if  (month == 4) { months = ['April']; }
            else if  (month == 5) { months = ['May']; }
            else if  (month == 6) { months = ['June']; }
            else if  (month == 7) { months = ['July']; }
            else if  (month == 8) { months = ['August']; }
            else if  (month == 9) { months = ['September']; }
            else if  (month == 10) { months = ['October']; }
            else if  (month == 11) { months = ['November']; }
            else if  (month == 12) { months = ['December']; }
            else {
                confirm("Nhập lại tháng !")
            }
            return months[month];
        }

        // Định dạng ngày tháng năm
        var yyyy_mm_dd = addYear + '-' + pad(addMonth) + '-' + pad(addDate); console.log(yyyy_mm_dd)
        var dd_mm_yyyy = pad(addDate) + '/' + pad(addDate) + '/' + addYear;
        var dd_dot_mm_dot_yyyy = pad(addDate) + '.' + pad(addDate) + '.' + addYear;
        var dd_comma_mmm_yyyy = pad(addDate) + ', ' + getMonthName(addMonth) + ' ' + addYear;
        var dd_comma_mmmm_yyyy = pad(addDate) + ', ' + getMonthNameFull(addMonth) + ' ' + addYear;
        
        date5.push(yyyy_mm_dd);
        date5.push(dd_mm_yyyy);
        date5.push(dd_dot_mm_dot_yyyy);
        date5.push(dd_comma_mmm_yyyy);
        date5.push(dd_comma_mmmm_yyyy);
        // Sử dụng phương thức map để tạo mảng các thẻ li tương ứng với người dùng
        var date5List = date5.map(function() {

            return `
                    <li class="user_item"> YYYY-MM-DD 
                        ${yyyy_mm_dd}
                    </li>
                    <li class="user_item"> DD/MM/YYYY 
                        ${dd_mm_yyyy}
                    </li>
                    <li class="user_item"> DD.MM.YYYY 
                        ${dd_dot_mm_dot_yyyy}
                    </li>
                    <li class="user_item"> DD, MMM YYYY 
                        ${dd_comma_mmm_yyyy}
                    </li>
                    <li class="user_item"> DD, MMMM YYYY 
                        ${dd_comma_mmmm_yyyy}
                    </li>
                    `;
        });

        
        // Sử dụng forEach để thêm từng thẻ li vào thẻ ul#target
        date5List.forEach(function(item) {
            target5.innerHTML += item;
        });
        }
    });
    
