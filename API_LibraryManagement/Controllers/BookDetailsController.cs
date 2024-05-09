using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API_LibraryManagement.Data;
using Microsoft.AspNetCore.Mvc;

namespace API_LibraryManagement.Controllers
{   [ApiController]
    [Route("api/[controller]")]
    public class BookDetailsController:ControllerBase
    {
        private readonly ApplicationDBContext _dbContext;


        public BookDetailsController(ApplicationDBContext applicationDBContext){
            _dbContext=applicationDBContext;
        }

        [HttpGet]
        public IActionResult GetBooks(){
            return Ok(_dbContext.books.ToList());
        }

        [HttpGet("{bookId}")]
        public IActionResult GetBook(int bookId){
            var book=_dbContext.books.FirstOrDefault(m=>m.BookID==bookId);
            if(book==null){
                return NotFound();
            }
            return Ok(book);
        }

        [HttpPost]
        public IActionResult PostBook([FromBody] BookDetails book){
            _dbContext.books.Add(book);
            _dbContext.SaveChanges();
            return Ok();
        }

        [HttpPut("{bookId}")]
        public IActionResult PostBook(int bookId,[FromBody] BookDetails book){
            var bookOld=_dbContext.books.FirstOrDefault(m=>m.BookID == bookId);

            if(bookOld==null){
                return NotFound();
            }

            bookOld.BookID=book.BookID;
            bookOld.BookName=book.BookName;
            bookOld.AuthorName=book.AuthorName;
            bookOld.BookCount=book.BookCount;
            _dbContext.SaveChanges();
            return Ok();
        }


        [HttpDelete("{bookId}")]
        public IActionResult DeleteBook(int bookId){
            var book=_dbContext.books.FirstOrDefault(m=>m.BookID==bookId);

            if(book==null){
                return NotFound();
            }

            _dbContext.books.Remove(book);
            _dbContext.SaveChanges();
            return Ok();
        }
    }
}