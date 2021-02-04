// desc GET all letters
// @route GET /api/v1/letters
// access Public

exports.getLetters = (req,res,next)=>{
    res.send('GET Letters')
}

// desc Add new letter
// @route POST /api/v1/letters
// access Public

exports.addLetters = (req, res, next) => {
    res.send('POST Letters')
}

// desc DELETE letter
// @route DELETE /api/v1/transactions/:id
// access Public

exports.deleteLetters = (req, res, next) => {
    res.send('DELETE Letters')
}