using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace API_MetroCard.Data
{   
    [Table("userDetails",Schema ="public")]
    public class UserDetails
    {   [Key]
        public int CardNumber{get;set;}
        public string? UserName{get;set;}

        public string? PhoneNumber{get;set;}

        public double Balance{get;set;}
    }
}