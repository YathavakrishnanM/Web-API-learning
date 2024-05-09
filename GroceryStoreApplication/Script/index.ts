interface UserDetails{
    userID:any;
    emailID:string;
    password:string;
    walletBalance:Number;
    phoneNumber:string;
    address:string;
    userPhoto:string[];
    userName:string;
}

async function addUser(user:UserDetails) {
    const response=await fetch('http://localhost:5166/api/Users',{
        method:'POST',
        headers:{
            'Content-Type' : 'application/json'
        },
        body:JSON.stringify(user)
    });

    if(!response.ok){
        throw new Error("Field to add user");
    }
}

async function fetchUser():Promise<UserDetails[]> {
    const response=await fetch('http://localhost:5166/api/Users')
    if(!response.ok){
        throw new Error('Faild to fetch User')
    }
    return await response.json();
}

async function updateUser(userID:any,user :UserDetails) : Promise<void>{
    const response=await fetch(`http://localhost:5166/api/Users/${userID}`,{
        method:'PUT',
        headers:{
            'Content-Type' : 'application/json'
        },
        body:JSON.stringify(user)
    });
    if(!response.ok){
        throw new Error('Faild to update user');
    }
}

async function deleteUser(userID:any) {
    const response=await fetch(`http://localhost:5166/api/Users/${userID}`,{
        method:'DELETE',
        });
        if(!response){
            throw new Error('Faild to delete user');
        }
}


interface OrderDetails{
        orderID:any;
        orderDate:string;
        emailID:string;
        itemName:string;
        totalPrice:Number;
}


interface GroceryDetails{
    groceryID:any;
    quantity:Number;
    price:Number;
    purchaseDate:string;
    exparyDate:string;
    itemPhoto:string[];
    itemName:string
}
async function addGrocery(grocery:GroceryDetails) {
    const response=await fetch('http://localhost:5166/api/GroceryDetails',{
        method:'POST',
        headers:{
            'Content-Type' : 'application/json'
        },
        body:JSON.stringify(grocery)
    });

    if(!response.ok){
        throw new Error("Field to add grocery");
    }
}

async function fetchGrocery():Promise<GroceryDetails[]> {
    const response=await fetch('http://localhost:5166/api/GroceryDetails')
    if(!response.ok){
        throw new Error('Faild to fetch User')
    }
    return await response.json();
}

async function updateGrocery(groceryID:any,grocery :GroceryDetails) : Promise<void>{
    const response=await fetch(`http://localhost:5166/api/GroceryDetails/${groceryID}`,{
        method:'PUT',
        headers:{
            'Content-Type' : 'application/json'
        },
        body:JSON.stringify(grocery)
    });
    if(!response.ok){
        throw new Error('Faild to update user');
    }
}

async function deleteGrocery(groceryID:any) {
    const response=await fetch(`http://localhost:5166/api/GroceryDetails/${groceryID}`,{
        method:'DELETE',
        });
        if(!response){
            throw new Error('Faild to delete user');
        }
}

function toRegisterPage(){

    (document.getElementById("main_page") as HTMLDivElement).style.display="none";
    (document.getElementById("register_Page") as HTMLInputElement).style.display="block";
    (document.getElementById("login_page") as HTMLInputElement).style.display="none";
}


function registration(){
    let email=document.getElementById("email") as HTMLInputElement;
    let username=document.getElementById("username") as HTMLInputElement;
    let password=document.getElementById("password") as HTMLInputElement;
    let balance=document.getElementById("balance") as HTMLInputElement;
    let phoneNumber=document.getElementById("phoneNumber") as HTMLInputElement;
    let photo=document.getElementById("photo") as HTMLInputElement;
    let address=document.getElementById("address") as HTMLTextAreaElement;

    console.log(email.value)
    console.log(password.value)
    console.log(balance.value)
    console.log(phoneNumber.value)
    console.log(photo.value)
    console.log(address.value)

    // change string to base64string
        try{
            const file:any= photo.files?.[0];
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function (event) {
                var base64String =  event.target?.result as string;
                
                if(email.value!="" && password.value!="" && balance.value!="" && phoneNumber.value!=""  && address.value!=""  && photo.value!="" && username.value!=""){
                        let newUser:UserDetails={
                            userID: undefined,
                            emailID: email.value,
                            password: password.value,
                            walletBalance: Number(balance.value),
                            phoneNumber: phoneNumber.value,
                            address: address.value,
                            userPhoto: [base64String],
                            userName: username.value
                        }

                        addUser(newUser);
                        alert("Registration success!");
                        toLoginPage()
                }
                else{
                    alert("Please fill all fields");
                }
            }
        }catch{
            alert("Please fill all fields")
        }
}


