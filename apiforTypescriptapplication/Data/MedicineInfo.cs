using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace apiforTypescriptapplication.APIForTypeScriptApplication
{
    [Table("medicineInfo", Schema = "public")]
    public class MedicineInfo
    {   [Key]
        public int MedicineId{get;set;}
        public string? MedicineName{get;set;}
        public int MedicineCount{get;set;}
        public int MedicinePrice{get;set;}
        public DateTime MedicineExpary{get;set;}
    }
}