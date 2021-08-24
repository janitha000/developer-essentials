public void ConfigureServices(IServiceCollection services)
{
    BsonSerializer.RegisterSerializer(new GuidSerializer(BsonType.String));
    BsonSerializer.RegisterSerializer(new DateTimeOffsetSerializer(BsonType.String));
    var mongoDbSettings = Configuration.GetSection(nameof(MongoDbSettings)).Get<MongoDbSettings>();

    services.AddSingleton<IMongoClient>(serviceProvider => 
    {
        return new MongoClient(mongoDbSettings.ConnectionString);
    });

    // services.AddSingleton<IItemRepository, InMemItemRepository>();
    services.AddSingleton<IItemRepository, MongoDbItemRepository>();

    services.AddControllers(options => {
        options.SuppressAsyncSuffixInActionNames = false;
    });
    services.AddSwaggerGen(c =>
    {
        c.SwaggerDoc("v1", new OpenApiInfo { Title = "commands", Version = "v1" });
    });

    services.AddHealthChecks()
                .AddMongoDb(
                    mongoDbSettings.ConnectionString, 
                    name: "mongoDB", 
                    timeout: TimeSpan.FromSeconds(3),
                    tags : new[] {"ready"}
                );

}

public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
{
    if (env.IsDevelopment())
    {
        app.UseDeveloperExceptionPage();
        app.UseSwagger();
        app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "commands v1"));
    }

    if(env.IsDevelopment())
    {
    app.UseHttpsRedirection();

    }

    app.UseRouting();

    app.UseAuthorization();

    app.UseEndpoints(endpoints =>
    {
        endpoints.MapControllers();
        endpoints.MapHealthChecks("/health", new HealthCheckOptions{
            Predicate = (_) => false
        });
        endpoints.MapHealthChecks("/health/ready", new HealthCheckOptions{
            Predicate = (check) => check.Tags.Contains("ready"),
            ResponseWriter = async(context, report) => {
                var result = JsonSerializer.Serialize(
                    new {
                        status = report.Status.ToString(),
                        checks = report.Entries.Select(entry => new {
                            name = entry.Key,
                            status = entry.Value.Status.ToString(),
                            exception = entry.Value.Exception is not null ? entry.Value.Exception.Message : "",
                            duration = entry.Value.Duration
                        })
                    }
                );

                context.Response.ContentType = MediaTypeNames.Application.Json;
                await context.Response.WriteAsync(result);
            }
        });
    });
}