function toLoginPage(){

    let login_page=document.getElementById("login_page") as HTMLDivElement;
    (document.getElementById("main_page") as HTMLDivElement).style.display="none";
    (document.getElementById("register_Page") as HTMLInputElement).style.display="none";

    login_page.style.display="block";

    

    
}


var tempUserStore:UserDetails;
var flag:boolean=false;


async function login(){

    let user_enter_email=document.getElementById("user_enter_email") as HTMLInputElement;
    let user_enster_password=document.getElementById("user_enster_password") as HTMLInputElement;


    let users=await fetchUser();

    if(user_enter_email.value!="" && user_enster_password.value!=""){


        users.forEach(user=>{
                if(user_enter_email.value == user.emailID  &&  user_enster_password.value == user.password){
                    flag=true;
                    tempUserStore=user;
                    return;
                }
        });
    }

    if(flag){
        user_enter_email.value="";
        user_enster_password.value="";
        flag=false;
        userPage();

    }else{
        alert("Invalid Email or Password!");
    }    
}


function userPage(){
    (document.getElementById("inside_mainpage") as HTMLDivElement).style.display="block";
    (document.getElementById("main_page") as HTMLDivElement).style.display="none";
    (document.getElementById("register_Page") as HTMLInputElement).style.display="none";
    (document.getElementById("login_page") as HTMLInputElement).style.display="none";
}


async function homepage(){
    (document.getElementById("home_content") as HTMLDivElement).style.display="block";
    (document.getElementById("WalletBalance_content") as HTMLDivElement).style.display="none";
    (document.getElementById("Walletrecharge_content") as HTMLInputElement).style.display="none";
    (document.getElementById("Purchase_content") as HTMLInputElement).style.display="none";
    (document.getElementById("Addproduct_content") as HTMLDivElement).style.display="none";
    (document.getElementById("Grocery_items_content") as HTMLDivElement).style.display="none";
    (document.getElementById("Card_content") as HTMLInputElement).style.display="none";
    (document.getElementById("View_order_history_content") as HTMLInputElement).style.display="none";
    (document.getElementById("SignOut") as HTMLInputElement).style.display="none";


    let home_content=document.getElementById("home_content") as HTMLDivElement;

    let users=await fetchUser();
    home_content.innerHTML="";
    users.forEach(user=>{
        if(tempUserStore.userID==user.userID){
            home_content.innerHTML=`<h1>Welcome ${user.userName} </h1><img src="${user.userPhoto}" height=50px width=50px>`
        }
    })


}

async function walletbalancepage(){
    (document.getElementById("home_content") as HTMLDivElement).style.display="none";
    (document.getElementById("WalletBalance_content") as HTMLDivElement).style.display="block";
    (document.getElementById("Walletrecharge_content") as HTMLInputElement).style.display="none";
    (document.getElementById("Purchase_content") as HTMLInputElement).style.display="none";
    (document.getElementById("Addproduct_content") as HTMLDivElement).style.display="none";
    (document.getElementById("Grocery_items_content") as HTMLDivElement).style.display="none";
    (document.getElementById("Card_content") as HTMLInputElement).style.display="none";
    (document.getElementById("View_order_history_content") as HTMLInputElement).style.display="none";
    (document.getElementById("SignOut") as HTMLInputElement).style.display="none";

    let WalletBalance_content=document.getElementById("WalletBalance_content") as HTMLDivElement;
    
        let users=await fetchUser();
        WalletBalance_content.innerHTML="";
        users.forEach(user=>{
            if(tempUserStore.userID==user.userID){
                WalletBalance_content.innerHTML=`<h1>your current balance is  ${user.walletBalance} </h1>`
            }
        })
}


