import { createLogger, format, transports } from 'winston';
import stringify from 'safe-stable-stringify';

export const logger = createLogger({
    level: 'debug',
    format: format.combine(
        format.printf(({ level, ...message }) => stringify({ severity: level, ...message })!),
    ),
    transports: [new transports.Console()],
});
