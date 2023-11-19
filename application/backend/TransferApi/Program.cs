using Microsoft.Extensions.Configuration;

namespace TransferApi
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello, World!");

            var appConfig = new ConfigurationLibrary.ConfigurationManager();
            IConfiguration configuration = appConfig.Configuration;
        }
    }
}