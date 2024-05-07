using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API_MetroCard.Controllers.Controllers;
using API_MetroCard.Data;
using Microsoft.AspNetCore.Mvc;


namespace API_MetroCard.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserDetailsController : ControllerBase
    {
        private readonly ApplicationDBContext _dbContext;

        public UserDetailsController(ApplicationDBContext applicationDBContext){
                _dbContext=applicationDBContext;
        }

        
        [HttpGet]
        public IActionResult GetUserDetails(){
            return Ok(_dbContext.users.ToList());
        }

        [HttpGet("{cardNumber}")]
        public IActionResult GetUserDetails(int cardNumber){
            var user=_dbContext.users.FirstOrDefault(m=>m.CardNumber==cardNumber);
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

        [HttpPut("{cardNumber}")]
        public IActionResult PutUser(int cardNumber,[FromBody] UserDetails user){
            var userOld=_dbContext.users.FirstOrDefault(m=>m.CardNumber==cardNumber);

            if(userOld==null){
                return NotFound();
            }

            userOld.CardNumber=user.CardNumber;
            userOld.UserName=user.UserName;
            userOld.PhoneNumber=user.PhoneNumber;
            userOld.Balance=user.Balance;
            _dbContext.SaveChanges();
            return Ok();
        }

        [HttpDelete("cardNumber")]
        public IActionResult DeleteUser(int cardNumber){
            var userOld=_dbContext.users.FirstOrDefault(m=>m.CardNumber==cardNumber);

            if(userOld==null){
                return NotFound();
            }

            _dbContext.users.Remove(userOld);
            _dbContext.SaveChanges();
            return Ok();
        }
        
    }
}