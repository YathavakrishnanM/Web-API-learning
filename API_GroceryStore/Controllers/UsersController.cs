using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Migrations;
using System.Linq;
using System.Threading.Tasks;
using API_GroceryStore.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API_GroceryStore.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController:ControllerBase
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
                var user=_dbContext.users.FirstOrDefault(m=>m.UserID==userId);
                if(user==null){
                    return NotFound();
                }
                return Ok(user);
        }


        [HttpPost]
        public IActionResult PostUser([FromBody]UserDetails user){
            _dbContext.users.Add(user);
            _dbContext.SaveChanges();
            return Ok();
        }

        [HttpPut("userId")]
        public IActionResult PutUser(int userID,[FromBody] UserDetails user){
            var userOld=_dbContext.users.FirstOrDefault(m=>m.UserID==userID);

            if(userOld== null){
                return NotFound();
            }

            userOld.Address=user.Address;
            userOld.EmailID=user.EmailID;
            userOld.Password=user.Password;
            userOld.PhoneNumber=user.PhoneNumber;
            userOld.UserID=user.UserID;
            userOld.UserName=user.UserName;
            userOld.UserPhoto=user.UserPhoto;
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