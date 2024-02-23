using WebApi.Contexts;
using WebApi.Entities;

namespace WebApi.Repositories;

public class AddressRepository(DataContext context) : Repo<AddressEntity>(context)
{
    private readonly DataContext _context = context;
}
