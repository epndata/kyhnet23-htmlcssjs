using System.ComponentModel.DataAnnotations;

namespace AspNetMvc.Models;

public class UserRegistrationFormModel
{
    [Required(ErrorMessage = "Du måste ange ett förnamn")]
    public string FirstName { get; set; } = null!;

    [Required(ErrorMessage = "Du måste ange ett efternamn")]
    public string LastName { get; set; } = null!;

    [Required(ErrorMessage = "Du måste ange en epostadress")]
    [EmailAddress]
    public string Email { get; set; } = null!;

    [Required(ErrorMessage = "Du måste ange ett lösenord")]
    [DataType(DataType.Password)]
    public string Password { get; set; } = null!;

    [Required(ErrorMessage = "Du måste bekräfta lösenordet")]
    [DataType(DataType.Password)]
    [Compare(nameof(Password), ErrorMessage = "Lösenorden matchar inte")]
    public string ConfirmPassword { get; set; } = null!;
    public string? PhoneNumber { get; set; }
}
