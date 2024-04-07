import crypto from 'crypto';

const DEFAULT_ENCRYPTION_ALGORITHM = 'aes-256-cbc';

export function encrypt(
value: string,
key: string,
algorithm: string = DEFAULT_ENCRYPTION_ALGORITHM,
) {
  const iv = generateIV();
  const cipher = crypto.createCipheriv(algorithm, Buffer.from(key, 'hex'), iv);
  let encryptedBuffer = cipher.update(value);
  encryptedBuffer = Buffer.concat([encryptedBuffer, cipher.final()]);

  return {
    encryptedValue: encryptedBuffer.toString('hex'),
    iv: iv.toString('hex'),
  };
}

export function decrypt(
  encryptedValue: string,
  iv: string,
  key: string,
  algorithm: string = DEFAULT_ENCRYPTION_ALGORITHM,
) {
  const decipher = crypto.createDecipheriv(algorithm, Buffer.from(key, 'hex'), Buffer.from(iv, 'hex'));
  let decryptedValue = decipher.update(Buffer.from(encryptedValue, 'hex'));
  decryptedValue = Buffer.concat([decryptedValue, decipher.final()]);
  return decryptedValue.toString();
}

// Helper function to generate an IV
function generateIV() {
  return crypto.randomBytes(16); // 16 bytes is the standard size for an AES IV
}
