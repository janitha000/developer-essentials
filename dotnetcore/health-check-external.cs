namespace MicroDotNet
{
    public class ExternalEndpointHealthCheck : IHealthCheck
    {
        private readonly ServiceSettings settings;

        public ExternalEndpointHealthCheck(IOptions<ServiceSettings> settings)
        {
            this.settings = settings.Value;
        }

        public async Task<HealthCheckResult> CheckHealthAsync(HealthCheckContext context, CancellationToken cancellationToken = default)
        {
            Ping ping = new();
            var reply = await ping.SendPingAsync(settings.OpenWeatherHost);

            if(reply.Status != IPStatus.Success)
            {
                return HealthCheckResult.Unhealthy();
            }

            return HealthCheckResult.Healthy();
        }
    }
}

public void ConfigureServices(IServiceCollection services)
{
    services.Configure<ServiceSettings>(Configuration.GetSection(nameof(ServiceSettings)));
    
    services.AddHttpClient<WeatherClient>()
        .AddTransientHttpErrorPolicy(builder => builder.WaitAndRetryAsync(5, restryAttempt => TimeSpan.FromSeconds(Math.Pow(2, restryAttempt))))
        .AddTransientHttpErrorPolicy(builder => builder.CircuitBreakerAsync(3, TimeSpan.FromSeconds(10)));

    services.AddHealthChecks()
        .AddCheck<ExternalEndpointHealthCheck>("OpenWeather");
}

public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
{

    app.UseAuthorization();

    app.UseEndpoints(endpoints =>
    {
        endpoints.MapControllers();
        endpoints.MapHealthChecks("health");
    });
}