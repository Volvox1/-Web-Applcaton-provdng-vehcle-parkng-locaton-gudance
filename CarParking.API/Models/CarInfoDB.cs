using System.ComponentModel.DataAnnotations;

namespace CarParking.API.Models
{
    
    public class CarInfoDB
    {
        [Key]
        public int CarId { get; set; }
        public string CarPlate { get; set; }
        public string CarOwner { get; set; }
        public string TypeofCar { get; set; }
        public string DateofJoining {get; set;}
        public string ParkingLotNumber { get; set;}
        public string? Residencetime { get; set;}    


    }
}
