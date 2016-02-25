module.exports = {

    findById: function(req, res){
        res.json({"id": req.params.id});
    }

}