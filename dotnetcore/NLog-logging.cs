//NLog.config
<?xml version="1.0" encoding="utf-8" ?>
<nlog xmlns="http://www.nlog-project.org/schemas/NLog.xsd"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.nlog-project.org/schemas/NLog.xsd NLog.xsd"
      autoReload="true">
	<targets>
		<target xsi:type="File" name="fileTarget" fileName="${basedir}/logs/${shortdate}.log" layout="${longdate} ${uppercase:${level}} ${message}" />
		<target xsi:type="ColoredConsole" name="consoleTarget"  layout="${longdate} ${uppercase:${level}} ${message}" />
	</targets>
	<rules>
		<logger name="*" minlevel="Trace" writeTo="consoleTarget" />
		<logger name="Microsoft.*" maxlevel="Info" final="true" />
		<logger name="*" minlevel="Trace" writeTo="fileTarget" />
	</rules>
</nlog>

//Program.cs
public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                })
                .ConfigureLogging(logging =>
                {
                    logging.ClearProviders();
                    logging.SetMinimumLevel(LogLevel.Trace);
                })
                .UseNLog();

//Controller
private readonly ILogger<WeatherForecastController> _logger;


public WeatherForecastController(ILogger<WeatherForecastController> logger)
{
    _logger = logger;
}

_logger.LogInformation("WeatherForcast GET request called");