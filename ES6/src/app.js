let page = `<ul>
                <li>page 1</li>
                <li>page 2</li>
                <li>page 3</li>
            </ul>`;


let home = 'Home';
let list =  `<ul>
            <li>page 1</li>
            <li>page 2</li>
            <li>page 3</li>
            </ul>`;
let user = `<div class="users">
                <table>
                    <thead>
                    <tr>
                            <th> Name </th>
                            <th> Email </th>
                    </tr>	
                    </thead>
                    <tbody>
                    <tr>
                        <td> User1 </td>
                        <td> user1@gmail.com </td>
                    </tr>
                    <tr>
                        <td> User2 </td>
                        <td> user2@gmail.com </td>
                    </tr>
                    </tbody>
                </table>	
            </div>	`

var pathname = window.location.pathname;
 
switch (pathname){
    case "/page":
        document.getElementById("app").innerHTML = page;
        break;
    case "/list":
        document.getElementById("app").innerHTML = list;
        break;
    case "/user":
        document.getElementById("app").innerHTML = user;
        break;
    default:
        document.getElementById("app").innerHTML = home;
        break;
}

