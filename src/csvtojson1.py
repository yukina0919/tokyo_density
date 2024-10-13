import csv
import json

def csv2json(csvFilePath, jsonFilePath, encoding="utf-8"):
    # CSVファイルを指定したエンコーディングで読み込み
    with open(csvFilePath, 'r', encoding=encoding) as f:
        dr = csv.DictReader(f)
        data = [row for row in dr]

    # JSONファイルに書き出し
    with open(jsonFilePath, 'w', encoding=encoding) as f:
        json.dump(data, f, ensure_ascii=False, indent=4)

if __name__ == '__main__':
    file = "/Users/yukina/Develop/d3-geo-app_1/src/assets/csvData/tokyo_density1.csv"
    csv2json(file, file.replace(".csv", ".json"))
