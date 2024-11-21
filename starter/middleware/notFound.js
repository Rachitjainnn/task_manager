const notFound = (req,res)=>(res.status(401).send('resource not available'))
module.exports = notFound