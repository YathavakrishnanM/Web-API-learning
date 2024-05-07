import 'core-js';

interface User {
    userId: number;
    emailID: string;
    password: string;
    conformPassword: string;
    phoneNumber: string;
    balance: number;
}

//Add user
async function addUser(user: User): Promise<void> {

    const response = await fetch('http://localhost:5260/api/Users', {
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

async function fetchUsers(): Promise<User[]> {
    const apiUrl = 'http://localhost:5260/api/Users';
    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error('Failed to fetch user');
    }
    return await response.json();
}


interface Orders {
    orderID: number;
    emailID: string;
    orderCount: number;
    orderStatus: string;
    medicineName:string;
}


async function addOrder(order: Orders): Promise<void> {

    const response = await fetch('http://localhost:5260/api/Orders', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(order)
    });

    if (!response.ok) {
        throw new Error('Field to add contact');
    }

}

async function updateOrder(orderId: Number, order: Orders): Promise<void> {
    const response = await fetch(`http://localhost:5260/api/Orders/${orderId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(order)
    });
    if (!response.ok) {
        throw new Error('Failed to update contact');
    }
}

async function fetchOrders(): Promise<Orders[]> {
    const apiUrl = 'http://localhost:5260/api/Orders';
    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error('Failed to fetch order');
    }
    return await response.json();
}






interface MedicineInfo {
    medicineId: number;
    medicineName: string;
    medicineCount: number;
    medicinePrice: number;
    medicineExpary: string;
}

async function addMedicine(medicine: MedicineInfo): Promise<void> {

    const response = await fetch('http://localhost:5260/api/MedicineInfo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(medicine)
    });

    if (!response.ok) {
        throw new Error('Field to add contact');
    }

}

async function updateMedicine(medicineId: Number, medicine: MedicineInfo): Promise<void> {
    const response = await fetch(`http://localhost:5260/api/MedicineInfo/${medicineId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(medicine)
    });
    if (!response.ok) {
        throw new Error('Failed to update medicine');
    }
}

