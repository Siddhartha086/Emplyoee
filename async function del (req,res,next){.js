async function del (req,res,next){
    try{
        const id= parseInt(req.params.id,10);
        const success = await employes.delete(id);

        if(success){
            res.status(204).end();

        }else{
            res.status(404).end();

        }
    }catch(err){
        next(err);
    }
}
