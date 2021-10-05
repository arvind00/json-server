const stubPath = "json_stubs/";

exports.mappings = {
    getUser: {
        jsonPath: stubPath + "getUser.json",
        errorJsonPath: stubPath + "notAuthorised.json"
    }
}