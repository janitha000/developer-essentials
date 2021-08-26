 public class TodoItemDto
{
    public string Title { get; set; }

    public bool Done { get; set; }

    public DateTime? Completed { get; set; }

    public string description { get; set; }
}

public async Task<ActionResult<IEnumerable<TodoItemDto>>> GetToDoItemsByStatus(bool done)
{
    var todoItems = await _context.TodoItems.Where(i => i.Done == done).Select(item => new TodoItemDto()
    {
        Title = item.Title,
        Completed = item.Completed,
        Done = item.Done,
        description = item.ToString()
    }).ToListAsync();

    return Ok(todoItems);
}