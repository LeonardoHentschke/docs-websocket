import { randomBytes, scryptSync } from 'crypto';

function hashAndSaltPass(pass) {
    const saltPass = randomBytes(16).toString('hex');

    const hashPass = scryptSync(pass, saltPass, 64).toString('hex');

    return { saltPass, hashPass };
}

export default hashAndSaltPass;