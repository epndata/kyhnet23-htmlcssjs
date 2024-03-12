using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;

namespace AspNetCore_WebApi.Controllers;

[Route("api/[controller]")]
[ApiController]
public class ContactsController : ControllerBase
{
    [HttpPost]
    public IActionResult HandleContactRequest(UserRequestModel req)
    {
        var userService = new UserService();

        if (ModelState.IsValid)
        {
            var result = userService.CreateUser(req);
            return Ok(result);
        }

        return BadRequest(req);
    }
}

public class UserRequestModel
{
    [MinLength(2)]
    public string FirstName { get; set; } = null!;
    public string LastName { get; set; } = null!;
    public string Email { get; set; } = null!;
    public string Password { get; set; } = null!;
}




public class UserEntity
{
    public int Id { get; set; }
    public string FirstName { get; set; } = null!;
    public string LastName { get; set; } = null!;
    public string Email { get; set; } = null!;
    public string Password { get; set; } = null!;


    public static implicit operator UserEntity(UserRequestModel model)
    {
        return new UserEntity
        {
            FirstName = model.FirstName,
            LastName = model.LastName,
            Email = model.Email,
            Password = model.Password
        };
    }
}

public class UserModel
{
    public int Id { get; set; }
    public string FirstName { get; set; } = null!;
    public string LastName { get; set; } = null!;
    public string Email { get; set; } = null!;

    public static implicit operator UserModel(UserEntity userEntity)
    {
        return new UserModel
        {
            Id = userEntity.Id,
            FirstName = userEntity.FirstName,
            LastName = userEntity.LastName,
            Email = userEntity.Email.ToLower()

        };
    }
}


public class UserService
{
    public UserModel CreateUser(UserEntity userEntity)
    {
        userEntity.Id = 1;

        return userEntity;
    }
}



