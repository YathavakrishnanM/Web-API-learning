interface UserDetails{
    userID:any;
    userName:string;
    gender:string;
    department:string;
    mobileNumber:string;
    mailID:string;
    walletBalance:Number;
    password:string
}

async function addUser(user:UserDetails): Promise<void> {

    const response = await fetch('http://localhost:5181/api/UserDetails', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });

    if (!response.ok) {
        throw new Error('Field to add user');
    }

}

async function fetchUser(): Promise<UserDetails[]> {
    const apiUrl = 'http://localhost:5181/api/UserDetails';
    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error('Failed to fetch order');
    }
    return await response.json();
}

async function updateUser(userID:any, user: UserDetails): Promise<void> {
    const response = await fetch(`http://localhost:5181/api/UserDetails/${userID}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
    if (!response.ok) {
        throw new Error('Failed to update contact');
    }
}


interface BorrowDetails{
    borrowID:any;
    bookID:Number;
    userID:Number;
    borrowDate:string;
    borrowBookCount:Number;
    status:string;
    paidFineAmount:Number;
}

async function addBorrowDetails(borrow:BorrowDetails): Promise<void> {

    const response = await fetch('http://localhost:5181/api/BorrowDetails', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(borrow)
    });

    if (!response.ok) {
        throw new Error('Field to add user');
    }

}


async function fetchBorrowDetails(): Promise<BorrowDetails[]> {
    const apiUrl = 'http://localhost:5181/api/BorrowDetails';
    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error('Failed to fetch order');
    }
    return await response.json();
}


async function updateBorrowDetails(borrowID:any, borrow: BorrowDetails): Promise<void> {
    const response = await fetch(`http://localhost:5181/api/BorrowDetails/${borrowID}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(borrow)
    });
    if (!response.ok) {
        throw new Error('Failed to update contact');
    }
}


interface BookDetails{
    bookID:any;
    bookName:string;
    authorName:string;
    bookCount:Number;
}
async function fetchBookDetails(): Promise<BookDetails[]> {
    const apiUrl = 'http://localhost:5181/api/BookDetails';
    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error('Failed to fetch order');
    }
    return await response.json();
}


