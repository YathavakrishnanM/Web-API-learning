using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using apiforTypescriptapplication.APIForTypeScriptApplication;
using Microsoft.AspNetCore.Mvc;

namespace apiforTypescriptapplication.Controllers
{
    [ApiController]
    [Route("api/[Controller]")]
    public class MedicineInfoController : ControllerBase
    {
        /*public static List<MedicineInfo> _Medicine=new List<MedicineInfo>{
            new MedicineInfo{MedicineId=1,MedicineName="Paracetomol",MedicineCount=5,MedicinePrice=50,MedicineExpary=new DateTime(2024,3,13)},
            new MedicineInfo{MedicineId=2,MedicineName="colpal",MedicineCount=5,MedicinePrice=60,MedicineExpary=new DateTime(2024,3,15)},
            new MedicineInfo{MedicineId=3,MedicineName="Stepsil",MedicineCount=5,MedicinePrice=70,MedicineExpary=new DateTime(2024,3,3)},
            new MedicineInfo{MedicineId=4,MedicineName="Iodex",MedicineCount=5,MedicinePrice=80,MedicineExpary=new DateTime(2024,3,13)},
            new MedicineInfo{MedicineId=5,MedicineName="Acetherol",MedicineCount=5,MedicinePrice=100,MedicineExpary=new DateTime(2024,5,13)},
        };*/

        private readonly ApplicationDBContext _dbContext;

        public MedicineInfoController(ApplicationDBContext applicationDBContext){
            _dbContext=applicationDBContext;
        }

        [HttpGet]
        public IActionResult GetMedicine(){
            return Ok(_dbContext.medicines.ToList());
        }

        [HttpGet("{medicineId}")]
        public IActionResult GetMedicine(int medicineId){
            var medicine=_dbContext.medicines.FirstOrDefault(m=>m.MedicineId==medicineId);

            if(medicine==null){
                return NotFound();
            }

            return Ok(medicine);
        }


        [HttpPost]
        public IActionResult PostMedicine([FromBody] MedicineInfo medicine){
                _dbContext.medicines.Add(medicine);
                _dbContext.SaveChanges();
                return Ok();
        }


        [HttpPost("{medicineId}")]
        public IActionResult PostMedicine(int medicineId,[FromBody] MedicineInfo medicine){
            var medicineold=_dbContext.medicines.FirstOrDefault(m=>m.MedicineId==medicineId);

            if(medicineold==null){
                return NotFound();
            }

           medicineold.MedicineCount=medicine.MedicineCount;
           medicineold.MedicineExpary=medicine.MedicineExpary;
           medicineold.MedicineName=medicine.MedicineName;
           medicineold.MedicinePrice=medicine.MedicinePrice;
            return Ok();
        }

        [HttpDelete("{medicineId}")]
        public IActionResult DeleteMedicine(int medicineId){
                var medicine=_dbContext.medicines.FirstOrDefault(m=>m.MedicineId==medicineId);

                if(medicine==null){
                    return NotFound();
                }
                _dbContext.medicines.Remove(medicine);
                _dbContext.SaveChanges();
                return Ok();
        }

       
    }
}