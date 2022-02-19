exports.getAllBootcamps = (req,res,next) => {
    res.json({ status : "SUCCESS" , message: "request processed successfully"});
}

exports.getBootcamp = (req,res,next) => {
    res.json({ status : "SUCCESS" , message: ` fetched data for id ${req.params.id}`});
}

exports.createBootcamp = (req,res,next) => {
    res.json({ status : "SUCCESS" , message: ` added data for id ${req.params.id}`});
}

exports.updateBootcamp = (req,res,next) => {
    res.json({ status : "SUCCESS" , message: ` updated data for id ${req.params.id}`});
}

exports.deleteBootcamp = (req,res,next) => {
    res.json({ status : "SUCCESS" , message: ` deleted data for id ${req.params.id}`});
}