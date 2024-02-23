using WebApi.Contexts;
using WebApi.Entities;

namespace WebApi.Repositories;

public class UserPhoneNumberRepository(DataContext context) : Repo<UserPhoneNumberEntity>(context)
{
    private readonly DataContext _context = context;
}