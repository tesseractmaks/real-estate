export async function getListProperties(page = 1, params = {}) {
    let response;

    for (var key in params) {
        if (params[key] == null) {
            params[key] = ""
        };
    };
    
  

    if (JSON.stringify(params) === '{}') {
        response = await fetch(`http://127.0.0.1:8000/api/v1/properties/?page=${page}`);
      
    } else {

        response = await fetch(`http://127.0.0.1:8000/api/v1/properties/?page=${page}&city=${params["city"]}&state=${params["state"]}&category=${params["category"]}&status=${params["status"]}&bedrooms=${params["rooms"]}`);
    };
    
    const propertyData = await response.json();

return propertyData
}

