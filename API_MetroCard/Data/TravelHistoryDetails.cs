using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.Core.Objects.DataClasses;
using System.Linq;
using System.Threading.Tasks;

namespace API_MetroCard.Data
{   [Table("travelHistoryDetails",Schema ="public")]
    public class TravelHistoryDetails
    {   
        [Key]
        public int TravelID{get;set;}

        public int CardNumber{get;set;}

        public string? FromLocation{get;set;}

        public string? ToLocation{get;set;}

        public DateTime Date{get;set;}

        public double TravelCost{get;set;} 
    }
}