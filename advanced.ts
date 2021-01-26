interface DownloadData {
    id: number;
    user?: {
        name?: {
            first: string;
            last: string;
        }
    }
}
const downloadedData: DownloadData = {
    id: 1,
}

// if (downloadedData.user) {
//     console.log(downloadedData.user.name);
// }

console.log(downloadedData.user?.name?.first);
const userData = downloadedData.user ?? 'no-user';

type id = DownloadData["id"];
enum Color {
  RED,
  BRUE,
}
let target = Color.RED;
let source = 100;
target = source;

let fuga = function(a: string, b: string) {}
let hoge = function(a: string) {}
fuga = hoge;

class AdvancedPerson {
    name: string = 'peter';
    age: number = 35;
}

class AdvancedCar {
    name: string = 'prius';
    age: number = 5;
}

let adp = new AdvancedPerson()
let adc = new AdvancedCar()
adp = adc;

interface tmpFunc {
    (x: string): number;
    (x: number): number;
}
const upperHello: tmpFunc = function (x: string | number) { return 0 };// オーバーロードの全てのパターンに対応した関数でなくてはいけない