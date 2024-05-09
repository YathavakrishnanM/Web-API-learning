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
    public class BorrowDetailsController:ControllerBase
    {
        private readonly ApplicationDBContext _dbContext;


        public BorrowDetailsController(ApplicationDBContext applicationDBContext){
            _dbContext=applicationDBContext;
        }

        [HttpGet]
        public IActionResult GetBorrowDetail(){
            return Ok(_dbContext.borrows.ToList());
        }

        [HttpGet("{borrowId}")]
        public IActionResult GetBorrowDetail(int borrowId){
            var borrow=_dbContext.borrows.FirstOrDefault(m=>m.BorrowID==borrowId);
            if(borrow==null){
                return NotFound();
            }
            return Ok(borrow);
        }

        [HttpPost]
        public IActionResult PostBorrowDetail([FromBody]BorrowDetails borrow){
            _dbContext.borrows.Add(borrow);
            _dbContext.SaveChanges();
            return Ok();
        }

        [HttpPut("{borrowId}")]
        public IActionResult PostBorrowDetail(int borrowId,[FromBody]BorrowDetails borrow){
            var borrowOld=_dbContext.borrows.FirstOrDefault(m=>m.BorrowID == borrowId);

            if(borrowOld==null){
                return NotFound();
            }

            borrowOld.BorrowID=borrow.BorrowID;
            borrowOld.BookID=borrow.BookID;
            borrowOld.BorrowDate=borrow.BorrowDate;
            borrowOld.BorrowBookCount=borrow.BorrowBookCount;
            borrowOld.PaidFineAmount=borrow.PaidFineAmount;
            borrowOld.UserID=borrow.UserID;
            borrowOld.Status=borrow.Status;      
            _dbContext.SaveChanges(); 
            return Ok();
        }


        [HttpDelete("{borrowId}")]
        public IActionResult DeleteBorrowDetail(int borrowId){
            var borrow=_dbContext.borrows.FirstOrDefault(m=>m.BorrowID==borrowId);

            if(borrow==null){
                return NotFound();
            }

            _dbContext.borrows.Remove(borrow);
            _dbContext.SaveChanges();
            return Ok();
        }
    }
}