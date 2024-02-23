using System.Linq.Expressions;
using WebApi.Entities;
using WebApi.Factories;
using WebApi.Models;
using WebApi.Repositories;

namespace WebApi.Services;

public class UserService(UserRepository userRepository, AddressRepository addressRepository)
{
    private readonly UserRepository _userRepository = userRepository;
    private readonly AddressRepository _addressRepository = addressRepository;


    public async Task<bool> CheckUserExistsAsync(Expression<Func<UserEntity, bool>> predicate)
    {
        try
        {
            return await _userRepository.ExistsAsync(predicate);
        }
        catch { }
        return false;
    }


    public async Task<bool> CreateUserAsync(SignUpModel model)
    {
        try
        {
            // kolla om användaren existerar
            if (!await CheckUserExistsAsync(x => x.Email == model.Email))
            {                
                // kolla om adressen existerar om inte skapa
                var addressEntity = await _addressRepository.GetAsync(x => x.StreetName == model.StreetName && x.PostalCode == model.PostalCode && x.City == model.City);
                addressEntity ??= await _addressRepository.CreateAsync(AddressFactory.Create(model));

                // skapa användaren
                if (addressEntity != null)
                {
                    var userEntity = UserFactory.Create(model);
                    userEntity.AddressId = addressEntity.Id;

                    userEntity = await _userRepository.CreateAsync(userEntity);
                    if (userEntity != null || userEntity!.Id != 0)
                        return true;
                }
            }
        }
        catch { }
        return false;
    }
}
