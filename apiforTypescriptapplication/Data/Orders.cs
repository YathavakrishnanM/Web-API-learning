using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace apiforTypescriptapplication.APIForTypeScriptApplication
{
   
    public enum OrderStatus{selec,Ordered,Cancelled}

    [Table("orders", Schema = "public")]
    public class Orders
    {
        [Key]
        public int OrderID{get;set;}

        public string? Email{get;set;}

        public int OrderCount{get;set;}

        public string? OrderStatus{get;set;}
    }
}