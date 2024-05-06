using System;

using apiforTypescriptapplication.APIForTypeScriptApplication;
using Microsoft.AspNetCore.Mvc;


namespace apiforTypescriptapplication.Controllers
{
    [ApiController]
    [Route("api/[Controller]")]
    public class OrdersController:ControllerBase
    {
            /*public static List<Orders> _Order=new List<Orders>{
                new Orders{OrderID=1,OrderCount=3,OrderStatus="Ordered",Email="yathav@gmail.com"},
                new Orders{OrderID=2,OrderCount=2,OrderStatus="Ordered",Email="krish@gmail.com"},
            };*/

           private readonly ApplicationDBContext _dbContext;

           public OrdersController(ApplicationDBContext applicationDBContext){
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
            public IActionResult PostOrder([FromBody] Orders order){
               _dbContext.orders.Add(order);
                _dbContext.SaveChanges();
                return Ok();
            }


            [HttpPost("{orderId}")]
            public IActionResult PostOrder(int orderId,[FromBody] Orders order){

                var orderOld=_dbContext.orders.FirstOrDefault(m=>m.OrderID==orderId);

                if(orderOld==null){
                    return NotFound();
                }
                orderOld.Email=order.Email;
                orderOld.OrderCount=order.OrderCount;
                orderOld.OrderStatus=order.OrderStatus;
                _dbContext.SaveChanges();
                return Ok();
            }


            [HttpDelete("{orderId}")]
            public IActionResult DeleteOrder(int orderId){
                var orderold=_dbContext.orders.FirstOrDefault(m=>m.OrderID==orderId);

                if(orderold==null){
                    return NotFound();
                }
                _dbContext.orders.Remove(orderold);
                _dbContext.SaveChanges();
                return Ok();
            }
    }
}