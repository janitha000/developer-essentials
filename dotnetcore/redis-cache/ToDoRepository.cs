
public class TodoRepository : ITodoRepository
{
    private readonly IApplicationDbContext _context;
    private readonly IDistributedCache _cache;
    private readonly ILogger<TodoRepository> _logger;

    public TodoRepository(IApplicationDbContext context,  IDistributedCache cache, ILogger<TodoRepository> logger)
    {
        _context = context;
        _cache = cache;
        _logger = logger;
    }
    
    public async Task<TodoItem> GetTodoItem(long id)
    {
        string recordId = id.ToString();
        var todoItem = await _cache.GetRecordAsync<TodoItem>(recordId);
        if(todoItem is null)
        {
            _logger.LogInformation($"todoItem with key ${recordId} is not availble in the cache");
            todoItem = await _context.TodoItems.FindAsync(id);
            await _cache.SetRecordAsync(recordId, todoItem, TimeSpan.FromMinutes(60));
        }
        else
        {
            _logger.LogInformation($"todoItem with key ${recordId} is not taken from cache");
        }

        return todoItem;
    }
}
