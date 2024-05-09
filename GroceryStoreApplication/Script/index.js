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
        const response = yield fetch('http://localhost:5166/api/Users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        if (!response.ok) {
            throw new Error("Field to add user");
        }
    });
}
function fetchUser() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:5166/api/Users');
        if (!response.ok) {
            throw new Error('Faild to fetch User');
        }
        return yield response.json();
    });
}
function updateUser(userID, user) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5166/api/Users/${userID}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        if (!response.ok) {
            throw new Error('Faild to update user');
        }
    });
}
function deleteUser(userID) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5166/api/Users/${userID}`, {
            method: 'DELETE',
        });
        if (!response) {
            throw new Error('Faild to delete user');
        }
    });
}
function addGrocery(grocery) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:5166/api/GroceryDetails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(grocery)
        });
        if (!response.ok) {
            throw new Error("Field to add grocery");
        }
    });
}
function fetchGrocery() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:5166/api/GroceryDetails');
        if (!response.ok) {
            throw new Error('Faild to fetch User');
        }
        return yield response.json();
    });
}
function updateGrocery(groceryID, grocery) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5166/api/GroceryDetails/${groceryID}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(grocery)
        });
        if (!response.ok) {
            throw new Error('Faild to update user');
        }
    });
}
function deleteGrocery(groceryID) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5166/api/GroceryDetails/${groceryID}`, {
            method: 'DELETE',
        });
        if (!response) {
            throw new Error('Faild to delete user');
        }
    });
}
function toRegisterPage() {
    document.getElementById("main_page").style.display = "none";
    document.getElementById("register_Page").style.display = "block";
    document.getElementById("login_page").style.display = "none";
}
function registration() {
    var _a;
    let email = document.getElementById("email");
    let username = document.getElementById("username");
    let password = document.getElementById("password");
    let balance = document.getElementById("balance");
    let phoneNumber = document.getElementById("phoneNumber");
    let photo = document.getElementById("photo");
    let address = document.getElementById("address");
    console.log(email.value);
    console.log(password.value);
    console.log(balance.value);
    console.log(phoneNumber.value);
    console.log(photo.value);
    console.log(address.value);
    // change string to base64string
    try {
        const file = (_a = photo.files) === null || _a === void 0 ? void 0 : _a[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function (event) {
            var _a;
            var base64String = (_a = event.target) === null || _a === void 0 ? void 0 : _a.result;
            if (email.value != "" && password.value != "" && balance.value != "" && phoneNumber.value != "" && address.value != "" && photo.value != "" && username.value != "") {
                let newUser = {
                    userID: undefined,
                    emailID: email.value,
                    password: password.value,
                    walletBalance: Number(balance.value),
                    phoneNumber: phoneNumber.value,
                    address: address.value,
                    userPhoto: [base64String],
                    userName: username.value
                };
                addUser(newUser);
                alert("Registration success!");
                toLoginPage();
            }
            else {
                alert("Please fill all fields");
            }
        };
    }
    catch (_b) {
        alert("Please fill all fields");
    }
}
function toLoginPage() {
    let login_page = document.getElementById("login_page");
    document.getElementById("main_page").style.display = "none";
    document.getElementById("register_Page").style.display = "none";
    login_page.style.display = "block";
}
var tempUserStore;
var flag = false;
function login() {
    return __awaiter(this, void 0, void 0, function* () {
        let user_enter_email = document.getElementById("user_enter_email");
        let user_enster_password = document.getElementById("user_enster_password");
        let users = yield fetchUser();
        if (user_enter_email.value != "" && user_enster_password.value != "") {
            users.forEach(user => {
                if (user_enter_email.value == user.emailID && user_enster_password.value == user.password) {
                    flag = true;
                    tempUserStore = user;
                    return;
                }
            });
        }
        if (flag) {
            user_enter_email.value = "";
            user_enster_password.value = "";
            flag = false;
            userPage();
        }
        else {
            alert("Invalid Email or Password!");
        }
    });
}
function userPage() {
    document.getElementById("inside_mainpage").style.display = "block";
    document.getElementById("main_page").style.display = "none";
    document.getElementById("register_Page").style.display = "none";
    document.getElementById("login_page").style.display = "none";
}
function homepage() {
    return __awaiter(this, void 0, void 0, function* () {
        document.getElementById("home_content").style.display = "block";
        document.getElementById("WalletBalance_content").style.display = "none";
        document.getElementById("Walletrecharge_content").style.display = "none";
        document.getElementById("Purchase_content").style.display = "none";
        document.getElementById("Addproduct_content").style.display = "none";
        document.getElementById("Grocery_items_content").style.display = "none";
        document.getElementById("Card_content").style.display = "none";
        document.getElementById("View_order_history_content").style.display = "none";
        document.getElementById("SignOut").style.display = "none";
        let home_content = document.getElementById("home_content");
        let users = yield fetchUser();
        home_content.innerHTML = "";
        users.forEach(user => {
            if (tempUserStore.userID == user.userID) {
                home_content.innerHTML = `<h1>Welcome ${user.userName} </h1><img src="${user.userPhoto}" height=50px width=50px>`;
            }
        });
    });
}
function walletbalancepage() {
    return __awaiter(this, void 0, void 0, function* () {
        document.getElementById("home_content").style.display = "none";
        document.getElementById("WalletBalance_content").style.display = "block";
        document.getElementById("Walletrecharge_content").style.display = "none";
        document.getElementById("Purchase_content").style.display = "none";
        document.getElementById("Addproduct_content").style.display = "none";
        document.getElementById("Grocery_items_content").style.display = "none";
        document.getElementById("Card_content").style.display = "none";
        document.getElementById("View_order_history_content").style.display = "none";
        document.getElementById("SignOut").style.display = "none";
        let WalletBalance_content = document.getElementById("WalletBalance_content");
        let users = yield fetchUser();
        WalletBalance_content.innerHTML = "";
        users.forEach(user => {
            if (tempUserStore.userID == user.userID) {
                WalletBalance_content.innerHTML = `<h1>your current balance is  ${user.walletBalance} </h1>`;
            }
        });
    });
}
function walletrechargepage() {
    document.getElementById("home_content").style.display = "none";
    document.getElementById("WalletBalance_content").style.display = "none";
    document.getElementById("Walletrecharge_content").style.display = "block";
    document.getElementById("Purchase_content").style.display = "none";
    document.getElementById("Addproduct_content").style.display = "none";
    document.getElementById("Grocery_items_content").style.display = "none";
    document.getElementById("Card_content").style.display = "none";
    document.getElementById("View_order_history_content").style.display = "none";
    document.getElementById("SignOut").style.display = "none";
}
function conformRecharge() {
    let amount = document.getElementById("amount");
    if (amount.value != "") {
        let userUpdate = {
            userID: tempUserStore.userID,
            emailID: tempUserStore.emailID,
            password: tempUserStore.password,
            walletBalance: Number(tempUserStore.walletBalance) + Number(amount.value),
            phoneNumber: tempUserStore.phoneNumber,
            address: tempUserStore.address,
            userPhoto: tempUserStore.userPhoto,
            userName: tempUserStore.userName
        };
        updateUser(tempUserStore.userID, userUpdate);
        amount.value = "";
        alert("Recharge success!");
    }
    else {
        alert("Please enter the amount!");
    }
}
function purchase() {
    document.getElementById("home_content").style.display = "none";
    document.getElementById("WalletBalance_content").style.display = "none";
    document.getElementById("Walletrecharge_content").style.display = "none";
    document.getElementById("Purchase_content").style.display = "block";
    document.getElementById("Addproduct_content").style.display = "none";
    document.getElementById("Grocery_items_content").style.display = "none";
    document.getElementById("Card_content").style.display = "none";
    document.getElementById("View_order_history_content").style.display = "none";
    document.getElementById("SignOut").style.display = "none";
}
function addproductpage() {
    document.getElementById("home_content").style.display = "none";
    document.getElementById("WalletBalance_content").style.display = "none";
    document.getElementById("Walletrecharge_content").style.display = "none";
    document.getElementById("Purchase_content").style.display = "none";
    document.getElementById("Addproduct_content").style.display = "block";
    document.getElementById("Grocery_items_content").style.display = "none";
    document.getElementById("Card_content").style.display = "none";
    document.getElementById("View_order_history_content").style.display = "none";
    document.getElementById("SignOut").style.display = "none";
}
function grocerypage() {
    return __awaiter(this, void 0, void 0, function* () {
        document.getElementById("home_content").style.display = "none";
        document.getElementById("WalletBalance_content").style.display = "none";
        document.getElementById("Walletrecharge_content").style.display = "none";
        document.getElementById("Purchase_content").style.display = "none";
        document.getElementById("Addproduct_content").style.display = "none";
        document.getElementById("Grocery_items_content").style.display = "block";
        document.getElementById("Card_content").style.display = "none";
        document.getElementById("View_order_history_content").style.display = "none";
        document.getElementById("SignOut").style.display = "none";
        let grocerytable = document.getElementById("grocerytable");
        grocerytable.innerHTML = "";
        grocerytable.innerHTML = `<tr>
                                <td>${"ItemName"}<td>
                                <td>${"Quantity"}<td>
                                <td>${"Price"}<td>
                                <td>${"Purchase Date"}<td>
                                <td>${"Expary date"}<td>
                                <td>${"Picture"}<td>
                            </tr>`;
        let grocerys = yield fetchGrocery();
        grocerys.forEach(g => {
            grocerytable.innerHTML += `
                            <tr>
                                <td>${g.itemName}<td>
                                <td>${g.quantity}<td>
                                <td>${g.price}<td>
                                <td>${g.purchaseDate}<td>
                                <td>${g.exparyDate}<td>
                                <td><img src="${g.itemPhoto}" height=50px width=50px><td>
                            </tr>`;
        });
    });
}
function cardPage() {
    document.getElementById("home_content").style.display = "none";
    document.getElementById("WalletBalance_content").style.display = "none";
    document.getElementById("Walletrecharge_content").style.display = "none";
    document.getElementById("Purchase_content").style.display = "none";
    document.getElementById("Addproduct_content").style.display = "none";
    document.getElementById("Grocery_items_content").style.display = "none";
    document.getElementById("Card_content").style.display = "block";
    document.getElementById("View_order_history_content").style.display = "none";
    document.getElementById("SignOut").style.display = "none";
}
function orderHistorypage() {
    document.getElementById("home_content").style.display = "none";
    document.getElementById("WalletBalance_content").style.display = "none";
    document.getElementById("Walletrecharge_content").style.display = "none";
    document.getElementById("Purchase_content").style.display = "none";
    document.getElementById("Addproduct_content").style.display = "none";
    document.getElementById("Grocery_items_content").style.display = "none";
    document.getElementById("Card_content").style.display = "none";
    document.getElementById("View_order_history_content").style.display = "block";
    document.getElementById("SignOut").style.display = "none";
}
function signoutpage() {
    // (document.getElementById("home_content") as HTMLDivElement).style.display="none";
    // (document.getElementById("WalletBalance_content") as HTMLDivElement).style.display="none";
    // (document.getElementById("Walletrecharge_content") as HTMLInputElement).style.display="none";
    // (document.getElementById("Purchase_content") as HTMLInputElement).style.display="none";
    // (document.getElementById("Addproduct_content") as HTMLDivElement).style.display="none";
    // (document.getElementById("Grocery_items_content") as HTMLDivElement).style.display="none";
    // (document.getElementById("Card_content") as HTMLInputElement).style.display="none";
    // (document.getElementById("View_order_history_content") as HTMLInputElement).style.display="none";
    // (document.getElementById("SignOut") as HTMLInputElement).style.display="block";
    document.getElementById("main_page").style.display = "block";
    document.getElementById("register_Page").style.display = "none";
    document.getElementById("login_page").style.display = "none";
}
function addproduct() {
    var _a;
    let itemname = document.getElementById("itemname");
    let quantity = document.getElementById("quantity");
    let price = document.getElementById("price");
    let purchaseDate = document.getElementById("purchaseDate");
    let exparyDate = document.getElementById("exparyDate");
    let itemPhoto = document.getElementById("itemPhoto");
    try {
        const file = (_a = itemPhoto.files) === null || _a === void 0 ? void 0 : _a[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function (event) {
            var _a;
            var base64String = (_a = event.target) === null || _a === void 0 ? void 0 : _a.result;
            if (itemname.value != "" && quantity.value != "" && price.value != "" && purchaseDate.value != "" && exparyDate.value != "") {
                let newGrocery = {
                    groceryID: undefined,
                    quantity: Number(quantity.value),
                    price: Number(price.value),
                    purchaseDate: purchaseDate.value,
                    exparyDate: exparyDate.value,
                    itemPhoto: [base64String],
                    itemName: itemname.value
                };
                addGrocery(newGrocery);
                itemname.value != "";
                quantity.value != "";
                price.value != "";
                purchaseDate.value != "";
                exparyDate.value != "";
                addproduct();
                alert("Item added success!");
            }
            else {
                alert("Please fill all fields");
            }
        };
    }
    catch (_b) {
        alert("Please fill all fields");
    }
}
