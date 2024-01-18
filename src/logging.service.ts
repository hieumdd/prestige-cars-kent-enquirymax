import { createLogger, format, transports } from 'winston';
import stringify from 'safe-stable-stringify';

export const logger = createLogger({
    level: 'debug',
    format: format.printf(({ level, message }) => {
        const { httpRequest = undefined, ...rest } = message instanceof Object ? message : { message };
        return stringify({ severity: level, message: rest, httpRequest })!;
    }),
    transports: [new transports.Console()],
});
