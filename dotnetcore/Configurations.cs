appsettings.json
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft": "Warning",
      "Microsoft.Hosting.Lifetime": "Information"
    }
  },
  "BaseUrl": {
    "Type": "https",
    "Url": "localhost:5001",
    "Path": "api"
  }
}

public class BaseConfiguration
{
    public string Type { get; set; }
    public string Url { get; set; }
    public string Path { get; set; }
}

public WeatherForecastController( IOptions<BaseConfiguration> options)
        {
            Options = options;
        }

var settings = Options.Value;

//set env variable | windows
set BaseUrl__Type = Http