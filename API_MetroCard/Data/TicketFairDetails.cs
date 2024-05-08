using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace API_MetroCard.Data
{
    [Table("ticketFairDetails",Schema ="public")]
    public class TicketFairDetails
    {   [Key]
        public int TicketID{get;set;}

        public string? FromLocation{get;set;}

        public string? ToLocation{get;set;}

        public double Fair{get;set;}
    }
}