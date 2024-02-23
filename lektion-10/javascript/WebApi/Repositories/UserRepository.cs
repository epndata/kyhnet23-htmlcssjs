using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;
using WebApi.Contexts;
using WebApi.Entities;

namespace WebApi.Repositories;

public class UserRepository(DataContext context) : Repo<UserEntity>(context)
{
    private readonly DataContext _context = context;

    public override async Task<UserEntity> GetAsync(Expression<Func<UserEntity, bool>> predicate)
    {
        try
        {
            var result = await _context.Users
                .Include(i => i.Address)
                .Include(i => i.PhoneNumbers)
                .FirstOrDefaultAsync(predicate);
            return result!;
        }
        catch { }
        return null!;
    }

    public override async Task<IEnumerable<UserEntity>> GetAsync()
    {
        try
        {
            var result = await _context.Users
                .Include(i => i.Address)
                .Include(i => i.PhoneNumbers)
                .ToListAsync();
            return result!;
        }
        catch { }
        return null!;
    }
}
