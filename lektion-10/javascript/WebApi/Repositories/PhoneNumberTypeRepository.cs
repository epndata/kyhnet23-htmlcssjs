using WebApi.Contexts;
using WebApi.Entities;

namespace WebApi.Repositories;

public class PhoneNumberTypeRepository(DataContext context) : Repo<PhoneNumberTypeEntity>(context)
{
    private readonly DataContext _context = context;
}
