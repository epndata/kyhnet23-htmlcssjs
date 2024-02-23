using WebApi.Repositories;

namespace WebApi.Services;

public class UserService(UserRepository userRepository, AddressRepository addressRepository)
{
    private readonly UserRepository _userRepository = userRepository;
    private readonly AddressRepository _addressRepository = addressRepository;

    public async Task CreateUserAsync()
    {
        try
        {
            // kolla om användaren existerar
            var exists = await _userRepository.ExistsAsync(x => x.Email == )

            // kolla om adressen existerar om inte skapa

            // skapa användaren


        }
        catch { }
    }
}