async function updateBookDetails(bookID:any, book: BookDetails): Promise<void> {
    const response = await fetch(`http://localhost:5181/api/BookDetails/${bookID}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(book)
    });
    if (!response.ok) {
        throw new Error('Failed to update contact');
    }
}

function registerPage(){
    (document.getElementById("open_page") as HTMLDivElement).style.display="none";
    (document.getElementById("register_page") as HTMLDivElement).style.display="block";
    (document.getElementById("login_page") as HTMLDivElement).style.display="none";

}

var tempUserId:Number;
async function conformRegistration(){
        let user_name=document.getElementById("user_name") as HTMLInputElement;
        let gender=document.getElementById("gender") as HTMLSelectElement;
        let department=document.getElementById("department") as HTMLSelectElement;
        let mobile_number=document.getElementById("mobile_number") as HTMLInputElement;
        let mailId=document.getElementById("mailId") as HTMLInputElement;
        let wallet_balance=document.getElementById("wallet_balance") as HTMLInputElement;
        let pass=document.getElementById("pass") as HTMLInputElement;

        if(user_name.value!="" && gender.value!="" && department.value!="" && mobile_number.value!="" &&  mailId.value!=""  &&  wallet_balance.value!="" && pass.value!=""){
                let newUser:UserDetails={
                    userID: undefined,
                    userName: user_name.value,
                    gender: gender.value,
                    department: department.value,
                    mobileNumber: mobile_number.value,
                    mailID: mailId.value,
                    walletBalance: Number(wallet_balance.value),
                    password: pass.value
                }
                addUser(newUser);

                let users= await fetchUser();
                users.forEach(user=>{
                    if(user.userName==user_name.value){
                        tempUserId=user.userID;
                    }
                })

                alert("Registration success your userID "+ tempUserId);
                loginpage();

        }else{
            alert("Please fill all fields!")
        }
}


function loginpage(){
    (document.getElementById("open_page") as HTMLDivElement).style.display="none";
    (document.getElementById("register_page") as HTMLDivElement).style.display="none";
    (document.getElementById("login_page") as HTMLDivElement).style.display="block";
}



var tempUserStore:UserDetails;
async function login(){
    let email_ID=document.getElementById("email_ID") as HTMLInputElement;
    let pass_word=document.getElementById("pass_word") as HTMLInputElement;

    if(email_ID.value!=""){

        let users=await fetchUser();
       let temp=false;
        users.forEach(user=>{
            if(user.mailID == email_ID.value  &&  user.password == pass_word.value){
                tempUserStore=user;
                temp=true;
                return;
            };           
        })

        if(temp){
            alert("login success");
            login_inside_page()
        }else{
            alert("login faild!");
        }

    }else{
        alert("Please fill the fields")
    }
}


function login_inside_page(){
        let login_inside_page=document.getElementById("login_inside_page") as HTMLDivElement;

        (document.getElementById("open_page") as HTMLDivElement).style.display="none";
        (document.getElementById("register_page") as HTMLDivElement).style.display="none";
        (document.getElementById("login_page") as HTMLDivElement).style.display="none";

        login_inside_page.style.display="block";
}



async function borrowPage(){
    (document.getElementById("borrow_page") as HTMLDivElement).style.display="block";
    (document.getElementById("history_page") as HTMLDivElement).style.display="none";
    (document.getElementById("return_page") as HTMLDivElement).style.display="none";
    (document.getElementById("walletrecharge_page") as HTMLDivElement).style.display="none";
    (document.getElementById("purchase_book") as HTMLDivElement).style.display="none";

    let borrow_table=document.getElementById("borrow_table") as HTMLTableElement;

    var book=await fetchBookDetails();
    borrow_table.innerHTML="";

    borrow_table.innerHTML=`<tr>
                                <td>${"BookName"}</td>
                                <td>${"AuthorName"}</td>
                                <td>${"BookCount"}</td>
                                <td>${"Action"}</td>
                            </tr>`
    book.forEach(b=>{
        borrow_table.innerHTML+= `<tr>
                                    <td>${b.bookName}</td>
                                    <td>${b.authorName}</td>
                                    <td>${b.bookCount}</td>
                                    <td><button onclick="purchase(${b.bookID})">buy</button></td>
                                </tr>`
    });
}

var tempid:Number;
function purchase(id:Number){
    tempid=id;
    (document.getElementById("borrow_page") as HTMLDivElement).style.display="none";
    (document.getElementById("history_page") as HTMLDivElement).style.display="none";
    (document.getElementById("return_page") as HTMLDivElement).style.display="none";
    (document.getElementById("walletrecharge_page") as HTMLDivElement).style.display="none";
    (document.getElementById("purchase_book") as HTMLDivElement).style.display="block";
}

function conform_purchase(){
    
}

async function showHistory(){
 
    (document.getElementById("borrow_page") as HTMLDivElement).style.display="none";
    (document.getElementById("history_page") as HTMLDivElement).style.display="block";
    (document.getElementById("return_page") as HTMLDivElement).style.display="none";
    (document.getElementById("walletrecharge_page") as HTMLDivElement).style.display="none";
    (document.getElementById("purchase_book") as HTMLDivElement).style.display="none";

    let history_table=document.getElementById("history_table") as HTMLTableElement;

    var historys=await fetchBorrowDetails();
    history_table.innerHTML="";

    history_table.innerHTML=`<tr>
                                <td>${"BorrowID"}</td>
                                <td>${"BookID"}</td>
                                <td>${"UserID"}</td>
                                <td>${"BorrowDate"}</td>
                                <td>${"BorrowBookCount"}</td>
                                <td>${"Status"}</td>
                                <td>${"PaidFineAmount"}</td>
                            </tr>`

    historys.forEach(his=>{
        if(tempUserStore.userID==his.userID){
            history_table.innerHTML+=`<tr>
                                        <td>${his.borrowID}</td>
                                        <td>${his.bookID}</td>
                                        <td>${his.userID}</td>
                                        <td>${his.borrowDate}</td>
                                        <td>${his.borrowBookCount}</td>
                                        <td>${his.status}</td>
                                        <td>${his.paidFineAmount}</td>
                                    </tr>`
        }
    })



}

function returnPage(){
    (document.getElementById("borrow_page") as HTMLDivElement).style.display="none";
    (document.getElementById("history_page") as HTMLDivElement).style.display="none";
    (document.getElementById("return_page") as HTMLDivElement).style.display="block";
    (document.getElementById("walletrecharge_page") as HTMLDivElement).style.display="none";
    (document.getElementById("purchase_book") as HTMLDivElement).style.display="none";
}

function walletRechargePage(){
    (document.getElementById("borrow_page") as HTMLDivElement).style.display="none";
    (document.getElementById("history_page") as HTMLDivElement).style.display="none";
    (document.getElementById("return_page") as HTMLDivElement).style.display="none";
    (document.getElementById("walletrecharge_page") as HTMLDivElement).style.display="block";
    (document.getElementById("purchase_book") as HTMLDivElement).style.display="none";
}

function logout(){
    (document.getElementById("open_page") as HTMLDivElement).style.display="block";
    (document.getElementById("register_page") as HTMLDivElement).style.display="none";
    (document.getElementById("login_page") as HTMLDivElement).style.display="none";
    (document.getElementById("login_inside_page") as HTMLDivElement).style.display="none";

    (document.getElementById("email_ID") as HTMLInputElement).value="";
    (document.getElementById("pass_word") as HTMLInputElement).value="";
}


var temp:UserDetails;
async function rechargeWallet(){

    let amount=document.getElementById("amount") as HTMLInputElement;
    let users=await fetchUser();
    let flag=false;
    if(amount.value !=""){
           users.forEach(user=>{
            if(tempUserStore.userID == user.userID){              
                flag=true;
                temp=user;
                return true;
            }
        })

        if(flag){
            let updateUserData:UserDetails={
                userID: temp.userID,
                userName:temp.userName,
                gender: temp.gender,
                department: temp.department,
                mobileNumber: temp.mobileNumber,
                mailID: temp.mailID,
                walletBalance: Number(amount.value)+Number(temp.walletBalance),
                password: temp.password
            }
            updateUser(tempUserStore.userID,updateUserData);
            alert("balance added success! balance "+updateUserData.walletBalance);
            amount.value="";
        }else{
            alert("User not found");
        }

    }else{
        alert("please enter the amount");
    }
}

