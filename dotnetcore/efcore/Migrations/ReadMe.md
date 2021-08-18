dotnet tool install --global dotnet-ef
dotnet ef database drop

dotnet ef migrations add InitialCreate
dotnet ef database update

dotnet ef migrations add MaxLengthOnNames
dotnet ef database update
