public class NumbersToAdd
{
    public int A { get; set; }
    public int B { get; set; }
}

var numbers = new NumbersToAdd(){ A=2, B=6 }
_logger.LogInformatiion("Adding numbers : {@Numbers}", numbers)

//Seq.Extensions.Logging

//Startup.cs
services.AddLogging(loggingBuilder => {loggingBuilder.AddSeq(); })


//DB logging
services.AddDbContext<ApplicationDbContext>(options =>
                    options.UseSqlServer(
                        configuration.GetConnectionString("DefaultConnection")
                    ).LogTo(Console.WriteLine, LogLevel.Information);