class ApiDetails {

    static async get (req, res,) {
        return res.status(200).json(
            {API_Name: 'CoupleFinance API',
                API_Status: '200 - Success',
                RequisitionPath: 'GET /', 
                Version: '1.0'});
    }
}

    module.exports = ApiDetails;
