using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API_LibraryManagement.Data;
using Microsoft.EntityFrameworkCore;

namespace API_LibraryManagement.Controllers
{
    public class ApplicationDBContext:DbContext
    {
        public ApplicationDBContext(DbContextOptions<ApplicationDBContext> options): base(options)
        {
            AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior",true);
        }

        public DbSet<UserDetails> users{get;set;}

        public DbSet<BookDetails> books{get;set;}

        public DbSet<BorrowDetails> borrow{get;set;}
        
    }
}