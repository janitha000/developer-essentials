// dotnet user-secrets init
// dotnet user-secrets set "DatabaseCredentials:UserId" "UserID"
// dotnet user-secrets set "DatabaseCredentials:Password" $sqlPassword  (Taking from the env variables)

//appsettings.json
{
  "ConnectionStrings": {
     "Database": "Data Source=azsql493042956.database.windows.net;Initial Catalog=ContosoPetsAuth;Connect Timeout=30;Encrypt=True;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False"
  },
  "Logging": {
    "LogLevel": {
      "Default": "Debug",
      "System": "Information",
      "Microsoft": "Information"
    }
  }
}


var builder = new SqlConnectionStringBuilder(
                                Configuration.GetConnectionString("Database"));
IConfiguration DatabaseCredentials = Configuration.GetSection("DatabaseCredentials");

builder.UserID = DatabaseCredentials["UserId"];
builder.Password = DatabaseCredentials["Password"];

services.AddDbContext<ContosoPetsContext>(options =>
                    options.UseSqlServer(builder.ConnectionString));

services.AddDbContext<ContosoPetsContext>(options =>
                    options.UseSqlServer(builder.ConnectionString));