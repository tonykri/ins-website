import { storage } from './firebase';
import { listAll, ref, getDownloadURL } from 'firebase/storage';

const listImagesInFolder = async (path: string): Promise<string[]> => {
    let imagesUrls: string[] = [];
    try {
        const folderRef = ref(storage, path);
        const imagesList = await listAll(folderRef);

        for (const imageRef of imagesList.items) {
            const imageUrl = await getDownloadURL(imageRef);
            imagesUrls.push(imageUrl);
        }
    } catch (e) {
        console.log(`Error downloading images`);
    }
    return imagesUrls;
};


export async function fetchHomePagePortfolio() {
    try {
        const imagesInFolder = await listImagesInFolder('HomePage/Portfolio');
        return imagesInFolder;
    } catch (error) {
        console.error('Error occurred:', error);
        throw error; 
    }
}