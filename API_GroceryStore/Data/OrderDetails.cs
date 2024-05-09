using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace API_GroceryStore.Data
{   [Table("orderDetails",Schema ="public")]
    public class OrderDetails
    {   [Key]
        public int OrderID{get;set;}

        public string? OrderDate{get;set;}

        public string? EmailID{get;set;}

        public string? ItemName{get;set;}

        public double TotalPrice{get;set;}
    }
}