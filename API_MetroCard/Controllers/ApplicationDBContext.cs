using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API_MetroCard.Data;
using Microsoft.EntityFrameworkCore;


namespace API_MetroCard.Controllers.Controllers
{
    public class ApplicationDBContext:DbContext
    {
        public ApplicationDBContext(DbContextOptions<ApplicationDBContext> options) : base(options)
        {
            AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);
        }

        public DbSet<UserDetails> users{get;set;}

        public DbSet<TicketFairDetails> ticketFairs{get;set;}

        public DbSet<TravelHistoryDetails> historys{get;set;}


    }
}