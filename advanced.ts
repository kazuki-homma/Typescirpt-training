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

type id = DownloadData["user"];