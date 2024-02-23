namespace WebApi.Entities;

public class UserPhoneNumberEntity
{
    public int UserId { get; set; }
    public UserEntity User { get; set; } = null!;

    public int PhoneNumberTypeId { get; set; }
    public PhoneNumberTypeEntity PhoneNumberType { get; set; } = null!;

    public string PhoneNumber { get; set; } = null!;
}

// 1NF, 2NF, 3NF