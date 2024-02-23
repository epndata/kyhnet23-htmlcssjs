using WebApi.Models;

namespace WebApi.Store;

public static class AppState
{
    private static List<TeacherEntity> Teachers { get; set; } =
    [
        new TeacherEntity { Id = 1, FirstName = "Robert", LastName = "Fox" },
        new TeacherEntity { Id = 2, FirstName = "Jenny", LastName = "Wilson" },
        new TeacherEntity { Id = 3, FirstName = "Marvin", LastName = "McKinney" },
        new TeacherEntity { Id = 4, FirstName = "Albert", LastName = "Flores" },
        new TeacherEntity { Id = 5, FirstName = "Esther", LastName = "Howard" },
        new TeacherEntity { Id = 6, FirstName = "Ralph", LastName = "Edwards" }
    ];


    public static List<CourseModel> Courses { get; set; } =
    [
        new CourseModel {
                CourseImage = "c-1.svg",
                IsBestseller = true,
                CourseTitle = "Fullstack Web Developer Course from Scratch",
                Price = 12.50m,
                Hours = 220,
                LikesInProcent = 0.94m,
                NumberOfLikes = 4200,
                Teachers = [
                    new TeacherEntity { Id = 1, FirstName = "Robert", LastName = "Fox" }
                ],
                CourseDescription = "{\"Course Description\":\"Suspendisse natoque sagittis, consequat turpis. Sed tristique tellus morbi magna. At vel senectus accumsan, arcu mattis id tempor. Tellus sagittis, euismod porttitor sed tortor est id. Feugiat velit velit, tortor ut. Ut libero cursus nibh lorem urna amet tristique leo. Viverra lorem arcu nam nunc at ipsum quam. A proin id sagittis dignissim mauris condimentum ornare. Tempus mauris sed dictum ultrices.\",\"What you'll learn\": [\"Sed lectus donec amet eu turpis interdum.\",\"Nulla at consectetur vitae dignissim porttitor.\",\"Phasellus id vitae dui aliquet mi.\",\"Integer cursus vitae, odio feugiat iaculis aliquet diam, et purus.\",\"In aenean dolor diam tortor orci eu.\"]}",
                CourseProgramDetails = "{\"Program Details\": [{\"id\": 1, \"title\": \"Introduction. Getting started\", \"description\": \"Nulla faucibus mauris pellentesque blandit faucibus non. Sit ut et at suspendisse gravida hendrerit tempus placerat.\"}, {\"id\": 2, \"title\": \"The ultimate HTML developer: advanced HTML\", \"description\": \"Lobortis diam elit id nibh ultrices sed penatibus donec. Nibh iaculis eu sit cras ultricies. Nam eu eget etiam egestas donec scelerisque ut ac enim. Vitae ac nisl, enim nec accumsan vitae est.\"}, {\"id\": 3, \"title\": \"CSS & CSS3: basic\", \"description\": \"Duis euismod enim, facilisis risus tellus pharetra lectus diam neque. Nec ultrices mi faucibus est. Magna ullamcorper potenti elementum ultricies auctor nec volutpat augue.\"}, {\"id\": 4, \"title\": \"JavaScript basics for beginners\", \"description\": \"Morbi porttitor risus imperdiet a, nisl mattis. Amet, faucibus eget in platea vitae, velit, erat eget velit. At lacus ut proin erat.\"}, {\"id\": 5, \"title\": \"Understanding APIs\", \"description\": \"Risus morbi euismod in congue scelerisque fusce pellentesque diam consequat. Nisi mauris nibh sed est morbi amet arcu urna. Malesuada feugiat quisque consectetur elementum diam vitae. Dictumst facilisis odio eu quis maecenas risus odio fames bibendum.\"}, {\"id\": 6, \"title\": \"C# and .NET from beginner to advanced\", \"description\": \"Quis risus quisque diam diam. Voluptat neque eget eu faucibus sed urna fermentum risus. Est, mauris morbi nibh massa.\"}]}"
            },
            new CourseModel {
                CourseImage = "c-2.svg",
                CourseTitle = "HTML, CSS, JavaScript Web Developer",
                Price = 15.99m,
                Hours = 160,
                LikesInProcent = 0.92m,
                NumberOfLikes = 3100,
                Teachers = [
                    new TeacherEntity { Id = 2, FirstName = "Jenny", LastName = "Wilson" },
                    new TeacherEntity { Id = 3, FirstName = "Marvin", LastName = "McKinney" },
                ]
            },
            new CourseModel {
                CourseImage = "c-3.svg",
                CourseTitle = "The Complete Front-End Web Development Course",
                Price = 44.99m,
                DiscountPrice = 9.99m,
                Hours = 100,
                LikesInProcent = 0.98m,
                NumberOfLikes = 2700,
                Teachers = [
                    new TeacherEntity { Id = 4, FirstName = "Albert", LastName = "Flores" },
                ]
            },
            new CourseModel {
                CourseImage = "c-4.svg",
                CourseTitle = "iOS & Swift - The Complete iOS App Development Course",
                Price = 15.99m,
                Hours = 160,
                LikesInProcent = 0.92m,
                NumberOfLikes = 3100,
                Teachers = [
                    new TeacherEntity { Id = 3, FirstName = "Marvin", LastName = "McKinney" },
                ]
            },
            new CourseModel {
                CourseImage = "c-5.svg",
                IsBestseller = true,
                CourseTitle = "Data Science & Machine Learning with Python",
                Price = 11.20m,
                Hours = 160,
                LikesInProcent = 0.92m,
                NumberOfLikes = 3100,
                Teachers = [
                    new TeacherEntity { Id = 5, FirstName = "Esther", LastName = "Howard" },
                ]
            },
            new CourseModel {
                CourseImage = "c-6.svg",
                CourseTitle = "Creative CSS Drawing Course: Make Art With CSS",
                Price = 10.50m,
                Hours = 220,
                LikesInProcent = 0.94m,
                NumberOfLikes = 4200,
                Teachers = [
                    new TeacherEntity { Id = 1, FirstName = "Robert", LastName = "Fox" },
                ]
            },
            new CourseModel {
                CourseImage = "c-7.svg",
                CourseTitle = "Blender Character Creator v2.0 for Video Games Design",
                Price = 18.99m,
                Hours = 160,
                LikesInProcent = 0.92m,
                NumberOfLikes = 3100,
                Teachers = [
                    new TeacherEntity { Id = 6, FirstName = "Ralph", LastName = "Edwards" }
                ]
            },
            new CourseModel {
                CourseImage = "c-8.svg",
                CourseTitle = "The Ultimate Guide to 2D Mobile Game Development with Unity",
                Price = 44.99m,
                DiscountPrice = 12.99m,
                Hours = 100,
                LikesInProcent = 0.98m,
                NumberOfLikes = 2700,
                Teachers = [
                    new TeacherEntity { Id = 4, FirstName = "Albert", LastName = "Flores" },
                ]
            },
            new CourseModel {
                CourseImage = "c-9.svg",
                CourseTitle = "Learn JMETER from Scratch on Live Apps-Performance Testing",
                Price = 14.50m,
                Hours = 160,
                LikesInProcent = 0.92m,
                NumberOfLikes = 3100,
                Teachers = [
                new TeacherEntity { Id = 2, FirstName = "Jenny", LastName = "Wilson" },
                ]
            },
        ];

}
