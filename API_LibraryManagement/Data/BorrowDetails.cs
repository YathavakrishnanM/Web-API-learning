using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace API_LibraryManagement.Data
{   [Table("borrowDetails",Schema ="public")]
    public class BorrowDetails
    {
        [Key]
        public int BorrowID{get;set;}

        public int BookID{get;set;}

        public int UserID{get;set;}

        public string? BorrowDate{get;set;}

        public int BorrowBookCount{get;set;}

        public string? Status{get;set;}

        public double PaidFineAmount{get;set;}
    }
}