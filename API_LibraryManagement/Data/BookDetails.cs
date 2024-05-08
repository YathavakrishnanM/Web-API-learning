using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace API_LibraryManagement.Data
{   [Table("bookDetails",Schema ="public")]
    public class BookDetails
    {   [Key]
        public int BookID{get;set;}

        public string? BookName{get;set;}

        public string? AuthorName{get;set;}

        public int BookCount{get;set;}
    }
}