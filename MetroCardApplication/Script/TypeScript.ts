interface UserDetails{

    cardNumber:any;
    userName:string;
    phoneNumber:string;
    balance:Number;
    
    
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


interface TicketFairDetails{
    ticketID:any;
    fromLocation:string;
    toLocation:string;
    fair:Number;
}

async function fetchMedicine(): Promise<TicketFairDetails[]> {
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

function balancePage(){
    (document.getElementById("balance_Page") as HTMLDivElement).style.display="block";
}