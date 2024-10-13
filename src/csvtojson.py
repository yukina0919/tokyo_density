import csv
import json
 

def csv2json(csvFilePath, jsonFilePath, encoding="utf-8"):
    # Open the CSV
    with open(csvFilePath, 'r') as f:
        dr = csv.DictReader(f)
        data = [row for row in dr]

    # Write the JSON
    with open(jsonFilePath, 'w') as f:
        json.dump(data, f, ensure_ascii=False)

if __name__ == '__main__':
        file = "./csvData/tokyo_density1.csv"
        csv2json(file, file.replace(
            ".csv", ".json"))