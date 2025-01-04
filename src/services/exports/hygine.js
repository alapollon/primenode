
import sanitize from 'sanitize-filename';

export const unsafeFilename = '';
export const safeFile = sanitize(unsafeFilename);

console.log('fs ' + safeFilename); // Outputs: "someunsafe_filename.txt"
