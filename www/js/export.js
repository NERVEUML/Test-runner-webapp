//Plan 
// Take a Json Oject and convert to a comma seperated string
// take all names and save as first line of the file 
// then take comma sperated string and write to file by name 
   function ConvertToCSV(objArray) {
            var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
            var str = '';

            for (var i = 0; i < array.length; i++) {
                var line = '';
                for (var index in array[i]) {
                    if (line != '') line += ','

                    line += array[i][index];
                }

                str += line + '\r\n';
            }


return str;

}



            // Create Object
            var items = [
                  { name: "Item 1", color: "Green", size: "X-Large" },
                  { name: "Item 2", color: "Green", size: "X-Large" },
                  { name: "Item 3", color: "Green", size: "X-Large" }];

            // Convert Object to JSON
            var jsonObject = JSON.stringify(items);

            // Display JSON
           console.log(jsonObject);

            // Convert JSON to CSV & Display CSV
            console.log(ConvertToCSV(jsonObject));

//then take mutiple Json objects convert to one line of a comma seperated file 
/// maybe by way of an array each line is an element 
