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
        const response = yield fetch('http://localhost:5089/api/UserDetails', {
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
        const apiUrl = 'http://localhost:5089/api/UserDetails';
        const response = yield fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch order');
        }
        return yield response.json();
    });
}
function fetchTravelHistory() {
    return __awaiter(this, void 0, void 0, function* () {
        const apiUrl = 'http://localhost:5089/api/TravelHistoryDetails';
        const response = yield fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch order');
        }
        return yield response.json();
    });
}
function fetchMedicine() {
    return __awaiter(this, void 0, void 0, function* () {
        const apiUrl = 'http://localhost:5089/api/TicketFairDetails';
        const response = yield fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch Medicine');
        }
        return yield response.json();
    });
}
// registration page
function registrationPage() {
    document.getElementById("main_page").style.display = "none";
    document.getElementById("newregistration_page").style.display = "block";
    document.getElementById("userlogin_page").style.display = "none";
    document.getElementById("login_inside_page").style.display = "none";
}
function registrationSubmit() {
    return __awaiter(this, void 0, void 0, function* () {
        let user_name = document.getElementById("user_name");
        let phoneNumber = document.getElementById("phoneNumber");
        let balance = document.getElementById("balance");
        if (user_name.value != "" && phoneNumber.value != "" && balance.value != "") {
            let newUser = {
                cardNumber: undefined,
                userName: user_name.value,
                phoneNumber: phoneNumber.value,
                balance: Number(balance.value)
            };
            addUser(newUser);
            const users = yield fetchUser();
            let cardno;
            users.forEach(user => {
                if (newUser.userName == user.userName) {
                    cardno = user.cardNumber;
                }
            });
            alert("Registration Success card number is " + cardno);
            loginpage();
        }
        else {
            alert("Please fill all fields!");
        }
    });
}
//user login page
function loginpage() {
    return __awaiter(this, void 0, void 0, function* () {
        document.getElementById("main_page").style.display = "none";
        document.getElementById("newregistration_page").style.display = "none";
        document.getElementById("userlogin_page").style.display = "block";
        document.getElementById("login_inside_page").style.display = "none";
    });
}
var tempUserStore;
let flag = false;
function login() {
    return __awaiter(this, void 0, void 0, function* () {
        let card_number = document.getElementById("card_number");
        if (card_number.value != "") {
            const users = yield fetchUser();
            let flag = false;
            users.forEach(user => {
                if (card_number.value == user.cardNumber) {
                    tempUserStore = user;
                    flag = true;
                    return true;
                }
            });
            if (flag) {
                insidePage();
            }
            else {
                alert("Invaild card number");
            }
        }
        else {
            alert("Please enter the filed!");
        }
    });
}
function insidePage() {
    document.getElementById("main_page").style.display = "none";
    document.getElementById("newregistration_page").style.display = "none";
    document.getElementById("userlogin_page").style.display = "none";
    document.getElementById("login_inside_page").style.display = "block";
}
function balancePage() {
    document.getElementById("balance_Page").style.display = "block";
}
