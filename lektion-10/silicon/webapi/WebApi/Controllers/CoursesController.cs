using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApi.Store;

namespace WebApi.Controllers
{
    [Route("api/courses")]
    [ApiController]
    public class CoursesController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetAllCourses()
        {
            return Ok(AppState.Courses);
        }

        [HttpGet("{id}")]
        public IActionResult GetCourse(string id) 
        {
            var result = AppState.Courses.FirstOrDefault(x => x.Id == id);
            if (result != null)
                return Ok(result);

            return NotFound();
        }
    }
}
