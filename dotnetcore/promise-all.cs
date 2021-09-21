var taskList = new[]
{
  SomeTask(),
  AnotherTask()
};

var completedTasks = await Task.WhenAll(taskList);

// then access them like you would any array
var someTask = completedTasks[0];
var anotherTask = completedTasks[1];