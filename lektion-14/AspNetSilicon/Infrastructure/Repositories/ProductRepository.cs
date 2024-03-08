using Infrastructure.Contexts;
using Infrastructure.Entities;

namespace Infrastructure.Repositories;

public class ProductRepository(DataContext context) : Repo<ProductEntity>(context)
{
    private readonly DataContext _context = context;
}
