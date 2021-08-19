var instructors = await _context.Instructors.ToListAsync();

var instructor = instructors.Where(i => i.ID == id).Single();
await _context.Entry(instructor).Collection(x => x.CourseAssignments).LoadAsync();
foreach(CourseAssignment assignment in instructor.CourseAssignments)
{
    await _context.Entry(assignment).Reference(c => c.Course).LoadAsync();
}

var courses = instructor.CourseAssignments.Select(c => c.Course);