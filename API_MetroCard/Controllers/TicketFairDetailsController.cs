using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API_MetroCard.Controllers.Controllers;
using API_MetroCard.Data;
using Microsoft.AspNetCore.Mvc;

namespace API_MetroCard.Controllers
{   [ApiController]
    [Route("api/[controller]")]
    public class TicketFairDetailsController:ControllerBase
    {
        
        private readonly ApplicationDBContext _dbContext;

        public TicketFairDetailsController(ApplicationDBContext applicationDBContext){
            _dbContext=applicationDBContext;
        }


        [HttpGet]
        public IActionResult GetFairDetails(){
            return Ok(_dbContext.ticketFairs.ToList());
        }

        [HttpGet("{ticketId}")]
        public IActionResult GetFairDetails(int ticketId){
            var fair=_dbContext.ticketFairs.FirstOrDefault(m=>m.TicketID==ticketId);

            if(fair==null){
                return NotFound();
            }

            return Ok(fair);
        }


        [HttpPost]
        public IActionResult PostFairDetails([FromBody] TicketFairDetails fair){
                _dbContext.ticketFairs.Add(fair);
                _dbContext.SaveChanges();
                return Ok();
        }

        [HttpPut("{ticketId}")]
        public IActionResult  PutFairDetails(int ticketId,[FromBody] TicketFairDetails fair){
            var fairold=_dbContext.ticketFairs.FirstOrDefault(m=>m.TicketID==ticketId);

            if(fairold==null){
                return NotFound();
            }
            fairold.TicketID=fair.TicketID;
            fairold.FromLocation=fair.FromLocation;
            fairold.ToLocation=fairold.ToLocation;
            fairold.Fair=fairold.Fair;
            _dbContext.SaveChanges();
            return Ok();
        }

        [HttpDelete ("{ticketId}")]
        public IActionResult DeleteFairDetails(int ticketId){
            var fairold=_dbContext.ticketFairs.FirstOrDefault(m=>m.TicketID==ticketId);

            if(fairold==null){
                return NotFound();
            }
            _dbContext.ticketFairs.Remove(fairold);
            _dbContext.SaveChanges();
            return Ok();
        }
            
    }
}