using CarParking.API.Models;
using Microsoft.EntityFrameworkCore;

namespace CarParking.API.Data
{
    public class DataContext:DbContext
    {
        

        public DataContext(DbContextOptions<DataContext> options):base (options)
        {
            
        }
        
        
       public DbSet<CarInfoDB> CarInfoss { get; set; }
        public DbSet<User> Users { get; set; }
        
        
    }
}
