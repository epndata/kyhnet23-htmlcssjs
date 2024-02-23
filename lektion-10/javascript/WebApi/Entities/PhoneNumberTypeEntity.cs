using System.ComponentModel.DataAnnotations;

namespace WebApi.Entities;

public class PhoneNumberTypeEntity
{
    [Key]
    public int Id { get; set; }
    public string TypeName { get; set; } = null!;

    public ICollection<UserPhoneNumberEntity> PhoneNumbers { get; set; } = [];
}

// 1NF, 2NF, 3NF