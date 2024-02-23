using WebApi.Entities;
using WebApi.Models;

namespace WebApi.Factories;

public class UserFactory
{
    public static UserEntity Create(SignUpModel model)
    {
        try
        {
            var userEntity = new UserEntity
            {
                FirstName = model.FirstName,
                LastName = model.LastName,
                Email = model.Email,
                Password = model.Password,
            };

            return userEntity;
        }
        catch { }
        return null!;
    }
}