async function deleteMedicine(medicineId: Number, medicine: MedicineInfo): Promise<void> {
    const response = await fetch(`http://localhost:5260/api/MedicineInfo/${medicineId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(medicine)
    });
    if (!response.ok) {
        throw new Error('Failed to delete medicine');
    }
}

async function fetchMedicine(): Promise<MedicineInfo[]> {
    const apiUrl = 'http://localhost:5260/api/MedicineInfo';
    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error('Failed to fetch Medicine');
    }
    return await response.json();
}









let emailIDstatus = false;
let passwordStatus = false;
let conformStatus = false;
let phoneNumberStatus = false;
let loginemailStatus = false;
let loginpasswordStatus = false;


function validate() {
    let email = document.getElementById("email") as HTMLInputElement;
    let emaillabel = document.getElementById("label_email") as HTMLLabelElement;

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
    var email = document.getElementById("email1") as HTMLInputElement;
    var emaillabel = document.getElementById("label_email1") as HTMLLabelElement;

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
    var password = document.getElementById("password") as HTMLInputElement;
    var label_password = document.getElementById("label_password") as HTMLLabelElement;

    var regx1 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/

    if (regx1.test(password.value)) {
        label_password.style.color = "green";
        password.style.borderColor = "green";

    } else {
        password.style.borderColor = "red";
        label_password.style.color = "red";

    }

}

function passwordValidate1() {
    var password = document.getElementById("password1") as HTMLInputElement;
    var label_password = document.getElementById("label_password1") as HTMLLabelElement;

    var regx1 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/

    if (regx1.test(password.value)) {
        label_password.style.color = "green";
        password.style.borderColor = "green";

    } else {
        password.style.borderColor = "red";
        label_password.style.color = "red";

    }

}

function conformValidate() {
    var Conformpassword = document.getElementById("Conformpassword") as HTMLInputElement;
    var password1 = document.getElementById("password") as HTMLInputElement;
    var label_conformpassword = document.getElementById("label_conformpassword") as HTMLLabelElement;

    if (Conformpassword.value != password1.value) {
        Conformpassword.style.borderColor = "red";
        label_conformpassword.style.color = "red";

    } else {
        Conformpassword.style.borderColor = "green";
        label_conformpassword.style.color = "green";

    }
}

function phoneNum() {
    var regx = /[7-9]\d{9}/;
    var x = document.getElementById("phonenumber") as HTMLInputElement;
    var label_phone = document.getElementById("label_phone") as HTMLLabelElement;
    if (regx.test(x.value)) {
        label_phone.style.color = "green";
        x.style.borderColor = "green";

    } else {
        x.style.borderColor = "red";
        label_phone.style.color = "red";


    }

}

function newuserSubmit() {
    let email = document.getElementById("email") as HTMLInputElement;
    let pass = document.getElementById("password") as HTMLInputElement;
    let conf = document.getElementById("Conformpassword") as HTMLInputElement;
    let phone = document.getElementById("phonenumber") as HTMLInputElement;



    let user: User = {
        userId: 3,
        emailID: email.value,
        password: pass.value,
        conformPassword: conf.value,
        phoneNumber: phone.value,
        balance: 0
    }

    alert("Registration success");
    addUser(user);



}


function newUserEntry() {

    let page1 = document.getElementById("page1") as HTMLInputElement;
    let element = document.getElementsByClassName("main") as HTMLCollectionOf<HTMLDivElement>;
    let element1 = document.getElementsByClassName("right") as HTMLCollectionOf<HTMLDivElement>;

    page1.style.display = "none";

    element[0].style.display = "block";

    element1[0].style.display = "none";


}

function login() {
    let page1 = document.getElementById("page1") as HTMLInputElement;
    let element = document.getElementsByClassName("main") as HTMLCollectionOf<HTMLDivElement>;
    let element1 = document.getElementsByClassName("left") as HTMLCollectionOf<HTMLDivElement>;

    page1.style.display = "none";

    element[0].style.display = "block";

    element1[0].style.display = "none";
}

var temparyUserStore:User;
async function signin() {

    let loginemail = (document.getElementById("email1") as HTMLInputElement).value;
    let loginpassword = (document.getElementById("password1") as HTMLInputElement).value;
    let loginstatus = false;



    const users = await fetchUsers();
    users.forEach(user => {
        if (user.emailID == loginemail && user.password == loginpassword) {
            loginstatus = true;
            temparyUserStore = user;
            return true;
        }

        
    });

    if (loginstatus) {
        let body = document.getElementById("body1") as HTMLDivElement;
        let login_page = document.getElementById("login_page") as HTMLDivElement;
        body.style.display = "none";
        login_page.style.display = "block";
    }
    else {
        alert("not match Invaild mail or password!");
    }

}
function backToMainPage() {

    let body = document.getElementById("body1") as HTMLDivElement;
    let login_page = document.getElementById("login_page") as HTMLDivElement;
    let page1 = document.getElementById("page1") as HTMLDivElement;
    let main = (document.getElementsByClassName("main") as HTMLCollectionOf<HTMLDivElement>);


    (document.getElementById("email1") as HTMLInputElement).value = "";
    (document.getElementById("password1") as HTMLInputElement).value = "";
    validate1();
    passwordValidate1();

    page1.style.display = "block";
    body.style.display = "flex";
    login_page.style.display = "none";
    main[0].style.display = "none";


}

async function showMedicineDetail() {
    (document.getElementById("editData") as HTMLDivElement).style.display = "none";
    (document.getElementById("purchaseCount") as HTMLDivElement).style.display = "none";
    let div = document.getElementById("rechargeDiv") as HTMLDivElement;
    div.style.display = "none";
    let but = document.getElementById("addButton") as HTMLButtonElement;
    but.style.display = "block";
    let table1 = document.getElementById("purchaseTable") as HTMLTableElement;
    table1.style.display = "none";
    let table = document.getElementById("Medicinetable") as HTMLTableElement;
    table.style.display = "block";
    table.innerHTML = "";

    (document.getElementById("OrderTable") as HTMLTableElement).style.display = "none";

    (document.getElementById("addDiv") as HTMLDivElement).style.display = "none";
    table.innerHTML = ` <tr>
        <th>${"Medicine Name"}</th>
        <th>${"Medicine Price"}</th>
        <th>${"Medicine Count"}</th>
        <th>${"Medicine Expary"}</th>
        <th colspan="2">${"Choice"}</th>
    </tr>`
    try {
        const medicines = await fetchMedicine();
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
    } catch (error) {
        console.error('Error fetching medicines:', error);
    }
}


async function deleteMedicine1(medicine_id: string) {
    try {
        const medicines = await fetchMedicine();
        medicines.forEach(medicine => {
            deleteMedicine(Number(medicine_id), medicine)
        })
        showMedicineDetail();
    } catch {
        alert("Cannot fetch the medicine data");
    }

}

async function purchase() {
    (document.getElementById("editData") as HTMLDivElement).style.display = "none";
    let div = document.getElementById("rechargeDiv") as HTMLDivElement;
    div.style.display = "none";
    let add = document.getElementById("addDiv") as HTMLDivElement;
    add.style.display = "none";
    let but = document.getElementById("addButton") as HTMLButtonElement;
    but.style.display = "none";
    let table1 = document.getElementById("Medicinetable") as HTMLTableElement;
    table1.style.display = "none";
    let table = document.getElementById("purchaseTable") as HTMLTableElement;
    table.style.display = "block";
    (document.getElementById("OrderTable") as HTMLTableElement).style.display = "none";


    table.innerHTML = "";
    table.innerHTML = `<tr>
        <th>${"Medicine Name"}</th>
        <th>${"Medicine Price"}</th>
        <th>${"Medicine Count"}</th>
        <th>${"Medicine Expary"}</th>
        <th>${"Choice"}</th>
        </tr>`


    const medicines = await fetchMedicine();

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
            </tr>`
    })



}
var currendMedicineName: string;

