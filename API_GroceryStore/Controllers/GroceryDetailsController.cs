using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API_GroceryStore.Data;
using Microsoft.AspNetCore.Mvc;

namespace API_GroceryStore.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class GroceryDetailsController:ControllerBase
    {

        private readonly ApplicationDBContext _dbContext;

        public GroceryDetailsController(ApplicationDBContext applicationDBContext){
            _dbContext=applicationDBContext;
        }

        [HttpGet]
        public IActionResult GetGrocery(){
            return Ok(_dbContext.users.ToList());
        }

        [HttpGet("{groceryId}")]
        public IActionResult GetGrocery(int groceryId){
                var g=_dbContext.grocery.FirstOrDefault(m=>m.GroceryID==groceryId);
                if(g==null){
                    return NotFound();
                }
                return Ok(g);
        }


        [HttpPost]
        public IActionResult PostGrocery([FromBody]GroceryDetails g){
            _dbContext.grocery.Add(g);
            _dbContext.SaveChanges();
            return Ok();
        }

        [HttpPut("groceryId")]
        public IActionResult PostGrocery(int groceryId,[FromBody] GroceryDetails g){
            var groceyOld=_dbContext.grocery.FirstOrDefault(m=>m.GroceryID == groceryId);

            if(groceyOld==null){
                return NotFound();
            }
            groceyOld.GroceryID=g.GroceryID;
            groceyOld.ExparyDate=g.ExparyDate;
            groceyOld.ItemPhoto=g.ItemPhoto;
            groceyOld.Price=g.Price;
            groceyOld.PurchaseDate=g.PurchaseDate;
            groceyOld.Quantity=g.Quantity;
            groceyOld.ItemName=g.ItemName;
            _dbContext.SaveChanges();
        
            return Ok();
        }


        [HttpDelete("{groceryId}")]
        public IActionResult DeleteGrocery(int groceryId){
            var g=_dbContext.grocery.FirstOrDefault(m=>m.GroceryID==groceryId);

            if(g==null){
                return NotFound();
            }

            _dbContext.grocery.Remove(g);
            _dbContext.SaveChanges();
            return Ok();
        }
        
    }
}