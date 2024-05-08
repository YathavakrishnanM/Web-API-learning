"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function addUser(user) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:5181/api/UserDetails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        if (!response.ok) {
            throw new Error('Field to add user');
        }
    });
}
function fetchUser() {
    return __awaiter(this, void 0, void 0, function* () {
        const apiUrl = 'http://localhost:5181/api/UserDetails';
        const response = yield fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch order');
        }
        return yield response.json();
    });
}
function updateUser(userID, user) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5181/api/UserDetails/${userID}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        if (!response.ok) {
            throw new Error('Failed to update contact');
        }
    });
}
function addBorrowDetails(borrow) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:5181/api/BorrowDetails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(borrow)
        });
        if (!response.ok) {
            throw new Error('Field to add user');
        }
    });
}
function fetchBorrowDetails() {
    return __awaiter(this, void 0, void 0, function* () {
        const apiUrl = 'http://localhost:5181/api/BorrowDetails';
        const response = yield fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch order');
        }
        return yield response.json();
    });
}
function updateBorrowDetails(borrowID, borrow) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5181/api/BorrowDetails/${borrowID}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(borrow)
        });
        if (!response.ok) {
            throw new Error('Failed to update contact');
        }
    });
}
function fetchBookDetails() {
    return __awaiter(this, void 0, void 0, function* () {
        const apiUrl = 'http://localhost:5181/api/BookDetails';
        const response = yield fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch order');
        }
        return yield response.json();
    });
}
function updateBookDetails(bookID, book) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5181/api/BookDetails/${bookID}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(book)
        });
        if (!response.ok) {
            throw new Error('Failed to update contact');
        }
    });
}
function registerPage() {
    document.getElementById("open_page").style.display = "none";
    document.getElementById("register_page").style.display = "block";
    document.getElementById("login_page").style.display = "none";
}
var tempUserId;
function conformRegistration() {
    return __awaiter(this, void 0, void 0, function* () {
        let user_name = document.getElementById("user_name");
        let gender = document.getElementById("gender");
        let department = document.getElementById("department");
        let mobile_number = document.getElementById("mobile_number");
        let mailId = document.getElementById("mailId");
        let wallet_balance = document.getElementById("wallet_balance");
        let pass = document.getElementById("pass");
        if (user_name.value != "" && gender.value != "" && department.value != "" && mobile_number.value != "" && mailId.value != "" && wallet_balance.value != "" && pass.value != "") {
            let newUser = {
                userID: undefined,
                userName: user_name.value,
                gender: gender.value,
                department: department.value,
                mobileNumber: mobile_number.value,
                mailID: mailId.value,
                walletBalance: Number(wallet_balance.value),
                password: pass.value
            };
            addUser(newUser);
            let users = yield fetchUser();
            users.forEach(user => {
                if (user.userName == user_name.value) {
                    tempUserId = user.userID;
                }
            });
            alert("Registration success your userID " + tempUserId);
            loginpage();
        }
        else {
            alert("Please fill all fields!");
        }
    });
}
function loginpage() {
    document.getElementById("open_page").style.display = "none";
    document.getElementById("register_page").style.display = "none";
    document.getElementById("login_page").style.display = "block";
}
var tempUserStore;
function login() {
    return __awaiter(this, void 0, void 0, function* () {
        let email_ID = document.getElementById("email_ID");
        let pass_word = document.getElementById("pass_word");
        if (email_ID.value != "") {
            let users = yield fetchUser();
            let temp = false;
            users.forEach(user => {
                if (user.mailID == email_ID.value && user.password == pass_word.value) {
                    tempUserStore = user;
                    temp = true;
                    return;
                }
                ;
            });
            if (temp) {
                alert("login success");
                login_inside_page();
            }
            else {
                alert("login faild!");
            }
        }
        else {
            alert("Please fill the fields");
        }
    });
}
function login_inside_page() {
    let login_inside_page = document.getElementById("login_inside_page");
    document.getElementById("open_page").style.display = "none";
    document.getElementById("register_page").style.display = "none";
    document.getElementById("login_page").style.display = "none";
    login_inside_page.style.display = "block";
}
function borrowPage() {
    return __awaiter(this, void 0, void 0, function* () {
        document.getElementById("borrow_page").style.display = "block";
        document.getElementById("history_page").style.display = "none";
        document.getElementById("return_page").style.display = "none";
        document.getElementById("walletrecharge_page").style.display = "none";
        document.getElementById("purchase_book").style.display = "none";
        let borrow_table = document.getElementById("borrow_table");
        var book = yield fetchBookDetails();
        borrow_table.innerHTML = "";
        borrow_table.innerHTML = `<tr>
                                <td>${"BookName"}</td>
                                <td>${"AuthorName"}</td>
                                <td>${"BookCount"}</td>
                                <td>${"Action"}</td>
                            </tr>`;
        book.forEach(b => {
            borrow_table.innerHTML += `<tr>
                                    <td>${b.bookName}</td>
                                    <td>${b.authorName}</td>
                                    <td>${b.bookCount}</td>
                                    <td><button onclick="purchase(${b.bookID})">buy</button></td>
                                </tr>`;
        });
    });
}
var tempid;
function purchase(id) {
    tempid = id;
    document.getElementById("borrow_page").style.display = "none";
    document.getElementById("history_page").style.display = "none";
    document.getElementById("return_page").style.display = "none";
    document.getElementById("walletrecharge_page").style.display = "none";
    document.getElementById("purchase_book").style.display = "block";
}
function conform_purchase() {
}
function showHistory() {
    return __awaiter(this, void 0, void 0, function* () {
        document.getElementById("borrow_page").style.display = "none";
        document.getElementById("history_page").style.display = "block";
        document.getElementById("return_page").style.display = "none";
        document.getElementById("walletrecharge_page").style.display = "none";
        document.getElementById("purchase_book").style.display = "none";
        let history_table = document.getElementById("history_table");
        var historys = yield fetchBorrowDetails();
        history_table.innerHTML = "";
        history_table.innerHTML = `<tr>
                                <td>${"BorrowID"}</td>
                                <td>${"BookID"}</td>
                                <td>${"UserID"}</td>
                                <td>${"BorrowDate"}</td>
                                <td>${"BorrowBookCount"}</td>
                                <td>${"Status"}</td>
                                <td>${"PaidFineAmount"}</td>
                            </tr>`;
        historys.forEach(his => {
            if (tempUserStore.userID == his.userID) {
                history_table.innerHTML += `<tr>
                                        <td>${his.borrowID}</td>
                                        <td>${his.bookID}</td>
                                        <td>${his.userID}</td>
                                        <td>${his.borrowDate}</td>
                                        <td>${his.borrowBookCount}</td>
                                        <td>${his.status}</td>
                                        <td>${his.paidFineAmount}</td>
                                    </tr>`;
            }
        });
    });
}
function returnPage() {
    document.getElementById("borrow_page").style.display = "none";
    document.getElementById("history_page").style.display = "none";
    document.getElementById("return_page").style.display = "block";
    document.getElementById("walletrecharge_page").style.display = "none";
    document.getElementById("purchase_book").style.display = "none";
}
function walletRechargePage() {
    document.getElementById("borrow_page").style.display = "none";
    document.getElementById("history_page").style.display = "none";
    document.getElementById("return_page").style.display = "none";
    document.getElementById("walletrecharge_page").style.display = "block";
    document.getElementById("purchase_book").style.display = "none";
}
function logout() {
    document.getElementById("open_page").style.display = "block";
    document.getElementById("register_page").style.display = "none";
    document.getElementById("login_page").style.display = "none";
    document.getElementById("login_inside_page").style.display = "none";
    document.getElementById("email_ID").value = "";
    document.getElementById("pass_word").value = "";
}
var temp;
function rechargeWallet() {
    return __awaiter(this, void 0, void 0, function* () {
        let amount = document.getElementById("amount");
        let users = yield fetchUser();
        let flag = false;
        if (amount.value != "") {
            users.forEach(user => {
                if (tempUserStore.userID == user.userID) {
                    flag = true;
                    temp = user;
                    return true;
                }
            });
            if (flag) {
                let updateUserData = {
                    userID: temp.userID,
                    userName: temp.userName,
                    gender: temp.gender,
                    department: temp.department,
                    mobileNumber: temp.mobileNumber,
                    mailID: temp.mailID,
                    walletBalance: Number(amount.value) + Number(temp.walletBalance),
                    password: temp.password
                };
                updateUser(tempUserStore.userID, updateUserData);
                alert("balance added success! balance " + updateUserData.walletBalance);
                amount.value = "";
            }
            else {
                alert("User not found");
            }
        }
        else {
            alert("please enter the amount");
        }
    });
}
