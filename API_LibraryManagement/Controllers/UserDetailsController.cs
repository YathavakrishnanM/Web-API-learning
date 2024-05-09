using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API_LibraryManagement.Data;
using Microsoft.AspNetCore.Mvc;

namespace API_LibraryManagement.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserDetailsController:ControllerBase
    {
        
        private readonly ApplicationDBContext _dbContext;


        public UserDetailsController(ApplicationDBContext applicationDBContext){
            _dbContext=applicationDBContext;
        }

        [HttpGet]
        public IActionResult GetUser(){
            return Ok(_dbContext.users.ToList());
        }

        [HttpGet("{userId}")]
        public IActionResult GetUser(int userId){
            var user=_dbContext.users.FirstOrDefault(m=>m.UserID==userId);
            if(user==null){
                return NotFound();
            }
            return Ok(user);
        }

        [HttpPost]
        public IActionResult PostUser([FromBody] UserDetails user){
            _dbContext.users.Add(user);
            _dbContext.SaveChanges();
            return Ok();
        }

        [HttpPut("{userId}")]
        public IActionResult PostUser(int userId,[FromBody] UserDetails user){
            var userOld=_dbContext.users.FirstOrDefault(m=>m.UserID == userId);

            if(userOld==null){
                return NotFound();
            }

            userOld.UserID=user.UserID;
            userOld.UserName=user.UserName;
            userOld.Department=user.Department;
            userOld.MailID=user.MailID;
            userOld.Gender=user.Gender;
            userOld.MobileNumber=user.MobileNumber;
            userOld.WalletBalance=user.WalletBalance;  
            _dbContext.SaveChanges();     
            return Ok();
        }


        [HttpDelete("{userId}")]
        public IActionResult DeleteUser(int userId){
            var user=_dbContext.users.FirstOrDefault(m=>m.UserID==userId);

            if(user==null){
                return NotFound();
            }

            _dbContext.users.Remove(user);
            _dbContext.SaveChanges();
            return Ok();
        }
    }
}
