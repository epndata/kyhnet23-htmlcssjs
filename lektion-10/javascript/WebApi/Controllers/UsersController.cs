using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApi.Models;
using WebApi.Services;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController(UserService userService) : ControllerBase
    {
        private readonly UserService _userService = userService;

        [HttpPost]
        public async Task<IActionResult> SignUp(SignUpModel model)
        {
            if (!ModelState.IsValid)
                return BadRequest();

            if (await _userService.CheckUserExistsAsync(x => x.Email == model.Email))
                return Conflict("user with the same email already exists");

            var result = await _userService.CreateUserAsync(model);
            
            if (result)
                return Created("", null);

            return BadRequest("something went wrong");
        }
    }
}
