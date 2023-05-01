import { scryptSync, timingSafeEqual} from "crypto";

function authenticateUser(pass, user) {
    const hashTest = scryptSync(pass, user.saltPass, 64);
    const hashReal = Buffer.from(user.hashPass, 'hex');
    return timingSafeEqual(hashTest, hashReal);
}

export default authenticateUser;