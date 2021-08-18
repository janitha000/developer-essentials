var data = from student in _context.Students
            group student by student.EnrollmentDate into dateGroup
            select new EnrollmentDateGroup()
            {
                EnrollmentDate = dateGroup.Key,
                StudentCount = dateGroup.Count()
            };

var enrollmentDates = await data.AsNoTracking().ToListAsync();


//
public record EnrollmentDateGroup
{
    public DateTime? EnrollmentDate { get; set; }
    public int StudentCount { get; set; }
}