    public static class ToDoContextFactory
    {
        public static ToDoContext create()
        {
            var options = new DbContextOptionsBuilder<ToDoContext>().UseInMemoryDatabase(databaseName: Guid.NewGuid().ToString()).Options;
            var context = new ToDoContext(options);

            Seed(context);

            return context;
        }

        private static void Seed(ToDoContext context)
        {
            context.Database.EnsureCreated();
            context.ToDoItems.AddRange(
                new ToDoItem() { Id = 1, Description = "test todo 1", IsCompleted = false },
                new ToDoItem() { Id = 2, Description = "test todo 2", IsCompleted = true },
                new ToDoItem() { Id = 3, Description = "test todo 3", IsCompleted = false }
                );

            context.SaveChanges();
        }
    
        public static void Destroy(ToDoContext context)
        {
            context.Database.EnsureDeleted();
            context.Dispose();
        }
    }

    public class TestBase : IDisposable
    {
        public ToDoContext Context { get; set; }
        public TestBase()
        {
            Context = ToDoContextFactory.create();
        }

        public void Dispose()
        {
            ToDoContextFactory.Destroy(Context);
        }

        [CollectionDefinition("ReadTests")]
        public class QueryCollection : ICollectionFixture<TestBase> { }
    }


//Test class
private readonly TestBase _testBase;

public ToDoServiceTests(TestBase testbase)
{
    _testBase = testbase;
}

[Fact]
public async Task ShouldReturnAllToDoItems()
{
    var service = new ToDoService(_testBase.Context);
    var result = await service.GetAll();

    result.ShouldNotBeEmpty();
    result.Count().ShouldBe(3);
}