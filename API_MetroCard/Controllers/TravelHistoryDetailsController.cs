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
    public class TravelHistoryDetailsController:ControllerBase
    {
        
        private readonly ApplicationDBContext _dbContext;

        public TravelHistoryDetailsController(ApplicationDBContext applicationDBContext){
            _dbContext=applicationDBContext;
        }

        [HttpGet]
        public IActionResult GetTravelDetails(){
            return Ok(_dbContext.historys.ToList());
        }

        [HttpGet("{travelId}")]
        public IActionResult GetTravelDetails(int travelId){
            var travel=_dbContext.historys.FirstOrDefault(m=>m.TravelID==travelId);

            if(travel==null){
                return NotFound();
            }
            return Ok(travel);
        }


        [HttpPost]
        public IActionResult PostTravelDetails([FromBody] TravelHistoryDetails travel){
            _dbContext.historys.Add(travel);
            _dbContext.SaveChanges();
            return Ok();
        }
 
    }
}