namespace WebApi.Models;

public class CourseModel
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public decimal LikesInProcent {  get; set; }
    public decimal NumberOfLikes { get; set; }
    public int Hours { get; set; } 
    public decimal Price { get; set; }
    public decimal DiscountPrice { get; set; }
    public bool IsBestseller { get; set; }
    public bool IsDigital { get; set; }

    public string CourseImage { get; set; } = null!;
    public string CourseTitle { get; set; } = null!;
    public string CourseIngress { get; set; } = null!;
    public string CourseDescription { get; set; } = null!;
    public string CourseProgramDetails { get; set; } = null!;
    public string CourseIncludes { get; set; } = null!;

    public ICollection<TeacherEntity> Teachers { get; set; } = new List<TeacherEntity>();

}

public class TeacherEntity
{
    public int Id { get; set; }
    public string FirstName { get; set; } = null!;
    public string LastName { get; set; } = null!;
    public string? ProfileImage { get; set; }
}