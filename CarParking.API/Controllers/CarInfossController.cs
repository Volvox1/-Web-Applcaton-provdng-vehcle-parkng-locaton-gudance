using Microsoft.AspNetCore.Mvc;
using CarParking.API.Data;
using Microsoft.EntityFrameworkCore;
using CarParking.API.Models;

namespace CarParking.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CarInfossController : Controller
    {
        private readonly DataContext _dataContext;

        public CarInfossController(DataContext dataContext)
        {
            _dataContext = dataContext;
        }
        [HttpGet]
        
        public async Task<IActionResult> GetAllCarInfoss()
        {
          var CarInfoss= await _dataContext.CarInfoss.ToListAsync();
            return Ok(CarInfoss);
        }

        [HttpPost]
        public async Task<IActionResult> AddCarInfoss([FromBody] CarInfoDB CarInfoRequest )
        { 
            await _dataContext.CarInfoss.AddAsync(CarInfoRequest);
            await _dataContext.SaveChangesAsync();
            return Ok(CarInfoRequest);

        }

        [HttpGet]
        [Route("{carId:int}")]
        public async Task<IActionResult> GetCarInfo([FromRoute] int carId)
        {
            var Car = await _dataContext.CarInfoss.FirstOrDefaultAsync(x => x.CarId == carId);
            if(Car==null)
            {
                return NotFound();
            }
            return Ok(Car);
        }

        [HttpPut]
        [Route("{carId:int}")]
        public async Task<IActionResult> UpdateCarInfo([FromRoute] int carId,CarInfoDB updateCarInfoRequest)
        {
            var Car = await _dataContext.CarInfoss.FindAsync(carId);
            if (Car == null)
            {
                return NotFound();
            }
            Car.CarPlate = updateCarInfoRequest.CarPlate;
            Car.CarOwner = updateCarInfoRequest.CarOwner;
            Car.TypeofCar = updateCarInfoRequest.TypeofCar;
            Car.DateofJoining = updateCarInfoRequest.DateofJoining;
            Car.Residencetime = updateCarInfoRequest.Residencetime;
            await _dataContext.SaveChangesAsync();
            return Ok(Car);

        }
        [HttpDelete]
        [Route("{carId:int}")]
        public async Task<IActionResult> DeleteCarInfo([FromRoute] int carId)
        {
            var Car = await _dataContext.CarInfoss.FindAsync(carId);
            if (Car == null)
            {
                    return NotFound();
            }
            _dataContext.CarInfoss.Remove(Car);
            await _dataContext.SaveChangesAsync();
            return Ok(Car);
        }

    }
}
