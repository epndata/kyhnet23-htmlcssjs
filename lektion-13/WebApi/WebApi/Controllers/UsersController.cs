using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApi.Models;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private UserModel _user = new UserModel
        {
            Id = 1,
            FirstName = "Hans",
            LastName = "Mattin-Lassei",
            Email = "hans@domain.com"
        };

        [HttpGet]
        [Route("current")]
        public IActionResult GetCurrentUser()
        {
            return Ok(_user);
        }
    }
}
