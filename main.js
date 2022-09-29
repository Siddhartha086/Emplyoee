function getEmployeeFromRec(req){
    const employee ={
        firsr_name:req.body.first_name;
        last_name:req.body.last_name,
        email:req.body.email,
        phone_number:req.body.phone_number,
        hire_date:req.body.hire_date,
        job_id:req.body.job_id,
        department_id:req.body,department_id


    };
    return employee;



}
asyn function post(req,res,next){
    try{
        let employee=getEmployeeFromRec(req);
        employee=await employee.create(employee);
        res.status(201).json(employee);
    }
    catch(err){
        next(err)
    }

    }
}


const createSql=
insert_into employee{

    first_name,
    last_name,
    email,
    hire_date,
    job_id,
    department_id;
    
    asyn function create(emp){
        const employee=Object.assign({},emp);

        employee.employee_id={
            dir:oracledb.BIND_OUT,
            type:oracledb.NUMBER
        }
    }
    const result = await database.simpleExecute(createSql,employee);

    employee.employee_id=result.outBinds.employee_id[0];

    return employee;
    

    }
