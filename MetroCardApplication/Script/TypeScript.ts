interface UserDetails{

    cardNumber:any;
    userName:string;
    phoneNumber:string;
    balance:number;
    
    
}

async function addUser(user:UserDetails): Promise<void> {

    const response = await fetch('http://localhost:5089/api/UserDetails', {
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
    const apiUrl = 'http://localhost:5089/api/UserDetails';
    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error('Failed to fetch order');
    }
    return await response.json();
}


async function updateUser(cardNumber:any, user: UserDetails): Promise<void> {
    const response = await fetch(`http://localhost:5089/api/UserDetails/${cardNumber}`, {
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






interface TravelHistoryDetails{
    travelID:any;
    cardNumber:Number;
    fromLocation:string;
    toLocation:string;
    date:Date;
    travelCost:Number;
}
async function fetchTravelHistory(): Promise<TravelHistoryDetails[]> {
    const apiUrl = 'http://localhost:5089/api/TravelHistoryDetails';
    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error('Failed to fetch order');
    }
    return await response.json();
}

async function addTravelHistory(history:TravelHistoryDetails): Promise<void> {

    const response = await fetch('http://localhost:5089/api/TravelHistoryDetails', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(history)
    });

    if (!response.ok) {
        throw new Error('Field to add user');
    }

}

interface TicketFairDetails{
    ticketID:any;
    fromLocation:string;
    toLocation:string;
    fair:Number;
}

async function fetchTicketFair(): Promise<TicketFairDetails[]> {
    const apiUrl = 'http://localhost:5089/api/TicketFairDetails';
    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error('Failed to fetch Medicine');
    }
    return await response.json();
}











// registration page


function registrationPage(){
    (document.getElementById("main_page") as HTMLDivElement).style.display="none";
    (document.getElementById("newregistration_page") as HTMLDivElement).style.display="block";
    (document.getElementById("userlogin_page") as HTMLDivElement).style.display="none";
    (document.getElementById("login_inside_page") as HTMLDivElement).style.display="none";
    
}

async function registrationSubmit(){
    let user_name=document.getElementById("user_name") as HTMLInputElement;
    let phoneNumber=document.getElementById("phoneNumber") as HTMLInputElement;
    let balance=document.getElementById("balance") as HTMLInputElement;
    if(user_name.value != "" && phoneNumber.value != "" && balance.value != ""){ 
        let newUser:UserDetails={
            cardNumber: undefined,
            userName: user_name.value,
            phoneNumber: phoneNumber.value,
            balance: Number(balance.value)
        }

        addUser(newUser);

        const users= await fetchUser();
        let cardno;
        users.forEach(user=>{
            if(newUser.userName==user.userName){
                cardno=user.cardNumber;
            }
        }
        )
        alert("Registration Success card number is "+ cardno);
        loginpage();
    }else{
        alert("Please fill all fields!")
    }
}


//user login page


async function loginpage(){
        (document.getElementById("main_page") as HTMLDivElement).style.display="none";
        (document.getElementById("newregistration_page") as HTMLDivElement).style.display="none";
        (document.getElementById("userlogin_page") as HTMLDivElement).style.display="block";
        (document.getElementById("login_inside_page") as HTMLDivElement).style.display="none";  
}


var tempUserStore:UserDetails;
let flag=false;
async function login(){
  

    let card_number=document.getElementById("card_number") as HTMLInputElement;
    if(card_number.value!=""){
        const users= await fetchUser();
        let flag=false;
        users.forEach(user=>{
            if(card_number.value==user.cardNumber){
                tempUserStore=user;
                flag=true;
                return true;
            }        
        })
        if(flag){
            insidePage();
        }else{
            alert("Invaild card number");
        }
    }else{
        alert("Please enter the filed!")
    }
    
}

function insidePage(){
    (document.getElementById("main_page") as HTMLDivElement).style.display="none";
    (document.getElementById("newregistration_page") as HTMLDivElement).style.display="none";
    (document.getElementById("userlogin_page") as HTMLDivElement).style.display="none";
    (document.getElementById("login_inside_page") as HTMLDivElement).style.display="block";
}




async function balancePage(){
    let balance_Page=(document.getElementById("balance_Page") as HTMLDivElement);
    (document.getElementById("Recharge_page") as HTMLDivElement).style.display="none";
    (document.getElementById("TravelHistory_page") as HTMLDivElement).style.display="none";
    (document.getElementById("travel") as HTMLDivElement).style.display="none";
    balance_Page.style.display="block";
    let tempbalance;
    let users=await fetchUser();
    users.forEach(user=>{
        if(tempUserStore.cardNumber==user.cardNumber){
                tempbalance=user.balance;
                return true;
        }
    })
    balance_Page.innerHTML="Your current balance is "+tempbalance;
    

}


function rechargePage(){
    (document.getElementById("balance_Page") as HTMLDivElement).style.display="none";
    (document.getElementById("Recharge_page") as HTMLDivElement).style.display="block";
    (document.getElementById("TravelHistory_page") as HTMLDivElement).style.display="none";
    (document.getElementById("travel") as HTMLDivElement).style.display="none";

        
}

var temp:UserDetails;
async function conform_recharge(){
    let userenter_amount=document.getElementById("userenter_amount") as HTMLInputElement;

    let users=await fetchUser();
   
    let flag=false;
    if(userenter_amount.value!=""){
        
        users.forEach(user=>{
            if(tempUserStore.cardNumber == user.cardNumber){
                    flag=true;
                    temp=user;
                    return true;
            }
        })

        if(flag){
            let updateUserData:UserDetails={
                cardNumber: temp.cardNumber,
                userName: temp.userName,
                phoneNumber: temp.phoneNumber,
                balance:Number(userenter_amount.value)+temp.balance
            }
            updateUser(tempUserStore.cardNumber,updateUserData);
            alert("balance added succesfully");
            rechargePage();
        }else{
            alert("User not found!");
        }

    }else{
        alert("Please fill all fields")
    }
}


async function travelHistoryPage(){
    (document.getElementById("TravelHistory_page") as HTMLDivElement).style.display="block";
    (document.getElementById("balance_Page") as HTMLDivElement).style.display="none";
    (document.getElementById("Recharge_page") as HTMLDivElement).style.display="none";
    (document.getElementById("travel") as HTMLDivElement).style.display="none"

    let table=document.getElementById("travel_history_table") as HTMLTableElement;

    let history=await fetchTravelHistory();
    table.innerHTML="";
    table.innerHTML=`<tr>
    <td>${"TravelID"}</td>
    <td>${"CardNumber"}</td>
    <td>${"FromLocation"}</td>
    <td>${"ToLocation"}</td>
    <td>${"Date"}</td>
    <td>${"TravelCost"}</td>
    </tr>`;

    history.forEach(his=>{
        if(tempUserStore.cardNumber == his.cardNumber){

            table.innerHTML+=    `<tr>
                                <td>${his.travelID}</td>
                                <td>${his.cardNumber}</td>
                                <td>${his.fromLocation}</td>
                                <td>${his.toLocation}</td>
                                <td>${his.date}</td>
                                <td>${his.travelCost}</td>
                                </tr>`        
        }
    })
    // travel_history_table

}



function logout(){
    (document.getElementById("main_page") as HTMLDivElement).style.display="block";
    (document.getElementById("newregistration_page") as HTMLDivElement).style.display="none";
    (document.getElementById("userlogin_page") as HTMLDivElement).style.display="none";
    (document.getElementById("login_inside_page") as HTMLDivElement).style.display="none";
    

    (document.getElementById("card_number") as HTMLInputElement).value="";
}


async function bookingpage(){
    (document.getElementById("travel") as HTMLDivElement).style.display="block";
    (document.getElementById("balance_Page") as HTMLDivElement).style.display="none";
    (document.getElementById("Recharge_page") as HTMLDivElement).style.display="none";
    (document.getElementById("TravelHistory_page") as HTMLDivElement).style.display="none";

    let fairdetails_table =document.getElementById("fairdetailstable") as HTMLTableElement;

   
    let travelfair=await fetchTicketFair();
   
    fairdetails_table.innerHTML=`<tr>
                        <td>${"FromLocation"}</td>
                        <td>${"ToLocation"}</td>
                        <td>${"Fair"}</td>
                        <td>${"Booking"}</td>
                        </tr>`


    
    travelfair.forEach(details=>{
        fairdetails_table.innerHTML+=`<tr>
                                <td>${details.fromLocation}</td>
                                <td>${details.toLocation}</td>
                                <td>${details.fair}</td>
                                <td><button onclick="conformbooked(${details.ticketID})">book</button></td>
                            </tr>`
    })
}



var tempUser:UserDetails;
var tempTicket:TicketFairDetails;
async function conformbooked(id:any){

    let fairs=await fetchTicketFair();
    fairs.forEach(fair=>{
        if(fair.ticketID==id){
            tempTicket=fair;
            return true;
        }
    })

    let users=await fetchUser();
   
    users.forEach(user=>{
            if(tempUserStore.cardNumber== user.cardNumber){
                tempUser=user;
                return true;
            }
    })

    let newTicket:TravelHistoryDetails={
        travelID: undefined,
        cardNumber: tempUser.cardNumber,
        fromLocation:tempTicket.fromLocation ,
        toLocation: tempTicket.toLocation,
        date: new Date(),
        travelCost: tempTicket.fair,
    }

    addTravelHistory(newTicket);
    alert("ticked booked succesfully");

    let userDataUpdate:UserDetails={
        cardNumber: tempUser.cardNumber,
        userName: tempUser.userName,
        phoneNumber: tempUser.phoneNumber,
        balance: tempUser.balance-Number(tempTicket.fair)
    }

    updateUser(tempUser.cardNumber,userDataUpdate);


}