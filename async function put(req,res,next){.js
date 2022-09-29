async function put(req,res,next){
    try{
        let employee=getEmployeeFromRec(req);
        employee.employee_id=parseInt(req.params.id,10);
        employee=await employee.update(employee);
        {
            if(employee!=null)
            {
                res.status(200).json(employee);
            }
            else{
                res.status(404).end();

            }
        
        }
    }
}