function showCountMenu(medicineName: string) {
    (document.getElementById("purchaseCount") as HTMLDivElement).style.display = "block";
    currendMedicineName = medicineName;


}




let temparymedicineStore2: MedicineInfo;


function editMedicineData(medicine_id: string) {

    let div = document.getElementById("rechargeDiv") as HTMLDivElement;
    div.style.display = "none";
    let add = document.getElementById("addDiv") as HTMLDivElement;
    add.style.display = "none";
    let but = document.getElementById("addButton") as HTMLButtonElement;
    but.style.display = "none";
    let table1 = document.getElementById("Medicinetable") as HTMLTableElement;
    table1.style.display = "none";
    let table = document.getElementById("editData") as HTMLTableElement;
    table.style.display = "block";
    (document.getElementById("OrderTable") as HTMLTableElement).style.display = "none";


}

function Conform_editData(medicine_id: Number) {
    let editname = document.getElementById("EditName") as HTMLInputElement;
    let editPrice = document.getElementById("EditPrice") as HTMLInputElement;
    let editCount = document.getElementById("editCount") as HTMLInputElement;
    let editDate = document.getElementById("editExpartDate") as HTMLInputElement;

    let medicine: MedicineInfo = {
        medicineId: Number(medicine_id),
        medicineName: editname.value,
        medicineCount: Number(editCount.value),
        medicinePrice: Number(editPrice.value),
        medicineExpary: (editDate.value)
    }

    updateMedicine(medicine_id, medicine);
    (document.getElementById("editData") as HTMLDivElement).style.display = "none";
    showMedicineDetail();



}





