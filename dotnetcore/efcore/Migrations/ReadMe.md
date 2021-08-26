dotnet tool install --global dotnet-ef
dotnet ef database drop

dotnet ef migrations add InitialCreate
dotnet ef database update

dotnet ef migrations add MaxLengthOnNames
dotnet ef database update


To specify the project and a specific conbtext
 - dotnet ef migrations add InitialCreate --project ../ContosoPets.DataAccess/ContosoPets.DataAccess.csproj --context ContosoPetsContext
 - dotnet ef database update --project ../ContosoPets.DataAccess/ContosoPets.DataAccess.csproj --context ContosoPetsContext

 When there are multiple projects
 - specify project where context is -p
 - specify startup project -s

dotnet ef migrations add AddColumn -p ../Infrastructre -s ../WebApi