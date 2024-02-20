using AspNetMvc.Models;
using Microsoft.AspNetCore.Mvc;

namespace AspNetMvc.Controllers
{
    public class AuthController : Controller
    {

        [HttpGet]
        public IActionResult SignUp()
        {
            var viewModel = new SignUpViewModel();
            return View(viewModel);
        }

        [HttpPost]
        public IActionResult SignUp(SignUpViewModel viewModel)
        {
            if (!ModelState.IsValid)
            {
                return View(viewModel);
            }

            return RedirectToAction("Index", "Home");
        }
    }
}