var temparymedicineStore: MedicineInfo;
var count: number;
async function Conform_purchase() {

    let UserEnter_count = (document.getElementById("UserEntercount") as HTMLInputElement).value;
    let flag = true;
    count = Number(UserEnter_count);


    const Medicines = await fetchMedicine();

    Medicines.forEach(medicine => {
        if (medicine.medicineName == currendMedicineName) {
            if (medicine.medicineCount >= count) {
                temparymedicineStore = medicine;
                flag = true;
                return;
            } else {
                alert("count not avilable!")
                flag = false;
            }
        }
    });


    if (flag) {
        if (temparymedicineStore.medicinePrice <= temparyUserStore.balance) {
            temparyUserStore.balance = temparyUserStore.balance - (count * temparymedicineStore.medicinePrice)
            temparymedicineStore.medicineCount = temparymedicineStore.medicineCount - count;


            let order: Orders = {
                orderID: 0,
                emailID: temparyUserStore.emailID,
                orderCount: count,
                orderStatus: 'Ordered',
                medicineName:currendMedicineName
            }

            addOrder(order);


            alert("Order success your OrderID is " + order.orderID);
            (document.getElementById("UserEntercount") as HTMLInputElement).value = "";
            (document.getElementById("purchaseCount") as HTMLDivElement).style.display = "none";

        } else {
            alert("Balance is not available!");
        }
    }
}



async function orderHistory() {
    let table = (document.getElementById("OrderTable") as HTMLTableElement);

    let add = document.getElementById("addDiv") as HTMLDivElement;
    add.style.display = "none";
    let div = document.getElementById("rechargeDiv") as HTMLDivElement;
    div.style.display = "none";
    let but = document.getElementById("addButton") as HTMLButtonElement;
    but.style.display = "none";
    let table1 = document.getElementById("Medicinetable") as HTMLTableElement;
    table1.style.display = "none";
    let table2 = document.getElementById("purchaseTable") as HTMLTableElement;
    table2.style.display = "none";
    (document.getElementById("purchaseCount") as HTMLDivElement).style.display = "none";



    table.style.display = "block";
    table.innerHTML = "";
    table.innerHTML = `<tr>
        <th>${"OrderID"}</th>
        <th>${"MedicineName"}</th>
        <th>${"Email"}</th>
        <th>${"order count"}</th>
        <th>${"Order status"}</th>
        </tr>`

    const orders = await fetchOrders();
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
                                </tr>`

        }
    })
}




function addmedicine() {
    let add = document.getElementById("addDiv") as HTMLDivElement;
    add.style.display = "block";
    let div = document.getElementById("rechargeDiv") as HTMLDivElement;
    div.style.display = "none";
    let but = document.getElementById("addButton") as HTMLButtonElement;
    but.style.display = "none";
    let table1 = document.getElementById("Medicinetable") as HTMLTableElement;
    table1.style.display = "none";
    let table = document.getElementById("purchaseTable") as HTMLTableElement;
    table.style.display = "none";
    (document.getElementById("purchaseCount") as HTMLDivElement).style.display = "none";

}

async function addtomedicine() {
    let div = document.getElementById("rechargeDiv") as HTMLDivElement;
    div.style.display = "none";
    (document.getElementById("purchaseCount") as HTMLDivElement).style.display = "none";
    let a = document.getElementById("newMadineName") as HTMLInputElement;
    let b = document.getElementById("newMadinePrice") as HTMLInputElement;
    let c = document.getElementById("newMedicineCount") as HTMLInputElement;
    let e = document.getElementById("newMadicineExpary") as HTMLInputElement;
    if (a.value != "" && b.value != "" && c.value != "" && e.value != "") {
        let table = document.getElementById("Medicinetable") as HTMLTableElement;


        let medicine: MedicineInfo = {
            medicineId: 6,
            medicineName: a.value,
            medicineCount: Number(c.value),
            medicinePrice: Number(b.value),
            medicineExpary: e.value
        }

        addMedicine(medicine);

        const medicines = await fetchMedicine();


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
                            </tr>`
        });
        alert("medicine addded succesfully!");
        a.value = "";
        b.value = "";
        c.value = "";
        e.value = "";
        showMedicineDetail();
        (document.getElementById("addDiv") as HTMLDivElement).style.display = "none";
    } else {
        alert("please fill the all fields!");
    }

}

