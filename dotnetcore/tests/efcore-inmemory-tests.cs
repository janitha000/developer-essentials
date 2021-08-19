using System;
using System.Threading.Tasks;
using efcore.Contexts;
using efcore.Controllers;
using efcore.Entities;
using efcore.Repositories;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Moq;
using Xunit;

namespace efcore.tests
{
    public class StudentControllerTest
    {
        private DbContextOptions<SchoolContext> options;
        private  ILogger<StudentsController> logger;
        private IStudentRepository repository;

        public StudentControllerTest()
        {
            options = new DbContextOptionsBuilder<SchoolContext>().UseInMemoryDatabase(databaseName: "efcore").Options;
            logger = new Mock<ILogger<StudentsController>>().Object;
            repository = new Mock<IStudentRepository>().Object;

            using(var context = new SchoolContext(options))
            {
                context.Database.EnsureDeleted();
                context.Database.EnsureCreated();
                var students = new Student[]
                {
                    new Student { FirstName = "Carson",   LastName = "Alexander",
                        EnrollmentDate = DateTime.Parse("2010-09-01") },
                    new Student { FirstName = "Meredith", LastName = "Alonso",
                        EnrollmentDate = DateTime.Parse("2012-09-01") },
                    new Student { FirstName = "Arturo",   LastName = "Anand",
                        EnrollmentDate = DateTime.Parse("2013-09-01") },
                };

                context.AddRange(students);
                context.SaveChanges();
            }
        }

        [Fact]
        public async Task ShouldReturnStudents()
        {
            using(var context = new SchoolContext(options))
            {
                var StudentsController = new StudentsController(context, repository, logger);

                var students = await StudentsController.GetStudents(null ,null, 1,100);
                var result = students.Result as OkObjectResult;
                var studentResult = result.Value as Student[];

                // Assert.Equal(3, studentResult.Length);              
                Console.WriteLine(studentResult);          
            }
            
        }

        [Fact]
        public async Task ShouldReturnSingleStudent()
        {
            using(var context = new SchoolContext(options))
            {
                var StudentsController = new StudentsController(context, repository, logger);

                var students = await StudentsController.GetStudentByIdAsync(1);
                var result = students.Value;

                Assert.Equal("Carson", result.FirstName);
                Assert.Equal("Alexander", result.LastName);
                Assert.Equal(DateTime.Parse("2010-09-01"), result.EnrollmentDate);
       
            }
        }
    }
}
