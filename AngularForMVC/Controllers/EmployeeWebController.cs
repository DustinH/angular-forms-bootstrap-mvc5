using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using AngularForMVC.Models;

namespace AngularForMVC.Controllers
{
    public class EmployeeWebController : ApiController
    {
        // Get api/<controller>
        public IEnumerable<EmployeeVM> Get()
        {
            List<EmployeeVM> list = new List<EmployeeVM>()
            {
                new EmployeeVM()
                {
                    FullName = "Milton Waddams"
                },
                new EmployeeVM()
                {
                    FullName = "Andy Bernard"
                }
            };

            return list;
        }

        // Get api/<controller>/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        public void Post([FromBody] string value)
        {
            
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody] string value)
        {

        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
            
        }
    }
}