function showBalace() {
    alert("Your current balance " + temparyUserStore.balance)
}


async function cancelOrder() {

    let div = document.getElementById("rechargeDiv") as HTMLDivElement;
    div.style.display = "none";
    let add = document.getElementById("addDiv") as HTMLDivElement;
    add.style.display = "none";
    let but = document.getElementById("addButton") as HTMLButtonElement;
    but.style.display = "none";
    let table1 = document.getElementById("Medicinetable") as HTMLTableElement;
    table1.style.display = "none";
    let table2 = document.getElementById("purchaseTable") as HTMLTableElement;
    table2.style.display = "none";
    (document.getElementById("purchaseCount") as HTMLDivElement).style.display = "none";
    let table = (document.getElementById("OrderTable") as HTMLTableElement);

    table.style.display = "block";
    table.innerHTML = "";
    table.innerHTML = `<tr>
        <th>${"OrderID"}</th>
        <th>${"MedicineNaame"}</th>
        <th>${"Email"}</th>
        <th>${"order count"}</th>
        <th>${"Order status"}</th>
        <th>${"Action"}</th>
        </tr>`

    const orders = await fetchOrders();
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
                                    </tr>`
            }

        }
    });
}

async function editOrder(order_Id: number,medicineName:string) {

    const orders = await fetchOrders();
    const medicines=await fetchMedicine();

    medicines.forEach(
        medicine=>{
            if(medicine.medicineName==medicineName){
                temparymedicineStore=medicine;
            }
        }
    )
    orders.forEach(order => {
        if (order_Id == order.orderID) {
            temparymedicineStore.medicineCount += order.orderCount;
            let medicine:MedicineInfo={
                medicineId: temparymedicineStore.medicineId,
                medicineName: temparymedicineStore.medicineName,
                medicineCount: temparymedicineStore.medicineCount+=order.orderCount,
                medicinePrice: temparymedicineStore.medicinePrice,
                medicineExpary: temparymedicineStore.medicineExpary
            }

            let newOrder:Orders={
                orderID: 9,
                emailID: order.emailID,
                orderCount: order.orderCount,
                orderStatus: "Cancelled",
                medicineName: order.medicineName
            }     
            updateOrder(order_Id,newOrder);       
            alert("order cancelled successfully!");
            cancelOrder();
        }
    });

    
}

function RechargePage() {
    (document.getElementById("OrderTable") as HTMLTableElement).style.display = "none";
    let div = document.getElementById("rechargeDiv") as HTMLDivElement;
    div.style.display = "block";
    let add = document.getElementById("addDiv") as HTMLDivElement;
    add.style.display = "none";
    let but = document.getElementById("addButton") as HTMLButtonElement;
    but.style.display = "none";
    let table1 = document.getElementById("Medicinetable") as HTMLTableElement;
    table1.style.display = "none";
    let table = document.getElementById("purchaseTable") as HTMLTableElement;
    table.style.display = "none";
    (document.getElementById("purchaseCount") as HTMLDivElement).style.display = "none";
}
function Recharge() {
    (document.getElementById("editData") as HTMLDivElement).style.display = "none";
    (document.getElementById("purchaseCount") as HTMLDivElement).style.display = "none";

    let amount = document.getElementById("recharge_amount") as HTMLInputElement;
    if ((document.getElementById("recharge_amount") as HTMLInputElement).value != " ") {
        temparyUserStore.balance = temparyUserStore.balance + Number(amount.value);
        alert("amount Add succesfully balabce " + temparyUserStore.balance);
    } else {
        alert("please fill all fields!");
    }

}

