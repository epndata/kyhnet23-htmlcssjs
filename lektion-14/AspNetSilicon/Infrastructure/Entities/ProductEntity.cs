using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Infrastructure.Entities;

public class ProductEntity
{
    [Key]
    public int Id { get; set; }
    public string Title { get; set; } = null!;
    public string? Description { get; set; }
    public string? Manifacturer { get; set; }

    [Column(TypeName = "money")]
    public decimal Price { get; set; }
}
