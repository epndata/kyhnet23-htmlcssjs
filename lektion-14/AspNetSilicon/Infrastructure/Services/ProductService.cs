using Infrastructure.Entities;
using Infrastructure.Repositories;
using System.Diagnostics;

namespace Infrastructure.Services;

public class ProductService(ProductRepository productRepository)
{
    private readonly ProductRepository _productRepository = productRepository;


    public async Task<bool> CreateProductAsync(ProductEntity productEntity)
    {
        try
        {
            var result = await _productRepository.GetOneAsync(x => x.Title == productEntity.Title);
            if (result == null)
            {
                result = await _productRepository.CreateOneAsync(productEntity);
                if (result != null)
                    return true;
            }

        }
        catch (Exception ex) { Debug.WriteLine("ERROR: " + ex.Message); }
        return false;

    }

    public async Task<IEnumerable<ProductEntity>> GetAllProductsAsync() 
    {
        try
        {
            var result = await _productRepository.GetAllAsync();
            return result!;
        }
        catch (Exception ex) { Debug.WriteLine("ERROR: " + ex.Message); }
        return null!;
    }
}
