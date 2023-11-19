using Microsoft.Extensions.Configuration;

namespace ConfigurationLibrary
{
    public class ConfigurationManager
    {
        private readonly IConfiguration _configuration;

        public ConfigurationManager()
        {
            // Determine the environment
            string environment = Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT") ?? "Production";

            // Build configuration
            _configuration = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .AddJsonFile($"appsettings.{environment}.json", optional: true, reloadOnChange: true)
                .AddEnvironmentVariables()
                .Build();
        }

        public IConfiguration Configuration => _configuration;
    }
}
