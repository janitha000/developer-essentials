public record Weather(string description);
public record Main(decimal temp);
public record Forecast(Weather[] weather, Main main, long dt);

 public async Task<Forecast> GetCurrentWeatherAsync(string city)
{
    var forecast = await httpClient.GetFromJsonAsync<Forecast>($"https://{serviceSettings.OpenWeatherHost}/data/2.5/weather?q={city}&appid={serviceSettings.ApiKey}");
    return forecast;
}