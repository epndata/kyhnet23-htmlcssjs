using Infrastructure.Entities;
using Infrastructure.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace WebApp.Controllers;

public class UsersController(UserRepository userRepository) : Controller
{
    private readonly UserRepository _userRepository = userRepository;

    public async Task<IActionResult> Index()
    {
        var users = await _userRepository.GetAllAsync();
        return View(users);
    }


    public IActionResult Create()
    {
        return View();
    }

    [HttpPost]
    public async Task<IActionResult> Create(UserEntity userEntity)
    {
        if (ModelState.IsValid)
        {
            var result = await _userRepository.CreateOneAsync(userEntity);
            if (result != null)
            {
                return RedirectToAction("Index", "Users");
            }
        }

        return View(userEntity);
    }
}