function walletrechargepage(){
    (document.getElementById("home_content") as HTMLDivElement).style.display="none";
    (document.getElementById("WalletBalance_content") as HTMLDivElement).style.display="none";
    (document.getElementById("Walletrecharge_content") as HTMLInputElement).style.display="block";
    (document.getElementById("Purchase_content") as HTMLInputElement).style.display="none";
    (document.getElementById("Addproduct_content") as HTMLDivElement).style.display="none";
    (document.getElementById("Grocery_items_content") as HTMLDivElement).style.display="none";
    (document.getElementById("Card_content") as HTMLInputElement).style.display="none";
    (document.getElementById("View_order_history_content") as HTMLInputElement).style.display="none";
    (document.getElementById("SignOut") as HTMLInputElement).style.display="none";
}

function conformRecharge(){

    let amount=document.getElementById("amount") as HTMLInputElement;

    if(amount.value!=""){
        let  userUpdate:UserDetails={
            userID: tempUserStore.userID,
            emailID:tempUserStore.emailID,
            password: tempUserStore.password,
            walletBalance:Number(tempUserStore.walletBalance) + Number(amount.value),
            phoneNumber: tempUserStore.phoneNumber,
            address: tempUserStore.address,
            userPhoto:tempUserStore.userPhoto,
            userName: tempUserStore.userName
        }

        updateUser(tempUserStore.userID,userUpdate);
        amount.value="";
        alert("Recharge success!");
    }else{
        alert("Please enter the amount!")
    }
        
}


function purchase(){
    (document.getElementById("home_content") as HTMLDivElement).style.display="none";
    (document.getElementById("WalletBalance_content") as HTMLDivElement).style.display="none";
    (document.getElementById("Walletrecharge_content") as HTMLInputElement).style.display="none";
    (document.getElementById("Purchase_content") as HTMLInputElement).style.display="block";
    (document.getElementById("Addproduct_content") as HTMLDivElement).style.display="none";
    (document.getElementById("Grocery_items_content") as HTMLDivElement).style.display="none";
    (document.getElementById("Card_content") as HTMLInputElement).style.display="none";
    (document.getElementById("View_order_history_content") as HTMLInputElement).style.display="none";
    (document.getElementById("SignOut") as HTMLInputElement).style.display="none";
}

function addproductpage(){
    (document.getElementById("home_content") as HTMLDivElement).style.display="none";
    (document.getElementById("WalletBalance_content") as HTMLDivElement).style.display="none";
    (document.getElementById("Walletrecharge_content") as HTMLInputElement).style.display="none";
    (document.getElementById("Purchase_content") as HTMLInputElement).style.display="none";
    (document.getElementById("Addproduct_content") as HTMLDivElement).style.display="block";
    (document.getElementById("Grocery_items_content") as HTMLDivElement).style.display="none";
    (document.getElementById("Card_content") as HTMLInputElement).style.display="none";
    (document.getElementById("View_order_history_content") as HTMLInputElement).style.display="none";
    (document.getElementById("SignOut") as HTMLInputElement).style.display="none";
}

async function grocerypage(){
    (document.getElementById("home_content") as HTMLDivElement).style.display="none";
    (document.getElementById("WalletBalance_content") as HTMLDivElement).style.display="none";
    (document.getElementById("Walletrecharge_content") as HTMLInputElement).style.display="none";
    (document.getElementById("Purchase_content") as HTMLInputElement).style.display="none";
    (document.getElementById("Addproduct_content") as HTMLDivElement).style.display="none";
    (document.getElementById("Grocery_items_content") as HTMLDivElement).style.display="block";
    (document.getElementById("Card_content") as HTMLInputElement).style.display="none";
    (document.getElementById("View_order_history_content") as HTMLInputElement).style.display="none";
    (document.getElementById("SignOut") as HTMLInputElement).style.display="none";

   let grocerytable=document.getElementById("grocerytable") as HTMLTableElement;

   grocerytable.innerHTML="";

   grocerytable.innerHTML=`<tr>
                                <td>${"ItemName"}<td>
                                <td>${"Quantity"}<td>
                                <td>${"Price"}<td>
                                <td>${"Purchase Date"}<td>
                                <td>${"Expary date"}<td>
                                <td>${"Picture"}<td>
                            </tr>`

    let grocerys=await fetchGrocery();

    grocerys.forEach(g=>{
        grocerytable.innerHTML+=`
                            <tr>
                                <td>${g.itemName}<td>
                                <td>${g.quantity}<td>
                                <td>${g.price}<td>
                                <td>${g.purchaseDate}<td>
                                <td>${g.exparyDate}<td>
                                <td><img src="${g.itemPhoto}" height=50px width=50px><td>
                            </tr>`
    })

}

