var instructors = await _context.Instructors
                    .Include(i => i.OfficeAssignment)
                    .Include(i => i.CourseAssignments)
                        .ThenInclude(c => c.Course)
                            .ThenInclude(c => c.Enrollments)
                                .ThenInclude(e => e.Student)
                    .Include(i => i.CourseAssignments)
                        .ThenInclude(c => c.Course)
                            .ThenInclude(c => c.Department)
                    .AsNoTracking()
                    .OrderBy(i => i.LastName)
                    .ToListAsync();