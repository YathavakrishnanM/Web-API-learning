using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API_GroceryStore.Data;
using Microsoft.AspNetCore.Mvc;

namespace API_GroceryStore.Controllers
{   [ApiController]
    [Route("api/[controller]")]
    public class OrderDetailsController:ControllerBase
    {
      
            private readonly ApplicationDBContext _dbContext;

        public OrderDetailsController(ApplicationDBContext applicationDBContext){
            _dbContext=applicationDBContext;
        }

        [HttpGet]
        public IActionResult GetOrder(){
            return Ok(_dbContext.orders.ToList());
        }

        [HttpGet("{orderId}")]
        public IActionResult GetOrder(int orderId){
                var order=_dbContext.orders.FirstOrDefault(m=>m.OrderID==orderId);
                if(order==null){
                    return NotFound();
                }
                return Ok(order);
        }


        [HttpPost]
        public IActionResult PostOrder([FromBody]OrderDetails order){
            _dbContext.orders.Add(order);
            _dbContext.SaveChanges();
            return Ok();
        }

        [HttpPut("orderId")]
        public IActionResult PutOrder(int orderId,[FromBody] OrderDetails order){
            var orderOld=_dbContext.orders.FirstOrDefault(m=>m.OrderID == orderId);

            if(orderOld==null){
                return NotFound();
            }
            orderOld.OrderID=order.OrderID;
            orderOld.EmailID=order.EmailID;
            orderOld.ItemName=order.ItemName;
            orderOld.OrderDate=order.OrderDate;
            orderOld.TotalPrice=order.TotalPrice;
            _dbContext.SaveChanges();
            return Ok();
        }


        [HttpDelete("{orderId}")]
        public IActionResult DeleteOrder(int orderId){
            var order=_dbContext.orders.FirstOrDefault(m=>m.OrderID==orderId);

            if(order==null){
                return NotFound();
            }

            _dbContext.orders.Remove(order);
            _dbContext.SaveChanges();
            return Ok();
        }
    }
}