function cardPage(){
    (document.getElementById("home_content") as HTMLDivElement).style.display="none";
    (document.getElementById("WalletBalance_content") as HTMLDivElement).style.display="none";
    (document.getElementById("Walletrecharge_content") as HTMLInputElement).style.display="none";
    (document.getElementById("Purchase_content") as HTMLInputElement).style.display="none";
    (document.getElementById("Addproduct_content") as HTMLDivElement).style.display="none";
    (document.getElementById("Grocery_items_content") as HTMLDivElement).style.display="none";
    (document.getElementById("Card_content") as HTMLInputElement).style.display="block";
    (document.getElementById("View_order_history_content") as HTMLInputElement).style.display="none";
    (document.getElementById("SignOut") as HTMLInputElement).style.display="none";
}


function orderHistorypage(){
    (document.getElementById("home_content") as HTMLDivElement).style.display="none";
    (document.getElementById("WalletBalance_content") as HTMLDivElement).style.display="none";
    (document.getElementById("Walletrecharge_content") as HTMLInputElement).style.display="none";
    (document.getElementById("Purchase_content") as HTMLInputElement).style.display="none";
    (document.getElementById("Addproduct_content") as HTMLDivElement).style.display="none";
    (document.getElementById("Grocery_items_content") as HTMLDivElement).style.display="none";
    (document.getElementById("Card_content") as HTMLInputElement).style.display="none";
    (document.getElementById("View_order_history_content") as HTMLInputElement).style.display="block";
    (document.getElementById("SignOut") as HTMLInputElement).style.display="none";
}

function signoutpage(){
    // (document.getElementById("home_content") as HTMLDivElement).style.display="none";
    // (document.getElementById("WalletBalance_content") as HTMLDivElement).style.display="none";
    // (document.getElementById("Walletrecharge_content") as HTMLInputElement).style.display="none";
    // (document.getElementById("Purchase_content") as HTMLInputElement).style.display="none";
    // (document.getElementById("Addproduct_content") as HTMLDivElement).style.display="none";
    // (document.getElementById("Grocery_items_content") as HTMLDivElement).style.display="none";
    // (document.getElementById("Card_content") as HTMLInputElement).style.display="none";
    // (document.getElementById("View_order_history_content") as HTMLInputElement).style.display="none";
    // (document.getElementById("SignOut") as HTMLInputElement).style.display="block";

   

    (document.getElementById("main_page") as HTMLDivElement).style.display="block";
    (document.getElementById("register_Page") as HTMLInputElement).style.display="none";
    (document.getElementById("login_page") as HTMLInputElement).style.display="none";
    
}



function addproduct(){
    let itemname=document.getElementById("itemname") as HTMLInputElement;
    let quantity=document.getElementById("quantity") as HTMLInputElement;
    let price=document.getElementById("price") as HTMLInputElement;
    let purchaseDate=document.getElementById("purchaseDate") as HTMLInputElement;
    let exparyDate=document.getElementById("exparyDate") as HTMLInputElement;
    let itemPhoto=document.getElementById("itemPhoto") as HTMLInputElement;
    

    try{
        const file:any= itemPhoto.files?.[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function (event) {
            var base64String =  event.target?.result as string;
            
            if(itemname.value!="" && quantity.value!="" && price.value!="" && purchaseDate.value!=""  && exparyDate.value!=""){
                    let newGrocery:GroceryDetails={
                        groceryID: undefined,
                        quantity:Number(quantity.value),
                        price: Number(price.value),
                        purchaseDate:purchaseDate.value,
                        exparyDate:exparyDate.value,
                        itemPhoto: [base64String],
                        itemName:itemname.value
                    }

                    addGrocery(newGrocery);
                    itemname.value!="";
                     quantity.value!="";
                      price.value!="" ; 
                      purchaseDate.value!="";
                    exparyDate.value!="";
                    addproduct();
                    alert("Item added success!");
                    
                }
            else{
                alert("Please fill all fields");
            }
        }
    }catch{
        alert("Please fill all fields")
    }
}