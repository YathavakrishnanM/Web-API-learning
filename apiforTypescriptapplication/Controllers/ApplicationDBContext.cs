using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;
using apiforTypescriptapplication.APIForTypeScriptApplication;

namespace apiforTypescriptapplication.Controllers
{
    public class ApplicationDBContext:DbContext
    {
        public ApplicationDBContext(DbContextOptions<ApplicationDBContext> options) : base(options)
    {
        AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);
    }
    public DbSet<User> users{get;set;}

    public DbSet<MedicineInfo> medicines{get;set;}

    public DbSet<Orders> orders{get;set;}
    }
}