using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using apiforTypescriptapplication.APIForTypeScriptApplication;
using Microsoft.AspNetCore.Mvc;

namespace apiforTypescriptapplication.Controllers 
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {


        private readonly ApplicationDBContext _dbContext;

        public UsersController(ApplicationDBContext applicationDBContext){
            _dbContext=applicationDBContext;
        }

        [HttpGet]
        public IActionResult GetUser(){
            return Ok(_dbContext.users.ToList());
        }

        [HttpGet("{userId}")]
        public IActionResult GetUser(int userId){
            var user=_dbContext.users.FirstOrDefault(m=> m.UserID==userId);

            if(user==null){
                return NotFound();
            }
            return Ok(user);
        }


        [HttpPost]
        public IActionResult PostUser([FromBody] User user){
               _dbContext.users.Add(user);
                _dbContext.SaveChanges();
                return Ok();
        }


        [HttpPut("{userId}")]
        public IActionResult PostUser(int userId ,[FromBody] User user){
            var userold=_dbContext.users.FirstOrDefault(m=>m.UserID==userId);
            if(userold==null){
                return NotFound();
            }
            userold.EmailID=user.EmailID;
            userold.Password=user.Password;
            userold.ConformPassword=user.ConformPassword;
            userold.PhoneNumber=user.PhoneNumber;
            userold.Balance=user.Balance;
            _dbContext.SaveChanges();
            return Ok();
        }


        [HttpDelete("{userID}")]
        public IActionResult DeleteUser(int userID){
            var userold=_dbContext.users.FirstOrDefault(m=>m.UserID == userID);

            if(userold==null){
                return NotFound();
            }
            _dbContext.users.Remove(userold);
            _dbContext.SaveChanges();
            return Ok();
        }
    }
}