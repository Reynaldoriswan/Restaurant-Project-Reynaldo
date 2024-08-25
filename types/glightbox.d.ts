declare module 'glightbox' {
    interface GLightboxOptions {
        selector?: string;
        // Tambahkan opsi lain yang mungkin Anda gunakan di sini
    }

    export default class GLightbox {
        constructor(options?: GLightboxOptions);
    }
}
