using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API_GroceryStore.Data;
using Microsoft.EntityFrameworkCore;

namespace API_GroceryStore.Controllers
{
    public class ApplicationDBContext:DbContext
    {
        public ApplicationDBContext(DbContextOptions<ApplicationDBContext> options):base(options){
            AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior",true);
        }

        public DbSet<UserDetails> users{get;set;}


        public  DbSet<OrderDetails> orders{get;set;}

        public DbSet<GroceryDetails> grocery{get;set;}

     
    }
}