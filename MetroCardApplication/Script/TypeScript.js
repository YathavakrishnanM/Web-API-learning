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
function updateUser(cardNumber, user) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5089/api/UserDetails/${cardNumber}`, {
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
function addTravelHistory(history) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:5089/api/TravelHistoryDetails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(history)
        });
        if (!response.ok) {
            throw new Error('Field to add user');
        }
    });
}
function fetchTicketFair() {
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
    return __awaiter(this, void 0, void 0, function* () {
        let balance_Page = document.getElementById("balance_Page");
        document.getElementById("Recharge_page").style.display = "none";
        document.getElementById("TravelHistory_page").style.display = "none";
        document.getElementById("travel").style.display = "none";
        balance_Page.style.display = "block";
        let tempbalance;
        let users = yield fetchUser();
        users.forEach(user => {
            if (tempUserStore.cardNumber == user.cardNumber) {
                tempbalance = user.balance;
                return true;
            }
        });
        balance_Page.innerHTML = "Your current balance is " + tempbalance;
    });
}
function rechargePage() {
    document.getElementById("balance_Page").style.display = "none";
    document.getElementById("Recharge_page").style.display = "block";
    document.getElementById("TravelHistory_page").style.display = "none";
    document.getElementById("travel").style.display = "none";
}
var temp;
function conform_recharge() {
    return __awaiter(this, void 0, void 0, function* () {
        let userenter_amount = document.getElementById("userenter_amount");
        let users = yield fetchUser();
        let flag = false;
        if (userenter_amount.value != "") {
            users.forEach(user => {
                if (tempUserStore.cardNumber == user.cardNumber) {
                    flag = true;
                    temp = user;
                    return true;
                }
            });
            if (flag) {
                let updateUserData = {
                    cardNumber: temp.cardNumber,
                    userName: temp.userName,
                    phoneNumber: temp.phoneNumber,
                    balance: Number(userenter_amount.value) + temp.balance
                };
                updateUser(tempUserStore.cardNumber, updateUserData);
                alert("balance added succesfully");
                rechargePage();
            }
            else {
                alert("User not found!");
            }
        }
        else {
            alert("Please fill all fields");
        }
    });
}
function travelHistoryPage() {
    return __awaiter(this, void 0, void 0, function* () {
        document.getElementById("TravelHistory_page").style.display = "block";
        document.getElementById("balance_Page").style.display = "none";
        document.getElementById("Recharge_page").style.display = "none";
        document.getElementById("travel").style.display = "none";
        let table = document.getElementById("travel_history_table");
        let history = yield fetchTravelHistory();
        table.innerHTML = "";
        table.innerHTML = `<tr>
    <td>${"TravelID"}</td>
    <td>${"CardNumber"}</td>
    <td>${"FromLocation"}</td>
    <td>${"ToLocation"}</td>
    <td>${"Date"}</td>
    <td>${"TravelCost"}</td>
    </tr>`;
        history.forEach(his => {
            if (tempUserStore.cardNumber == his.cardNumber) {
                table.innerHTML += `<tr>
                                <td>${his.travelID}</td>
                                <td>${his.cardNumber}</td>
                                <td>${his.fromLocation}</td>
                                <td>${his.toLocation}</td>
                                <td>${his.date}</td>
                                <td>${his.travelCost}</td>
                                </tr>`;
            }
        });
        // travel_history_table
    });
}
function logout() {
    document.getElementById("main_page").style.display = "block";
    document.getElementById("newregistration_page").style.display = "none";
    document.getElementById("userlogin_page").style.display = "none";
    document.getElementById("login_inside_page").style.display = "none";
    document.getElementById("card_number").value = "";
}
function bookingpage() {
    return __awaiter(this, void 0, void 0, function* () {
        document.getElementById("travel").style.display = "block";
        document.getElementById("balance_Page").style.display = "none";
        document.getElementById("Recharge_page").style.display = "none";
        document.getElementById("TravelHistory_page").style.display = "none";
        let fairdetails_table = document.getElementById("fairdetailstable");
        let travelfair = yield fetchTicketFair();
        fairdetails_table.innerHTML = `<tr>
                        <td>${"FromLocation"}</td>
                        <td>${"ToLocation"}</td>
                        <td>${"Fair"}</td>
                        <td>${"Booking"}</td>
                        </tr>`;
        travelfair.forEach(details => {
            fairdetails_table.innerHTML += `<tr>
                                <td>${details.fromLocation}</td>
                                <td>${details.toLocation}</td>
                                <td>${details.fair}</td>
                                <td><button onclick="conformbooked(${details.ticketID})">book</button></td>
                            </tr>`;
        });
    });
}
var tempUser;
var tempTicket;
function conformbooked(id) {
    return __awaiter(this, void 0, void 0, function* () {
        let fairs = yield fetchTicketFair();
        fairs.forEach(fair => {
            if (fair.ticketID == id) {
                tempTicket = fair;
                return true;
            }
        });
        let users = yield fetchUser();
        users.forEach(user => {
            if (tempUserStore.cardNumber == user.cardNumber) {
                tempUser = user;
                return true;
            }
        });
        let newTicket = {
            travelID: undefined,
            cardNumber: tempUser.cardNumber,
            fromLocation: tempTicket.fromLocation,
            toLocation: tempTicket.toLocation,
            date: new Date(),
            travelCost: tempTicket.fair,
        };
        addTravelHistory(newTicket);
        alert("ticked booked succesfully");
        let userDataUpdate = {
            cardNumber: tempUser.cardNumber,
            userName: tempUser.userName,
            phoneNumber: tempUser.phoneNumber,
            balance: tempUser.balance - Number(tempTicket.fair)
        };
        updateUser(tempUser.cardNumber, userDataUpdate);
    });
}
