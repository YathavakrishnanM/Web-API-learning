using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace API_GroceryStore.Data
{   [Table("groceryDetails",Schema ="public")]
    public class GroceryDetails
    {   [Key]
        public int GroceryID{get;set;}

        public string? ItemName{get;set;}

        public int Quantity{get;set;}

        public double Price{get;set;}

        public string? PurchaseDate{get;set;}

        public string? ExparyDate{get;set;}

        public string[]? ItemPhoto{get;set;}
    }
}