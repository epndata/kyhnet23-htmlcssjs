using Infrastructure.Entities;
using Infrastructure.Services;
using Microsoft.AspNetCore.Mvc;

namespace WebApp.Controllers;

public class ProductsController(ProductService productService) : Controller
{
    private readonly ProductService _productService = productService;

    public async Task<IActionResult> Index()
    {
        var products = await _productService.GetAllProductsAsync();
        return View(products);
    }

    public IActionResult Create()
    {
        return View();
    }

    [HttpPost]
    public async Task<IActionResult> Create(ProductEntity entity)
    {
        if (ModelState.IsValid)
        {
            var result = await _productService.CreateProductAsync(entity);
            if (result)
            {
                return RedirectToAction("Index");
            }
        }

        return View();
    }
}
