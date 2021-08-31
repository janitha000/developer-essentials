public PersonContext(DbContextOptions<PersonContext> options) : base(options) { }
public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

services.AddDbContext<ApplicationDbContext>(options => options.UseInMemoryDatabase(databaseName: "ToDo"));
services.AddDbContext<PersonContext>(options => options.UseInMemoryDatabase(databaseName: "Person"));
