import { storage } from "../config/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const delay = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const uploadToStorage = async (fileUri, refName) => {
  try {
    console.log("Busy Uploading...");
    const response = await fetch(fileUri);
    if (!response.ok) {
      throw new Error("Network request failed");
    }

    const blob = await response.blob();
    const uploadRef = ref(storage, refName);
    await uploadBytes(uploadRef, blob);
    blob.close();

    return getDownloadURL(uploadRef);
  } catch (error) {
    if (error.code === "storage/retry-limit-exceeded") {
      await delay(5000);
      return await uploadToStorage(fileUri, refName);
    } else {
      console.error("Error uploading to firebase storage", error);
      throw error;
    }
  }
};
