 public class TodoItemDto
{
    public string Title { get; set; }

    public bool Done { get; set; }

    public DateTime? Completed { get; set; }

    public string description { get; set; }
}

public  class TodoItemCategoryDto
{
    public string Name { get; set; }
}

public async Task<ActionResult<IEnumerable<TodoItemDto>>> GetToDoItemsByStatus(bool done)
{
     var todoItems = await _context.TodoItems
                                .Include(i => i.TodoCategory)
                                .Where(i => i.Done == done)
                                .AsNoTracking()
                                .Select(item => new TodoItemDto()
                                {
                                    Title = item.Title,
                                    Completed = item.Completed,
                                    Done = item.Done,
                                    description = item.ToString(),
                                    TodoItemCategoryDto = new TodoItemCategoryDto()
                                    {
                                        Name = item.TodoCategory.Name
                                    }
                                    
                                }).ToListAsync();

    return Ok(todoItems);
}