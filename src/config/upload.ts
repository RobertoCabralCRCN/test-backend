import multer from "multer";

const storage = multer.memoryStorage(); // Armazenar o arquivo na memória para facilitar o acesso

const upload = multer({
  storage: storage,
});

export { upload };
