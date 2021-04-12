import _ from 'lodash';

function utils () {
    const getJsonData = (file, callback) => {
    fetch(file, {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        callback(myJson)
      });
    };

    const getResolvedPackage = (jsonData) => {
      const jsonDataClone = _.cloneDeep(jsonData)
      const foundMap = new Set([]);
      function handleItem(item) {
          Object.keys(item).forEach(key => {
            if (foundMap.has(key)) {
              delete item[key];
            } else {
              foundMap.add(key);
            }
          });

          Object.keys(item).forEach(key => {
            if (item[key].dependencies) {
              goOverData(item[key]);
            }
          });
        }

      function goOverData(data) {
        if (data.dependencies) {
          foundMap.add(data.name);
          goOverData(data.dependencies);
        } else {
          handleItem(data);
        }

        return data;
      }

      const result = goOverData(jsonDataClone);
      return result;
    }

    return {
        getJsonData,
        getResolvedPackage,
    }
}

export default utils();