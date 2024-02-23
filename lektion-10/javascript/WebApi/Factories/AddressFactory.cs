using WebApi.Entities;
using WebApi.Models;

namespace WebApi.Factories;

public class AddressFactory
{
    public static AddressEntity Create(SignUpModel model)
    {
        try
        {
            var addressEntity = new AddressEntity
            {
                StreetName = model.StreetName,
                PostalCode = model.PostalCode,
                City = model.City,
            };

            return addressEntity;
        }
        catch { }
        return null!;
    }
}
