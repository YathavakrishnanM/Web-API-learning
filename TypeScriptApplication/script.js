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
Object.defineProperty(exports, "__esModule", { value: true });
require("core-js");
//Add user
function addUser(user) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:5260/api/Users', {
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
function fetchUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        const apiUrl = 'http://localhost:5260/api/Users';
        const response = yield fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch user');
        }
        return yield response.json();
    });
}
function addOrder(order) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:5260/api/Orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        });
        if (!response.ok) {
            throw new Error('Field to add contact');
        }
    });
}
function updateOrder(orderId, order) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5260/api/Orders/${orderId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        });
        if (!response.ok) {
            throw new Error('Failed to update contact');
        }
    });
}
function fetchOrders() {
    return __awaiter(this, void 0, void 0, function* () {
        const apiUrl = 'http://localhost:5260/api/Orders';
        const response = yield fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch order');
        }
        return yield response.json();
    });
}
function addMedicine(medicine) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:5260/api/MedicineInfo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(medicine)
        });
        if (!response.ok) {
            throw new Error('Field to add contact');
        }
    });
}
function updateMedicine(medicineId, medicine) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5260/api/MedicineInfo/${medicineId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(medicine)
        });
        if (!response.ok) {
            throw new Error('Failed to update medicine');
        }
    });
}
function deleteMedicine(medicineId, medicine) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5260/api/MedicineInfo/${medicineId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(medicine)
        });
        if (!response.ok) {
            throw new Error('Failed to delete medicine');
        }
    });
}
function fetchMedicine() {
    return __awaiter(this, void 0, void 0, function* () {
        const apiUrl = 'http://localhost:5260/api/MedicineInfo';
        const response = yield fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch Medicine');
        }
        return yield response.json();
    });
}
let emailIDstatus = false;
let passwordStatus = false;
let conformStatus = false;
let phoneNumberStatus = false;
let loginemailStatus = false;
let loginpasswordStatus = false;
function validate() {
    let email = document.getElementById("email");
    let emaillabel = document.getElementById("label_email");
    let regx = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,20})$/;
    if (regx.test(email.value)) {
        emaillabel.style.color = "green";
        email.style.borderColor = "green";
    }
    else {
        emailIDstatus = false;
        emaillabel.style.color = "red";
        email.style.borderColor = "red";
    }
}
function validate1() {
    var email = document.getElementById("email1");
    var emaillabel = document.getElementById("label_email1");
    var regx = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,20})$/;
    if (regx.test(email.value)) {
        emaillabel.style.color = "green";
        email.style.borderColor = "green";
    }
    else {
        emaillabel.style.color = "red";
        email.style.borderColor = "red";
    }
}
function passwordValidate() {
    var password = document.getElementById("password");
    var label_password = document.getElementById("label_password");
    var regx1 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (regx1.test(password.value)) {
        label_password.style.color = "green";
        password.style.borderColor = "green";
    }
    else {
        password.style.borderColor = "red";
        label_password.style.color = "red";
    }
}
function passwordValidate1() {
    var password = document.getElementById("password1");
    var label_password = document.getElementById("label_password1");
    var regx1 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (regx1.test(password.value)) {
        label_password.style.color = "green";
        password.style.borderColor = "green";
    }
    else {
        password.style.borderColor = "red";
        label_password.style.color = "red";
    }
}
function conformValidate() {
    var Conformpassword = document.getElementById("Conformpassword");
    var password1 = document.getElementById("password");
    var label_conformpassword = document.getElementById("label_conformpassword");
    if (Conformpassword.value != password1.value) {
        Conformpassword.style.borderColor = "red";
        label_conformpassword.style.color = "red";
    }
    else {
        Conformpassword.style.borderColor = "green";
        label_conformpassword.style.color = "green";
    }
}
function phoneNum() {
    var regx = /[7-9]\d{9}/;
    var x = document.getElementById("phonenumber");
    var label_phone = document.getElementById("label_phone");
    if (regx.test(x.value)) {
        label_phone.style.color = "green";
        x.style.borderColor = "green";
    }
    else {
        x.style.borderColor = "red";
        label_phone.style.color = "red";
    }
}
function newuserSubmit() {
    let email = document.getElementById("email");
    let pass = document.getElementById("password");
    let conf = document.getElementById("Conformpassword");
    let phone = document.getElementById("phonenumber");
    let user = {
        userId: 3,
        emailID: email.value,
        password: pass.value,
        conformPassword: conf.value,
        phoneNumber: phone.value,
        balance: 0
    };
    alert("Registration success");
    addUser(user);
}
function newUserEntry() {
    let page1 = document.getElementById("page1");
    let element = document.getElementsByClassName("main");
    let element1 = document.getElementsByClassName("right");
    page1.style.display = "none";
    element[0].style.display = "block";
    element1[0].style.display = "none";
}
function login() {
    let page1 = document.getElementById("page1");
    let element = document.getElementsByClassName("main");
    let element1 = document.getElementsByClassName("left");
    page1.style.display = "none";
    element[0].style.display = "block";
    element1[0].style.display = "none";
}
var temparyUserStore;
function signin() {
    return __awaiter(this, void 0, void 0, function* () {
        let loginemail = document.getElementById("email1").value;
        let loginpassword = document.getElementById("password1").value;
        let loginstatus = false;
        const users = yield fetchUsers();
        users.forEach(user => {
            if (user.emailID == loginemail && user.password == loginpassword) {
                loginstatus = true;
                temparyUserStore = user;
                return true;
            }
        });
        if (loginstatus) {
            let body = document.getElementById("body1");
            let login_page = document.getElementById("login_page");
            body.style.display = "none";
            login_page.style.display = "block";
        }
        else {
            alert("not match Invaild mail or password!");
        }
    });
}
function backToMainPage() {
    let body = document.getElementById("body1");
    let login_page = document.getElementById("login_page");
    let page1 = document.getElementById("page1");
    let main = document.getElementsByClassName("main");
    document.getElementById("email1").value = "";
    document.getElementById("password1").value = "";
    validate1();
    passwordValidate1();
    page1.style.display = "block";
    body.style.display = "flex";
    login_page.style.display = "none";
    main[0].style.display = "none";
}
function showMedicineDetail() {
    return __awaiter(this, void 0, void 0, function* () {
        document.getElementById("editData").style.display = "none";
        document.getElementById("purchaseCount").style.display = "none";
        let div = document.getElementById("rechargeDiv");
        div.style.display = "none";
        let but = document.getElementById("addButton");
        but.style.display = "block";
        let table1 = document.getElementById("purchaseTable");
        table1.style.display = "none";
        let table = document.getElementById("Medicinetable");
        table.style.display = "block";
        table.innerHTML = "";
        document.getElementById("OrderTable").style.display = "none";
        document.getElementById("addDiv").style.display = "none";
        table.innerHTML = ` <tr>
        <th>${"Medicine Name"}</th>
        <th>${"Medicine Price"}</th>
        <th>${"Medicine Count"}</th>
        <th>${"Medicine Expary"}</th>
        <th colspan="2">${"Choice"}</th>
    </tr>`;
        try {
            const medicines = yield fetchMedicine();
            medicines.forEach(medicine => {
                table.innerHTML += `
            <tr>
                <td>${medicine.medicineName}</td>
                <td>${medicine.medicinePrice}</td>
                <td>${medicine.medicineCount}</td>
                <td>${medicine.medicineExpary}</td>
                <td>
                    <button onclick="editMedicineData('${medicine.medicineId}')">Edit</button>
                    <button onclick="deleteMedicine1('${medicine.medicineId}')">Delete</button>
                </td>
            </tr>
            `;
            });
        }
        catch (error) {
            console.error('Error fetching medicines:', error);
        }
    });
}
function deleteMedicine1(medicine_id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const medicines = yield fetchMedicine();
            medicines.forEach(medicine => {
                deleteMedicine(Number(medicine_id), medicine);
            });
            showMedicineDetail();
        }
        catch (_a) {
            alert("Cannot fetch the medicine data");
        }
    });
}
function purchase() {
    return __awaiter(this, void 0, void 0, function* () {
        document.getElementById("editData").style.display = "none";
        let div = document.getElementById("rechargeDiv");
        div.style.display = "none";
        let add = document.getElementById("addDiv");
        add.style.display = "none";
        let but = document.getElementById("addButton");
        but.style.display = "none";
        let table1 = document.getElementById("Medicinetable");
        table1.style.display = "none";
        let table = document.getElementById("purchaseTable");
        table.style.display = "block";
        document.getElementById("OrderTable").style.display = "none";
        table.innerHTML = "";
        table.innerHTML = `<tr>
        <th>${"Medicine Name"}</th>
        <th>${"Medicine Price"}</th>
        <th>${"Medicine Count"}</th>
        <th>${"Medicine Expary"}</th>
        <th>${"Choice"}</th>
        </tr>`;
        const medicines = yield fetchMedicine();
        medicines.forEach(medicine => {
            table.innerHTML += `
            <tr>
                <td>
                ${medicine.medicineName}
                    </td>
                    <td>
                    ${medicine.medicinePrice}
                    </td>
                    <td>
                    ${medicine.medicineCount}
                    </td>
                    <td>
                    ${medicine.medicineExpary}
                    </td>
                    <td>
                    <button onclick="showCountMenu('${medicine.medicineName}')">buy</button>
                </td>
            </tr>`;
        });
    });
}
var currendMedicineName;
function showCountMenu(medicineName) {
    document.getElementById("purchaseCount").style.display = "block";
    currendMedicineName = medicineName;
}
let temparymedicineStore2;
function editMedicineData(medicine_id) {
    let div = document.getElementById("rechargeDiv");
    div.style.display = "none";
    let add = document.getElementById("addDiv");
    add.style.display = "none";
    let but = document.getElementById("addButton");
    but.style.display = "none";
    let table1 = document.getElementById("Medicinetable");
    table1.style.display = "none";
    let table = document.getElementById("editData");
    table.style.display = "block";
    document.getElementById("OrderTable").style.display = "none";
}
function Conform_editData(medicine_id) {
    let editname = document.getElementById("EditName");
    let editPrice = document.getElementById("EditPrice");
    let editCount = document.getElementById("editCount");
    let editDate = document.getElementById("editExpartDate");
    let medicine = {
        medicineId: Number(medicine_id),
        medicineName: editname.value,
        medicineCount: Number(editCount.value),
        medicinePrice: Number(editPrice.value),
        medicineExpary: (editDate.value)
    };
    updateMedicine(medicine_id, medicine);
    document.getElementById("editData").style.display = "none";
    showMedicineDetail();
}
var temparymedicineStore;
var count;
function Conform_purchase() {
    return __awaiter(this, void 0, void 0, function* () {
        let UserEnter_count = document.getElementById("UserEntercount").value;
        let flag = true;
        count = Number(UserEnter_count);
        const Medicines = yield fetchMedicine();
        Medicines.forEach(medicine => {
            if (medicine.medicineName == currendMedicineName) {
                if (medicine.medicineCount >= count) {
                    temparymedicineStore = medicine;
                    flag = true;
                    return;
                }
                else {
                    alert("count not avilable!");
                    flag = false;
                }
            }
        });
        if (flag) {
            if (temparymedicineStore.medicinePrice <= temparyUserStore.balance) {
                temparyUserStore.balance = temparyUserStore.balance - (count * temparymedicineStore.medicinePrice);
                temparymedicineStore.medicineCount = temparymedicineStore.medicineCount - count;
                let order = {
                    orderID: 0,
                    emailID: temparyUserStore.emailID,
                    orderCount: count,
                    orderStatus: 'Ordered',
                    medicineName: currendMedicineName
                };
                addOrder(order);
                alert("Order success your OrderID is " + order.orderID);
                document.getElementById("UserEntercount").value = "";
                document.getElementById("purchaseCount").style.display = "none";
            }
            else {
                alert("Balance is not available!");
            }
        }
    });
}
function orderHistory() {
    return __awaiter(this, void 0, void 0, function* () {
        let table = document.getElementById("OrderTable");
        let add = document.getElementById("addDiv");
        add.style.display = "none";
        let div = document.getElementById("rechargeDiv");
        div.style.display = "none";
        let but = document.getElementById("addButton");
        but.style.display = "none";
        let table1 = document.getElementById("Medicinetable");
        table1.style.display = "none";
        let table2 = document.getElementById("purchaseTable");
        table2.style.display = "none";
        document.getElementById("purchaseCount").style.display = "none";
        table.style.display = "block";
        table.innerHTML = "";
        table.innerHTML = `<tr>
        <th>${"OrderID"}</th>
        <th>${"MedicineName"}</th>
        <th>${"Email"}</th>
        <th>${"order count"}</th>
        <th>${"Order status"}</th>
        </tr>`;
        const orders = yield fetchOrders();
        orders.forEach(order => {
            if (order.emailID == temparyUserStore.emailID) {
                table.innerHTML += `<tr>
                                    <td>
                                    ${order.orderID}
                                </td>
                                <td>
                                ${order.medicineName}
                                </td>
                                <td>
                                ${order.emailID}
                                </td>
                                <td>
                                ${order.orderCount}
                                </td>
                                <td>
                                ${order.orderStatus}
                                </td>                            
                                </tr>`;
            }
        });
    });
}
function addmedicine() {
    let add = document.getElementById("addDiv");
    add.style.display = "block";
    let div = document.getElementById("rechargeDiv");
    div.style.display = "none";
    let but = document.getElementById("addButton");
    but.style.display = "none";
    let table1 = document.getElementById("Medicinetable");
    table1.style.display = "none";
    let table = document.getElementById("purchaseTable");
    table.style.display = "none";
    document.getElementById("purchaseCount").style.display = "none";
}
function addtomedicine() {
    return __awaiter(this, void 0, void 0, function* () {
        let div = document.getElementById("rechargeDiv");
        div.style.display = "none";
        document.getElementById("purchaseCount").style.display = "none";
        let a = document.getElementById("newMadineName");
        let b = document.getElementById("newMadinePrice");
        let c = document.getElementById("newMedicineCount");
        let e = document.getElementById("newMadicineExpary");
        if (a.value != "" && b.value != "" && c.value != "" && e.value != "") {
            let table = document.getElementById("Medicinetable");
            let medicine = {
                medicineId: 6,
                medicineName: a.value,
                medicineCount: Number(c.value),
                medicinePrice: Number(b.value),
                medicineExpary: e.value
            };
            addMedicine(medicine);
            const medicines = yield fetchMedicine();
            medicines.forEach(medicine => {
                table.innerHTML += `<tr>
                                <td>
                                ${medicine.medicineName}
                            </td>
                            <td>
                            ${medicine.medicinePrice}
                            </td>
                            <td>
                            ${medicine.medicineCount}
                            </td>
                            <td>
                            ${medicine.medicineExpary}
                            </td>
                            <td>
                            <button onclick="editData(${medicine.medicineId})">Edit</button>
                        </td>
                        <td>
                            <button>delete</button>
                        </td>
                            </tr>`;
            });
            alert("medicine addded succesfully!");
            a.value = "";
            b.value = "";
            c.value = "";
            e.value = "";
            showMedicineDetail();
            document.getElementById("addDiv").style.display = "none";
        }
        else {
            alert("please fill the all fields!");
        }
    });
}
function showBalace() {
    alert("Your current balance " + temparyUserStore.balance);
}
function cancelOrder() {
    return __awaiter(this, void 0, void 0, function* () {
        let div = document.getElementById("rechargeDiv");
        div.style.display = "none";
        let add = document.getElementById("addDiv");
        add.style.display = "none";
        let but = document.getElementById("addButton");
        but.style.display = "none";
        let table1 = document.getElementById("Medicinetable");
        table1.style.display = "none";
        let table2 = document.getElementById("purchaseTable");
        table2.style.display = "none";
        document.getElementById("purchaseCount").style.display = "none";
        let table = document.getElementById("OrderTable");
        table.style.display = "block";
        table.innerHTML = "";
        table.innerHTML = `<tr>
        <th>${"OrderID"}</th>
        <th>${"MedicineNaame"}</th>
        <th>${"Email"}</th>
        <th>${"order count"}</th>
        <th>${"Order status"}</th>
        <th>${"Action"}</th>
        </tr>`;
        const orders = yield fetchOrders();
        orders.forEach(order => {
            if (order.emailID == temparyUserStore.emailID) {
                if (order.orderStatus == "Ordered") {
                    table.innerHTML += `<tr>
                                        <td>
                                                ${order.orderID}
                                            </td>
                                            <td>
                                                ${order.medicineName}
                                            </td>
                                            <td>
                                            ${order.emailID}
                                            </td>
                                          <td>
                                            ${order.orderCount}
                                            </td>
                                            <td>
                                            ${order.orderStatus}
                                            </td>
                                            
                                        <td>
                                        <button onclick="editOrder('${Number(order.orderID)}','${order.medicineName}')">Cancel Order</button>
                                        </td>
                                    </tr>`;
                }
            }
        });
    });
}
function editOrder(order_Id, medicineName) {
    return __awaiter(this, void 0, void 0, function* () {
        const orders = yield fetchOrders();
        const medicines = yield fetchMedicine();
        medicines.forEach(medicine => {
            if (medicine.medicineName == medicineName) {
                temparymedicineStore = medicine;
            }
        });
        orders.forEach(order => {
            if (order_Id == order.orderID) {
                temparymedicineStore.medicineCount += order.orderCount;
                let medicine = {
                    medicineId: temparymedicineStore.medicineId,
                    medicineName: temparymedicineStore.medicineName,
                    medicineCount: temparymedicineStore.medicineCount += order.orderCount,
                    medicinePrice: temparymedicineStore.medicinePrice,
                    medicineExpary: temparymedicineStore.medicineExpary
                };
                let newOrder = {
                    orderID: 9,
                    emailID: order.emailID,
                    orderCount: order.orderCount,
                    orderStatus: "Cancelled",
                    medicineName: order.medicineName
                };
                updateOrder(order_Id, newOrder);
                alert("order cancelled successfully!");
                cancelOrder();
            }
        });
    });
}
function RechargePage() {
    document.getElementById("OrderTable").style.display = "none";
    let div = document.getElementById("rechargeDiv");
    div.style.display = "block";
    let add = document.getElementById("addDiv");
    add.style.display = "none";
    let but = document.getElementById("addButton");
    but.style.display = "none";
    let table1 = document.getElementById("Medicinetable");
    table1.style.display = "none";
    let table = document.getElementById("purchaseTable");
    table.style.display = "none";
    document.getElementById("purchaseCount").style.display = "none";
}
function Recharge() {
    document.getElementById("editData").style.display = "none";
    document.getElementById("purchaseCount").style.display = "none";
    let amount = document.getElementById("recharge_amount");
    if (document.getElementById("recharge_amount").value != " ") {
        temparyUserStore.balance = temparyUserStore.balance + Number(amount.value);
        alert("amount Add succesfully balabce " + temparyUserStore.balance);
    }
    else {
        alert("please fill all fields!");
    }
}
