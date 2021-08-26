// /FluentValidation.AspNetCore

 services.AddControllers().AddFluentValidation(f => f.RegisterValidatorsFromAssemblyContaining<Startup>());

public class TodoItemValidator : AbstractValidator<TodoItem>
{
    private readonly ApplicationDbContext _context;
    public TodoItemValidator(ApplicationDbContext context)
    {
        _context = context;

        RuleFor(v => v.Title)
            .MaximumLength(250)
            .NotEmpty()
            .MustAsync(BeUniqueTitle)
            .WithMessage("Title must be uinique");

        //RuleFor(v => v.Completed)
        //    .Must(HaveCompletedDateWhenDoneIsTrue)
        //    .WithMessage("Please specify the date/time this item was done!");

        RuleFor(v => v.Completed)
            .NotNull()
            .When(v => v.Done);
    }

    public async Task<bool> BeUniqueTitle(TodoItem item, string title, CancellationToken cancellationTolem)
    {
        return await _context.TodoItems.Where(i => i.Id != item.Id).AllAsync(i => i.Title != title);
    }

    public bool HaveCompletedDateWhenDoneIsTrue(TodoItem item, DateTime? completed)
    {
        return !item.Done || item.Completed.HasValue;
    }
}