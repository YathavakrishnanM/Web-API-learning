using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace MedicalStoreApplication.Controllers;


[ApiController]
[Route("api/[controller]")]
public class ContactsController : ControllerBase
{
    private static List<Contact> _Contacts=new List<Contact>
    {
        new Contact{ID="1",Name="Yathav",Email="yathav@gmail.com",Phone="8925317233"},
        new Contact{ID="2",Name="Baskaran",Email="baskarna@gmail.com",Phone="123456789"}
    };

    //GET:api/Contacts

    [HttpGet]

    public IActionResult GetContacts(){
        return Ok(_Contacts);
    }


    // GET: api/Contacts/1

    [HttpGet("{id}")]

    public IActionResult GetMedicine(string id){
        var medicine =_Contacts.Find(m=>m.ID==id);
        if(medicine==null){
            return NotFound();
        }
        return Ok(medicine);
    }

    //Adding new medicine
    //POST:api/Contacts
    [HttpPost]

    public IActionResult PostMedicine([FromBody] Contact medicine){
        _Contacts.Add(medicine);
        //you might want to return CreateAtAction or another appropriate response
        return Ok();
    }


    //Updating an existing medicine
    //PUT:api/Contact/1


    [HttpPut("{id}")]

    public IActionResult PutMedicine(string id,[FromBody] Contact medicine){
        var index=_Contacts.FindIndex(m=>m.ID==id);
        if(index<0){
            return NotFound();
        }
        _Contacts[index]=medicine;
        //you might want to return NoContact or another appropriate response
        return Ok();
    }

    //Deleting an existing medicine
    //DELETE:api/Contact/1

    [HttpDelete("{id}")]

    public IActionResult DeleteContact(string id){

        var medicine=_Contacts.Find(m=>m.ID==id);
        if(medicine==null){
            return NotFound();
        }
        _Contacts.Remove(medicine);
    //You might want to return NoCount or another appropriate response
        return Ok();
    }
}
