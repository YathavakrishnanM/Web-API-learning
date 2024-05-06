using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace apiforTypescriptapplication.APIForTypeScriptApplication
{
    [Table("users", Schema = "public")]
    public class User
    {   [Key]
        public int UserID{get;set;}
        public string? Email{get;set;}

        public string? Password{get;set;}

        public string? ConformPassword{get;set;}

        public string? PhoneNumber{get;set;}

        public double Balance{get;set;}
    }
}