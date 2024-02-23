using Microsoft.EntityFrameworkCore;
using WebApi.Entities;

namespace WebApi.Contexts;

public class DataContext(DbContextOptions<DataContext> options) : DbContext(options)
{
    public DbSet<AddressEntity> Addresses { get; set; }
    public DbSet<PhoneNumberTypeEntity> PhoneNumberTypes { get; set; }
    public DbSet<UserEntity> Users { get; set; }
    public DbSet<UserPhoneNumberEntity> UsersPhoneNumbers { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder
            .Entity<UserPhoneNumberEntity>()
            .HasKey(x => new { x.UserId, x.PhoneNumberTypeId, x.PhoneNumber });
    }
}
