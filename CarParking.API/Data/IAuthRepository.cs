using System.Threading.Tasks;
using CarParking.API.Models;


namespace CarParking.API.Data
{
    public interface IAuthRepository
    {
        Task<User> Register(User user, string password);
        Task<User> Login(string username, string password);
        Task<bool> UserExists(string UserName);

    }
}
