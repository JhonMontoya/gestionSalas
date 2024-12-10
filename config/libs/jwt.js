import jwt from 'jsonwebtoken';
import '../config';

export function createAccessToken(payload) {
    new Promise((resolve, reject) => {
        jwt.sign(
            payload,
            "secret123",
            {
                expiresIn: "1d",
            },
            (error, token) => {
                if (err) console.log(err)
            }
        );
    });
}